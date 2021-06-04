import axios from 'axios'

export const obtenerPelicula = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/movie/${payload}?api_key=${process.env.VUE_APP_TMDB_API_KEY}&language=es-MX`)
            .then((response) => {
                context.commit('actualizarSeleccionada', response.data);
                resolve();
            })
            .catch(() => reject())
    });
}

export const obtenerCreditos = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/movie/${payload}/credits?api_key=${process.env.VUE_APP_TMDB_API_KEY}&language=es-MX`)
            .then((response) => {
                context.commit('actualizarElenco', response.data.cast);
                context.commit('actualizarPersonal', response.data.crew);
                resolve();
            })
            .catch(() => reject());
    });
}

export const obtenerImagenes = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/movie/${payload}/images?api_key=${process.env.VUE_APP_TMDB_API_KEY}`)
            .then((response) => {
                context.commit('actualizarPosters', response.data.posters);
                context.commit('actualizarFondos', response.data.backdrops);
                resolve();
            })
            .catch(() => reject());
    })
}

export const obtenerCartelera = (context) => {
    return new Promise((resolve, reject) => {
        axios.get(`movie/now_playing?api_key=${process.env.VUE_APP_TMDB_API_KEY}&language=es-MX&page=1`)
            .then((response) => {
                context.commit('actualizarCartelera', response.data.results);
                resolve();
            })
            .catch(() => reject());
    });
}

export const obtenerPopulares = (context) => {
    return new Promise((resolve, reject) => {
        axios.get(`movie/popular?api_key=${process.env.VUE_APP_TMDB_API_KEY}&region=MX&page=1`)
            .then((response) => {
                context.commit('actualizarPopulares', response.data.results);
                resolve();
            })
            .catch(() => reject());
    });
}

export const obtenerAnimadas = (context) => {
    return new Promise((resolve, reject) => {
        axios.get(`/discover/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`)
            .then((response) => {
                context.commit('actualizarAnimadas', response.data.results);
                resolve();
            })
            .catch(() => reject());
    });
}