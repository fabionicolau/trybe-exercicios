function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const techList = (tech, name) => {
  if (tech.length === 0) {
    return 'Vazio!'
  }
  let arrayTech = []
  for (let index in tech.sort()) {
    arrayTech.push({
      tech: tech[index],
      name,
    })
  }
  return arrayTech
}

const hydrate = string => {
  const numerosString = string.match(/\d+/g)
  let contador = 0;
  for (let i = 0; i < numerosString.length; i += 1) {
    contador += parseInt(numerosString[i], 10)
  }
  if (contador === 1) {
    return `${contador} copo de água`
  }
  return `${contador} copos de água`
}

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  let employee = '';

  for (let elemento of professionalBoard) {
    if (elemento.id === id) {
      employee = elemento
    } 
  }
  if (!employee) throw new Error("ID não identificada")
  
  if(!employee[detail]) throw new Error('Informação indisponível') 

  return employee[detail]
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  techList,
  hydrate,
  searchEmployee,
}