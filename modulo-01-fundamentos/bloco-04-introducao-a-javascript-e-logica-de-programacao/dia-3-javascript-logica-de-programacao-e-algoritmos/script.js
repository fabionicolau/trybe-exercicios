let n = 5
let asterisco = ''
for (let linha = 1; linha <= n; linha++) {
  for (let coluna = 1; coluna <= n; coluna++) {
    asterisco  += '*';
  }
  console.log(asterisco);
  asterisco = '';
}

///////////

let n = 5;
let asterisco = '';

for (let linha = 1; linha <= n; linha++) {
  for (let coluna = 1; coluna <= linha; coluna++) {
    asterisco += '*';
  }
  console.log(asterisco);
  asterisco = '';
}

///////////

let n = 5
let asterisco = ''

for (let linha = 1; linha <= n; linha += 1) {
  for (let coluna = n - linha; coluna >= 3; coluna -= 1) {
    asterisco += ' '
  }
  for (let coluna = 1; coluna <= linha; coluna += 1){
    asterisco += '*'
  }
  console.log(asterisco);
  asterisco = ''
}

