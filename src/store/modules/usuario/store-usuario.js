import * as actions from './actions'
import * as mutations from './mutations'

const moduloUsuario = {
    state: () => ({
        usuario: null,
        listas: [],
        listaSeleccionada: null,
    }),
    mutations,
    actions,
};

export default moduloUsuario;