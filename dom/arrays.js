let lista = [
  {id:1, nome:'Márcio', sobrenome:'Taranto'},
  {id:2, nome:'João', sobrenome:'Silva'},
  {id:3, nome:'Maria', sobrenome:'Ferreira'}
]
let pessoa = lista.find((item) => {
  return (item.sobrenome == 'Ferreira')? true:false;
});


let res = pessoa;


console.log(res);

/* lista2 = lista.filter((item) => {
  return item %2 != 0; // seleciona os números impares
}); */