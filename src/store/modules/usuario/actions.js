import axios from 'axios'

export const obtenerCuenta = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/account?api_key=${process.env.VUE_APP_TMDB_API_KEY}&session_id=${payload}`)
            .then((response) => {
                context.commit('actualizarCuenta', response.data);
                resolve();
            })
            .catch(() => reject());
    })
}

export const obtenerListas = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/account/${payload.accountId}/lists?api_key=${process.env.VUE_APP_TMDB_API_KEY}&session_id=${payload.sessionId}`)
            .then((response) => {
                context.commit('actualizarListas', response.data.results);
                resolve();
            })
            .catch(() => reject());
    })
}

export const obtenerListaSeleccionada = (context, payload) => {
    return new Promise((resolve, reject) => {
        axios.get(`/list/${payload}?api_key=${process.env.VUE_APP_TMDB_API_KEY}`)
            .then((response) => {
                context.commit('actualizarListaSeleccionada', response.data);
                resolve();
            })
            .catch(() => reject());
    })
}