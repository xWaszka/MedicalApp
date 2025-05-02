<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Medical App</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNav"
        :aria-expanded="!isCollapsed"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        :class="{ show: !isCollapsed }"
        id="navbarNav"
      >
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
              @click="handleLinkClick"
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
import { auth, db } from '@/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const user = ref(null)
const userRole = ref(null)
const isCollapsed = ref(true)
const router = useRouter()

onMounted(() => {
  onAuthStateChanged(auth, async u => {
    user.value = u
    if (u) {
      const snap = await getDoc(doc(db, 'users', u.uid))
      userRole.value = snap.data()?.role || null
    } else {
      userRole.value = null
    }
  })
})

const links = [
  { to: '/',               text: 'Strona Główna',       auth: null },
  { to: '/contact',        text: 'Kontakt',             auth: null },
  { to: '/login',          text: 'Zaloguj się',         auth: false },
  { to: '/register',       text: 'Zarejestruj się',     auth: false },
  { to: '/appointment',    text: 'Umów wizytę',         auth: true },
  { to: '/remote',         text: 'Zdalna konsultacja',  auth: true },
  { to: '/profile',        text: 'Profil',              auth: true },
  { to: '/admin',          text: 'Panel Admina',        auth: true, admin: true },
]

const filteredLinks = computed(() =>
  links.filter(l => {
    if (l.auth === true  && !user.value)  return false
    if (l.auth === false &&  user.value)  return false
    if (l.admin && userRole.value !== 'admin') return false
    return true
  })
)

function toggleNav() {
  isCollapsed.value = !isCollapsed.value
}

function handleLinkClick() {
  isCollapsed.value = true
}

async function logout() {
  await signOut(auth)
  isCollapsed.value = true
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
