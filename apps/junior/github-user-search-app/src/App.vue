<script setup>
import { MyFooter } from '@packages/ui';
import UserSearch from './components/UserSearch.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <UserSearch class="flex-1 justify-center" />
    <MyFooter class="tracking-[-0.7px]" />
  </div>
</template>
