import axios from "axios";

const initialState = {
    pokemonDetailInfo: [],
    error: false
};

const pokemonDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_RESULTS_POKEMON':
        // console.log(action.payload.results.length)
        let pokemonDetailInfo = []
        class Pokemon {
            constructor(name, type, health, specialAttack, img){
              this.name = name; 
              this.type = type; 
              this.health = health; 
              this.specialAttack = specialAttack; 
              this.img = img; 
            }
        }
        let showData =  action.payload.results.map((currentValue, index, array) => {
            let url = currentValue.url;
                return axios({ url: url, timeout: 100000 })
                .then(function(response) {
                    let pokemonDetail = response.data; 

                    pokemonDetail = new Pokemon(pokemonDetail.name, pokemonDetail.types[0].type.name, pokemonDetail.stats[5].base_stat, pokemonDetail.stats[2].base_stat, pokemonDetail.sprites.front_default)

                    pokemonDetail = Object.values(pokemonDetail)
                    pokemonDetailInfo.push(pokemonDetail)
                    console.log(pokemonDetailInfo.length)
                    })
                .catch(function(response) {
                });
        })
        console.log('fuera de: '+pokemonDetailInfo.length)
        
            return { ...state, pokemonDetailInfo: pokemonDetailInfo }     
        default:
            return state;
    }
}

export default pokemonDataReducer;