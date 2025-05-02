import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const routes = [
  {
    path: '/',
    component: () => import('@/components/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: { requiresGuest: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
        meta: { requiresGuest: true }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'remote',
        name: 'RemoteAppointment',
        component: () => import('@/views/RemoteAppointment.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'appointment',
        name: 'Appointment',
        component: () => import('@/views/AppointmentForm.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/Admin.vue'),
        meta: {
          requiresAuth: true,
          roles: ['admin']
        }
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const auth = getAuth()

  const requiresAuth  = to.matched.some(r => r.meta.requiresAuth)
  const requiresGuest = to.matched.some(r => r.meta.requiresGuest)

  const allowedRoles = to.matched
    .filter(r => r.meta.roles)
    .flatMap(r => r.meta.roles)

  let user = auth.currentUser
  if (user === null) {
    user = await new Promise(resolve => {
      const unsub = onAuthStateChanged(auth, u => {
        unsub()
        resolve(u)
      })
    })
  }

  if (requiresAuth  && !user) { return next({ name: 'Login' }) }
  if (requiresGuest &&  user) { return next({ name: 'Home'  }) }

  if (allowedRoles.length && user) {
    const snap = await getDoc(doc(db, 'users', user.uid))
    const data = snap.data() || {}
    const role = data.role

    if (!allowedRoles.includes(role)) {
      return next({ name: 'NotFound' })
    }
  }

  next()
})


export default router
