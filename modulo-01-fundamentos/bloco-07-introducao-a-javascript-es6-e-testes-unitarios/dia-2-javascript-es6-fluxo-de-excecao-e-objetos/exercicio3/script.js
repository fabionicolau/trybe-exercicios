const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const changeTurn = (objetoModificar, chave, valor) => objetoModificar[chave] = valor
changeTurn(lesson2, 'turno', 'noite')
console.log(lesson2);

//2
const keyList = objeto => Object.keys(objeto)
console.log(keyList(lesson2))

//3
const objectSize = objeto => Object.keys(objeto).length
console.log(objectSize(lesson2))

//4 
const valueList = objeto => Object.values(objeto)
console.log(valueList(lesson2));

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

//6 

const totalEstudantes = () => {
  let valorTotal = 0;
  const lessonsArray = Object.keys(allLessons)
  for (let index in lessonsArray) {
    valorTotal += allLessons[lessonsArray[index]].numeroEstudantes
  }
  return valorTotal
}
console.log(totalEstudantes());

//7
const keysPosition = (objeto, position) => Object.values(objeto)[position]
console.log(keysPosition(lesson1, 1));

//8
const existePar = (objeto, keyName, keyValue) => {
  const entriesArray = Object.entries(objeto)
  let isEqual = false
  for (let arraysIndex in entriesArray)
    if (entriesArray[arraysIndex][0].includes(keyName) && entriesArray[arraysIndex][1].includes(keyValue)) {
      isEqual = true
    } 
    return isEqual
}
console.log(existePar(lesson3, 'turno', 'noite'))