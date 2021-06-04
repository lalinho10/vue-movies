import * as actions from './actions';
import * as mutations from './mutations'

const moduloPeliculas = {
    state: () => ({
        elenco: [],
        personal: [],
        posters: [],
        fondos: [],
        peliculaSeleccionada: {},
        peliculasCartelera: [],
        peliculasPopulares: [],
        peliculasAnimadas: [],
    }),
    mutations,
    actions,
};

export default moduloPeliculas;