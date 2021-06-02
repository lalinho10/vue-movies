export const actualizarSeleccionada = (state, payload) => {
    state.peliculaSeleccionada = payload;
}

export const actualizarCartelera = (state, payload) => {
    state.peliculasCartelera = payload;
}

export const actualizarPopulares = (state, payload) => {
    state.peliculasPopulares = payload;
}

export const actualizarAnimadas = (state, payload) => {
    state.peliculasAnimadas = payload;
}