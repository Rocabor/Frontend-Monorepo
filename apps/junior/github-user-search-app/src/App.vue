<script setup>
import { MyFooter } from '@packages/ui';
import UserSearch from './components/UserSearch.vue';
import ThemeCanvas from './components/ThemeCanvas.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <ThemeCanvas />
    <UserSearch class="flex-1 justify-center" />
    <MyFooter class="tracking-[-0.7px]" />
  </div>
</template>
