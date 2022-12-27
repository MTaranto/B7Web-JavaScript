async function loadPosts() {
  document.querySelector("#posts").innerText = `
  Carregando...`

  // utilizando async / await

  let req = await fetch('https://jsonplaceholder.typicode.com/posts');
  let json = await req.json();
  createBlog(json);
}

  /* sem async / await, o código ficaria como abaixo:

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      createBlog(json);
    })
    .catch((error) => {
      console.log('Deu ruim!');
    });
} */

function createBlog(lista) {
  let html = '';
    html += '<ul>';

    for(let i in lista) { // ou for(let i=0; i<lista.length; i++)
      html += `<li>
                <div class="post">
                  <h3>${lista[i].title}</h3>
                  <p>${lista[i].body}</p><br>
                </div>
              </li>`
  };
  html += "</ul>";

  document.querySelector('#posts').innerHTML = html;
}

function upScreen () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
function scrollCheck () {
  if (window.scrollY === 0) { 
    document.querySelector('.top').style.display = 'none';
  } else {
    document.querySelector('.top').style.display = 'block';
  }
}
window.addEventListener('scroll', scrollCheck)