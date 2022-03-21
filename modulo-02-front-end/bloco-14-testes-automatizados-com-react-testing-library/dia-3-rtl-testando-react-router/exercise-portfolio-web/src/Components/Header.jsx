import React from "react";
import logo from "../logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Meu portifólio</h1>
        </div>
        <nav className="nav-bar">
          <Link className="links" to="/sobre">
            Sobre
          </Link>
          <Link className="links" to="/projetos">
            Projetos
          </Link>
          <Link className="links" to="/contato">
            Contato
          </Link>
        </nav>
      </header>
    );
  }
}

export default Home;
