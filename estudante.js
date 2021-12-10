module.exports = class estudanteconsulta {
  constructor(name, qtdFaltas, notas) {
    this.name = name
    this.qtdFaltas = qtdFaltas
    this.notas = notas
  }
  print() {
    return `Nome: ${this.name}\nFaltas: ${this.qtdFaltas}\nNotas: ${this.notas[0]}, ${this.notas[1]}, ${this.notas[2]}`
  }
  media() {
    let mediaNota = this.notas.reduce((total, sum) => total + sum) / 3
    return mediaNota.toFixed(2)
  }
  qtdFaltasTotal() {
    return this.qtdFaltas + 1
  }
}
