// Exemplo do developer.mozilla
function greeting(name) {
  alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting);

/* Exemplo da aula 

function alerta () {
  alert('Olá, tudo bem?');;
}
let nome = 'Márcio';
setTimeout(alerta, 2000);
let lastName = 'Taranto';
alert('Nome Completo = '+nome+' '+lastName); */