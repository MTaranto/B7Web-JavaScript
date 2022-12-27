// Parte interativa
function changeColor () {
  document.querySelector('.outside').style.backgroundColor = randomColor();
  document.querySelector('.inside').style.backgroundColor = randomColor();
}
function randomColor() {
  let color = 'rgb('+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')';
  return color;
}

/* Parte de exemplos

let valor = Math.PI; // Valor de PI

let valor2 = Math.round(3.67); // Arredonda para 4
let valor3 = Math.floor(3.67) ;// Força arredondamento para baixo (3)
let valor4 = Math.ceil(3.22); // Força arredondamento para cima (4)
let valor5 = Math.abs(-9.65464); // Exibe o número absoluto (9.65464)
let valor6 = Math.min(20, 684, 101, 52, 7); // Exibe o menor número (7)
let valor7 = Math.max(20, 684, 101, 52, 7); // Exibe o maior número (684)
let valor8 = Math.random(); // Gera um número aleatório entre 0 e 1 (ex:0.33850475139198943)
       // porém é usada em conjunto com outra funça para se obter números aleatórios maiores que 1
let valor9 = Math.floor(Math.random() * 100) // Gera um número aleatório entre 0 e 100

console.log(valor);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);
console.log(valor6);
console.log(valor7);
console.log(valor8);
console.log(valor9);
*/