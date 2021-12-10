const estudante = require('./estudante')

let curso = {
  name: 'Certified Tech Developer.',
  nota: 7.0,
  falta: 3,
  estudantes: [],

  Aprovado: function (estudante) {
    let Aprovado = false

    if (
      estudante.qtdFaltas === this.falta &&
      estudante.media() > (this.nota *= 1.1)
    )
      Aprovado = true

    if (estudante.media() >= this.nota && estudante.qtdFaltas < curso.falta)
      Aprovado = true

    return `O Estudante ${estudante.name} foi aprovado: ${Aprovado}`
  },
  listaAp: function (estudantes) {
    let array = []
    for (let i = 0; i < estudantes.length; i++) {
      array[i] = this.Aprovado(this.estudantes[i])
    }
    return array
  }
}

function consulta(name, notas, faltas) {
  let estudanteN = new estudante(name, notas, faltas)
  curso.estudantes.push(estudanteN)
  return estudanteN
}

let Genaldo = consulta('Genaldo', 1, [7.0, 9.0, 7.0, 7.0])
let Danielle = consulta('Danielle', 3, [6.5, 7.5, 3.5, 7.0])
let Alex = consulta('Alex', 4, [7.5, 2.0, 3.5, 4.5])
let Walysson = consulta('Wálysson', 2, [10, 10, 8, 9.0])
console.log(curso.listaAp(curso.estudantes))
