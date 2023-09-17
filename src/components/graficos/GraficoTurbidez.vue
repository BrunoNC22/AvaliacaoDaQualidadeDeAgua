<script setup>
import Turbidez from '../../entities/Turbidez';
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
const qualidadeTurbidez = new Turbidez()

var eixoX = Array.from({ length: 40}, (_, i) => (i/2)-5)

// Valores dos datasets de acordo com o padrão
// boa
var datasetBoa = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadeTurbidez.boa)
  if (valor < qualidadeTurbidez.boa[0] || valor > qualidadeTurbidez.boa[3]) return undefined
  return valorDeRetorno
});

// adequada
var datasetAdequada = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadeTurbidez.adequada)
  if (valor < qualidadeTurbidez.adequada[0] || valor > qualidadeTurbidez.adequada[3]) return undefined
  return valorDeRetorno
});

// inadequada
var datasetInadequada = eixoX.map((valor) => {
  let valorDeRetorno = calculadorFuzzy.calcularPertinenciaTrapezoidal(valor, qualidadeTurbidez.inadequada)
  if (valor < qualidadeTurbidez.inadequada[0] || valor > qualidadeTurbidez.inadequada[3]) return undefined
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
  
