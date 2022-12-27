let pessoa = {
  name: 'Márcio',
  lastname: 'Taranto',
  age: 47,
  social: {
    facebook: 'marcio.taranto.5',
    instagram: '@marciotaranto',
    linkedIn: 'mtaranto'
  },
  fullName: function() {
    return `${this.name} ${this.lastname}`;
  }
};

// desconstruindo o objeto
let {name, age, social:{instagram}, fullName} = pessoa;
function fullName2 ({name, lastname}) {
  return `${name} ${lastname}`
}

// imprimindo resultado na tela
let output = document.querySelector('.exemple');
let output2 = document.querySelector('.exemple2');
let output3 = document.querySelector('.exemple3');

output.innerText = instagram;
output2.innerHTML = `${name}, ${age} anos, Instagram: ${instagram}.`;
output3.innerText = fullName2(pessoa);

// desconstruindo arrays
let info = ['Márcio Taranto', 'Márcio', 'Taranto', '@marciotaranto'];

let [nomeCompleto, nome, sobrenome, insta] = info;
/* É possível pegar sómente o primeiro item, pular segundo e o terceiro, fazendo
  dessa forma: let[nomeCompleto, , ,instagram] = info;

  Também é possível fazer a desconstrução do array, no momento da sua
  criação, apesar de ser pouco usado. Exemplo:
  let [nome, sobrenome] = ['Márcio', 'Taranto']; */

// imprimindo resultado na tela
let output4 = document.querySelector('.exemple4');
let output5 = document.querySelector('.exemple5');
let output6 = document.querySelector('.exemple6');

output4.innerText = insta;
output5.innerHTML = `${nome}, ${sobrenome}, Instagram: ${insta}.`;
output6.innerText = nomeCompleto;
