//1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

//2

const sum = (...numbers) => numbers.reduce(((acc, element) => acc + element), 0)
console.log(sum(1, 2, 3, 4, 5, 6));

//3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes, nationality }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex))// 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const bornIn20 = (array) => array.filter(({ nationality, bornIn }) => nationality === "Australian" && bornIn > 1900 && bornIn <= 2000)
console.log(bornIn20(people));

//5 

const myList = [1, 2, 3];
const swap = ([a, b, c]) => [c, b, a]
console.log(swap(myList));

//6

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([nome, modelo, ano]) => ({
  nome,
  modelo,
  ano,
})

console.log(toObject(palio));

//7

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`
console.log(shipLength(ships[0]))
console.log(shipLength(ships[1]))
console.log(shipLength(ships[2]))

//8

const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}` 
console.log(greet('John', 'Oi'));

//9 

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const destructuringSeasons = ({spring, summer, autumn, winter}) => [...winter, ...spring, ...summer, ...autumn] 
console.log(destructuringSeasons(yearSeasons));