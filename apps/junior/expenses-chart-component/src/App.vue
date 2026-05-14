<script setup>
import { MyFooter } from '@packages/ui';
</script>

<template>
  <!--* Balance section -->
  <div class="flex max-w-[540px] flex-col gap-4">
    <!--* Balance container -->
    <div class="flex w-[343px] rounded-[10px] bg-red-500 px-[22px] py-[23px]">
      <!--* Balance info -->
      <div class="flex w-full items-center justify-between">
        <div class="">
          <p class="text-preset-5-reg">My balance</p>
          <p class="text-preset-3">$921.48</p>
        </div>
        <img src="./assets/images/logo.svg" alt="" class="h-[40px] w-[60px]" />
      </div>
    </div>

    <!--* Spending section -->
    <div class="rounded-[10px] bg-white px-4 py-6">
      <!--* Spending container -->
      <div class="flex flex-col gap-14">
        <h1>Spending - Last 7 days</h1>

        <!--* Bar chart container -->
        <div class="flex flex-col gap-6">

          <!--* Bar chart -->
          <div class="mx-auto grid h-[174px] w-[280px] grid-cols-7 items-end gap-2">
            
            <!-- Lunes -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[30%] w-full rounded-[4px] bg-[#ec775f]"></div>
              <span class="text-[10px] text-gray-400">mon</span>
            </div>

            <!-- Martes -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[50%] w-full rounded-[4px] bg-[#ec775f]"></div>
              <span class="text-[10px] text-gray-400">tue</span>
            </div>

            <!-- Miércoles (COLOR CYAN como en la imagen image_d8380a.png) -->
            <div class="flex h-full flex-col items-center justify-end gap-2">              
              <div class="h-[75%] w-full rounded-[4px] bg-[#76b5bc]"></div>
              <span class="text-[10px] text-gray-400">wed</span>
            </div>

            <!-- Jueves -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[45%] w-full rounded-[4px] bg-[#ec775f]"></div>
              <span class="text-[10px] text-gray-400">thu</span>
            </div>

            <!-- Viernes -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[35%] w-full rounded-[4px] bg-[#ec775f]"></div>
              <span class="text-[10px] text-gray-400">fri</span>
            </div>

            <!-- Sábado -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[65%] w-full rounded-[4px] bg-[#ec775f]"></div>
              <span class="text-[10px] text-gray-400">sat</span>
            </div>

            <!-- Domingo -->
            <div class="flex h-full flex-col items-center justify-end gap-2">
              <div class="h-[40%] w-full rounded-[4px] bg-[#ec775f]"></div>
              <span class="text-[10px] text-gray-400">sun</span>
            </div>
          </div>

          <!--* Total section -->
          <div class="border-t-2 border-red-100">
            <!--* Total container -->
            <div class="mt-6">
              <p>Total this month</p>

              <!--* Total info -->
              <div class="flex items-center justify-between">
                <p>$478.33</p>

                <!--* Percentage change container -->
                <div class="">
                  <p>+2.4%</p>
                  <p>from last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <MyFooter bg-color="transparent" />
</template>
