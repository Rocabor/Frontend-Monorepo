<script setup></script>

<template>
  <!-- Card Container -->
  <div class="flex  w-81.75 flex-col gap-6 md:w-95.75 md:gap-10">

    <!-- Cardholder Name Field -->
    <div class="flex flex-col gap-6">

      <!-- Cardholder Name Label -->
      <div class="field-group">
        
        <label for="">Cardholder Name</label>
        <input type="text" placeholder="e.g. Jane Appleseed" class="input-field"/>
        <span>Can’t be blank</span>
      </div>

      <!-- Card Number Field -->
      <div class="field-group">
        
        <label for="">Card Number</label>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" class="input-field"/>
        <span>Wrong format, numbers only</span>
      </div>

      <!-- Expiry and CVC Fields -->
      <div class="flex gap-6">

        <!-- Expiry Date Field -->
        <div class="field-group flex-1">

          <label for="">Exp. Date (MM/YY)</label>

          <div class="flex gap-2">

            <input type="text" placeholder="MM" class="input-field "/>

            <input type="text" placeholder="YY" class="input-field"/>            
          </div>
          <span>Can’t be blank</span>
        </div>

        <!-- CVC Field -->
        <div class="field-group flex-1">
          
          <label for="">CVC</label>
          <input type="text" placeholder="e.g. 123" class="input-field"/>
          <span>Can’t be blank</span>
        </div>
      </div>
    </div>

    <!-- Confirm Button -->
    <button class="btn">Confirm</button>
  </div>

  <!--* Complete -->
   <div class="flex flex-col gap-8 items-center w-81.75" hidden>

    <img src="/src/assets/images/icon-complete.svg" alt="" class="size-20">

    <!-- Message Container -->
    <div class="flex flex-col gap-12 items-center w-full">

      <!-- Message Text Container -->
      <div class="flex flex-col gap-4 w-full items-center">
        <p class="text-[28px] leading-[1.3] tracking-[3.5px] text-purple950">THANK YOU!</p>
        <p class="text-[18px] leading-[1.3] text-gray400">Your card details ha</p>
      </div>

      <button class="btn w-full">Continue</button>
    </div>
   </div>
</template>
