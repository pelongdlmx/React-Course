export const pokemonDataReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_RESULTS_POKEMON':
            return action
        case 'RECEIVE_DETAIL_POKEMON': 
            return action
        default:
            return state;
    }
}


 