import './App.css';
import React from 'react';
import LastJobForm from './componentes/LastJobForm';
import PersonalDataForm from './componentes/PersonalDataForm';
import Filledform from './componentes/Filledform';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentState: {}
    };
    this.handleForm = this.handleForm.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleForm({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  updateState(data) {
    this.setState((estadoAtual) => ({
      currentState: estadoAtual.currentState = data
    }))
  }

  render() {
    return (
      <div className="App">
        <PersonalDataForm updateState={this.updateState} />
        <LastJobForm handleForm={this.handleForm} />
        <div>
          <button>Submit</button>
          <button>Limpar</button>
        </div>

        <Filledform currentState={this.state.currentState} />

      </div>

    )
  };
}

export default App;
