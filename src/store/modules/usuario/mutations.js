export const actualizarCuenta = (state, payload) => {
    state.usuario = payload;
}

export const actualizarListas = (state, payload) => {
    state.listas = payload;
}

export const actualizarListaSeleccionada = (state, payload) => {
    state.listaSeleccionada = payload;
}