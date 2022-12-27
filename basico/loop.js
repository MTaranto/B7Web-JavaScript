// for loop
/*
let texto = '';

for(let i = 0; i <= 50; i++) {
  texto = texto + i + "<br>";
}

document.getElementById('demo').innerHTML = texto; */

// for loop array

let carros = ['ferrari', 'fusca', 'palio', 'corolla', 'lamborghini'];

let html = '<ul>';  // abre tag ul

for(let i in carros) { // cria a variável i e incrementa conforme o numero de itens no array
  html += '<li>'+ carros[i] +'</li>'; // escreve a lista 
}

html += '</ul>'; // mesmo html = html + </ul>; // fecha tag ul


document.getElementById('demo').innerHTML = html;