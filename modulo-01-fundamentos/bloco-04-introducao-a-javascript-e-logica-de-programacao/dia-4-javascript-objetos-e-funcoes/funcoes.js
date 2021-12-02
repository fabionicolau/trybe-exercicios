// 1

function isPalindrome(string) {
  let palindromo = ''
  for (let index = string.length - 1; index >= 0; index -= 1) {
    palindromo = palindromo + string[index]
  }
  if (string === palindromo) {
    return true
  } else {
    return false
  }
}

function verificaPalindrome(string) {
  let isPalindrome = string.split('').reverse().join('');
  if (string === isPalindrome) {
    return true
  } else {
    return false
  }

}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

// 2


function ehMaior(array) {
let maior = 0
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = index;
    } 
  }
  return maior  
}

console.log(ehMaior([2, 3, 6, 7, 10, 1]));

//3 

function ehMenor(array) {
  let menor = 0
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < menor) {
      menor = index
    }
  }
  return menor
}
console.log(ehMenor([2, 4, 6, 7, 10, 0, -3]));

// 4

function ehMaior(array) {
  let maior = ''
  for (let nomes in array) {
    if (array[nomes].length > maior.length) {
      maior = array[nomes];
    }
  }
  return maior
}

console.log(ehMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5

function repeteInteiros(array) {
  let contador = 0;
  let baseComparacao = 0;
  let maisRepetido = 0;
  let indexMaisRepetido = 0;
  for (let numbers in array) {
    baseComparacao = array[numbers]
    for (let numeros in array) {
      if (baseComparacao === array[numeros]) {
        contador += 1;
      }
    }
    if (contador > maisRepetido) {
      maisRepetido = contador;
      indexMaisRepetido = numbers;
    }
    contador = 0
  }
  return array[indexMaisRepetido]
}

console.log(repeteInteiros([2, 3, 2, 5, 8, 2, 3]));

// 6

function somaNumeros(numero) {
  let soma = 0;
  for (let index = 0; index <= numero; index += 1) {
    soma = soma + index;
  }
  return soma
  
}
console.log(somaNumeros(5));
