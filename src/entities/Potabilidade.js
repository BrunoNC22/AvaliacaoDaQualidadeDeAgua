export default class Potabilidade {
  constructor() {
    this.listaDeClassificacoes = ["boa", "adequada", "inadequada"];
    this.indadequada = [-0.5, -0.4, 0.4, 0.5];
    this.adequada = [0.4, 0.5, 0.7, 0.8];
    this.boa = [0.7, 0.8, 1.2, 1.3];
    this.unidade = "Índice de Potabilidade";
  }
}
