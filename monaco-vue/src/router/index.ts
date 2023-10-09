import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/editer'
      // name: 'home',
      // component: HomeView
    },
    {
      path: '/editer',
      name: 'editer',
      component: () => import('../views/EditerView/EditerView.vue')
    },
    {
      path: '/editer1',
      name: 'editer1',
      component: () => import('../views/EditerView/EditerView1.vue')
    },
  ]
})

export default router
