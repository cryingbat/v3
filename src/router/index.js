import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('../views/Home.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
