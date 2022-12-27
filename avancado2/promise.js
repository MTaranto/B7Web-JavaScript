// Criando uma promise

function getTemperature() {
  return new Promise((resolve, reject) => {
    console.log("Medindo a temperatura, aguarde...");

    setTimeout(() => {
      resolve("40 graus na sombra!");
    }, 2000);
  });
}

// Utilizando a promise

let temp = getTemperature();
temp.then((result) => { // .then é p/ quando chega o resultado da promise
  console.log('Temperatura: '+result);
});
temp.catch((error) => { // serve para capturar o erro
    console.log('Eita, deu ruim!');
});
