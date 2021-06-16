import React from "react";
import "./App.scss";

import { List } from "components";

import { pokemonsReducer } from "reducers";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [pokemons, dispatchPokemons] = React.useReducer(pokemonsReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  React.useEffect(() => {
    dispatchPokemons({ type: "FETCH_POKEMON_INIT" });

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((pokemons) => {
        dispatchPokemons({
          type: "FETCH_POKEMON_SUCCESS",
          payload: pokemons.results,
        });
      })
      .catch(() => dispatchPokemons({ type: "FETCH_POKEMON_FAILURE" }));
  }, []);

  return (
    <div className="App">
      <h1>My pokedex</h1>
      <hr />

      {pokemons.isError && <p>Something went wrong</p>}

      {pokemons.isLoading ? <p>Loading...</p> : <List list={pokemons.data} />}
    </div>
  );
}

export default App;
