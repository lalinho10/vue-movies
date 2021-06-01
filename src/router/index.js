import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacto from '../views/Contacto.vue'
import Detalle from '../views/Detalle.vue'
import Home from '../views/Home.vue'
import Lista from '../views/Lista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lista',
    component: Lista,
  },
  {
    path: '/detalle/:id',
    component: Detalle,
  },
  {
    path: '/contacto',
    component: Contacto,
    /* name: 'About',
    component: () => import('../views/Contacto.vue')*/
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
