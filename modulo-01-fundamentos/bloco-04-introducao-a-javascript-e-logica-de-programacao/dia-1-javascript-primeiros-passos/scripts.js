/*
Questao pedia para fazer as operações aritméticas básicas. 
*/

const a = 10;
const b = 5;

let soma = a + b;
console.log(soma);
let subtracao = a - b;
console.log(subtracao);
let multiplicacao = a * b;
console.log(multiplicacao);
let divisao = a / b;
console.log(divisao)
let modulo = a % b;
console.log(modulo);

/*
Questão pedia para retornar o maior de dois números definidos em constantes. */

const numero1 = 10
const numero2 = 10

if (numero1 > numero2) {
  console.log(numero1, "é maior do que", numero2)
} else if (numero2 > numero1) {
  console.log(numero2, "é maior do que", numero1)
} else {
  console.log("empate");
}

/* Questão pedia para retornar o maior de três números definidos em constantes. */

const numero1 = 10
const numero2 = 15
const numero3 = 7

if (numero1 > numero2 && numero1 > numero3) {
  console.log("nuimero1 =", numero1, "é maior")
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("numero2 =", numero2, "é maior")
} else if (numero3 > numero1 && numero3 > numero1) {
  console.log("numero3 =", numero3, "é maior");
} else {
  console.log("empate");
}

/* Questão pedia para definir um número em uma constante e retornar "positive", "negative" ou "zero". */

const valor = 2

if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

/*Questão pedia para definir três constantes com os valores dos três ângulos internos de um triângulo e retornar true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.  Caso algum ângulo fosse inválido deveria retornar uma mensagem de erro. */


const angulo1 = 90
const angulo2 = 45
const angulo3 = 45

let somaAngulos = angulo1 + angulo2 + angulo3
if (somaAngulos === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log("true");
} else if (somaAngulos !== 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log("false");
} else if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
  console.log("error");
}

/* Questão pedia pra escrever um programa que recebesse o nome de uma peça de xadrez e retornasse os movimentos que ela faz. Tal programa deveria funcionar independentemente de escrever tudo em maiúsculo ou minúsculo. */

const pecaDeXadrez = "bispo"

if (pecaDeXadrez === "peão".toLowerCase() || pecaDeXadrez === "peão".toUpperCase()) {
  console.log("Frente");
} else if (pecaDeXadrez === "bispo".toUpperCase() || pecaDeXadrez === "Bispo".toLowerCase()) {
  console.log("Diagonais");
} else if (pecaDeXadrez === "Torre".toUpperCase() || pecaDeXadrez === "Torre".toLowerCase()) {
  console.log("Horizontalmente e Verticalmente");
} else if (pecaDeXadrez === "Cavalo".toUpperCase() || pecaDeXadrez === "Cavalo".toLowerCase()) {
  console.log("por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto");
} else if (pecaDeXadrez === "Rainha".toUpperCase() || pecaDeXadrez === "Rainha".toLowerCase()) {
  console.log("Verticalmente, horizontalmente ou diagonalmente");
} else if (pecaDeXadrez === "Rei".toUpperCase() || pecaDeXadrez === "Rei".toLowerCase()) {
  console.log("Adjacentes");
} else {
  console.log("error");
}

/* Questão pedia para converter as notas dadas em portcentagem para conceitos de A a F. Caso a nota fosse inválida, deveria retornar mensagem de erro.
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
*/

let nota = 80

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota < 50) {
  console.log("F");
} else {
  console.log("error");
}

/* Questão pedia para definir três números em constantes e retornar true se pelo menos uma das três for par. Caso contrário, ele retorna false. Como desafio, o programa deveria usar apenas um if.*/

const numero1 = 2
const numero2 = 3
const numero3 = 6

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}

/* Questão pedia para definir três números em constantes e retornar true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. Como desafio, o programa deveria usar apenas um if.  */

const numero1 = 2
const numero2 = 3
const numero3 = 6

if (numero1 % 3 === 0 || numero2 % 3 === 0 || numero3 % 3 === 0) {
  console.log("true");
} else {
  console.log("false");
}

/* Questão pedia para escrever um programa que calculasse o lucro total de determinadas vendas seguindo os seguintes parâmetros:
A partir dos valores, calcule quanto de lucro a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
*/

const valor1 = 50
const valor2 = 100
let custo = valor1 * 1.2
let lucro = (valor2 * 1000) - (custo * 1000)

if (valor1 < 0 || valor2 < 0) {
  console.log("error");
} else {
  console.log(lucro);
}

/* A questão pedia para estabelecer um salário bruto e calcular o salário líquido descontados os valores de INSS e IR. 
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/


let salarioBruto = 3000
let salarioComDescontoINSS = 0
let salarioLiquido = 0

if (salarioBruto <= 1556.94) {
  salarioComDescontoINSS = salarioBruto - (salarioBruto * 0.08)

} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
  salarioComDescontoINSS = salarioBruto - (salarioBruto * 0.09)

} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
  salarioComDescontoINSS = salarioBruto - (salarioBruto * 0.11)

} else {
  salarioComDescontoINSS = salarioBruto - 570.88

}
console.log("Salário com desconto do INSS = R$", salarioComDescontoINSS)


if (salarioComDescontoINSS <= 1903.98) {
  salarioLiquido = salarioComDescontoINSS + ". Isento de IR."
} else if (salarioComDescontoINSS > 1903.99 && salarioComDescontoINSS <= 2826.65) {
  salarioLiquido = salarioComDescontoINSS - (salarioComDescontoINSS * 0.075)

} else if (salarioComDescontoINSS > 2826.66 && salarioComDescontoINSS <= 3751.05) {
  salarioLiquido = salarioComDescontoINSS - (salarioComDescontoINSS * 0.15)

} else if (salarioComDescontoINSS > 3751.06 && salarioComDescontoINSS <= 4664.68) {
  salarioLiquido = salarioComDescontoINSS - (salarioComDescontoINSS * 0.225)

} else {
  salarioLiquido = salarioComDescontoINSS - (salarioComDescontoINSS * 0.275)
}

console.log("Salário líquido = R$", salarioLiquido);
