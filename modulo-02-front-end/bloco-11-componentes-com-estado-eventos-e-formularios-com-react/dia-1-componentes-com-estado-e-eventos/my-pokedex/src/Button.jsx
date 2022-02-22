import React from 'react'

class Button extends React.Component {
  render() {
    const { filter, handleType } = this.props
    return (
      <button onClick={handleType}>{filter}</button>
    )
  }
}

export default Button