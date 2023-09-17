<script setup>
import GraficoCorAparenteVue from './graficos/GraficoCorAparente.vue';
import GraficoPH from './graficos/GraficoPH.vue';
import GraficoTurbidez from './graficos/GraficoTurbidez.vue';
import GraficoPotabilidade from './graficos/GraficoPotabilidade.vue';
</script>

<template>
    <h1>Controle de temperatura utilizando logica fuzzy</h1>
    <div class="grafico">
        <h3>Cor Aparentes</h3>
        <GraficoCorAparenteVue></GraficoCorAparenteVue>
        <h3>PH</h3>
        <GraficoPH></GraficoPH> 
        <h3>Turbidez</h3>
        <GraficoTurbidez></GraficoTurbidez> 
        <h3>Potabilidade</h3>  
        <GraficoPotabilidade></GraficoPotabilidade>

    </div>
</template>
<style>
.grafico {
    width: 500px;
    height: 250px;
}
</style>