const { imcCalculator, feedback } = require('./imcCalculator')
const readline = require('readline-sync')

const height = readline.questionFloat('Qual sua altura em metros? ')
const weight = readline.questionFloat('Qual seu peso em kg? ')

const imc = imcCalculator(height, weight)
const imcFeedback = feedback(imc)

console.log(imcFeedback);
