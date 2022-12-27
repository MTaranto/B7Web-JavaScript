function digitou (e) {
  if (e.keyCode == 13) { // Apertando tecla Enter
    const texto = document.getElementById('campo').value;
    console.log(texto);
  }
}
function azul() {
  clean();
  document.getElementById('titulo').classList.add('azul');
}
function vermelho() {
  clean();
  document.getElementById('titulo').classList.add('vermelho');
}
function verde() {
  clean();
  document.getElementById('titulo').classList.add('verde');
}
function clean() {
  document.getElementById('titulo').removeAttribute('class');
}
function showPhone(elemento) {
  document.getElementById('phone').style.display='block';
  elemento.style.display='none';
}