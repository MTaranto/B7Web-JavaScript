let output = document.querySelector('.exemple');
let output2 = document.querySelector('.exemple2');
let output3 = document.querySelector('.exemple3');
let output4 = document.querySelector('.exemple4');

let telefone = '981';

output.innerText = `"padEnd" Completa a string até a quantidade de caracteres definida
no primeiro parâmetro, com o caracter definido no segundo parâmentro:
No exemplo criamos a string - let telefone = '981';
resultado: ${telefone.padEnd(9, '*')}`;

output2.innerText = `"padStart" Inicia a string com o caractere definido no segundo
parâmetro, até a quantidade de caracteres definido no primeiro parâmentro:
No exemplo criamos a string - let telefone = '981';
resultado: ${telefone.padStart(9, '*')}`;

let card = '1234567891011121';
let lastNumbers = card.slice(-4);

let securityCard = lastNumbers.padStart(16, '*');

output3.innerText = `Exemplo prático: Segurança de cartão de crédito
O final do seu cartão de crédito é: ${securityCard} ?`

/** exemplo para mascarar o meio do número
 * @param {string} cpf
 */
 const maskCpf = (cpf, replace = '*') => {
  const start = 12;
  const end = 14;
  return cpf
      .substring(3, start)
      .padStart(start, replace)
      .padEnd(end, replace);
};

output4.innerText = `Mascarando o meio do número:
O seu CPF é: ${maskCpf('111.111.111-11')} ?`