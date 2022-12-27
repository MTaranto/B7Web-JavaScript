function green() {
  clean()
  document.querySelector('#exemplo').classList.add('green');
}
function red() {
  clean()
  document.querySelector('#exemplo').classList.add('red');
}
function blue() {
  clean()
  document.querySelector('#exemplo').classList.add('blue');
}
function clean() {
  document.querySelector('#exemplo').removeAttribute('class');
}
function toggle() {
  if (document.querySelector('#exemplo').classList.contains('black')) {
  document.querySelector('#exemplo').classList.remove('black');
  document.querySelector('#exemplo').classList.add('green');
} else {
    document.querySelector('#exemplo').classList.remove('green');
    document.querySelector('#exemplo').classList.add('black');
  }
}