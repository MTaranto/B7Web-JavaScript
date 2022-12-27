function imgToggle(filename, animalname) {
  document.querySelector('.imagem').setAttribute('src', filename);
  document.querySelector('.imagem').setAttribute('animal-data', animalname);
  resposta.innerText = ' ';

}
function animalGet () {
  let resposta = document.querySelector('#resposta');
  let animal = document.querySelector('.imagem').getAttribute('animal-data');
  // alert('This is a '+animal+'!');
  resposta.innerText = 'This is a '+animal+'!';
}