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
  <div class="absolute top-8 left-1/2 flex w-85.75 -translate-x-1/2 flex-col">
    <!-- Card Back -->
    <div class="card-back relative h-39.25 w-71.5 self-end">
      <span class="text-cvc absolute top-[45%] right-[15%]">{{ cardData.cvc || '000' }}</span>
    </div>

    <!-- Card Front -->
    <div class="card-front h-38 w-71.25 -translate-y-17 p-4">
      <!-- Card Details -->
      <div class="flex flex-col gap-10">
        <!-- Card Logo -->
        <img src="/src/assets/images/card-logo.svg" alt="" class="h-7.5 w-13" />

        <!-- Card Number and Name -->
        <div class="flex flex-col gap-4">
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
