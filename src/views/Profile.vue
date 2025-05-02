<template>
  <div class="container my-5">
    <div class="card p-4 shadow-sm mx-auto" style="max-width:800px">
      <h2 class="display-4 text-center mb-4">Profil użytkownika</h2>
      <div v-if="!loaded" class="text-center">Ładowanie danych…</div>
      <div v-else>
        <p><strong>Imię i nazwisko:</strong> {{ profile.name || '—' }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>

        <h4 class="mt-4">Moje wizyty</h4>
        <div v-if="appointments.length === 0" class="text-muted">
          Brak zarezerwowanych wizyt.
        </div>
        <div v-else class="table-responsive">
          <table class="table mt-3">
            <thead>
              <tr>
                <th>Przychodnia</th>
                <th>Data</th>
                <th>Godzina</th>
                <th>Specjalizacja</th>
                <th>Lekarz</th>
                <th>Opis</th>
                <th>Akcje</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in appointments" :key="a.id">
                <td>{{ a.clinicName }}</td>
                <td>{{ formatDate(a.date) }}</td>
                <td>{{ a.hour }}</td>
                <td>{{ a.specialization }}</td>
                <td>{{ a.doctor }}</td>
                <td>{{ a.description }}</td>
                <td>
                  <button 
                    @click="confirmCancelAppointment(a.id)"
                    class="btn btn-sm btn-danger"
                    :disabled="isDatePassed(a.date)"
                    :title="isDatePassed(a.date) ? 'Nie można anulować przeszłej wizyty' : ''"
                  >
                    Anuluj wizytę
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="mt-4">Moje konsultacje</h4>
        <div v-if="remoteAppointments.length === 0" class="text-muted">
          Brak zarejestrowanych konsultacji zdalnych.
        </div>
        <div v-else class="table-responsive">
          <table class="table mt-3">
            <thead>
              <tr>
                <th>Data</th>
                <th>Godzina</th>
                <th>Opis problemu</th>
                <th>Telefon</th>
                <th>Załączniki</th>
                <th>Akcje</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ra in remoteAppointments" :key="ra.id">
                <td>{{ formatDate(ra.date) }}</td>
                <td>{{ ra.contactHour }}</td>
                <td>{{ ra.description }}</td>
                <td>{{ ra.phone }}</td>
                <td>
                  <span v-if="!ra.uploads || ra.uploads.length === 0">Brak</span>
                  <div v-else>
                    <span v-for="(upload, index) in ra.uploads" :key="index" class="d-block">
                      <a :href="upload.url" target="_blank" rel="noopener noreferrer" class="text-decoration-none">
                        {{ upload.type === 'image' ? 'Zdjęcie' : 'Nagranie' }}
                      </a>
                    </span>
                  </div>
                </td>
                <td>
                  <button 
                    @click="confirmCancelRemoteAppointment(ra.id)"
                    class="btn btn-sm btn-danger"
                  >
                    Anuluj konsultację
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, db, storage } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, doc, getDoc, query, where, deleteDoc } from 'firebase/firestore'
import { ref as storageRef, deleteObject, listAll } from 'firebase/storage'

const user = ref({ email: '' })
const profile = ref({ name: '' })
const appointments = ref([])
const remoteAppointments = ref([])
const loaded = ref(false)

