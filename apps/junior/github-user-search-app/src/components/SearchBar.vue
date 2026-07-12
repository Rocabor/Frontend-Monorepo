<template>
  <div class="pl-search-pl flex justify-between rounded-2xl bg-neutral-800 py-2 pr-3">
    <div class="flex w-full items-center gap-3">
      <img
        src="../assets/images/icon-search.svg"
        alt=""
        class="size-5">
      <input
        type="text"
        placeholder="Search GitHub username..."
        class="w-full bg-transparent text-[13px] leading-[1.4] text-ellipsis outline-none">
    </div>

    <button
      type="button"
      class="px-button-px rounded-[10px] bg-blue-500 py-3 text-[16px] leading-normal">
      Search
    </button>
  </div>
</template>
