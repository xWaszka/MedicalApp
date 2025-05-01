<template>
  <div class="container py-5">
    <div class="row mb-5">
      <div class="col-12 col-md-6 offset-md-3">
        <label for="city-select" class="form-label display-4">Wybierz miasto:</label>
        <select id="city-select" class="form-select" v-model="selectedCity">
          <option :value="null" disabled>– Wybierz miasto –</option>
          <option v-for="(c, key) in cities" :key="key" :value="key">
            {{ c.name }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="selectedCity" class="row text-center mb-5">
      <div class="col-12 mb-4">
        <h2>{{ cities[selectedCity].name }}</h2>
      </div>
      <div class="col-12 mb-3 d-flex align-items-center justify-content-center">
        <i class="bi bi-geo-alt-fill fs-2 text-primary me-2"></i>
        <span>{{ cities[selectedCity].address }}</span>
      </div>
      <div class="col-12 mb-3 d-flex align-items-center justify-content-center">
        <i class="bi bi-telephone-fill fs-2 text-primary me-2"></i>
        <span>{{ cities[selectedCity].phone }}</span>
      </div>
      <div class="col-12 mb-3 d-flex align-items-center justify-content-center">
        <i class="bi bi-envelope-fill fs-2 text-primary me-2"></i>
        <span>{{ cities[selectedCity].email }}</span>
      </div>
    </div>

    <div v-if="selectedCity" class="row text-center mb-5">
      <div class="col-12">
        <button class="btn btn-outline-primary me-2" @click="callPhone">
          <i class="bi bi-telephone-fill"></i> Zadzwoń
        </button>
        <button class="btn btn-outline-secondary" @click="sendEmail">
          <i class="bi bi-envelope-fill"></i> Napisz e-mail
        </button>
      </div>
    </div>

    <div v-if="selectedCity" id="map-container" class="border rounded shadow-sm mb-5">
      <div id="map" style="width:100%; height:60vh;"></div>
    </div>

    <div v-if="selectedCity" class="row text-center mb-5">
      <div class="col-12">
        <button class="btn btn-primary" @click="locateMe">
          <i class="bi bi-geo-alt"></i> Moja lokalizacja
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, nextTick } from 'vue'
import L from 'leaflet'

export default defineComponent({
  name: 'ContactView',
  setup() {
    const cities = {
      warsaw: {
        name: 'Warszawa – Przychodnia "Medical App 1"',
        coords: [52.1979, 21.0351],
        address: 'ul. Jana Feliksa Piwarskiego 5, 00-001 Warszawa',
        phone: '+48 111 111 111',
        email: 'warszawa@medicalapp.pl'
      },
      krakow: {
        name: 'Kraków – Przychodnia "Medical App 2"',
        coords: [50.0661, 19.9410],
        address: 'ul. Basztowa 18, 31-019 Kraków',
        phone: '+48 222 222 222',
        email: 'krakow@medicalapp.pl'
      },
      lodz: {
        name: 'Łódź – Przychodnia "Medical App 3"',
        coords: [51.7771, 19.4432],
        address: 'ul. Ogrodowa 28B, 90-001 Łódź',
        phone: '+48 333 333 333',
        email: 'lodz@medicalapp.pl'
      },
      wroclaw: {
        name: 'Wrocław – Przychodnia "Medical App 4"',
        coords: [51.1054, 17.0429],
        address: 'ul. Zygmunta Krasińskiego 29, 50-001 Wrocław',
        phone: '+48 444 444 444',
        email: 'wroclaw@medicalapp.pl'
      },
      poznan: {
        name: 'Poznań – Przychodnia "Medical App 5"',
        coords: [52.4098, 16.9119],
        address: 'ul. Słowackiego 8, 60-001 Poznań',
        phone: '+48 555 555 555',
        email: 'poznan@medicalapp.pl'
      },
      gdansk: {
        name: 'Gdańsk – Przychodnia "Medical App 6"',
        coords: [54.3541, 18.6562],
        address: 'ul. Tartaczna 3, 80-001 Gdańsk',
        phone: '+48 666 666 666',
        email: 'gdansk@medicalapp.pl'
      }
    }

    const selectedCity = ref(null)
    let map = null
    let marker = null

    watch(selectedCity, async (newCity) => {
      if (!newCity) return

      await nextTick()

      const { coords, name } = cities[newCity]

      if (!map) {
        map = L.map('map', { zoomControl: false }).setView(coords, 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map)
        L.control.zoom({ position: 'topleft' }).addTo(map)
        marker = L.marker(coords).addTo(map).bindPopup(name).openPopup()
      } else {
        map.setView(coords, 13)
        marker.setLatLng(coords).getPopup().setContent(name).openOn(map)
      }
    })

    function callPhone() {
      const tel = cities[selectedCity.value].phone.replace(/\D/g, '')
      if (navigator.vibrate) navigator.vibrate([50, 50])
      window.location.href = `tel:${tel}`
    }
    function sendEmail() {
      const mail = cities[selectedCity.value].email
      if (navigator.vibrate) navigator.vibrate(100)
      window.location.href = `mailto:${mail}`
    }
    function locateMe() {
      if (!navigator.geolocation) {
        return alert('Twoja przeglądarka nie wspiera geolokalizacji.')
      }
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          if (navigator.vibrate) navigator.vibrate(200)
          L.marker([latitude, longitude], { title: 'Twoja lokalizacja' })
            .addTo(map)
            .bindPopup('Twoja lokalizacja')
            .openPopup()
          map.setView([latitude, longitude], 13)
        },
        () => alert('Nie udało się pobrać lokalizacji.'),
        { enableHighAccuracy: true, timeout: 10000 }
      )
    }

    return { cities, selectedCity, callPhone, sendEmail, locateMe }
  }
})
</script>

<style scoped>
.mb-5 { margin-bottom: 3rem !important; }
.mb-4 { margin-bottom: 2rem !important; }
.py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }

#map-container {
  overflow: hidden;
}
#map {
  width: 100%;
  height: 60vh;
}
</style>
