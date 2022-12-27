let pessoa = {
  nome:'Márcio',
  sobrenome: 'Taranto',
  idade: 48,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  }
}

console.log(pessoa.nomeCompleto())
