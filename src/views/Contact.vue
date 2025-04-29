<template>
  <div class="container py-4">
    <div id="map-container" class="border rounded shadow-sm p-2">
      <div id="map" class="w-100 h-100"></div> <!-- Responsywny kontener mapy -->
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import L from 'leaflet';

export default defineComponent({
  name: 'MapComponent',
  setup() {
    const initMap = () => {
      const map = L.map('map').setView([50.068522975952696, 19.95384331224684], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([50.068522975952696, 19.95384331224684]).addTo(map)
        .bindPopup('UEK Kraków')
        .openPopup();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            L.marker([userLat, userLon]).addTo(map)
              .bindPopup('Twoja lokalizacja')
              .openPopup();
            map.setView([userLat, userLon], 14);
          },
          () => {
            console.error('Nie udało się uzyskać lokalizacji.');
          }
        );
      } else {
        console.error('Geolokalizacja nie jest wspierana przez tę przeglądarkę.');
      }
    };

    onMounted(() => {
      initMap();
    });

    return {};
  },
});
</script>

<style scoped>
#map-container {
  height: 80vh;
  max-width: 100%;
  overflow: hidden;
}

#map {
  height: 100%;
  width: 100%;
}
</style>
