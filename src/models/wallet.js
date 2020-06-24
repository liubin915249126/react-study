export default {
    namespace: 'wallet',
    state: {
        wallet:{},
        position:[],
    },
    reducers: {
        changeWallet(state, { data }) {
            return {
                ...state,
                wallet:data.data[0],
            }
        },
        changePosition(state, { data }) {
            return {
                ...state,
                position:data.data,
            }
        }
    },
    effects: {

    },
}