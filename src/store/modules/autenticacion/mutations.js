export const actualizarToken = (state, payload) => {
    state.token = payload;
}

export const actulizarTokenExpiration = (state, payload) => {
    state.tokenExpiration = payload;
}

export const actualizarSessionId = (state, payload) => {
    state.sessionId = payload;
}