import React, { Component } from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends Component {
  render() {
    return (
      <main className="main-content">
        {conteudos.map((elemento) => (
        <div key={elemento.conteudo} className='div-content'>
          <h3>O conteúdo é: {elemento.conteudo}</h3>
          <p>Status: {elemento.status}</p>
          <p>Bloco: {elemento.bloco}</p>
        </div>
        ))}
      </main>
    );
  }
}

export default Content;
