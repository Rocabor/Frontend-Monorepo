<script setup>
defineProps(['cardData']);

const formatNumber = (num) => {
  return num
    ? num
        .replace(/\s?/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
    : '0000 0000 0000 0000';
};
</script>

<template>
  <!-- Card Container -->
  <div class="absolute top-8 left-1/2 flex w-85.75 md:w-135.75 -translate-x-1/2 flex-col xl:w-135.25 xl:top-1/2 xl:-translate-y-1/2 xl:left-41 xl:translate-x-0">
 
    <!-- Card Back -->
    <div class="card-back relative h-39.25 w-71.5 md:w-111.75 md:h-61.25  self-end xl:order-2 xl:translate-y-8">
      <span class="text-cvc absolute top-[45%] right-[12%]">{{ cardData.cvc || '000' }}</span>
    </div>

    <!-- Card Front -->
    <div class="card-front h-38 w-71.25 -translate-y-17 p-4 md:w-111.75 md:h-61.25 md:-translate-y-27 md:px-8 md:py-6 xl:translate-y-0 xl:order-1">
      <!-- Card Details -->
      <div class="flex flex-col gap-10 md:gap-16">
        <!-- Card Logo -->
        <img src="/src/assets/images/card-logo.svg" alt="" class="h-7.5 w-13 md:h-11.75 md:w-21" />

        <!-- Card Number and Name -->
        <div class="flex flex-col gap-4 md:gap-6">
          <p class="preset-1">{{ formatNumber(cardData.number) }}</p>

          <div class="preset-2 flex justify-between">
            <span>{{ cardData.name || 'Jane Appleseed' }}</span>
            <span>{{ cardData.month || '00' }}/{{ cardData.year || '00' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
