async function insertPost () {
  document.querySelector('#post').innerHTML = 'Carregando...'

  let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Título Qualquer',
      body: 'Mensagem aleatória!',
      userId: 2
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  let json = await req.json();

  console.log(json);
}

// Enviando o arquivo

async function send() {
  let file = document.querySelector('#file').files[0];

  let body = new FormData();
  body.append('title','nome do arquivo');
  body.append('arquivo', file);

  let req = await fetch('https://www.meusite.com.br/upload', {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/* primeiro método para mostrar imagem

function show() {
  let image = document.querySelector('#image').files[0];

  let img = document.createElement('img');
  img.src = URL.createObjectURL(image);
  img.width = 200;

  document.querySelector('#area').appendChild(img);
} */

// Método com FileReader (precisa configurar um callback)

function show () {
  let reader = new FileReader();
  let image = document.querySelector('#image').files[0];
  
  reader.onloadend = () => {
    let img = document.createElement('img');
    img.src = reader.result;
    img.width = 200;
    document.querySelector('#area').appendChild(img);
  }

  reader.readAsDataURL(image);

}