function upScreen () {
  // window.scrollTo(0,0); // Sobe direto
  window.scrollTo({        // Sobe suavemente
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
function scrollCheck () {
  if (window.scrollY === 0) { 
    document.querySelector('.scrollbutton').style.display = 'none';
  } else {
    document.querySelector('.scrollbutton').style.display = 'block';
  }
}
window.addEventListener('scroll', scrollCheck)