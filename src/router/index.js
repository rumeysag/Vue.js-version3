import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo',
    name: 'todo',
    component: () =>import('../views/ToDo.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () =>import('../views/Counter.vue')
  },
  {
    path: '/reactivity',
    name: 'reactivity',
    component: () =>import('../views/Reactivity.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () =>import('../views/LifeCycleHooks.vue')
  },
  {
    path: '/class-style',
    name: 'class-style',
    component: () =>import('../views/ClassStyleBinding.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
