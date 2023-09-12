import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationView from '@/views/AuthorizationView.vue'
import DashboardViewVue from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: DashboardViewVue
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthorizationView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardViewVue
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if (to.path !== '/auth'){
    if (localStorage.getItem('loggedIn') !== 'true') {
      router.push('/auth')
      return
    }
    else{
      next()
    }
  }else{
    next()
  }
})

export default router
