const readline = require('readline-sync')

const avgSpeedCalculator = (distance, time) => {
  const avgSpeed = distance / time;
  return avgSpeed 
}

const distance = readline.questionInt('Qual a distância percorrida em metros? ')
const time = readline.questionInt('Qual o tempo gasto em segundos? ')

const avgSpeed = avgSpeedCalculator(distance, time)

console.log(avgSpeed);