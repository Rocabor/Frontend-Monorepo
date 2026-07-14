<script setup>
import { ref } from 'vue';
const emit = defineEmits(['search']);
defineProps({
  hasError: { type: Boolean, default: false },
  isLoading: { type: Boolean, default: false },
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
  <!-- 1. Etiqueta <form> para soporte nativo de teclado (Enter) -->
  <form
    role="search"
    class="pl-search-pl bg-neutral-0 shadow-shadow-theme flex justify-between rounded-2xl py-2 pr-3 dark:bg-neutral-800  focus-within:ring-2 focus-within:ring-blue-500 [&:has(button:focus)]:ring-0"
    @submit.prevent="onSearch">
    <div class="flex w-full items-center gap-3 ">
      <!-- 2. 'alt' vacío porque es un icono decorativo; el texto del input ya da contexto -->
      <img
        src="../assets/images/icon-search.svg"
        alt=""
        class="size-5"
        aria-hidden="true">

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
        class="w-full bg-transparent text-[13px] leading-[1.4] text-ellipsis text-neutral-500 outline-none dark:text-white ">

      <span
        v-if="hasError"
        class="mr-2 flex text-[14px] font-bold text-red-500 text-nowrap">
        No results
      </span>
    </div>

    <!-- 4. Cambiado a type="submit" para que procese el formulario nativamente -->
    <button
      type="submit"
      :disabled="isLoading"
      class="px-button-px cursor-pointer text-white rounded-[10px] bg-blue-500 hover:bg-blue-300 py-3 text-[16px] leading-normal active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-800 outline-none">
      {{ isLoading ? 'Searching…' : 'Search' }}
    </button>
  </form>
</template>

<style scoped>
input[type='search']::-webkit-search-cancel-button {
  margin-right: 16px;
  cursor: pointer;
}
</style>
