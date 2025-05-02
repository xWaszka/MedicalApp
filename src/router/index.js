import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
        path: 'appointment',
        name: 'Appointment',
        component: () => import('@/views/AppointmentForm.vue'),
        meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

  const checkAuth = () => {
    const user = auth.currentUser

    if (requiresAuth && !user) {
      next({ name: 'Login' })
    } else if (requiresGuest && user) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }

  if (auth.currentUser === null) {
    onAuthStateChanged(auth, () => {
      checkAuth()
    })
  } else {
    checkAuth()
  }
})

export default router
