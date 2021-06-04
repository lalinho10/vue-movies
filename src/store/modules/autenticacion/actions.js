import axios from 'axios'

export const obtenerToken = (context) => {
    return new Promise((resolve, reject) => {
        axios.get(`/authentication/token/new?api_key=96d4174471b508fca5ba64fda73b00e3`)
            .then((response) => {
                context.commit('actualizarToken', response.data.request_token);
                context.commit('actualizarTokenExpiration', response.data.expires_at);
                resolve();
            })
            .catch(() => reject());
    })
}

export const obtenerSessionID = (context) => {
    return new Promise((resolve, reject) => {
        axios.post(`/authentication/session/new?api_key=96d4174471b508fca5ba64fda73b00e3`, {
            request_token: context.state.token,
        })
        .then((response) => {
            context.commit('actualizarSessionId', response.data.session_id);
            resolve();
        })
        .catch(() => reject());
    })
}