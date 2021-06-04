import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const moduloAutenticacion = {
    state: () => ({
        token: null,
        tokenExpiration: null,
        sessionId: null,
    }),
    getters,
    mutations,
    actions,
};

export default moduloAutenticacion;