<script setup>
import { ref } from 'vue';

const obtenerRutaDado = (numero) => {
  return new URL(`../assets/images/icon-dice-${numero}.svg`, import.meta.url).href;
};

const estaGirando = ref(false);
const caraActual = ref(3);
let intervalo = null;

// Arranca el giro indefinido
const iniciarGiro = () => {
  if (estaGirando.value) return;
  estaGirando.value = true;

  intervalo = setInterval(() => {
    caraActual.value = Math.floor(Math.random() * 6) + 1;
  }, 60);
};

// Detiene el giro y clava el número final
const detenerGiro = () => {
  if (!estaGirando.value) return;

  clearInterval(intervalo);
  caraActual.value = Math.floor(Math.random() * 6) + 1;
  estaGirando.value = false;
};

// Exponemos los métodos independientes al componente padre
defineExpose({ iniciarGiro, detenerGiro });
</script>

<template>
  <div 
    class="flex items-center justify-center size-9 transition-transform"
    :class="{ 'animate-spin': estaGirando }"
    style="animation-duration: 0.8s;"
  >
    <img 
      :src="obtenerRutaDado(caraActual)" 
      alt="Dice Face" 
      class="w-full h-full select-none pointer-events-none"
    />
  </div>
</template>