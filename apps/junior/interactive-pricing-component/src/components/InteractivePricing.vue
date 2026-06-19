<script setup>
import { ref, computed } from 'vue';

const pricingData = [
  { pageviews: '10K', price: 8 },
  { pageviews: '50K', price: 12 },
  { pageviews: '100K', price: 16 },
  { pageviews: '500K', price: 24 },
  { pageviews: '1M', price: 36 },
];

const currentLevel = ref(2);
const isYearlyBilling = ref(false);

const currentPricing = computed(() => pricingData[currentLevel.value]);

const finalPrice = computed(() => {
  let price = currentPricing.value.price;
  if (isYearlyBilling.value) price = price * 0.75;
  return price.toFixed(2);
});

const sliderPercentage = computed(() => {
  return (currentLevel.value / (pricingData.length - 1)) * 100;
});
</script>

<template>
  <div class="flex w-full items-center justify-center px-6">
    <div class="w-full max-w-135 rounded-lg bg-white shadow-xl">
      <div class="px-6 py-8 md:px-12 md:py-10">
        <!-- Layout Responsivo: Grid para alinear como en desktop-design.jpg -->
        <div class="grid grid-cols-1 items-center gap-y-8 md:grid-cols-2 md:gap-y-12">
          <!-- Pageviews: Izquierda en Desktop -->
          <h2 id="pageviews-label" class="text-center text-xs leading-[1.33] font-extrabold tracking-[1.71px] text-[#848EAD] uppercase md:text-left md:text-sm md:leading-[1.36] md:tracking-[2px]">
            {{ currentPricing.pageviews }} Pageviews
          </h2>

          <!-- Precio: Derecha en Desktop (Oculto en móvil aquí para moverlo abajo) -->
          <div class="hidden items-center justify-end gap-2 md:flex">
            <span class="text-4xl font-extrabold text-[#293356]">${{ finalPrice }}</span>
            <span class="text-[#848EAD]">/ month</span>
          </div>

          <!-- Slider: Ancho completo debajo de los títulos -->
          <div class="relative md:col-span-2">
            <input
              v-model="currentLevel"
              type="range"
              aria-labelledby="pageviews-label"
              min="0"
              :max="pricingData.length - 1"
              :aria-valuenow="currentLevel"
              aria-valuemin="0"
              :aria-valuemax="pricingData.length - 1"
              class="slider-input h-2 w-full cursor-pointer appearance-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#10d8c4] focus-visible:ring-offset-8"
              :style="{ background: `linear-gradient(to right, #10d8c4 ${sliderPercentage}%, #eaeefb ${sliderPercentage}%)` }"
              :aria-valuetext="`${currentPricing.pageviews} pageviews, ${finalPrice} dollars per month`">
            <div
              class="slider-thumb pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center justify-center shadow-lg shadow-cyan-200"
              :style="{ left: `calc(${sliderPercentage}% - 20px)` }"
              aria-hidden="true">
              <img src="../assets/images/icon-slider.svg" alt="">
            </div>
          </div>

          <!-- Precio: Solo visible en móvil en esta posición (mobile-design.jpg) -->
          <div class="flex items-center justify-center gap-2 md:hidden">
            <span class="text-3xl font-extrabold text-slate-800">${{ finalPrice }}</span>
            <span class="text-gray-500">/ month</span>
          </div>
        </div>

        <!-- Toggle Facturación -->
        <div class="mt-10 flex items-center justify-center gap-3 text-[11px] text-gray-500 md:mt-14 md:gap-4 md:text-xs">
          <span>Monthly Billing</span>
          <button
            class="relative flex h-5.5 w-11 rounded-full p-1 transition-colors duration-300 focus:ring-2 focus:ring-[#10d8c4] focus:ring-offset-2 focus:outline-none"
            :class="isYearlyBilling ? 'bg-[#10d8c4]' : 'bg-[#eaeefb]'"
            role="switch"
            :aria-checked="isYearlyBilling"
            aria-label="Toggle yearly billing"
            @click="isYearlyBilling = !isYearlyBilling">
            <div class="h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" :class="isYearlyBilling ? 'translate-x-5' : 'translate-x-0'" />
          </button>
          <div class="flex items-center gap-1.5">
            <span>Yearly Billing</span>
            <span class="rounded-full bg-[#feeae7] px-2 py-0.5 text-[10px] font-extrabold text-[#ff8c66]">
              -25%
              <span class="hidden md:inline">discount</span>
            </span>
          </div>
        </div>
      </div>

      <hr class="border-slate-100">

      <!-- Footer: Beneficios y Botón -->
      <div class="flex flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row md:px-12 md:py-10 md:pt-8 md:pb-8">
        <ul class="space-y-3 text-center text-xs text-gray-500 md:text-left">
          <li class="flex items-center gap-4">
            <img src="../assets/images/icon-check.svg" alt="" aria-hidden="true" class="h-1.5 w-2">
            Unlimited websites
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/images/icon-check.svg" alt="" aria-hidden="true" class="h-1.5 w-2">
            100% data ownership
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/images/icon-check.svg" alt="" aria-hidden="true" class="h-1.5 w-2">
            Email reports
          </li>
        </ul>
        <button
          class="rounded-full bg-[#293356] px-11 py-3 text-xs font-extrabold text-[#bdccff] shadow-lg transition-all duration-300 hover:bg-[#1a233a] hover:text-white hover:shadow-xl focus:bg-[#1a233a] focus:text-white focus:ring-2 focus:ring-[#10d8c4] focus:ring-offset-2 focus:outline-none active:scale-90">
          Start my trial
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-input::-webkit-slider-thumb {
  appearance: none;
  width: 40px;
  height: 40px;
}
.slider-input::-moz-range-thumb {
  width: 40px;
  height: 40px;
  background: transparent; 
  border: none;            
  cursor: pointer;
 
}

.slider-thumb {
  width: 40px;
  height: 40px;
  background-color: #10d8c4;
  border-radius: 50%;
  transition: all 0.2s;
}

.slider-input:active + .slider-thumb {
  background-color: #24aea1;
  box-shadow: 0 0 20px 5px rgba(16, 216, 196, 0.4);
}
</style>
