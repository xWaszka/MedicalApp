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



export default router
