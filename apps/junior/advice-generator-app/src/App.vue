<script setup>
import { MyFooter } from '@packages/ui';
import AdviceCont from './components/AdviceCont.vue';
</script>

<template>
  <AdviceCont />
  <MyFooter
    bg-color="current"
    text-color="var(--color-blue-200)"
    text-color-attribution="var(--color-green-300)"
    font-family="Manrope,sans-serif" />
</template>
