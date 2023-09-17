<script setup>
import { Potabilidade } from '../../entities/Potabilidade.js';
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
const qualidadePotabilidade =  Potabilidade

var eixoX = Array.from({ length: 30}, (_, i) => ((i/10)-1).toFixed(1))

// Valores dos datasets de acordo com o padrão
// boa
var datasetBoa = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePotabilidade.boa)
  if (valor < qualidadePotabilidade.boa[0] || valor > qualidadePotabilidade.boa[3]) return undefined
  return valorDeRetorno
});

// adequada
var datasetAdequada = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePotabilidade.adequada)
  if (valor < qualidadePotabilidade.adequada[0] || valor > qualidadePotabilidade.adequada[3]) return undefined
  return valorDeRetorno
});

// inadequada
var datasetInadequada = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadePotabilidade.inadequada)
  if (valor < qualidadePotabilidade.inadequada[0] || valor > qualidadePotabilidade.inadequada[3]) return undefined
  return valorDeRetorno
});

const data = {
  labels: eixoX
  , datasets: [
    {
      label: 'Boa',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'blue',
      data: datasetBoa
    },
    {
      label: 'Adequado',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'red',
      data: datasetAdequada
    },
    {
      label: 'inadequada Baixo',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'rgba(0, 0, 0, 1)',
      data: datasetInadequada
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
  
