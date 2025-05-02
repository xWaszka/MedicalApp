import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
 
const firebaseConfig = {
    apiKey: "AIzaSyB3XVapXr0q4O3VV7IJHUF0KjSoAEBWm2s",
    authDomain: "medicalapp-68cb7.firebaseapp.com",
    projectId: "medicalapp-68cb7",
    storageBucket: "medicalapp-68cb7.firebasestorage.app",
    messagingSenderId: "517067229681",
    appId: "1:517067229681:web:fa709dad4494b2fbe9dc50"
};
 
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
 
export { auth, db, storage }
 