import React from "react";
import "./App.scss";

import { List, IsLoading } from "components";

import { pokemonsReducer } from "reducers";

function App() {
  const [pokemons, dispatchPokemons] = React.useReducer(pokemonsReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  React.useEffect(() => {
    dispatchPokemons({
      type: "FETCH_POKEMON_INIT",
    });

    fetch("./pokemons.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then((res) => { return res.json() })
      .then((data) => {
        dispatchPokemons({
          type: "FETCH_POKEMON_SUCCESS",
          payload: data,
        });
      })
      .catch(() => {
        dispatchPokemons({ type: "FETCH_POKEMON_FAILURE" });
      });
  }, []);

  return (
    <div className="App">
      <h1>My pokedex</h1>
      <hr />

      <div className="container">
        {pokemons.isError && <p>Something went wrong</p>}

        {pokemons.isLoading ? <IsLoading /> : <List list={pokemons.data} />}
      </div>
    </div>
  );
}

export default App;
