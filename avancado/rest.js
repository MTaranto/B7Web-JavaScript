/* function add (names, ...newNames) {
  let newGroup = [
    ...names,
    ...newNames]
  return newGroup;
}
let names = ['Márcio', 'Roberta'];
let others = add(names, 'Noah', 'Olivia');*/

function add (...newNames) {
  console.log(newNames);
}
let names = ['Márcio', 'Roberta'];
add(...names, 'Noah', 'Olivia');