import React from "react";
import Pokemons from './Pokemons.js'


class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props

    return (
      <main className="main-container">
        {pokemons.map((pokemon => <Pokemons key={pokemon.id} pokemon={pokemon} />))}
      </main>
    )
  }
}

export default Pokedex