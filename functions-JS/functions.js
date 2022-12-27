// Subir a tela devagar
function upScreen () {
  // window.scrollTo(0,0); // Sobe direto
  window.scrollTo({        // Sobe suavemente
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

// verificar movimentação no scroll
function scrollCheck () {
  if (window.scrollY === 0) { 
    // ação
  } else {
    //ação
  }
}
window.addEventListener('scroll', scrollCheck);

