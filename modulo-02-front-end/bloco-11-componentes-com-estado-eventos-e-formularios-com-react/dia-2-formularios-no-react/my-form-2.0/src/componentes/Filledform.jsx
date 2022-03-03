import React from "react";

class Filledform extends React.Component {
  render() {
    const {
      currentState: { nome, email, CPF, endereco, cidade, estado, tipo },
    } = this.props;
    return (
    <div>
      <p>{nome}</p>
      <p>{email}</p>
      <p>{CPF}</p>
      <p>{endereco}</p>
      <p>{cidade}</p>
      <p>{estado}</p>
      <p>{tipo}</p>
    </div>)
  }
}

export default Filledform;
