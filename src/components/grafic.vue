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

const data = {
  labels: ['0,0 °C', '1,0 °C', '2,0 °C', '3,0 °C', '4,0 °C', '5,0 °C', '6,0 °C', '7,0 °C', '8,0 °C', '9,0 °C', '10,0 °C', '11,0 °C', '12,0 °C', '13,0 °C', '14,0 °C', '15,0 °C', '16,0 °C', '17,0 °C', '18,0 °C', '19,0 C°', '20,0 °C', '21,0 °C', '22,0 °C', '23,0 °C', '24,0 °C', '25,0 °C', '26,0 °C', '27,0 °C', '28,0 °C', '29,0 °C', '30,0 °C', '31,0 °C', '32,0 °C', '33,0 °C', '34,0 °C', '35,0 °C', '36,0 °C', '37,0 °C', '38,0 °C', '39,0 °C', '40,0 °C']
  , datasets: [
    {
      label: 'Muito frio',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'blue',
      data: [1, 0.8, 0.6, 0.4, 0.2, 0]
    },
    {
      label: 'Frio',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'red',
      data: [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1, 1, 1, 0.8, 0.6, 0.4, 0.2, 0]
    },
    {
      label: 'Morno',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1, 1, 1, 0.8, 0.6, 0.4, 0.2, 0],
      borderColor: 'green'
    }

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
  
