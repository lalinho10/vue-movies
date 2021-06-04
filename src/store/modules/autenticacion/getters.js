export const isValidToken = state => {
    if (state.token !== null && state.tokenExpiration !== null) {
        return new Date(state.tokenExpiration).getTime() > new Date().getTime;
    }
    return false;
}