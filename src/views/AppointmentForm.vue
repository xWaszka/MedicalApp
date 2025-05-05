<template>
    <div class="container my-4">
      <div v-if="step === 1" class="mb-4">
        <h2 class="display-4 text-center mb-6">Umów wizytę – krok 1: wybierz przychodnię</h2>
        <div class="mb-3">
          <select v-model="selectedClinic" class="form-select">
            <option disabled value="">-- Wybierz przychodnię --</option>
            <option v-for="c in clinics" :key="c.id" :value="c.id">{{ c.name }}</option>
          </select>
        </div>
        <button class="btn btn-primary" :disabled="!selectedClinic" @click="goToStep2">Dalej</button>
      </div>
  
      <div v-else-if="step === 2" class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <button class="btn btn-outline-secondary" @click="prevMonth">&lt;</button>
          <h2 class="m-0">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
          <button class="btn btn-outline-secondary" @click="nextMonth">&gt;</button>
        </div>
  
        <div class="d-grid mb-2" style="grid-template-columns: repeat(7, 1fr); text-align: center;">
          <div v-for="d in weekdays" :key="d" class="fw-bold">{{ d }}</div>
        </div>
  
        <div class="calendar">
          <div
            v-for="(week, wi) in weeks"
            :key="wi"
            class="d-grid"
            style="grid-template-columns: repeat(7, 1fr); text-align: center;"
          >
            <div
              v-for="(day, di) in week"
              :key="di"
              :class="[
                'border p-2',
                day?.isPast ? 'text-muted' : '',
                day && !day.isBooked && !day.isPast ? 'bg-success text-white' : '',
                day?.isBooked ? 'bg-danger text-white' : '',
                'calendar-day'
              ]"
              @click="day && chooseDay(day)"
              style="cursor: pointer;"
            >
              <strong v-if="day">{{ day.date.getDate() }}</strong>
            </div>
          </div>
        </div>
  
        <div v-if="selectedDay" class="mt-4">
        <h2 class="display-4 text-center">Godziny dla {{ selectedDay.date.toLocaleDateString() }}</h2>
        <div class="d-flex flex-wrap justify-content-center gap-2 mt-2">
            <button
              v-for="h in hours"
              :key="h"
              :disabled="isHourBooked(h)"
              @click="chooseHour(h)"
              :class="[
                'btn',
                isHourBooked(h) ? 'btn-secondary disabled' : 'btn-outline-primary',
                h === selectedHour ? 'border border-primary' : ''
              ]"
            >
              {{ h }}
            </button>
          </div>
        </div>
      </div>
  
      <div v-else-if="step === 3" class="mb-4">
        <h2 class="display-4 text-center">Krok 3: szczegóły wizyty</h2>
        <form @submit.prevent="bookAppointment" class="needs-validation">
          <div class="mb-3">
            <label class="form-label">Specjalizacja:</label>
            <select v-model="appointment.specialization" required class="form-select">
              <option disabled value="">-- wybierz --</option>
              <option v-for="s in availableSpecializations" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
  
          <div class="mb-3">
            <label class="form-label">Lekarz:</label>
            <select v-model="appointment.doctor" required class="form-select">
              <option disabled value="">-- wybierz --</option>
              <option v-for="d in availableDoctors" :key="d.id" :value="d.name">{{ d.name }}</option>
            </select>
          </div>
  
          <div class="mb-3">
            <label class="form-label">Opis dolegliwości:</label>
            <textarea
              v-model="appointment.description"
              required
              minlength="10"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
  
          <button type="submit" class="btn btn-success">Zapisz wizytę</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, computed } from 'vue'
  import { db, auth } from '@/firebase'
  import {
    collection,
    getDocs,
    addDoc,
    Timestamp
  } from 'firebase/firestore'
  
  const step = ref(1)
  const clinics = ref([])
  const selectedClinic = ref('')
  const selectedDay = ref(null)
  const selectedHour = ref(null)
  
  const today = new Date()
  const currentMonth = ref(today.getMonth())
  const currentYear = ref(today.getFullYear())
  const monthNames = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień']
  const weekdays = ['Pn','Wt','Śr','Cz','Pt','So','Nd']
  const weeks = ref([])
  
  const bookedCounts = ref({})
  const bookedByDoctor = ref({})
  
  const hours = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00']
  
  const appointment = ref({
    specialization: '',
    doctor: '',
    description: ''
  })
  const doctors = ref([])
  
  const doctorsCount = computed(() => doctors.value.length)
  
  const availableDoctorsAll = computed(() => {
    if (!selectedDay.value || !selectedHour.value) return doctors.value
    const dayKey = selectedDay.value.date.toISOString().split('T')[0]
    const bookedList = bookedByDoctor.value[dayKey]?.[selectedHour.value] || []
    return doctors.value.filter(d => !bookedList.includes(d.name))
  })
  
  const availableSpecializations = computed(() =>
    [...new Set(availableDoctorsAll.value.map(d => d.specialization))]
  )
  
  const availableDoctors = computed(() =>
    availableDoctorsAll.value.filter(d => d.specialization === appointment.value.specialization)
  )
  
  async function loadClinics() {
    const snap = await getDocs(collection(db, 'clinics'))
    clinics.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  }
  
  async function loadDoctors() {
    const snap = await getDocs(
      collection(db, 'clinics', selectedClinic.value, 'doctors')
    )
    doctors.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  }
  
  async function loadAppointments() {
    const snap = await getDocs(
      collection(db, 'clinics', selectedClinic.value, 'appointments')
    )
    bookedCounts.value = {}
    bookedByDoctor.value = {}
    snap.docs.forEach(d => {
      const { date: ts, hour, doctor } = d.data()
      const dayKey = ts.toDate().toISOString().split('T')[0]
      bookedCounts.value[dayKey] = bookedCounts.value[dayKey] || {}
      bookedCounts.value[dayKey][hour] = (bookedCounts.value[dayKey][hour] || 0) + 1
      bookedByDoctor.value[dayKey] = bookedByDoctor.value[dayKey] || {}
      bookedByDoctor.value[dayKey][hour] = bookedByDoctor.value[dayKey][hour] || []
      bookedByDoctor.value[dayKey][hour].push(doctor)
    })
  }
  
  function generateCalendar() {
    if (!selectedClinic.value || doctorsCount.value === 0) {
      weeks.value = []
      return
    }
    const firstDay = new Date(currentYear.value, currentMonth.value, 1)
    const startWeekday = (firstDay.getDay() + 6) % 7
    const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
    const cal = []
    let week = Array(7).fill(null)
    let dayNum = 1
  
    for (let i = startWeekday; i < 7; i++, dayNum++) {
      const date = new Date(currentYear.value, currentMonth.value, dayNum)
      const key = date.toISOString().split('T')[0]
      const counts = bookedCounts.value[key] || {}
      const isFullyBooked = hours.every(h => (counts[h] || 0) >= doctorsCount.value)
      week[i] = { date, isPast: date < today, isBooked: isFullyBooked }
    }
    cal.push(week)
  
    while (dayNum <= daysInMonth) {
      week = Array(7).fill(null)
      for (let i = 0; i < 7 && dayNum <= daysInMonth; i++, dayNum++) {
        const date = new Date(currentYear.value, currentMonth.value, dayNum)
        const key = date.toISOString().split('T')[0]
        const counts = bookedCounts.value[key] || {}
        const isFullyBooked = hours.every(h => (counts[h] || 0) >= doctorsCount.value)
        week[i] = { date, isPast: date < today, isBooked: isFullyBooked }
      }
      cal.push(week)
    }
    weeks.value = cal
  }
  
  watch([currentMonth, currentYear], generateCalendar, { immediate: true })
  
  async function goToStep2() {
    step.value = 2
    await loadDoctors()
    await loadAppointments()
    generateCalendar()
  }
  
  function chooseDay(day) {
    if (!day.isBooked && !day.isPast) selectedDay.value = day
  }
  
  function isHourBooked(hour) {
    const key = selectedDay.value.date.toISOString().split('T')[0]
    const cnt = bookedCounts.value[key]?.[hour] || 0
    return cnt >= doctorsCount.value
  }
  
  async function chooseHour(hour) {
    if (!isHourBooked(hour)) {
      selectedHour.value = hour
      step.value = 3
      await loadDoctors()
    }
  }
  
  async function bookAppointment() {
    const user = auth.currentUser
    if (!user) return
  
    const data = {
      userId:        user.uid,
      clinicId:      selectedClinic.value,
      clinicName:    clinics.value.find(c => c.id === selectedClinic.value).name,
      date:          Timestamp.fromDate(selectedDay.value.date),
      hour:          selectedHour.value,
      specialization: appointment.value.specialization,
      doctor:        appointment.value.doctor,
      description:   appointment.value.description,
    }
  
    
    await addDoc(
      collection(db, 'clinics', selectedClinic.value, 'appointments'),
      data
    )
  
    
    await addDoc(
      collection(db, 'users', user.uid, 'appointments'),
      data
    )
  
    alert('Wizyta zarezerwowana!')
  
    appointment.value = { specialization: '', doctor: '', description: '' }
    selectedDay.value = null
    selectedHour.value = null
    step.value = 1
  }
  
  onMounted(loadClinics)
  </script>
  
  <style scoped>
.calendar-container { max-width: 600px; margin: 1rem auto }
.calendar-header  { display: flex; justify-content: space-between; align-items: center }
.weekdays, .week { display: grid; grid-template-columns: repeat(7,1fr) }
.day             { padding: 0.5rem; text-align: center; cursor: pointer }
.past               { color: #ccc }
.available       { background: #c8e6c9 }
.booked          { background: #ffcdd2 }
.time-selection  { max-width: 600px; margin: 1rem auto }
.hours           { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem }
.hours button    { padding: 0.5rem 1rem; cursor: pointer }
.hours button.booked   { cursor: not-allowed }
.hours button.selected { outline: 2px solid #1976d2 }
.registration-form     { max-width: 500px; margin: 2rem auto }
.registration-form form{ display: flex; flex-direction: column; gap: 1rem }
.registration-form label{ display: flex; flex-direction: column; font-weight: bold }
.registration-form textarea{ min-height: 80px }
</style>
  