//1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

//2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//3
const calcFatorial = number => {
  let fatorial = 1
  if (number === 0) {
    fatorial = 1
  } else {
    for (let i = 1; i <= number; i += 1) {
      fatorial *= i
    }
  }
  return fatorial
}
console.log(`o valor é ${calcFatorial(5)}`);

//4 

const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu'

const maiorPalavra = (frase) => {
  let longestWordArray = longestWord.split(' ')
  let maior = 0;
  let maiorPalavra = ''
  for (let i = 0; i < longestWordArray.length; i++) {
    if (longestWordArray[i].length > maior) {
      maiorPalavra = longestWordArray[i]
    }
  }
  return maiorPalavra
}

console.log(maiorPalavra(longestWord));

//5 

const button = document.getElementById('button')
const counter = document.getElementById('counter')

let contador = 0
button.addEventListener('click', () => {
  counter.innerText = contador += 1
})

//6
    
const replaceLetter = (frase, string) => {
  frase = frase.replace('x', string)
  return frase  
}
console.log(replaceLetter('Tryber x aqui!', 'Fabio'));

//7 

const skills = ['javascript', 'css', 'html', 'bootstrap', 'react']

const template = string => `${string}. As skills que estou aprendendo são ${skills.sort().join(', ')}.`

console.log(template(replaceLetter('Tryber x aqui!', 'Fabio')));