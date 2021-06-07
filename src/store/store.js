import Vue from 'vue'
import Vuex from 'vuex'

import moduloAutenticacion from './modules/autenticacion/store-autenticacion'
import moduloPeliculas from './modules/peliculas/store-peliculas'
import moduloUsuario from './modules/usuario/store-usuario'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        moduloAutenticacion,
        moduloPeliculas,
        moduloUsuario,
    }
})

export default store