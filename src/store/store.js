import Vue from 'vue'
import Vuex from 'vuex'

import moduloAutenticacion from './modules/autenticacion/store-autenticacion'
import moduloPeliculas from './modules/peliculas/store-peliculas'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        moduloAutenticacion,
        moduloPeliculas,
    }
})

export default store