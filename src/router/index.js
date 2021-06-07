import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

import ConfirmacionTMDB from '../components/ConfirmacionTMDB.vue'

import Contacto from '../views/Contacto.vue'
import Detalle from '../views/Detalle.vue'
import Elenco from '../views/Elenco.vue'
import Error404 from '../views/Error404.vue'
import Fondos from '../views/Fondos.vue'
import Home from '../views/Home.vue'
import Listas from '../views/Listas.vue'
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
    path: '/listas',
    component: Listas,
    meta: { requiresAuth: true },
  },
  {
    path: '/autorizacion',
    component: ConfirmacionTMDB,
    meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.path === '/listas') {
      if (!store.getters.isValidToken) {
        const conf = confirm('Tu sesión ha expirado. Deseas renovarla?')
        if (!conf) {
          next(false);
        } else {
          store.dispatch('obtenerToken').then(() => {
            const token = store.state.moduloAutenticacion.token;
            const tokenExpiration = store.state.moduloAutenticacion.tokenExpiration;
            const redirectPath = `${window.location.origin}/autorizacion`;
            window.open(`https://www.themoviedb.org/authenticate/${token}?redirect_to=${redirectPath}?expires_at=${tokenExpiration}`, '_self');
          })
        }
      } else {
        next()
      }
    } else if (to.path === '/autorizacion') {
      if (to.query.approved) {
        store.commit('actualizarToken', to.query.request_token)
        store.commit('actualizarTokenExpiration', to.query.expires_at)
        next()
      } else {
        next('/')
      }
    }
  } else {
    next()
  }
})

export default router
