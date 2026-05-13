<script setup>
import { MyFooter } from '@packages/ui'; 
</script>

<template>

  <!--* Balance section -->
   <div class="flex flex-col gap-4 max-w-[540px]">

    <!--* Balance container -->
    <div class="flex p-4 bg-red-500 rounded-[10px] w-[343px]">

      <!--* Balance info -->
      <div class="flex justify-between items-center w-full">

        <div class="">
          <p class="text-preset-5-reg">My balance</p>
          <p class="text-preset-3 ">$921.48</p>
        </div>
        <img src="./assets/images/logo.svg" alt="" class="w-[60px] h-[40px]">
      </div>

    </div>


    <!--* Spending section -->
    <div></div>


   </div>



  

  <MyFooter 
  bg-color="transparent"/>
</template>