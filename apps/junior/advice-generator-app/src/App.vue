<script setup>
import { MyFooter } from '@packages/ui';
import AdviceCont from './components/AdviceCont.vue';
import ParticlesBg from './components/ParticlesBg.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <ParticlesBg />
    <div class="flex flex-1 items-center">
      <AdviceCont />
    </div>
    <MyFooter
      text-color="var(--color-blue-200)"
      text-color-attribution="var(--color-green-300)" />
  </div>
</template>
