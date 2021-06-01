import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        peliculaSeleccionada: {},
        peliculasCartelera: [],
        peliculasPopulares: [],
        peliculasAnimadas: [],
    },
    mutations: {
        actualizarSeleccionada: (state, payload) => {
            state.peliculaSeleccionada = payload;
        },
        actualizarCartelera: (state, payload) => {
            state.peliculasCartelera = payload;
        },
        actualizarPopulares: (state, payload) => {
            state.peliculasPopulares = payload;
        },
        actualizarAnimadas: (state, payload) => {
            state.peliculasAnimadas = payload;
        },
    },
    actions: {
        obtenerPelicula: (context, payload) => {
            return new Promise((resolve, reject) => {
                axios.get(`/movie/${payload}?api_key=96d4174471b508fca5ba64fda73b00e3&language=es-MX`)
                    .then((response) => {
                        const payload = response.data;
                        console.log('Película:', payload);
                        context.commit('actualizarSeleccionada', payload);
                        resolve();
                    })
                    .catch(() => reject())
            });
        },
        obtenerCartelera: (context) => {
            return new Promise((resolve, reject) => {
                axios.get('movie/now_playing?api_key=96d4174471b508fca5ba64fda73b00e3&language=es-MX&page=1')
                    .then((response) => {
                        const payload = response.data.results;
                        context.commit('actualizarCartelera', payload);
                        resolve();
                    })
                    .catch(() => reject());
            });
        },
        obtenerPopulares: (context) => {
            return new Promise((resolve, reject) => {
                axios.get('movie/popular?api_key=96d4174471b508fca5ba64fda73b00e3&region=MX&page=1')
                    .then((response) => {
                        const payload = response.data.results;
                        context.commit('actualizarPopulares', payload);
                        resolve();
                    })
                    .catch(() => reject());
            });
        },
        obtenerAnimadas: (context) => {
            return new Promise((resolve, reject) => {
                axios.get('/discover/movie?api_key=96d4174471b508fca5ba64fda73b00e3&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16')
                    .then((response) => {
                        const payload = response.data.results;
                        context.commit('actualizarAnimadas', payload);
                        resolve();
                    })
                    .catch(() => reject());
            });
        }
    }
})