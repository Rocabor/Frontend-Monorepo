<script setup>
import { MyFooter } from '@packages/ui';
import data from '../data.json';

const chartData = data;
const maxAmount = Math.max(...chartData.map((item) => item.amount));
</script>

<template>
  <!--* Balance section -->
  <div class="flex w-85.75 flex-col gap-4 md:w-135 md:gap-6">
    <!--* Balance container -->
    <div class="flex w-full rounded-[10px] bg-red-500 px-5.5 py-5.75 md:rounded-[20px] md:px-[35.5px] md:py-6.5">
      <!--* Balance info -->
      <div class="flex w-full items-center justify-between">
        <div class="flex flex-col md:gap-2">
          <p class="text-preset-5-reg">
            My balance
          </p>
          <p class="text-preset-3">
            $921.48
          </p>
        </div>
        <img src="./assets/images/logo.svg" alt="" class="h-10 w-15 md:h-12 md:w-18" aria-hidden="true">
      </div>
    </div>

    <!--* Spending section -->
    <div class="w-full rounded-[10px] bg-white px-4 py-6 md:rounded-[20px] md:px-10 md:py-9.5">
      <!--* Spending container -->
      <div class="flex flex-col gap-14 md:gap-16">
        <!--* Bar chart container -->
        <figure class="flex flex-col">
          <figcaption class="text-preset-3 text-brown-950 mb-14 md:mb-16">
            Spending - Last 7 days
          </figcaption>

          <!--* Bar chart -->
          <ul class="mx-auto grid min-h-43.5 w-full max-w-112.5 grid-cols-7 items-end gap-2 md:gap-4">
            <!-- iteraciones del archivo data.json para los dias de la semana -->
            <button v-for="item in chartData" :key="item.day" type="button" :aria-label="item.day + ', $' + item.amount" class="group flex h-full cursor-pointer flex-col items-center justify-end gap-2 border-none bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transition-all rounded-sm">
              <div
                :style="{ height: (item.amount / maxAmount) * 100 + '%' }"
                :class="[item.amount === maxAmount ? 'bg-blue-300 group-hover:bg-blue-200 group-active:bg-blue-200' : 'bg-red-500 group-hover:bg-red-300 group-active:bg-red-300']"
                class="relative w-full rounded-sm">
                <!-- Amount visible en hover -->
                <span
                  class="bg-brown-950 md:text-preset-4-bold absolute -top-9 left-1/2 -translate-x-1/2 rounded-[5px] p-1 text-[14px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100 md:-top-11 md:p-2 ">
                  ${{ item.amount }}
                </span>
              </div>
              <p class="text-preset-6">
                {{ item.day }}
              </p>
            </button>
          </ul>

          <!--* Total section -->
          <div class="mt-6 border-t-2 border-red-100 md:mt-8">
            <!--* Total container -->
            <div class="mt-6 md:mt-8">
              <p class="text-preset-5-reg text-brown-400">
                Total this month
              </p>

              <!--* Total info -->
              <div class="flex items-center justify-between">
                <p class="text-preset-2 text-brown-950">
                  $478.33
                </p>

                <!--* Percentage change container -->
                <div class="flex flex-col items-end">
                  <p class="text-preset-5-bold text-brown-950">
                    +2.4%
                  </p>
                  <p class="text-preset-5-reg text-brown-400">
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>

  <MyFooter bg-color="transparent" text-color="var(--color-red-500)" />
</template>
