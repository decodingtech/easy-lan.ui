import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/columns',
      name: 'columns',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/columnsView.vue')
    },
    {
      path: '/administration',
      name: 'administration',
      component: () => import('../views/administrationView.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/modalView.vue')
    },
    {
      path: '/modalTS',
      name: 'modalTS',
      component: () => import('../views/modalTSView.vue')
    },
    {
      path:'/signin',
      name:'signin',
      component: () => import('../views/sign-inView.vue')
    },
    {
      path:'/registre', 
      name: 'registre',
      component: () => import ('../views/registrationUserView.vue')
    },
    {
      path:'/forget', 
      name: 'forget',
      component: () => import ('../views/forgetPassView.vue')
    },
    {
      path:'/cards',
      name: 'cards',
      component: () => import('../views/tarjetasView.vue')
    }
  ]
})

export default router
