import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/01.Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo',
    name: 'todo',
    component: () =>import('../views/02.ToDo.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () =>import('../views/03.Counter.vue')
  },
  {
    path: '/reactivity',
    name: 'reactivity',
    component: () =>import('../views/04.Reactivity.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () =>import('../views/05.LifeCycleHooks.vue')
  },
  {
    path: '/class-style',
    name: 'class-style',
    component: () =>import('../views/06.ClassStyleBinding.vue')
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: () =>import('../views/07.Conditions.vue')
  },
  {
    path: '/loops',
    name: 'loops',
    component: () =>import('../views/08.Loops.vue')
  },
  // {
  //   path: '/odevler',
  //   name: 'odevler',
  //   component: () =>import('../views/Odevler.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
