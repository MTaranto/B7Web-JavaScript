let nome = 'Márcio Taranto';
let idade = 47;
let show = document.querySelector('.exemplo');
let fraseTemplate = document.querySelector('.exemplo2');

// forma antiga
let frase = 'Em me chamo '+nome+' e tenho '+idade+' anos.'
show.innerText = frase

// utilizando template strings

fraseTemplate.innerText = `Eu me chamo ${nome} e tenho ${idade} anos e farei ${idade+1}, no ano que vem!`