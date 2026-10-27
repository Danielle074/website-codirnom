import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue' // Ajuste le chemin vers ton Layout si nécessaire


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        }
      ]
    }
  ]
})

export default router