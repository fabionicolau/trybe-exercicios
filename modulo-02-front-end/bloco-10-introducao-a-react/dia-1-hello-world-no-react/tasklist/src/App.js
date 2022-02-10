import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Estudar React', 'Estudar Css', 'Dar banho no cachorro']

function App() {
  return (
    <ul>{array.map((element) => Task(element))}</ul>
    );
}

export default App;
