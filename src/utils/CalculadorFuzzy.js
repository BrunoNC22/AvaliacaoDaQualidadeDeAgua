import CorAparente from "../entities/CorAparente";
import PH from "../entities/PH";
import Potabilidade from "../entities/Potabilidade";
import Turbidez from "../entities/Turbidez";

export default class CalculadorFuzzy {
  potabilidade;
  corAparente;
  turbidez;
  ph;
  potabilidadeBoa;
  potabilidadeAdequada;
  potabilidadeInadequada;
  listaDeSaida;
  constructor() {
    this.potabilidade = new Potabilidade();
    this.corAparente = new CorAparente();
    this.turbidez = new Turbidez();
    this.ph = new PH();
    this.potabilidadeBoa = potabilidade.listaDeClassificacoes[0];
    this.potabilidadeAdequada = potabilidade.listaDeClassificacoes[1];
    this.potabilidadeInadequada = potabilidade.listaDeClassificacoes[2];
    this.listaDeSaida = [
      potabilidadeInadequada,
      potabilidadeAdequada,
      potabilidadeBoa,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeAdequada,
      potabilidadeBoa,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeAdequada,
      potabilidadeBoa,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeAdequada,
      potabilidadeAdequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeAdequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeAdequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
      potabilidadeInadequada,
    ];
  }

  calcularTrapezoidal(x, [a, b, c, d]) {
    console.log(`Triangulação: valor ${x}. conjunto ${[a, b, c, d]}`);
    if (x <= a || x >= d) {
      console.log("Retornou 0");
      return 0;
    }
    if (x >= b && x <= c) {
      console.log("Retornou 1");
      return 1;
    }
    if (a < x && x < b) {
      let valor = (x - a) / (b - a);
      console.log(`Retornou ${valor}`);
      return valor;
    }
    if (c < x && x < d) {
      let valor = (x - c) / (d - c);
      console.log(`Retornou ${valor}`);
      return valor;
    }
    return 0;
  }

  calcularFuzzy(entradaCorAparente, entradaPh, entradaTurbidez) {
    const vetorDeResultadosFuzzy = [];

    const contador = 0;
    for (const classficacaoCorAparente in this.corAparente
      .listaDeClassificacoes) {
      for (const classificacaoTurbidez in this.turbidez.listaDeClassificacoes) {
        for (const classificacaoPH in this.ph.listaDeClassificacoes) {
          vetorDeResultadosFuzzy.push(
            obterValorFuzzy({
              pertinencia: Math.min(
                calcularTrapezoidal(
                  entradaCorAparente,
                  this.corAparente[classficacaoCorAparente]
                ),
                calcularTrapezoidal(entradaPh, this.ph[classificacaoPH]),
                calcularTrapezoidal(
                  entradaTurbidez,
                  this.turbidez[classificacaoTurbidez]
                )
              ),
              conjunto: this.potabilidade[this.listaDeSaida[contador]],
            })
          );
          contador++;
        }
      }
    }

    return vetorDeResultadosFuzzy;
  }

  obterValorFuzzy({ pertinencia, conjunto: [a, b, c, d] }) {
    if (pertinencia === 1) {
      let somaNumerador = 0;
      let somaDenominador = 0;
      for (b; b <= c; b += 1) {
        somaNumerador += b;
        somaDenominador += 1;
      }
      return { numerador: somaNumerador, denominator: somaDenominador };
    }
    if (pertinencia > 0 && pertinencia < 1) {
      let numerador = pertinencia * (d - c) + c + (pertinencia * (b - a) + a);
      let denominator = 2 * pertinencia;
      return { numerador, denominator };
    }
    return { numerador: 0, denominator: 0 };
  }

  calcularPotabilidade(entradaCorAparente, entradaPh, entradaTurbidez) {
    const rules = calcularFuzzy(entradaCorAparente, entradaPh, entradaTurbidez);
    let numerador = 0;
    let denominator = 0;

    for (const indice in rules) {
      console.log(rules[indice]);
      numerador += rules[indice].numerador;
      denominator += rules[indice].denominator;
    }

    if (denominator === 0) {
      return 0; // Evitar divisão por zero
    }

    return numerador / denominator;
  }
}
