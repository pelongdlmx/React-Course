const initialState = {
  fetching: false,
  fetched: false,
  initialInfo: [],
  err: null,
  filter: [],
  inputValue: "",
  searchResults: false,
  favorite: []
};

export const pokemonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FAVORITE_POKEMON":
      return {
        ...state,
        favorite: action.data
      };
    case "RECEIVE_RESULTS_START":
      return {
        ...state,
        fetching: true
      };
    case "RECEIVE_RESULTS_FINISH":
      return {
        ...state,
        fetching: false,
        fetched: true,
        initialInfo: action.data
      };
    case "RECEIVE_FILTERED_START":
      return {
        ...state,
        fetching: true
      };
    case "RECEIVE_SEARCH_POKEMON":
      return {
        ...state,
        inputValue: action.inputValue,
        searchResults: true
      };
    case "RECEIVE_SEARCH_DETAIL_POKEMON":
      return {
        ...state,
        filter: action.filter
      };
    case "RECEIVE_SEARCH_POKEMON_FINISH":
      return {
        ...state,
        searchResults: false
      };
    default:
      return state;
  }
};

export default pokemonDataReducer;
