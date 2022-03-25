const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
}

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.colors.length - 1
      }
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length
      }
    default:
      return state;
  }
}

const next = document.getElementById('next')
next.addEventListener('click', () => {
  store.dispatch({ type: "NEXT_COLOR" })
})

const previous = document.getElementById('previous')
previous.addEventListener('click', () => {
  store.dispatch({ type: "PREVIOUS_COLOR" })
})

const random = document.getElementById('random')
random.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' })
})

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  // const globalStore = store.getState()
  const { colors, index } = store.getState()
  const text = document.getElementById('value')
  const container = document.getElementById('container')
  const paragraph = document.querySelector('p')
  text.innerText = colors[index]
  container.style.backgroundColor = colors[index]
  if (colors[index] === 'black') {
    paragraph.style.color = 'white'
  } else {
    paragraph.style.color = 'black'
  }
})