function formatDate(d) {
  if (!d) return ''
  const dateObj = d instanceof Date ? d : new Date(d)
  return dateObj.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

function isDatePassed(date) {
  const now = new Date()
  const appointmentDate = date instanceof Date ? date : new Date(date)
  return appointmentDate < now
}
async function cancelAppointment(appointmentId) {
  try {
    const appointmentToCancel = appointments.value.find(a => a.id === appointmentId);
    
    if (!appointmentToCancel) {
      throw new Error("Nie znaleziono wizyty do anulowania.");
    }
    const clinicAppointmentsRef = collection(db, 'clinics', appointmentToCancel.clinicId, 'appointments');
    const clinicAppointmentsQuery = query(
      clinicAppointmentsRef,
      where('date', '==', appointmentToCancel.date),
      where('hour', '==', appointmentToCancel.hour),
      where('doctor', '==', appointmentToCancel.doctor)
    );
    
    const clinicAppointmentsSnap = await getDocs(clinicAppointmentsQuery);
    
    if (clinicAppointmentsSnap.empty) {
      throw new Error("Nie znaleziono odpowiadającej wizyty w klinice.");
    }
    const clinicAppointmentId = clinicAppointmentsSnap.docs[0].id;

    const userAppointmentRef = doc(db, 'users', user.value.uid, 'appointments', appointmentId);
    const clinicAppointmentRef = doc(db, 'clinics', appointmentToCancel.clinicId, 'appointments', clinicAppointmentId);

    await Promise.all([
      deleteDoc(userAppointmentRef),
      deleteDoc(clinicAppointmentRef)
    ]);

    appointments.value = appointments.value.filter(a => a.id !== appointmentId);
  } catch (error) {
    console.error('Błąd podczas anulowania wizyty:', error);
    alert('Wystąpił błąd podczas anulowania wizyty: ' + error.message);
  }
}



async function cancelRemoteAppointment(remoteAppointmentId) {
  try {
    const remoteDocRef = doc(db, 'remoteappointments', remoteAppointmentId)
    const remoteDocSnap = await getDoc(remoteDocRef)

    if (remoteDocSnap.exists()) {
      const remoteData = remoteDocSnap.data()

      if (remoteData.uploads && remoteData.uploads.length > 0) {
        for (let upload of remoteData.uploads) {
          const fileRef = storageRef(storage, upload.url)
          try {
            await deleteObject(fileRef)
          } catch (error) {
            console.error(`Błąd podczas usuwania pliku ${upload.url}:`, error)
          }
        }
      }

      const folderRef = storageRef(storage, `remoteappointments/${remoteAppointmentId}/`)
      const listResult = await listAll(folderRef)

      for (let item of listResult.items) {
        try {
          await deleteObject(item)
        } catch (error) {
          console.error(`Błąd podczas usuwania pliku z folderu ${item.fullPath}:`, error)
        }
      }
    }

    await deleteDoc(remoteDocRef)
    remoteAppointments.value = remoteAppointments.value.filter(ra => ra.id !== remoteAppointmentId)
  } catch (error) {
    console.error('Błąd podczas anulowania konsultacji:', error)
  }
}

function confirmCancelAppointment(appointmentId) {
  if (confirm('Czy na pewno chcesz anulować tę wizytę?')) {
    cancelAppointment(appointmentId)
  }
}

function confirmCancelRemoteAppointment(remoteAppointmentId) {
  if (confirm('Czy na pewno chcesz anulować tę konsultację zdalną?')) {
    cancelRemoteAppointment(remoteAppointmentId)
  }
}

onMounted(() => {
  onAuthStateChanged(auth, async u => {
    if (!u) {
      loaded.value = true
      return
    }
    user.value = u

    const ps = await getDoc(doc(db, 'users', u.uid))
    if (ps.exists()) {
      profile.value = { name: ps.data().name || '' }
    }

    const snap = await getDocs(
      collection(db, 'users', u.uid, 'appointments')
    )
    appointments.value = snap.docs.map(d => {
      const dat = d.data()
      return {
        id:             d.id,
        clinicName:     dat.clinicName,
        clinicId:       dat.clinicId,
        date:           dat.date.toDate(),
        hour:           dat.hour,
        specialization: dat.specialization,
        doctor:         dat.doctor,
        description:    dat.description
      }
    })

    try {
      const remoteQuery = query(
        collection(db, 'remoteappointments'),
        where('userId', '==', u.uid)
      )
      const remoteSnap = await getDocs(remoteQuery)
      
      remoteAppointments.value = await Promise.all(remoteSnap.docs.map(async d => {
        const dat = d.data()
        
        let uploads = []
        try {
          const uploadsQuery = query(
            collection(db, 'remoteappointments', d.id, 'uploads')
          )
          const uploadsSnap = await getDocs(uploadsQuery)
          uploads = uploadsSnap.docs.map(u => ({
            type: u.data().type,
            url: u.data().url
          }))
        } catch (error) {
          console.error("Error loading attachments:", error)
        }
        
        return {
          id: d.id,
          date: dat.date,
          contactHour: dat.contactHour,
          description: dat.description,
          phone: dat.phone,
          uploads: uploads
        }
      }))
    } catch (error) {
      console.error("Error loading remote appointments:", error)
      remoteAppointments.value = []
    }

    loaded.value = true
  })
})

</script>

<style scoped>
.card {
  background: #fff;
  border-radius: .5rem;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #bb2d3b;
  border-color: #b02a37;
}

.btn-danger:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .table {
    font-size: 0.9rem;
  }
  
  .table th, .table td {
    padding: 0.5rem;
  }
  
  .table td:nth-child(3),
  .table td:nth-child(4) {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .table td:nth-child(7) {
    white-space: nowrap;
  }
}
</style>
