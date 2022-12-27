let fruits = ['Maça', 'Uva', 'Banana', 'Morango'];

fruits.sort(); //ordena
fruits.reverse(); //inverte a ordem

console.log(fruits);

// ordenando pelo year

let cars = [
  {brand: 'Renault', model: 'Logan', year: '2012'},
  {brand: 'Honda', model: 'HB20', year: '2020'},
  {brand: 'Ford', model: 'Escort', year: '2004'}
];
console.log(cars.sort((a, b)=> a.year - b.year));

let longFruits = fruits.filter((item) => item.length > 4);
console.log(longFruits);

let ok = fruits.every((value) => {
  return value.length > 3
});
if(ok) {
  console.log('Todas as frutas têm mais de 3 letras')
} else {
  console.log('Nem todas as frutas têm mais de 3 letras');
};

let alguma = fruits.some((value) => {
  return value.length > 10
});
if(alguma) {
  console.log('Alguma fruta tem mais de 10 letras')
} else {
  console.log('Nenhuma fruta tem mais de 10 letras');
};

if(fruits.includes('Banana')) {
  console.log('Tem Banana!')
} else {
  console.log('Não tem Banana!');
};

