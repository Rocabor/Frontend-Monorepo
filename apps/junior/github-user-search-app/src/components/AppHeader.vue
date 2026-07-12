<template>
  <header class="flex justify-between">
    <h1 class="text-[26px] font-bold">
      devfinder
    </h1>

    <button
      type="button"
      class="group flex cursor-pointer items-center gap-3 active:scale-95">
      <span class="text-[13px] text-neutral-200 transition-colors duration-300 group-hover:text-white">LIGHT</span>
      <span class="icon-mode icon-sun group-hover:bg-white!" />
    </button>
  </header>
</template>

<style scoped>
.icon-mode {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: var(--color-neutral-200);
  transition: all 0.3s ease-in-out;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
}
.icon-sun {
  mask-image: url('../assets/images/icon-sun.svg');
}
.icon-moon {
  mask-image: url('../assets/images/icon-moon.svg');
}
</style>
