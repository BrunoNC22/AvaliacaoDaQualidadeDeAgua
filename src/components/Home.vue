<script setup>
import GraficoCorAparenteVue from './graficos/GraficoCorAparente.vue';
</script>

<template>
    <h1>Controle de temperatura utilizando logica fuzzy</h1>
    <div class="grafico">
        <GraficoCorAparenteVue></GraficoCorAparenteVue>
    </div>
</template>
<style>
.grafico {
    width: 500px;
    height: 250px;
}
</style>