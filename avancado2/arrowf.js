let output = document.querySelector('.exemple');
let output2 = document.querySelector('.exemple2');
let output3 = document.querySelector('.exemple3');
let output4 = document.querySelector('.exemple4');
let output5 = document.querySelector('.exemple5');

// 3 formas de escrever uma função:

// 1 - Tradicional:

function somar (x, y) {
  return x + y;
}

output.innerText = ` - Forma Tradicional:

function somar (x, y) {
  return x + y;
}

  Resultado:  
  A soma entre 7 e 5 é igual a: ${somar(7,5)}`

// Forma alternativa (atribuindo a função a uma variável):

let soma = function(a, b) {
  return a + b;
}

output2.innerText = `
- Forma Alternativa (atribuindo a função a uma variável):

let somar = function(a, b) {
  return a + b;
}

Resultado:
A soma entre 6 e 8 é igual a: ${soma(6, 8)}`

// Arrow Funtion:

const some = (k, w) => {
  return k + w;
}

output3.innerText = `
- Arrow Function:

const some = (k, w) => {
  return k + w;
}

Resultado:
A soma entre 9 e 4 é igual a: ${some(9, 4)}`

// Arrow function (forma mais reduzida):

const somando = (c, d) => c + d;

output4.innerText = `
- Arrow Function (Reduzida):

const somando = (c, d) => c + d;

Resultado:
A soma entre 8 e 9 é igual a: ${somando(8, 9)}`

// Outro exemplo reduzido (com apenas 1 parâmetro, não é necessário o 
// uso de parênteses)

const qtdLetras = nome => nome.length;

output5.innerText = `
- Arrow Function (Reduzida com 1 parâmetro não necessita de parênteses):

const qtdLetras = nome => nome.lenght;

Resultado:
A nome Márcio tem ${qtdLetras('Márcio')} letras.`


