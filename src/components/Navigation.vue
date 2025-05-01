<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Medical App</RouterLink>

      <button
        ref="toggler"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div ref="navCollapse" class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li
            v-for="link in filteredLinks"
            :key="link.to"
            class="nav-item"
          >
            <RouterLink
              :to="link.to"
              class="nav-link"
              active-class="active-link"
              @click="hideNav"
            >
              {{ link.text }}
            </RouterLink>
          </li>
          <li v-if="user" class="nav-item">
            <button class="nav-link btn btn-link text-white" @click="logout">
              Wyloguj
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Collapse } from 'bootstrap'

const user = ref(null)
const router = useRouter()
const navCollapse = ref(null)

onMounted(() => {
  onAuthStateChanged(auth, u => {
    user.value = u
  })
})

const links = [
  { to: '/', text: 'Strona Główna',    auth: null },
  { to: '/contact', text: 'Kontakt',   auth: null },
  { to: '/login',   text: 'Zaloguj się', auth: false },
  { to: '/register',text: 'Zarejestruj się', auth: false },
  { to: '/appointment', text: 'Umów wizytę', auth: true },
  { to: '/profile', text: 'Profil',     auth: true }
]

const filteredLinks = computed(() =>
  links.filter(l =>
    l.auth === null ||
    (l.auth === true  && user.value) ||
    (l.auth === false && !user.value)
  )
)

function hideNav() {
  
  const bs = Collapse.getInstance(navCollapse.value) || new Collapse(navCollapse.value)
  bs.hide()
}

async function logout() {
  await signOut(auth)
  hideNav()
  router.push('/login')
}
</script>

<style>
.navbar {
  z-index: 1000; 
}
.active-link {
  text-decoration: underline;
}
</style>
