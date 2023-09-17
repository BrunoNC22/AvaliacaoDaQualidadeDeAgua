<script setup>
import PH from '../../entities/PH.js';
import CalculadorFuzzy from '../../utils/CalculadorFuzzy.js'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const calculadorFuzzy = new CalculadorFuzzy()
const qualidadePH = new PH()

var eixoX = Array.from({ length: 60}, (_, i) => (i/2)-10)

// Valores dos datasets de acordo com o padrão
// bom
var datasetBom = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePH.bom)
  if (valor < qualidadePH.bom[0] || valor > qualidadePH.bom[3]) return undefined
  return valorDeRetorno
});

// adequado
var datasetAdequado = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePH.adequado)
  if (valor < qualidadePH.adequado[0] || valor > qualidadePH.adequado[3]) return undefined
  return valorDeRetorno
});

// inadequadaBaixo
var datasetInadequadaBaixo = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePH.inadequadaBaixo)
  if (valor < qualidadePH.inadequadaBaixo[0] || valor > qualidadePH.inadequadaBaixo[3]) return undefined
  return valorDeRetorno
});

// inadequadoAlto
var datasetInadequadoAlto= eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePH.inadequadoAlto)
  if (valor < qualidadePH.inadequadoAlto[0] || valor > qualidadePH.inadequadoAlto[3]) return undefined
  return valorDeRetorno
});

const data = {
  labels: eixoX
  , datasets: [
    {
      label: 'Bom',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'green',
      data: datasetBom
    },
    {
      label: 'Adequado',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'blue',
      data: datasetAdequado
    },
    {
      label: 'inadequada Baixo',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'red',
      data: datasetInadequadaBaixo
    },
    {
      label: 'Inadequado Alto',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'rgba(0, 0, 0, 1)',
      data: datasetInadequadoAlto
    },
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}     
</script>

<template>
  <Line :data="data" :options="options" />
</template>
  
