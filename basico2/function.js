// O que é uma função?

console.log('Olá, tudo bem?');

// Exercício: Calcular preço

let metragem = 123;
let quartos = 3;
let preco = calculaPreco(metragem,quartos);

console.log(`A casa custa R$ ${preco.toFixed(2)}`);

function calculaPreco(metragem,quartos) {
  let m2 = 3000;
  let coeficiente = 1;
  switch (quartos) {
    case 2:
    coeficiente = 1.2;
    break;
    case 3:
      coeficiente = 1.5;
    break;
  }
  return metragem * (m2*coeficiente);
}

// Exercício: Validar Usuário

let usuario = 'Pedro';
let senha = '123';
let validacao = validar(usuario,senha);

if(validacao) {
  console.log('Acesso permitido');
} else {
  console.log('Acesso NEGADO!');
}
function validar(usuario,senha) {
  if(usuario === "Pedro" && senha === "123") {
    return true;
  } else {
    return false;
  }
}