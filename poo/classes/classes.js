// criando a classe person 
class Person {

  steps = 0;
  age = 0;

  constructor(name) {     // toda vez que criarmos uma nova 'person'  a função constructor é executada
    this.nome = name;     // criando propriedade 'name'
  }

  takeAStep() {     //criando um método
    this.steps++;
  }

  setAge(newAge) {
    if(typeof newAge == 'number') {
      this.age = newAge;
    }
  }
}
let p1 = new Person("Márcio", 48);  // instância (Instanciando o objeto)
let p2 = new Person("Roberta", 36);
let p3 = new Person("Noah", 5);


p1.takeAStep();
p1.takeAStep();
console.log(`Passos de ${p1.nome}: ${p1.steps}`);
console.log(`${p1.nome} tem ${p1.age} anos.`);

p1.setAge(20);
// incluí essas linha para entender a estrutura
console.log(p2.nome);
console.log(p3);
console.log(Person);