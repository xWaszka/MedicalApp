import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
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
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: { requiresGuest: true },
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
        meta: { requiresGuest: true },
      },
      {
        path: '/appointment',
        name: 'Appointment',
        component: () => import('@/views/AppointmentForm.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue'),
      },
      {
        path: '/logout',
        name: 'Logout',
        beforeEnter: () => {
          store.dispatch('user/logout')
          return { name: 'Login' }
        },
        meta: { requiresAuth: true },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/getUser']
  if (to.meta.requiresAuth && !user) return next({ name: 'Login' })
  if (to.meta.requiresGuest && user) return next({ name: 'Home' })
  next()
})

export default router
