<template>
  <div class="container my-5 pt-5">
    <h1 class="mb-4">Panel Admina – wszystkie wizyty</h1>
    <div v-if="loading" class="text-center my-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Ładowanie...</span>
      </div>
    </div>
    <div v-else>
      <div v-if="!appointments.length" class="alert alert-info">
        Brak wizyt do wyświetlenia.
      </div>
      <div v-else class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID wizyty</th>
              <th>Typ wizyty</th>
              <th>Data</th>
              <th>Godzina</th>
              <th>Użytkownik</th>
              <th>Przychodnia</th>
              <th>Zdjęcia</th>
              <th>Wiadomość głosowa</th>
              <th>Opis</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="appt in appointments" :key="appt.key">
              <td>{{ appt.key }}</td>
              <td>{{ appt.type==='remote'?'Online':'Stacjonarna' }}</td>
              <td>{{ appt.date.toLocaleDateString() }}</td>
              <td>{{ appt.hour||'–' }}</td>
              <td>{{ appt.userId }}</td>
              <td v-if="appt.type==='clinic'">{{ appt.clinicName }}</td>
              <td v-else>–</td>
              <td>
                <template v-if="appt.images.length">
                  <img
                    v-for="(img,i) in appt.images"
                    :key="i"
                    :src="img"
                    class="img-thumbnail me-1"
                    style="width:50px;height:50px;cursor:pointer"
                    @click="openModal(img)"
                  />
                </template>
                <span v-else>–</span>
              </td>
              <td>
                <template v-if="appt.audios.length">
                  <audio
                    v-for="(aud,i) in appt.audios"
                    :key="i"
                    :src="aud"
                    controls
                    class="d-block mb-1"
                  ></audio>
                </template>
                <span v-else>–</span>
              </td>
              <td>{{ appt.description||'–' }}</td>
              <td>
                <button class="btn btn-sm btn-danger" @click="confirmCancel(appt)">
                  Anuluj
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="modalImage">
      <div class="modal-backdrop fade show"></div>
      <div class="modal fade show d-block" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img :src="modalImage" class="img-fluid" />
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" @click="closeModal">Zamknij</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { ref, onMounted } from 'vue'
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc
} from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { ref as storageRef, listAll, deleteObject } from 'firebase/storage'
 
const appointments = ref([])
const loading = ref(true)
const modalImage = ref(null)
 
function normalizeDate(d) {
  return d?.toDate ? d.toDate() : new Date(d)
}
 
async function fetchAppointments() {
  loading.value = true
  appointments.value = []
 
  const remSnap = await getDocs(collection(db, 'remoteappointments'))
  for (const ds of remSnap.docs) {
    const d = ds.data()
    const upSnap = await getDocs(collection(db, 'remoteappointments', ds.id, 'uploads'))
    const images = [], audios = []
    upSnap.docs.forEach(u => {
      const x = u.data()
      if (x.type==='image') images.push(x.url)
      if (x.type==='audio') audios.push(x.url)
    })
    appointments.value.push({
      key: ds.id,
      type: 'remote',
      date: normalizeDate(d.date),
      hour: d.contactHour||d.hour||'',
      userId: d.userId||'',
      images,
      audios,
      description: d.description||''
    })
  }
 
  const clinicsSnap = await getDocs(collection(db, 'clinics'))
  for (const cd of clinicsSnap.docs) {
    const cid = cd.id
    const name = cd.data().name||cid
    const appts = await getDocs(collection(db, 'clinics', cid, 'appointments'))
    appts.docs.forEach(a => {
      const d = a.data()
      appointments.value.push({
        key: a.id,
        type: 'clinic',
        clinicId: cid,
        clinicName: name,
        date: normalizeDate(d.date),
        hour: d.hour||'',
        userId: d.userId||'',
        images:[],
        audios:[],
        description: d.description||''
      })
    })
  }
 
  appointments.value.sort((a,b)=> {
    if (a.date < b.date) return -1
    if (a.date > b.date) return 1
    return a.hour.localeCompare(b.hour)
  })
 
  loading.value = false
}
 
function openModal(src) {
  modalImage.value = src
}
function closeModal() {
  modalImage.value = null
}
 
async function removeUserAppointment(appt) {
  const col = collection(db, 'users', appt.userId, 'appointments')
  const q = query(
    col,
    where('date','==', appt.date),
    where('hour','==', appt.hour),
    where('clinicId','==', appt.clinicId)
  )
  const snap = await getDocs(q)
  for (const docSnap of snap.docs) {
    await deleteDoc(doc(db,'users', appt.userId, 'appointments', docSnap.id))
  }
}
 
async function cancel(appt) {
  if (appt.type==='remote') {
    const remoteRef = doc(db, 'remoteappointments', appt.key)
    const snap = await getDocs(collection(db,'remoteappointments', appt.key, 'uploads'))
    const folder = storageRef(storage, `remoteappointments/${appt.key}`)
    const list = await listAll(folder)
    await Promise.all(list.items.map(i=>deleteObject(i)))
    await deleteDoc(remoteRef)
  } else {
    await deleteDoc(doc(db, 'clinics', appt.clinicId, 'appointments', appt.key))
    await removeUserAppointment(appt)
  }
}
 
function confirmCancel(appt) {
  if (confirm('Na pewno chcesz anulować tę wizytę?')) {
    cancel(appt).then(fetchAppointments)
  }
}
 
onMounted(fetchAppointments)
</script>
 
<style scoped>
</style>
 