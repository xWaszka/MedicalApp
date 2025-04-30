import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/auth',
    component: () => import('@/components/DefaultLayout.vue'),
    meta: { requiresGuest: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('@/components/DefaultLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      }
    ]
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: () => {
      Auth.logout()
      return { name: 'Login' }
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/components/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = store.getters['user/getToken']
  const user = store.getters['user/getUser']
  const requiresAuth = to.meta.requiresAuth
  const requiresGuest = to.meta.requiresGuest

  if (requiresAuth && !token) {
    return next({ name: 'Login' })
  }

  if (requiresGuest && token) {
    return next({ name: 'Dashboard' })
  }

  if (token && !user) {
    try {
      await Auth.getUser()
    } catch (e) {
      Auth.logout()
      return next({ name: 'Login' })
    }
  }

  store.commit({
    type: 'system/SET_ATTEMPT',
    attempt: false
  })

  next()
})

export default router
