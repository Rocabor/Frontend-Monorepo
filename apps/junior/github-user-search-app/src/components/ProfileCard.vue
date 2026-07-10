<template>
  <div
    class="mt-8 flex min-w-[343px] flex-col gap-[clamp(32px,calc(24.366px+2.036vw),40px)] md:mt-[clamp(40px,calc(-62.857px+13.393vw),130px)] md:min-w-[clamp(704px,calc(674.286px+3.869vw),730px)]">
    <!-- *//* -->
    <header class="flex justify-between">
      <h1 class="text-[26px] font-bold">devfinder</h1>
      <button class="group flex cursor-pointer items-center gap-3 active:scale-95">
        <span class="text-[13px] text-neutral-200 transition-colors duration-300 group-hover:text-white">LIGHT</span>
        <span class="icon-mode icon-sun group-hover:bg-white!"></span>
      </button>
    </header>

    <main>
      <!-- *Search Bar - Dark -->
      <div class="bg-neutral-800 rounded-[16px] py-2 pr-3 pl-[clamp(12px,calc(0.55px+3.053vw),24px)] flex justify-between ">

        <div class="flex gap-3 items-center w-full">
          <img src="../assets/images/icon-search.svg" alt="" class="size-5">
          <input type="text" placeholder="Search GitHub username..." class="text-[13px] leading-[1.4] text-ellipsis w-full">
        </div>
        <button type="button" class="text-[16px] leading-normal bg-blue-500 rounded-[10px] px-[clamp(20px,calc(16.183px+1.018vw),24px)] py-3">Search</button>
      </div>

      <!-- *Profile Section -->
      <div>
        <!-- *Profile Container -->
        <div></div>
        <!-- *Profile Info -->
        <div></div>
      </div>
    </main>
  </div>
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
