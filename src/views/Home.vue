<template>
  <div class="snap-container">
    <section class="snap-section hero">
      <div class="overlay"></div>
      <div class="hero-content text-white text-center px-3 px-md-5">
        <h1 class="display-5 fw-bold mb-3">Szybkie umawianie wizyt</h1>
        <p class="lead mb-4">
          Zarezerwuj wizytę stacjonarną lub online w kilka sekund.
        </p>
        <router-link to="/auth/login" class="btn btn-success btn-lg">
          Umów wizytę
        </router-link>
      </div>
    </section>

    <section class="snap-section services py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-4 text-lg-start text-center mb-4 mb-lg-0">
            <h2 class="display-4">Nasze usługi</h2>
          </div>
          <div class="col-12 col-lg-8">
            <div class="d-flex flex-column flex-md-row justify-content-center justify-content-lg-end gap-4">
              <router-link
                to="/clinic"
                class="service-card d-flex flex-column align-items-center text-center text-decoration-none text-dark shadow-sm"
              >
                <i class="bi bi-hospital fs-1 text-primary mb-3"></i>
                <h5 class="fs-4 mb-2">Przychodnia</h5>
                <p class="flex-grow-1 fs-6 mb-0">Szybka rezerwacja wizyty stacjonarnej.</p>
              </router-link>

              <router-link
                to="/online"
                class="service-card d-flex flex-column align-items-center text-center text-decoration-none text-dark shadow-sm"
              >
                <i class="bi bi-laptop fs-1 text-primary mb-3"></i>
                <h5 class="fs-4 mb-2">Wizyty online</h5>
                <p class="flex-grow-1 fs-6 mb-0">Umów konsultację zdalnie z dowolnego miejsca.</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section ref="whyUsSection" class="snap-section why-us text-center">
      <h2 class="why-us-header display-3">Dlaczego warto nas wybrać?</h2>
      <div class="why-us-items d-flex flex-column flex-md-row justify-content-center align-items-start gap-5 px-3 px-md-0">

        <div v-for="a in advantages" :key="a.title" class="adv-item slide-in">
          <i :class="`${a.icon} fs-2 mb-3`"></i>
          <h5>{{ a.title }}</h5>
          <p>{{ a.text }}</p>
        </div>
      </div>
    </section>

    <section class="snap-section testimonials">
      <div class="container py-5">
        <h2 class="text-center mb-4">Co mówią nasi pacjenci?</h2>
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(t,i) in testimonials"
              :key="i"
              class="carousel-item text-center"
              :class="{ active: i === 0 }"
            >
              <blockquote class="blockquote">
                <p>“{{ t.quote }}”</p>
                <footer class="blockquote-footer">{{ t.author }}</footer>
              </blockquote>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>

    <section class="snap-section cta text-center">
      <div class="container py-5">
        <h3 class="mb-3 text-white">Gotowy na wizytę?</h3>
        <router-link to="/auth/login" class="btn btn-light btn-lg">
          Zarezerwuj teraz
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

const services = reactive([
  { icon: 'bi bi-house-fill', title: 'Przychodnia', text: 'Szybka rezerwacja wizyty stacjonarnej.', link: '/clinic' },
  { icon: 'bi bi-laptop', title: 'Wizyty online', text: 'Umów konsultację zdalnie z dowolnego miejsca.', link: '/online' }
])

const advantages = reactive([
  { icon: 'bi bi-clock-history', title: 'Oszczędność czasu', text: 'Rezerwuj wizyty w kilka sekund.' },
  { icon: 'bi bi-shield-lock', title: 'Bezpieczeństwo', text: 'Pełna ochrona Twoich danych.' },
  { icon: 'bi bi-headset', title: 'Wsparcie 24/7', text: 'Pomoc o każdej porze dnia i nocy.' }
])

const testimonials = reactive([
  { quote: 'Świetna aplikacja – szybko zarezerwowałem wizytę!', author: 'Anna K.' },
  { quote: 'Profesjonalna obsługa online, polecam!', author: 'Michał W.' },
  { quote: 'Intuicyjny interfejs i prosty proces rejestracji.', author: 'Kasia S.' }
])

const whyUsSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          whyUsSection.value
            .querySelectorAll('.slide-in')
            .forEach(el => el.classList.add('visible'))
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  if (whyUsSection.value) observer.observe(whyUsSection.value)
})
</script>

<style scoped>
html, body, #app { height: 100%; margin: 0; }

.snap-container {
  height: calc(100vh - 56px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
.why-us-items {
  
  gap: 4rem !important;
}

.adv-item {
 
  margin-bottom: 2rem;
}

.snap-section {
  scroll-snap-align: start;
  height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero {
  background: url(/assets/bg.png) center/cover no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.services {
  background: #94B4C1;
}

.service-card {
  min-width: 240px;
  padding: 1.5rem;
  border-radius: .5rem;
  transition: transform .2s, box-shadow .2s;
  background: #a8c1ca;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0,0,0,.1);
}

.why-us {
  background: #547792;
  color: #fff;
  flex-direction: column;
  padding: 2rem 0;
}

.why-us-header {
  margin-bottom: 10rem;
}

.slide-in {
  opacity: 0;
  transform: translateX(100%);
  transition: transform 0.8s ease, opacity 0.8s ease;
}

.slide-in.visible {
  opacity: 1;
  transform: translateX(0);
}

.testimonials {
  background: #94B4C1;
}

.cta {
  background: #547792;
}
</style>
