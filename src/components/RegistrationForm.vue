<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Zarejestruj nowe konto</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Lub
          {{ ' ' }}
          <router-link 
            :to="{name:'Login'}"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Zaloguj się
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="register">
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
                <label for="name" class="sr-only">Twoje imię i nazwisko</label>
                <input
                    id="name"
                    type="text"
                    v-model="formData.name"
                    required="true"
                    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    :class="[errors.length>0 && !formData.name ? 'border-red-500' : '']"
                    placeholder="Imię i Nazwisko" 
                />
            </div>
            <div>
                <label for="email-address" class="sr-only">E-mail</label>
                <input
                    id="email-address"
                    type="email"
                    v-model="formData.email"
                    required="true"
                    class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    :class="[errors.length>0 && !formData.email ? 'border-red-500' : '']"
                    placeholder="E-mail" 
                />
            </div>
            <div>
                <label for="password" class="sr-only">Hasło</label>
                <input
                    id="password"
                    type="password"
                    v-model="formData.password"              
                    required="true"
                    class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    :class="[errors.length>0 && !formData.password ? 'border-red-500' : '']"
                    placeholder="Hasło" 
                />
            </div>
            <div>
                <label for="password_confirmation" class="sr-only">Potwierdź hasło</label>
                <input
                    id="password_confirmation"
                    type="password"
                    v-model="formData.password_confirmation"              
                    required="true"
                    class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    :class="[errors.length>0 && !formData.password_confirmation ? 'border-red-500' : '']"
                    placeholder="Potwierdź hasło" 
                />
            </div>
        </div>

        <div>
          <button
            v-if="!attempt"
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Zarejestruj się
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
            Zarejestruj się
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
import { auth, db, collection, addDoc, createUserWithEmailAndPassword } from '@/firebase'
import store from '@/store'

const router = useRouter()

const attempt = computed(() => store.getters['system/getAttempt'])

const formData = ref({
  name: null,
  email: null,
  password: null,
  password_confirmation: null
})

const errors = ref([])

const register = async () => {
  errors.value = []
  
  if (!formData.value.name) errors.value.push('Uzupełnij imię i nazwisko')
  if (!formData.value.email) errors.value.push('Uzupełnij e-mail')
  if (!formData.value.password) errors.value.push('Uzupełnij hasło')
  if (!formData.value.password_confirmation) errors.value.push('Potwierdź hasło')
  if (formData.value.password && formData.value.password_confirmation && 
      formData.value.password !== formData.value.password_confirmation) {
    errors.value.push('Hasła nie pasują do siebie')
  }

  if (errors.value.length > 0) return

  store.commit({
    type: 'system/SET_ATTEMPT',
    attempt: true
  })

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.value.email,
      formData.value.password
    )
    await addDoc(collection(db, 'users'), {
      uid: userCredential.user.uid,
      name: formData.value.name,
      email: formData.value.email,
    })

    router.push({ name: 'Dashboard' })
    
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        errors.value.push('Ten adres email jest już zarejestrowany')
        break
      case 'auth/invalid-email':
        errors.value.push('Nieprawidłowy adres email')
        break
      case 'auth/weak-password':
        errors.value.push('Hasło powinno mieć co najmniej 6 znaków')
        break
      default:
        errors.value.push('Wystąpił błąd podczas rejestracji')
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