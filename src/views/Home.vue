<template>
  <div
    class="d-flex vh-100 flex-column justify-content-center align-items-center text-center text-white position-relative"
    :style="heroStyle"
  >
    
    <div
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
      aria-hidden="true"
    ></div>

    
    <div class="position-relative px-3">
      <h1 class="display-5 fw-bold mb-3">Witamy w Medical Appointment Booking</h1>
      <p class="lead mb-4">Projekt testowy na przedmiot PP5. Przetestuj już dziś!</p>
      <router-link
        to="/login"
        class="btn btn-success btn-lg"
        aria-label="Przejdź do rezerwacji wizyty">
        Umów wizytę już dziś!
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  heroStyle() {
    return {
      background: "url('assets/bg.png') center/cover no-repeat",
      height: '100vh'
    }
  }
  }

}
</script>
