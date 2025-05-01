<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-sm-10">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title text-center mb-3">Zarejestruj nowe konto</h3>
            <p class="text-center mb-4">
              <RouterLink to="/login" class="small">Masz już konto? Zaloguj się</RouterLink>
            </p>

            <form @submit.prevent="handleRegister" novalidate>
              <div class="mb-3">
                <label for="name" class="form-label">Imię i Nazwisko</label>
                <input v-model="name" type="text" class="form-control" id="name" required />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Adres e-mail</label>
                <input v-model="email" type="email" class="form-control" id="email" required />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Hasło</label>
                <input v-model="password" type="password" class="form-control" id="password" required />
              </div>

              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Powtórz hasło</label>
                <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" required />
              </div>

              <div v-if="error" class="text-danger mb-3">{{ error }}</div>

              <button type="submit" class="btn btn-primary w-100">Zarejestruj się</button>
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
import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref(null)

const router = useRouter()

const handleRegister = async () => {
  error.value = null

  if (password.value !== confirmPassword.value) {
    error.value = 'Hasła nie są takie same.'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Hasło musi mieć co najmniej 6 znaków.'
    return
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      name: name.value,
      email: email.value,
    })

    name.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    error.value = null

    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
</style>