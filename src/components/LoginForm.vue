<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-sm-10">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-center mb-3">Zaloguj się</h3>
            <p class="text-center mb-4">
              <RouterLink to="/register" class="small">Nie masz konta? Zarejestruj się</RouterLink>
            </p>

            <form @submit.prevent="handleLogin" novalidate>
              <div class="mb-3">
                <label for="email" class="form-label">Adres e-mail</label>
                <input v-model="email" type="email" class="form-control" id="email" required />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Hasło</label>
                <input v-model="password" type="password" class="form-control" id="password" required />
              </div>

              <div v-if="error" class="text-danger mb-3">{{ error }}</div>

              <button type="submit" class="btn btn-primary w-100">Zaloguj się</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref(null)

const router = useRouter()

const handleLogin = async () => {
  error.value = null

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    alert('Zalogowano')
    router.push('/')
  } catch (err) {
    error.value = 'Nieprawidłowy email lub hasło.'
  }
}
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
</style>