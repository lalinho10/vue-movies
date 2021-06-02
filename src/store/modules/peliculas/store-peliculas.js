import * as mutations from './mutations'
import * as actions from './actions';

const moduloPeliculas = {
    state: () => ({
        peliculaSeleccionada: {},
        peliculasCartelera: [],
        peliculasPopulares: [],
        peliculasAnimadas: [],
    }),
    mutations,
    actions
};

export default moduloPeliculas;