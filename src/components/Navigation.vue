<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #004085;">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand font-weight-bold text-white">Medical App</RouterLink> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link font-weight-bold" exact active-class="active-link">Strona Główna</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link font-weight-bold" active-class="active-link">Kontakt</RouterLink>
          </li>
          <template v-if="!user">
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link font-weight-bold" active-class="active-link">Zaloguj się</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/register" class="nav-link font-weight-bold" active-class="active-link">Zarejestruj się</RouterLink>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <button @click="handleLogout" class="nav-link btn btn-link text-white font-weight-bold">Wyloguj</button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const user = ref(null)
const router = useRouter()

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })
})

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/login')
  } catch (err) {
    console.error('Błąd podczas wylogowywania:', err)
  }
}
</script>

<style scoped>
.navbar {
  border-radius: 0;
}

.navbar-brand {
  font-weight: bold;
  background-color: transparent !important;
}

.nav-link {
  color: white !important;
}

.nav-link:hover {
  color: #ffcc00 !important;
}

.navbar-toggler-icon {
  background-color: white;
  width: 30px;
  height: 3px;
  border-radius: 0;
  position: relative;
}

.navbar-toggler-icon:before, .navbar-toggler-icon:after {
  content: '';
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 0;
}

.navbar-toggler-icon:before {
  top: -8px;
}

.navbar-toggler-icon:after {
  top: 8px;
}

.nav-item .nav-link.router-link-exact-active {
  background-color: transparent !important;
  color: white !important;
}

.nav-link {
  font-weight: bold;
}
</style>
