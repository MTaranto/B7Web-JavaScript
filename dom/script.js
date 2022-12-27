document.getElementById('exemplo').innerHTML = "Taranto";
document.getElementsByClassName('lista')[0].innerHTML = "Item alterado!";
document.getElementsByTagName('button');
document.getElementsByName('email');

/* Podemos substituir todos os de cima por querySelector */

document.querySelector('button').innerHTML = "Botão Modificado";
document.querySelector([atribute='name']).innerHTML = "Botão Modificado";

