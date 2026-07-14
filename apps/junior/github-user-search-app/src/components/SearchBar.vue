<script setup>
import { ref } from 'vue';
const emit = defineEmits(['search']);
const props = defineProps({
  hasError: { type: Boolean, default: false },
});
const username = ref('');

const onSearch = () => {
  // 1. Quitamos espacios en blanco sueltos
  let cleanUsername = username.value.trim();

  // 2. Si el texto empieza con @, le cortamos ese primer carácter
  if (cleanUsername.startsWith('@')) {
    cleanUsername = cleanUsername.slice(1);
  }

  // 3. Si el campo quedó vacío (por ejemplo si solo escribieron @), no hacemos nada
  if (!cleanUsername) return;

  // 4. Emitimos el nombre de usuario ya limpio
  emit('search', cleanUsername);
};
</script>

<template>
  <!-- 1. Cambiado a etiqueta <form> para soporte nativo de teclado (Enter) -->
  <form
    role="search"
    class="pl-search-pl bg-neutral-0 shadow-shadow-theme flex justify-between rounded-2xl py-2 pr-3 dark:bg-neutral-800"
    @submit.prevent="onSearch">
    <div class="flex w-full items-center gap-3">
      <!-- 2. 'alt' vacío porque es un icono decorativo; el texto del input ya da contexto -->
      <img
        src="../assets/images/icon-search.svg"
        alt=""
        class="size-5"
        aria-hidden="true" />

      <!-- 3. Añadido id y label invisible (sr-only) obligatorio para accesibilidad -->
      <label
        for="github-search"
        class="sr-only">
        Search GitHub username
      </label>
      <input
        id="github-search"
        v-model="username"
        type="search"
        placeholder="Search GitHub username..."
        class="w-full bg-transparent text-[13px] leading-[1.4] text-ellipsis text-neutral-500 outline-none dark:text-white" />

      <span
        v-if="hasError"
        class="mr-2 flex text-[14px] font-bold text-red-500 text-nowrap">
        No results
      </span>
    </div>

    <!-- 4. Cambiado a type="submit" para que procese el formulario nativamente -->
    <button
      type="submit"
      class="px-button-px cursor-pointer rounded-[10px] bg-blue-500 py-3 text-[16px] leading-normal text-white hover:bg-blue-300 active:scale-95">
      Search
    </button>
  </form>
</template>

<style scoped>
input[type='search']::-webkit-search-cancel-button {
  margin-right: 16px;
  cursor: pointer;
}
</style>
