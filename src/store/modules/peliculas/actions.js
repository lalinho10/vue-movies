import axios from 'axios'

export const obtenerPelicula = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/movie/${payload}?api_key=96d4174471b508fca5ba64fda73b00e3&language=es-MX`)
            .then((response) => {
                const payload = response.data;
                context.commit('actualizarSeleccionada', payload);
                resolve();
            })
            .catch(() => reject())
    });
}

export const obtenerCartelera = (context) => {
    return new Promise((resolve, reject) => {
        axios.get('movie/now_playing?api_key=96d4174471b508fca5ba64fda73b00e3&language=es-MX&page=1')
            .then((response) => {
                const payload = response.data.results;
                console.log('Cartelera', payload)
                context.commit('actualizarCartelera', payload);
                resolve();
            })
            .catch(() => reject());
    });
}

export const obtenerPopulares = (context) => {
    return new Promise((resolve, reject) => {
        axios.get('movie/popular?api_key=96d4174471b508fca5ba64fda73b00e3&region=MX&page=1')
            .then((response) => {
                const payload = response.data.results;
                context.commit('actualizarPopulares', payload);
                resolve();
            })
            .catch(() => reject());
    });
}

export const obtenerAnimadas = (context) => {
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