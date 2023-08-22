import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationView from '@/views/AuthorizationView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthorizationView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: import('@/views/DashboardView.vue')
    }
  ]
})

export default router
