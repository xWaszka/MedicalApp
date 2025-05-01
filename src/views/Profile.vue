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
          <table v-else class="table mt-3">
            <thead>
              <tr>
                <th>Przychodnia</th>
                <th>Data</th>
                <th>Godzina</th>
                <th>Specjalizacja</th>
                <th>Lekarz</th>
                <th>Opis</th>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { auth, db } from '@/firebase'
  import { onAuthStateChanged } from 'firebase/auth'
  import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore'
  
  const user = ref({ email: '' })
  const profile = ref({ name: '' })
  const appointments = ref([])
  const loaded = ref(false)
  
  function formatDate(d) {
    return d.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
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
          date:           dat.date.toDate(),
          hour:           dat.hour,
          specialization: dat.specialization,
          doctor:         dat.doctor,
          description:    dat.description
        }
      })
  
      loaded.value = true
    })
  })
  </script>
  
  <style scoped>
  .card {
    background: #fff;
    border-radius: .5rem;
  }
  </style>
  