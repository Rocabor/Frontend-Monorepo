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
  <div class="flex items-center justify-center w-full px-6">
    
    <div class="bg-white rounded-lg shadow-xl w-full max-w-135">
      
      <div class="py-8 px-6 md:py-10 md:px-12 ">
        <!-- Layout Responsivo: Grid para alinear como en desktop-design.jpg -->
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-y-12">
          
          <!-- Pageviews: Izquierda en Desktop -->
          <h2 class="text-[#848EAD] uppercase tracking-[1.71px] leading-[1.33] font-extrabold text-xs md:text-sm text-center md:text-left md:tracking-[2px] md:leading-[1.36]">
            {{ currentPricing.pageviews }} Pageviews
          </h2>

          <!-- Precio: Derecha en Desktop (Oculto en móvil aquí para moverlo abajo) -->
          <div class="hidden md:flex items-center justify-end gap-2">
            <span class="text-4xl font-extrabold text-[#293356]">${{ finalPrice }}</span>
            <span class="text-[#848EAD]">/ month</span>
          </div>

          <!-- Slider: Ancho completo debajo de los títulos -->
          <div class="md:col-span-2 relative">
            <input 
              type="range" 
              min="0" 
              :max="pricingData.length - 1" 
              v-model="currentLevel"
              class="slider-input w-full appearance-none h-2 rounded-full cursor-pointer outline-none focus:outline-2 focus:outline-[#10d8c4] focus:outline-offset-4"
              :style="{ background: `linear-gradient(to right, #10d8c4 ${sliderPercentage}%, #eaeefb ${sliderPercentage}%)` }"
              :aria-valuetext="`${currentPricing.pageviews} pageviews, ${finalPrice} dollars per month`"
            />
            <div 
              class="slider-thumb absolute top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center shadow-lg shadow-cyan-200"
              :style="{ left: `calc(${sliderPercentage}% - 20px)` }"
              aria-hidden="true"
            >
              <img src="./images/icon-slider.svg" alt="" />
            </div>
          </div>

          <!-- Precio: Solo visible en móvil en esta posición (mobile-design.jpg) -->
          <div class="flex md:hidden items-center justify-center gap-2">
            <span class="text-3xl font-extrabold text-slate-800">${{ finalPrice }}</span>
            <span class="text-gray-500">/ month</span>
          </div>
        </div>

        <!-- Toggle Facturación -->
        <div class="flex items-center justify-center gap-3 md:gap-4 text-gray-500 text-[11px] md:text-xs mt-10 md:mt-14">
          <span>Monthly Billing</span>
          <button 
            @click="isYearlyBilling = !isYearlyBilling"
            class="w-11 h-5.5 rounded-full p-1 flex transition-colors duration-300 relative focus:outline-none focus:ring-2 focus:ring-[#10d8c4] focus:ring-offset-2"
            :class="isYearlyBilling ? 'bg-[#10d8c4]' : 'bg-[#eaeefb]'"
            role="switch"
            :aria-checked="isYearlyBilling"
            aria-label="Toggle yearly billing"
          >
            <div 
              class="bg-white w-3.5 h-3.5 rounded-full shadow-sm transition-transform duration-300"
              :class="isYearlyBilling ? 'translate-x-5' : 'translate-x-0'"
            />
          </button>
          <div class="flex items-center gap-1.5">
            <span>Yearly Billing</span>
            <span class="bg-[#feeae7] text-[#ff8c66] font-extrabold px-2 py-0.5 rounded-full text-[10px]">
              -25% <span class="hidden md:inline">discount</span>
            </span>
          </div>
        </div>
      </div>

      <hr class="border-slate-100" />

      <!-- Footer: Beneficios y Botón -->
      <div class="py-8 px-6 md:py-10 md:pb-8 md:pt-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <ul class="space-y-3 text-gray-500 text-xs text-center md:text-left">
          <li class="flex items-center gap-4">
            <img src="./images/icon-check.svg" alt="" aria-hidden="true" class="w-4 h-4">
            Unlimited websites
          </li>
          <li class="flex items-center gap-4">
            <img src="./images/icon-check.svg" alt="" aria-hidden="true" class="w-4 h-4">
            100% data ownership
          </li>
          <li class="flex items-center gap-4">
            <img src="./images/icon-check.svg" alt="" aria-hidden="true" class="w-4 h-4">
            Email reports
          </li>
        </ul>
        <button class="bg-[#293356] text-[#bdccff] font-extrabold px-11 py-3 rounded-full text-xs hover:bg-[#1a233a] hover:text-white focus:text-white focus:bg-[#1a233a] focus:outline-none focus:ring-2 focus:ring-[#10d8c4] focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-90">
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
  opacity: 0;
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