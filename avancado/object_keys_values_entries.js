let output = document.querySelector('.exemple');
let output2 = document.querySelector('.exemple2');
let output3 = document.querySelector('.exemple3');
let output4 = document.querySelector('.exemple4');
let output5 = document.querySelector('.exemple5');
let output6 = document.querySelector('.exemple6');

let lista = ['lasanha', 'camarão', 'churrasco', 'sorvete', 'pudim'];

output.innerText = `Object.keys(lista) - retorna os índices do objeto/array:
${Object.keys(lista)}` ;
output2.innerText = `Object.values(lista) - retorna os itens do objeto/array:
${Object.values(lista)}` ;
output3.innerText = `Object.entries(lista) - retorna arrays com índices seguidos dos respectivos itens do objeto/array:
${Object.entries(lista)}` ;

let pessoa = {
  name: 'Márcio',
  lastName: 'Taranto',
  age: 47
}
output4.innerText = `Object.keys(lista) - retorna as chaves do objeto:
${Object.keys(pessoa)}` ;
output5.innerText = `Object.values(lista) - retorna os valores das chaves do objeto:
${Object.values(pessoa)}` ;
output6.innerText = `Object.entries(lista) - retorna arrays com chaves seguidos dos respectivos valores do objeto:
${Object.entries(pessoa)}` ;
