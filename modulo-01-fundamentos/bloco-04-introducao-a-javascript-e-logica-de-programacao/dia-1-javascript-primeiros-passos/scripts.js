/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
*/

/* const a = 10;
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
 */
/*
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

/* const numero1 = 10
const numero2 = 10

if (numero1 > numero2) {
  console.log(numero1, "é maior do que", numero2)
} else if (numero2 > numero1) {
  console.log(numero2, "é maior do que", numero1)
} else {
  console.log("empate");
} */

/* /*Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

/* const numero1 = 10
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
 */
/*Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
/* 
const valor = 2

if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
 */


/*Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/
/* 
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
 */



/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

/* const pecaDeXadrez = "bispo"

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
} */

/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
/* 
let nota = 80

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >=80 && nota < 90) {
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
 */


/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

/* const numero1 = 2
const numero2 = 3
const numero3 = 6  

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
} */


/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .  */

/* const numero1 = 2
const numero2 = 3
const numero3 = 6  

if (numero1 % 3 === 0 || numero2 % 3 === 0 || numero3 % 3 === 0) {
  console.log("true");
} else {
  console.log("false");
} */

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)  */

const valor1 = 50
const valor2 = 100
let custo = valor1 * 1.2
let lucro = (valor2 * 1000) - (custo * 1000)

if (valor1 < 0 || valor2 < 0) {
  console.log("error");
} else {
  console.log(lucro);
}

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
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
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
  */