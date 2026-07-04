<script setup>
import CountdownTimer from './components/CountdownTimer.vue';
import { MyFooter } from '@packages/ui';
</script>

<template>
  <CountdownTimer />
  <MyFooter
    bg-color="transparent"
    font-family="Red Hat Text,sans-serif"
    text-color="white"
    text-color-attribution="#fb5e84" />
</template>
