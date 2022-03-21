import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={About} />
      <Route exact path="/projetos" component={Projects} />
      <Route exact path="/contato" component={Contact} />
    </Switch>
  );
}

export default App;
