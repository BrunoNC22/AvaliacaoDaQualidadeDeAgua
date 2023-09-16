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
  labels: Array.from({ length: 41 }, (_, i) => i - 6)
  , datasets: [
    {
      label: 'boa',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'blue',
      data: [0, .33, .66, 1, 1, 1, 1, 1, 1, 1, 0.66, 0.33, 0]
    },
    {
      label: 'adequada',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'red',
      data: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0]
    },
    {
      label: 'inadequada',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      borderColor: 'rgba(0, 0, 0, 1)',
      data: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 0.25, 0.50, .75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, .5, .25, 0]
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
  
