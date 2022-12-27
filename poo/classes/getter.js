// criando a classe person 
class Person {

  steps = 0;
  _age = 0;

  constructor(firstName, lastName) {
    this.nome = firstName;
    this.sobrenome = lastName;
  }

  takeAStep() {     //criando um método
    this.steps++;
  }

  get fullName() {
    return `${this.nome} ${this.sobrenome}`;
    }

  get age() {
      return this._age;
    }

  set age(x) {
    if(typeof x == 'number') {
      this._age = x;
    }
  }
}
let p1 = new Person("Márcio", "Taranto");  // instância (Instanciando o objeto)
let p2 = new Person("Roberta", "Meletti");
let p3 = new Person("Noah", "M. Taranto");

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos.`);

// incluí essas linha para entender a estrutura
console.log(p3.fullName);
console.log(p2);
console.log(Person);