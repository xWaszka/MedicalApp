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
              <th>Opis</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="appt in appointments" :key="appt.key">
              <td>{{ appt.key }}</td>
              <td>{{ appt.type === 'remote' ? 'Online' : 'Stacjonarna' }}</td>
              <td>{{ appt.date.toLocaleDateString() }}</td>
              <td>{{ appt.hour || '–' }}</td>
              <td>{{ appt.userId }}</td>
              <td v-if="appt.type === 'clinic'">{{ appt.clinicName }}</td>
              <td v-else>–</td>
              <td>
                <div v-if="appt.type === 'remote'">
                  <div v-if="appt.images.length">
                    <img
                      v-for="(img, i) in appt.images"
                      :key="i"
                      :src="img"
                      alt="Zdjęcie wizyty"
                      class="img-thumbnail me-1 clickable-image"
                      style="width: 50px; height: 50px; cursor: pointer;"
                      @click="openModal(img)"
                    />
                  </div>
                  <div v-else>–</div>
                </div>
                <div v-else>–</div>
              </td>
              <td>{{ appt.description || '–' }}</td>
              <td>
                <button class="btn btn-sm btn-danger" @click="cancel(appt)">
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
      <div class="modal fade show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body text-center">
              <img :src="modalImage" class="img-fluid" alt="Zdjęcie wizyty" />
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
  doc,
  deleteDoc
} from 'firebase/firestore'
import { db } from '@/firebase'

const appointments = ref([])
const loading = ref(true)
const modalImage = ref(null)

function normalizeDate(d) {
  if (d && typeof d.toDate === 'function') return d.toDate()
  return new Date(d)
}

async function fetchAppointments() {
  loading.value = true
  appointments.value = []

  const remSnap = await getDocs(collection(db, 'remoteappointments'))
  for (const ds of remSnap.docs) {
    const d = ds.data()
    const uploadsSnap = await getDocs(collection(db, 'remoteappointments', ds.id, 'uploads'))
    const images = []
    uploadsSnap.docs.forEach(up => {
      const upData = up.data()
      if (upData.type === 'image' && upData.url) images.push(upData.url)
    })
    appointments.value.push({
      key: ds.id,
      type: 'remote',
      date: normalizeDate(d.date),
      hour: d.contactHour || d.hour || '',
      userId: d.userId || '',
      images,
      description: d.description || ''
    })
  }

  const clinicsSnap = await getDocs(collection(db, 'clinics'))
  for (const clinicDoc of clinicsSnap.docs) {
    const cid = clinicDoc.id
    const name = clinicDoc.data().name || cid
    const apptSnap = await getDocs(collection(db, 'clinics', cid, 'appointments'))
    apptSnap.forEach(ds => {
      const d = ds.data()
      appointments.value.push({
        key: ds.id,
        type: 'clinic',
        clinicId: cid,
        clinicName: name,
        date: normalizeDate(d.date),
        hour: d.hour || '',
        userId: d.userId || '',
        images: [],
        description: d.description || ''
      })
    })
  }

  appointments.value.sort((a, b) => {
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

async function cancel(appt) {
  if (!confirm('Na pewno chcesz anulować tę wizytę?')) return

  if (appt.type === 'remote') {
    await deleteDoc(doc(db, 'remoteappointments', appt.key))
  } else {
    await deleteDoc(doc(db, 'clinics', appt.clinicId, 'appointments', appt.key))
  }
  await deleteDoc(doc(db, 'users', appt.userId, 'appointments', appt.key))

  await fetchAppointments()
}

onMounted(fetchAppointments)
</script>

<style scoped>
</style>
