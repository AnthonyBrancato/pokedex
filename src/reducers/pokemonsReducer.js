const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_POKEMON_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_POKEMON_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error()
  }
}

export default pokemonsReducer