<script setup>
import { MyFooter } from '@packages/ui';
import data from '../data.json';

const chartData = data;
const maxAmount = Math.max(...chartData.map(item => item.amount));

</script>

<template>

  <!--* Balance section -->
  <div class="flex w-85.75 md:w-135 flex-col gap-4 md:6">

    <!--* Balance container -->
    <div class="flex w-full rounded-[10px] md:rounded-[20px] bg-red-500 px-5.5 py-5.75
    md:px-[35.5px] md:py-6.5">
      
      <!--* Balance info -->
      <div class="flex w-full items-center justify-between">
        <div class="flex flex-col md:gap-2">
          <p class="text-preset-5-reg">My balance</p>
          <p class="text-preset-3">$921.48</p>
        </div>
        <img src="./assets/images/logo.svg" alt="" class="h-10 w-15 md:w-18 md:h-12" aria-hidden="true"/>
      </div>
    </div>

    <!--* Spending section -->
    <div class="rounded-[10px] md:rounded-[20px] bg-white px-4 py-6 w-full md:px-10 md:py-9.5">
      <!--* Spending container -->
      <div class="flex flex-col gap-14 md:gap-16">
        

        <!--* Bar chart container -->
        <figure class="flex flex-col gap-6 md:gap-8">

          <figcaption class="text-preset-3 text-brown-950">Spending - Last 7 days</figcaption>

          <!--* Bar chart -->
          <ul class="mx-auto grid h-43.5 max-w-112.5 w-full grid-cols-7 items-end gap-2">
            
            <!-- iteraciones del archivo data.json para los dias de la semana -->
            <li v-for="item in chartData" :key="item.day" class="flex h-full flex-col items-center justify-end gap-2">
              <div 
              :style="{height:(item.amount/maxAmount*100)+'%'}" 
              :class="[item.amount === maxAmount ?  'bg-blue-300' : 'bg-red-500']" class="w-full rounded-sm"></div>
              <p class="text-preset-6">{{ item.day }}</p>
              <span class="visually-hidden" >amount: ${{ item.amount }}</span>
            </li>

            
          </ul>

          <!--* Total section -->
          <div class="border-t-2 border-red-100">
            <!--* Total container -->
            <div class="mt-6 md:mt-8">
              <p class="text-preset-5-reg text-brown-400">Total this month</p>

              <!--* Total info -->
              <div class="flex items-center justify-between">
                <p class="text-preset-2 text-brown-950">$478.33</p>

                <!--* Percentage change container -->
                <div class="flex flex-col items-end">
                  <p class="text-preset-5-bold text-brown-950">+2.4%</p>
                  <p class="text-preset-5-reg text-brown-400">from last month</p>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>

  <MyFooter bg-color="transparent" text-color="var(--color-blue-300)" />
</template>
