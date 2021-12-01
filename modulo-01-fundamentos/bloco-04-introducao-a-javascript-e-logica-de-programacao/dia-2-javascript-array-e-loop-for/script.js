let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
*/

for (let number of numbers) {
  console.log(number);
}

/* some todos os valores contidos no array e imprima o resultado;
 */

let soma = 0
for (let number of numbers) {
  soma = soma + number 
} 
console.log(soma);

/* calcule e imprima a média aritmética dos valores contidos no array;
 */

let soma = 0
let media = 0
for (let number of numbers) {
  soma = soma + number 
}
media = soma / numbers.length
console.log(media);

/* caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

let soma = 0
let media = 0
for (let number of numbers) {
  soma = soma + number 
}
media = soma / numbers.length

if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}


/* Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 */

let maior = 0;
for (let number of numbers) {
   if ( number > maior ) {
      maior = number;
   }
  }
   console.log(maior)

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */

let impar = 0

for (let number of numbers) {
  if (number % 2 !== 0) {
    impar = impar + 1
  } 
}

if (impar > 0) {
  console.log(impar);
} else {
  console.log('nenhum valor impar encontrado');
}


/* Utilizando for , descubra qual o menor valor contido no array e imprima-o;
 */

let menor = numbers.length;
for (let number of numbers) {
   if ( number < menor ) {
      menor = number;
   }
  }
   console.log(menor)
  

/* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
 */

let contagem = 0
let array = [0]
for (let number of array) {
  if (number <= 24) {
    contagem = contagem + 1
    array.push(contagem)
  } else {
    break
  }
}
console.log(array);

/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 */

let contagem = 0
let array = [0]
let divisao = 0
for (let number of array) {
  if (number <= 24) {
    contagem = contagem + 1
    array.push(contagem)
    divisao = contagem / 2
    console.log(divisao);
  } else {
    break
  }
}