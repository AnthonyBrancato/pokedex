import React from "react";
import "./App.scss";

import { List } from "components";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";


const searchPokemons = () => console.log('search pokemon')

function App() {

  const [pokemons, setPokemons] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="App">
      <h1>My pokedex</h1>
      <hr />

      <List />
    </div>
  );
}

export default App;
