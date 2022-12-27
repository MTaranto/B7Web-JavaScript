class Person {

  static hands = 2; // Método estático (Hands está associado a Person em geral)
  age = 0;

  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Oi, eu sou o ${this.name} e tenho ${Person.hands} mãos`);
  }
}

class Student extends Person {  // Herda as características de Person
  
  constructor(name, id) {
    super(name);        // utiliza o construtor da classe mãe
    this.id = id;
  }
}

let p1 = new Student('Márcio', 1);
let p2 = new Student('Roberta', 2);
p1.age = 48;
p2.age = 36;
console.log(`${p1.name} tem ${p1.age} e a sua matrícula é #${p1.id}.`);
console.log(`${p2.name} tem ${p2.age} e a sua matrícula é #${p2.id}.`);

p1.sayHi();
