import Vue from 'vue'
import Vuex from 'vuex'

import moduloPeliculas from './modules/peliculas/store-peliculas'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        moduloPeliculas,
    }
})