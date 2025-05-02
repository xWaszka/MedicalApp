<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">Logowanie</h2>
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="form-control"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="password">Hasło</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              required
            />
          </div>
          <div v-if="error" class="alert alert-danger">
            {{ error }}
          </div>
          <button type="submit" class="btn btn-primary w-100">
            Zaloguj
          </button>
        </form>

        <button @click="signInWithGoogle" class="btn btn-danger w-100 mt-3">
          Zaloguj przez Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      this.error = ''
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/')
      } catch (err) {
        this.error = 'Nieprawidłowy email lub hasło.'
      }
    },
    async signInWithGoogle() {
      try {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const user = result.user

        const userRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userRef)

        if (!userSnap.exists()) {
          const displayName = user.displayName || ''
          await setDoc(userRef, {
            name: displayName,
            email: user.email
          })
        }

        this.$router.push('/')
      } catch (error) {
        console.error('Błąd logowania przez Google:', error)
        this.error = 'Wystąpił błąd podczas logowania przez Google.'
      }
    }
  }
}
</script>
