import React from 'react'

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
    filter: 'all'   
    }
  }

 handleType = (name) => {
    this.setState((estadoAtual, _props) => ({
      pokeIndex: 0,
      filter: estadoAtual.filter = name
    }))
  }

  render() {
    const { filter, handleType } = this.props
    return (
      <button onClick={handleType}>{filter}</button>
    )
  }
}

export default Button