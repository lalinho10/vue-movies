import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacto from '../views/Contacto.vue'
import Detalle from '../views/Detalle.vue'
import Elenco from '../views/Elenco.vue'
import Error404 from '../views/Error404.vue'
import Fondos from '../views/Fondos.vue'
import Home from '../views/Home.vue'
import Lista from '../views/Lista.vue'
import Personal from '../views/Personal.vue'
import Posters from '../views/Posters.vue'

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
    children: [
      { path: '', component: Elenco },
      { path: 'personal', component: Personal },
      { path: 'posters', component: Posters },
      { path: 'fondos', component: Fondos },
    ],
  },
  {
    path: '/contacto',
    component: Contacto,
    /* name: 'About',
    component: () => import('../views/Contacto.vue')*/
  },
  {
    path: '*',
    component: Error404,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
