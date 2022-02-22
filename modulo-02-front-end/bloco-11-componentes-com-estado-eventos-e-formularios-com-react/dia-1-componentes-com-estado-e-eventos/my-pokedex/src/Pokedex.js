import React from "react";
import Pokemons from './Pokemons.js'
import Button from './Button'


class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.handleIndex = this.handleIndex.bind(this)
    this.handleType = this.handleType.bind(this)
    this.filter = this.filter.bind(this)
    this.state = {
      pokeIndex: 0,
      filter: 'all'
    }
  }

  handleIndex(number, name) {
    this.setState((estadoAtual, _props) => ({
      pokeIndex: this.state.pokeIndex >= name.length - 1
        ? estadoAtual.pokeIndex = 0
        : estadoAtual.pokeIndex += number,
    }))
  }

  handleType(name) {
    this.setState((estadoAtual, _props) => ({
      pokeIndex: 0,
      filter: estadoAtual.filter = name
    }))
  }

  filter(typefilter, data) {
    if (typefilter === 'all') return data
    return data.filter((element) => element.type === typefilter)
  }

  render() {
    const { pokeIndex, filter } = this.state
    const { pokemons } = this.props
    const filtered = this.filter(filter, pokemons)

    return (
      <main className="main-container" >
        <button
          disabled={pokeIndex === 0}
          onClick={() => this.handleIndex(-1, filtered)}
        >Previous</button>
        {<Pokemons key={pokemons.id} pokemon={filtered[pokeIndex]} />}

        <button disabled={filtered.length <= 1} onClick={() => this.handleIndex(1, filtered)}>Next</button >

        {pokemons.map((element) => <Button key={element.id} filter={element.type} handleType={() => this.handleType(element.type)} />)}
        
        <button onClick={() => this.handleType('all')}>ALL</button>


      </main >
    )
  }
}

export default Pokedex