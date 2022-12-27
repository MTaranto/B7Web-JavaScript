let nome = 'Márcio Taranto Nogueira'
let resposta1 = document.querySelector('.resposta1');
let resposta2 = document.querySelector('.resposta2');
let resposta3 = document.querySelector('.resposta3');
let resposta4 = document.querySelector('.resposta4');
let resposta5 = document.querySelector('.resposta5');
let resposta6 = document.querySelector('.resposta6');
let resposta7 = document.querySelector('.resposta7');
let resposta8 = document.querySelector('.resposta8');
let resposta9 = document.querySelector('.resposta9');
let resposta10 = document.querySelector('.resposta10');

resposta1.innerText = nome 
resposta2.innerText = 'Tem '+nome.length+' caracteres' // Retorna o número de caracteres na string
resposta3.innerText = 'Taranto está na posição '+nome.indexOf('Taranto') // Retorna a posição onde o texto aparece
resposta4.innerText = 'As 5 primeiras letras são: '+nome.substring(0, 5) // Retorna o que está na string entre os parâmetros estipulados 
resposta5.innerText = 'As 5 últimas letras são: '+nome.slice(-5) // Retorna o que está na string entre os parâmetros estipulados, porém também pode começar do final setando (-)
resposta6.innerText = nome.substr(7, 3) // igual ao substring, sendo o segundo parâmetro a quantidade de caracteres
resposta7.innerText = nome.replace('Nogueira', 'Careca') // Substitui parte da string (Não necessariamente na própria variável)
resposta8.innerText = nome.toUpperCase() // Retorna a string toda em maiúsculo ou toLowerCase() para minúsculo.
// nome.trim() // Retira todos os espaços em branco antes do ínicio e depois do final da string
resposta9.innerText = nome.charCodeAt(1) // Retorna o código do caracter que está na posição determinada pelo parâmetro
resposta10.innerText = nome.split(' ') // Gera um array com os itens separados pelo caracter determinado no parâmetro.

let n = 10;
let s = '25.9';
let numbers1 = document.querySelector('.numbers1');
let numbers2 = document.querySelector('.numbers2');
let numbers3 = document.querySelector('.numbers3');
let numbers4 = document.querySelector('.numbers4');
let numbers5 = document.querySelector('.numbers5');

numbers1.innerText = n + 1
numbers2.innerText = n.toString() + 1 // Transforma o número em string
numbers3.innerText = 'R$ ' + n.toFixed(2).replace('.',',') // Determina o número de casas decimais a serem mostrados através do parâmetro
numbers4.innerText = parseInt(s) + 2 // Transforma a string em número
numbers5.innerText = parseFloat(s) +1 // Transforma a string em número, preservando as casas decimais
