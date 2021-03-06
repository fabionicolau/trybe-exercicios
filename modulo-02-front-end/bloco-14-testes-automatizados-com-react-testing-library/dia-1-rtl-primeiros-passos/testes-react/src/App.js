import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input data-testid="id-send" id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
      </header>
    </div>
  );
}

export default App;
