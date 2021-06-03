export const actualizarSeleccionada = (state, payload) => {
    state.peliculaSeleccionada = payload;
}

export const actualizarElenco = (state, payload) => {
    state.elenco = payload;
}

export const actualizarPersonal = (state, payload) => {
    state.personal = payload;
}

export const actualizarPosters = (state, payload) => {
    state.posters = payload;
}

export const actualizarFondos = (state, payload) => {
    state.fondos = payload;
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