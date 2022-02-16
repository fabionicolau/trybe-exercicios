import './App.css';
import pokemons from './data.js'
import Pokedex from './Pokedex.js'
import Header from './Header.js';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Pokedex pokemons={pokemons} />
      <Footer />
    </div>

  );
}

export default App;
