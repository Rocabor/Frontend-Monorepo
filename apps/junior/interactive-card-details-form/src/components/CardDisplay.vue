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
  <div class="relative h-[240px] w-full">

    <div class="absolute top-[120px] left-[17px] z-1 w-[285px] h-[157px] rounded-[6px] p-4 text-white shadow-2xl transition-all lg:w-96" style="background: var(--bg-card-front)">

      <div class="mb-10 flex items-center gap-2">

        <div class="h-7.5 w-7.5 rounded-full bg-white"></div>

        <div class="h-[13.5px] w-[13.5px] rounded-full border border-white"></div>

      </div>

      <div class="mb-4 preset-1">{{ formatNumber(cardData.number) }}</div>

      <div class="flex justify-between preset-2 uppercase">

        <span>{{ cardData.name || 'Jane Appleseed' }}</span>
        <span>{{ cardData.month || '00' }}/{{ cardData.year || '00' }}</span>
      </div>
    </div>

    <div class="absolute top-8 right-4 w-[286px] h-[157px]  rounded-[6px] shadow-xl lg:w-96 card-back" >

      <!-- <div class="mt-6 h-10 w-full bg-zinc-800"></div> -->

      <!-- <div class="mt-6 px-6">

        <div class="flex h-8 items-center justify-end rounded bg-gray-400 px-4 text-xs">{{ cardData.cvc || '000' }}</div>
      </div> -->
    </div>
  </div>
</template>


