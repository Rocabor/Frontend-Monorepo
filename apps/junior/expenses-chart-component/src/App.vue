<script setup>
import { MyFooter } from '@packages/ui';
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
        <h1 class="text-preset-3 text-brown-950">Spending - Last 7 days</h1>

        <!--* Bar chart container -->
        <div class="flex flex-col gap-6 md:gap-8">

          <!--* Bar chart -->
          <div class="mx-auto grid h-43.5 max-w-112.5 w-full grid-cols-7 items-end gap-2">
            
            <!-- Lunes -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[30%] w-full rounded-sm bg-[#ec775f]"></div>
              <span class="text-preset-6">mon</span>
            </div>

            <!-- Martes -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[50%] w-full rounded-sm bg-[#ec775f]"></div>
              <span class="text-preset-6">tue</span>
            </div>

            <!-- Miércoles -->
            <div class="flex h-full flex-col items-center justify-end gap-2">              
              <div class="h-[75%] w-full rounded-sm bg-[#76b5bc]"></div>
              <span class="text-preset-6">wed</span>
            </div>

            <!-- Jueves -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[45%] w-full rounded-sm bg-[#ec775f]"></div>
              <span class="text-preset-6">thu</span>
            </div>

            <!-- Viernes -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[35%] w-full rounded-sm bg-[#ec775f]"></div>
              <span class="text-preset-6">fri</span>
            </div>

            <!-- Sábado -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[65%] w-full rounded-sm bg-[#ec775f]"></div>
              <span class="text-preset-6">sat</span>
            </div>

            <!-- Domingo -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[40%] w-full rounded-sm bg-[#ec775f]"></div>
              <span class="text-preset-6">sun</span>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  </div>

  <MyFooter bg-color="transparent" text-color="var(--color-blue-300)" />
</template>
