<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Zaloguj się</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Lub
          {{ ' ' }}
          <router-link 
            :to="{name:'Register'}"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Zarejestruj się
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div v-if="errors.length > 0" class="rounded-md bg-red-50 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Wystąpiły następujące błędy:</h3>
              <div class="mt-2 text-sm text-red-700">
                <ul role="list" class="list-disc space-y-1 pl-5">
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Adres E-mail</label>
            <input
              id="email-address"
              type="email"
              v-model="formData.email"
              autocomplete="email"
              required="true"
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              :class="[errors.length>0 && !formData.email ? 'border-red-500' : '']"
              placeholder="E-mail" 
            />
          </div>
          <div>
            <label for="password" class="sr-only">Hasło</label>
            <input
              id="password"
              type="password"
              autocomplete="current-password"
              v-model="formData.password"              
              required="true"
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              :class="[errors.length>0 && !formData.password ? 'border-red-500' : '']"
              placeholder="Hasło" 
            />
          </div>
        </div>
        <div>
          <button
            v-if="!attempt"
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Zaloguj się
          </button>

          <button
            v-else
            disabled="true"
            type="button"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-300 py-2 px-4 text-sm font-medium text-white"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-400" aria-hidden="true" />
            </span>
            Zaloguj się
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import { auth, signInWithEmailAndPassword } from '@/firebase'
import store from '@/store'

const router = useRouter()

const formData = ref({
  email: null,
  password: null
})

const attempt = computed(() => store.getters['system/getAttempt'])
const errors = ref([])

const login = async () => {
  errors.value = []
  
  // Walidacja pól
  if (!formData.value.email) errors.value.push('Uzupełnij adres e-mail')
  if (!formData.value.password) errors.value.push('Uzupełnij hasło')

  if (errors.value.length > 0) return

  store.commit({
    type: 'system/SET_ATTEMPT',
    attempt: true
  })

  try {
    // Logowanie przez Firebase Authentication
    await signInWithEmailAndPassword(
      auth,
      formData.value.email,
      formData.value.password
    )

    // Przekierowanie po udanym logowaniu
    router.push({ name: 'Dashboard' })
    
  } catch (error) {
    // Obsługa błędów Firebase
    switch (error.code) {
      case 'auth/invalid-email':
        errors.value.push('Nieprawidłowy format adresu email')
        break
      case 'auth/user-disabled':
        errors.value.push('Konto zostało zablokowane')
        break
      case 'auth/user-not-found':
        errors.value.push('Nie znaleziono użytkownika o podanym adresie email')
        break
      case 'auth/wrong-password':
        errors.value.push('Nieprawidłowe hasło')
        break
      default:
        errors.value.push('Wystąpił błąd podczas logowania')
        console.error(error)
    }
  } finally {
    store.commit({
      type: 'system/SET_ATTEMPT',
      attempt: false
    })
  }
}
</script>

<style scoped>
.border-red-500 {
  border-color: rgb(239, 68, 68);
}
</style>