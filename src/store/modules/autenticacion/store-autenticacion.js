import * as actions from './mutations'
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