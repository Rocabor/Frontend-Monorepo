<template>
  <!--* Advice Container -->
  <main class="advCont">
    <!-- *** -->
    <!--* Text and Button Container -->
    <div class="cont">
      <div class="flex flex-col gap-[clamp(16px,calc(8.366px+2.036vw),24px)] text-center">
        <h1 class="text-[13px] leading-[1.35] tracking-[4px] text-green-300">ADVICE #117</h1>
        <p class="text-[clamp(1.50rem,calc(1.261rem+1.018vw),1.75rem)] leading-[1.35] tracking-[-0.3px]">
          “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
        </p>
      </div>
      <picture>
        <source
          srcset="../assets/images/pattern-divider-desktop.svg"
          media="(min-width:768px)" />
        <img
          src="../assets/images/pattern-divider-mobile.svg"
          alt="" />
      </picture>
      <button
        type="button"
        class="flex size-16 cursor-pointer items-center justify-center rounded-full bg-green-300 active:scale-90">
        <img
          src="../assets/images/icon-dice.svg"
          alt=""
          class="size-6" />
      </button>
    </div>
  </main>
</template>

<style scoped>
.advCont {
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-900);
  border-radius: clamp(10px, calc(5.229px + 1.272vw), 15px);
  width: clamp(343px, calc(155.023px + 50.127vw), 540px);
  height: clamp(314px, calc(296.824px + 4.58vw), 332px);
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.1002);
  padding-top: clamp(40px, 32.37px + 2.04vw, 48px);
}

.cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(32px, calc(24.366px + 2.036vw), 40px);
  width: clamp(296px, calc(154.779px + 37.659vw), 444px);
  height: clamp(306px, calc(296.458px + 2.545vw), 316px);
}

button:hover, button:active {
  box-shadow: 0px 0px 40px rgba(83, 255, 170, 1);
}
</style>
