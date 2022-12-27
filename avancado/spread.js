let output = document.querySelector('.exemple');
let output2 = document.querySelector('.exemple2');
let output3 = document.querySelector('.exemple3');

// somando arrays

let numbers = [1, 2, 3, 4];
let sequence = [...numbers, 5, 6, 7, 8]

output.innerText = `Somando 2 arrays com Spread Operator '...'

let numbers = [1, 2, 3, 4];
let sequence = [...numbers, 5, 6, 7, 8]

o array 'sequence' fica assim: ${sequence}`

// somando objetos

let info = {
  firstName: 'Márcio',
  secondName: 'Taranto',
  age: 47
}
let newInfo = {
  ...info,
  city: 'Rio de Janeiro',
  state: 'RJ',
  coutry: 'Brasil'
}

console.log(newInfo);

// spread operator utilizando uma função:

function addInfo(newInfo) {
  let newInfos = {
    ...newInfo,
    status: 0,
    token: 'asdf24YHTdk02d5',
    register_date: '09/26/2021'
  };
  return newInfos;
}
console.log(addInfo({wifeName: 'Roberta', sonName: 'Noah'}));


