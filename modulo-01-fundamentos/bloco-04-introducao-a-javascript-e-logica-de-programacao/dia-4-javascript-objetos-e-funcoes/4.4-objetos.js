let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

//1
console.log("Bem vinda, " + info.personagem);

//2
console.log(info);

//3
for (let keys in info) {
  console.log(keys);
}

//4
for (let keys in info) {
  console.log(keys + ': ', info[keys]);
} 

//5

let pato = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let keys in info) {
  if (keys === 'recorrente' && info[keys] === pato[keys]) {
    console.log('Ambos são recorrentes');
  } else {
    console.log(info[keys] + ' e ' + pato[keys])
  }
}

//6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    
  ],
};

console.log('O livro favorito de ' + leitor.nome, leitor.sobrenome + ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'");

// 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
})
console.log(leitor);

//8


console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.' );
