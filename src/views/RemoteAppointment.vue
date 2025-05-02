<template>
    <div class="container my-4">
      <h2 class="display-4 text-center mb-4">Umów zdalną konsultację</h2>
      <form @submit.prevent="submitRequest">
        <div class="mb-3">
          <label class="form-label">Opis problemu</label>
          <textarea
            v-model="form.description"
            class="form-control"
            rows="4"
            required
            minlength="10"
          ></textarea>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Załącz zdjęcie (opcjonalnie)</label>
          <input type="file" accept="image/*" capture="environment" @change="onImageChange" class="form-control" />
          <div v-if="imagePreview" class="mt-2">
            <img :src="imagePreview" alt="Preview" class="img-fluid rounded" style="max-width: 30vw;" />
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Nagraj głos (opcjonalnie)</label>
          <input type="file" accept="audio/*" capture="microphone" @change="onAudioChange" class="form-control" />
          <div v-if="audioPreview" class="mt-2">
            <audio :src="audioPreview" controls class="w-100"></audio>
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Data konsultacji</label>
          <input
            type="date"
            v-model="form.date"
            class="form-control"
            :min="minDate"
            required
            @change="fetchUnavailableHours"
          />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Preferowana godzina kontaktu</label>
          <select v-model="form.contactHour" required class="form-select">
            <option disabled value="">-- wybierz godzinę --</option>
            <option v-for="h in availableHours" :key="h" :value="h">{{ h }}</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Numer telefonu</label>
          <input type="tel" v-model="form.phone" required class="form-control" minlength="9" />
        </div>
  
        <button type="submit" class="btn btn-success w-100">Wyślij zgłoszenie</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db, storage, auth } from '@/firebase'
  import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    doc,
    getDoc,
    setDoc,
  } from 'firebase/firestore'
  import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL
  } from 'firebase/storage'
  
  const form = ref({
    description: '',
    date: '',
    contactHour: '',
    phone: '',
  })
  
  const imageFile = ref(null)
  const imagePreview = ref(null)
  const audioFile = ref(null)
  const audioPreview = ref(null)
  
  const minDate = new Date().toISOString().split('T')[0]
  
  const contactHours = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00'
  ]
  const availableHours = ref([...contactHours])
  
  function onImageChange(e) {
    const file = e.target.files[0]
    if (file) {
      imageFile.value = file
      imagePreview.value = URL.createObjectURL(file)
    }
  }
  
  function onAudioChange(e) {
    const file = e.target.files[0]
    if (file) {
      audioFile.value = file
      audioPreview.value = URL.createObjectURL(file)
    }
  }
  
  async function fetchUnavailableHours() {
    if (!form.value.date) return
  
    const q = query(
      collection(db, 'remoteappointments'),
      where('date', '==', form.value.date)
    )
    const querySnapshot = await getDocs(q)
  
    const takenHours = querySnapshot.docs.map(doc => doc.data().contactHour)
    availableHours.value = contactHours.filter(h => !takenHours.includes(h))
  
    if (takenHours.includes(form.value.contactHour)) {
      form.value.contactHour = ''
    }
  }
  
  async function submitRequest() {
  const user = auth.currentUser
  if (!user) return

  const userRef = doc(db, 'users', user.uid)
  
  const phoneNumber = parseInt(form.value.phone.replace(/\D/g, ''))

  await setDoc(userRef, {
    phone: phoneNumber,
  }, { merge: true })

  const docData = {
    userId: user.uid,
    description: form.value.description,
    date: form.value.date,
    contactHour: form.value.contactHour,
    phone: phoneNumber,
  }

  const docRef = await addDoc(collection(db, 'remoteappointments'), docData)

  const uploads = []

  if (imageFile.value) {
    const imgRef = storageRef(storage, `remoteappointments/${docRef.id}/image.jpg`)
    uploads.push(uploadBytes(imgRef, imageFile.value).then(() =>
      getDownloadURL(imgRef).then(url =>
        addDoc(collection(db, 'remoteappointments', docRef.id, 'uploads'), {
          type: 'image',
          url
        })
      )
    ))
  }

  if (audioFile.value) {
    const audioRef = storageRef(storage, `remoteappointments/${docRef.id}/audio.mp3`)
    uploads.push(uploadBytes(audioRef, audioFile.value).then(() =>
      getDownloadURL(audioRef).then(url =>
        addDoc(collection(db, 'remoteappointments', docRef.id, 'uploads'), {
          type: 'audio',
          url
        })
      )
    ))
  }

  await Promise.all(uploads)

  const userSnap = await getDoc(userRef)
  if (userSnap.exists()) {
    form.value.phone = userSnap.data().phone || ''
  }

  alert('Zgłoszenie zostało wysłane!')
  form.value = { description: '', date: '', contactHour: '', phone: '' }
  imageFile.value = null
  audioFile.value = null
  imagePreview.value = null
  audioPreview.value = null
  availableHours.value = [...contactHours]
}



  onMounted(async () => {
    const user = auth.currentUser
    if (user) {
      const userRef = doc(db, 'users', user.uid)
      const userSnap = await getDoc(userRef)
  
      if (userSnap.exists()) {
        form.value.phone = userSnap.data().phone || ''
      }
    }
  })
  </script>
  