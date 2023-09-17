<script setup>
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

var eixoX = Array.from({ length: 41 }, (_, i) => i - 10)

// Valores dos datasets de acordo com o padrão
// boa
var dataset1 = eixoX.map(function (valor) {
  return valor >= -6 && valor < -6 ? 0 : (valor >= -3 && valor <= 3 ? 1 : 0);
});

// adequada
var dataset2 = eixoX.map(function (valor) {
  return valor >= 3 && valor < 5 ? 0 : (valor >= 5 && valor <= 15 ? 1 : 0);
});

// inadequada
var dataset3 = eixoX.map(function (valor) {
  return valor >= 11 && valor <= 13 ? 0 : (valor >= 7 && valor <= 9 ? 0 : 1);
});

// this.boa = [-6, -3, 3, 6];
// this.adequada = [3, 5, 15, 17];
// this.inadequada = [13, 17, 30, 34];

const data = {
  labels: eixoX
  , datasets: [
    {
      label: 'boa',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'blue',
      data: dataset1 //[0, .33, .66, 1, 1, 1, 1, 1, 1, 1, 0.66, 0.33, 0]
    },
    // {
    //   label: 'adequada',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: 'transparent',
    //   borderColor: 'red',
    //   data: dataset2 // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0]
    // },
    // {
    //   label: 'inadequada',
    //   backgroundColor: 'transparent',
    //   pointBorderColor: 'transparent',
    //   borderColor: 'rgba(0, 0, 0, 1)',
    //   data: dataset3 // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 0.25, 0.50, .75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, .5, .25, 0]
    // },
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
  
