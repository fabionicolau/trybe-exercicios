function trocaCorPeloId(nomeId, cor) {
  let elemento = document.getElementById(nomeId)
  elemento.style.backgroundColor = cor
}

function trocaCorPelaClassName(nomeClass, cor) {
  let className = document.getElementsByClassName(nomeClass)
  for (let elements of className) {
    elements.style.backgroundColor = cor;
  }
}

function trocaCorSelectorAll(nomeSelector, cor) {
  let selector = document.querySelectorAll(nomeSelector)
  for (let elements of selector) {
    elements.style.backgroundColor = cor;
  }
}

trocaCorPeloId('container', '#F3F3F3')
trocaCorPeloId('header-container', '#00B069')
trocaCorPeloId('footer-container', '#003533')
trocaCorPelaClassName('emergency-tasks', '#FF9F84')
trocaCorPelaClassName('no-emergency-tasks', '#F9DB5E')
trocaCorSelectorAll('.emergency-tasks h3', '#A500F3')
trocaCorSelectorAll('.no-emergency-tasks h3', '#232525')







