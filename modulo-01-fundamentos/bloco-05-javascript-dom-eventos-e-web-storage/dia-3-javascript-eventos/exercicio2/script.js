function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1

function createDaysOftheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let createLi = document.createElement('li');
    if (index === 25 || index === 26 || index === 32) {
      createLi.className = 'day holiday';
    }
    if (index === 5 || index === 12 || index === 19 || index === 26) {
      createLi.classList.add('day', 'friday')
    }
    createLi.innerText = dezDaysList[index];
    days.appendChild(createLi)
  }
}
createDaysOftheMonth()

// 2

function createButton(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = string;
  button.className = 'btn-holiday'
  buttonsContainer.appendChild(button)
}
createButton('Feriados')

// 3 

function clickButton(cor) {
  let button = document.querySelector('.btn-holiday')
  button.addEventListener('click', trocaCor)
  function trocaCor() {
    let holiday = document.getElementsByClassName('holiday')
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === cor) {
        holiday[index].style.backgroundColor = '';
      } else {
        holiday[index].style.backgroundColor = cor;
      }
    }
  }
}

clickButton('red');

//4

function fridayButton(string) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.className = 'btn-friday';
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
fridayButton('Sexta-Feira')

//5

function fridayText(texto) {
  let button = document.querySelector('.btn-friday')
  button.addEventListener('click', trocaTexto)
  function trocaTexto() {
    let friday = document.getElementsByClassName('friday')
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].style.fontWeight === texto) {
        friday[index].style.fontWeight = '';
      } else {
        friday[index].style.fontWeight = texto;
      }
    }
  }
}

fridayText('bold')

// 6

let li = document.querySelectorAll('#days li');

for (let index = 0; index < li.length; index += 1) {
  li[index].addEventListener('mouseover', zoom);
}
function zoom(event) {
  event.target.style.fontSize = '40px';
}

for (let index = 0; index < li.length; index += 1) {
  li[index].addEventListener('mouseout', normal);
}
function normal(event) {
  event.target.style.fontSize = '';
}

// 7

let mytask = document.querySelector('.my-tasks');
function tarefa(string) {
  let span = document.createElement('span');
  span.innerText = string;
  mytask.appendChild(span);
}

tarefa('cozinhar')

// 8 

function legenda(cor) {
  let div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = cor
  mytask.appendChild(div)
}


legenda('red')

// 9

let taskDiv = document.querySelector('.my-tasks div')

taskDiv.addEventListener('click', selected)
function selected(event) {
  if (event.target.className === 'task selected')
    event.target.className = 'task';
  else {
    event.target.className = 'task selected';
  }
}

// 10


for (let index = 0; index < li.length; index += 1) {
  li[index].addEventListener('click', changeColor);
}

function changeColor(event) {
  let selectedColor = document.querySelector('.selected').style.backgroundColor;
  if (event.target.style.backgroundColor === selectedColor)
    event.target.style.backgroundColor = '';
  else {
    event.target.style.backgroundColor = selectedColor;
  }
}


// bonus

function addBotao() {
  let addButton = document.getElementById('btn-add');
  let taskInput = document.getElementById('task-input');
  addButton.addEventListener('click', taskButton)
  function taskButton() {
    if (taskInput.value === '') {
      alert('erro: Nenhum texto encontrado');
    } else {
      tarefa(taskInput.value)
    }
  }
}


addBotao()