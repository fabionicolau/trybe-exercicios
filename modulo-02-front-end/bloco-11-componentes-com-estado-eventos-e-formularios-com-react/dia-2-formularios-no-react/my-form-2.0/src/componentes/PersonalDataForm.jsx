import React from "react";

const array = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

class PersonalDataForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      CPF: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipo: "",
      submited: false,
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleForm({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { updateState } = this.props;
    updateState(this.state);
    this.setState({
      nome: "",
      email: "",
      CPF: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipo: "",
    });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            nome:
            <input
              type="text"
              name="nome"
              maxLength="40"
              value={this.state.nome}
              onChange={this.handleForm}
              required
            />
            email:
            <input
              type="email"
              name="email"
              maxLength="50"
              value={this.state.email}
              onChange={this.handleForm}
              required
            />
            CPF:
            <input
              type="text"
              name="CPF"
              maxLength="11"
              value={this.state.CPF}
              onChange={this.handleForm}
              required
            />
          </div>
          <div>
            Endereço:
            <input
              type="text"
              name="endereco"
              maxLength="200"
              value={this.state.endereco}
              onChange={this.handleForm}
              required
            />
            Cidade:
            <input
              type="text"
              name="cidade"
              maxLength="28"
              value={this.state.cidade}
              onChange={this.handleForm}
              required
            />
            Estado
            <select
              name="estado"
              id="select-estado"
              value={this.state.estado}
              onChange={this.handleForm}
            >
              {array.map((element, index) => (
                <option key={index}>{element}</option>
              ))}
            </select>
          </div>
          <label htmlFor="casa">
            <input
              type="radio"
              name="tipo"
              id="casa"
              value="casa"
              onChange={this.handleForm}
              required
            />
            CASA
          </label>
          <label htmlFor="apto">
            <input
              type="radio"
              name="tipo"
              id="apto"
              value="apartamento"
              onChange={this.handleForm}
              required
            />
            APARTAMENTO
          </label>
        </fieldset>
        <button type="submit">TESTE</button>
      </form>
    );
  }
}

export default PersonalDataForm;
