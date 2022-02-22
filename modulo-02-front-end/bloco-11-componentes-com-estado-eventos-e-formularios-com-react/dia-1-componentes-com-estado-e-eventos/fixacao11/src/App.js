import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.cliques = this.cliques.bind(this)
    this.state = {
      cliques1: 0,
      cliques2: 0,
      cliques3: 0,
    }
  }

  color = (num) => num % 2 === 0 ? '#1D6B52' : '#EFEFEF'

  cliques = (clique) => {
    this.setState((estadoAnterior, _props) => ({
      [clique]: estadoAnterior[clique] + 1,
    }), () => {console.log(`botao ${clique} - ${this.color(this.state[clique])}`)})
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.cliques('cliques1')}
          style={{ backgroundColor: this.color(this.state.cliques1) }}>{`Os cliques foram: ${this.state.cliques1}`}
        </button>
        <button
          onClick={() => this.cliques('cliques2')}
          style={{ backgroundColor: this.color(this.state.cliques2) }}>{`Os cliques foram: ${this.state.cliques2}`}
        </button>
        <button
          onClick={() => this.cliques('cliques3')}
          style={{ backgroundColor: this.color(this.state.cliques3) }}>{`Os cliques foram: ${this.state.cliques3}`}
        </button>

      </div>
    )
  };
}

export default App;
