<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  cardData: Object
})

const emit = defineEmits(['complete'])

const isComplete = ref(false)
const touched = reactive({
  name: false,
  number: false,
  month: false,
  year: false,
  cvc: false
})

const handleBlur = (field) => {
  touched[field] = true
}

const handleSubmit = () => {
  touched.name = true
  touched.number = true
  touched.month = true
  touched.year = true
  touched.cvc = true

  const isNameValid = /^[a-zA-Z\s]+$/.test(props.cardData.name) && props.cardData.name.length <= 25
  const isNumberValid = /^\d{16}$/.test(props.cardData.number)
  const isMonthValid = /^\d{2}$/.test(props.cardData.month)
  const isYearValid = /^\d{2}$/.test(props.cardData.year)
  const isCvcValid = /^\d{3}$/.test(props.cardData.cvc)

  if (!isNameValid || !isNumberValid || !isMonthValid || !isYearValid || !isCvcValid) {
    return
  }

  isComplete.value = true
  emit('complete')
}

const handleContinue = () => {
  isComplete.value = false
  props.cardData.name = ''
  props.cardData.number = ''
  props.cardData.month = ''
  props.cardData.year = ''
  props.cardData.cvc = ''
  Object.keys(touched).forEach(key => touched[key] = false)
}

const showError = (field) => {
  if (field === 'number') {
    const isTouched = touched[field] || props.cardData[field]
    return isTouched && props.cardData[field] && !/^\d*$/.test(props.cardData[field])
  }
  if (field === 'month' || field === 'year' || field === 'cvc') {
    const isTouched = touched[field] || props.cardData[field]
    return isTouched && (!props.cardData[field] || !/^\d*$/.test(props.cardData[field]))
  }
  if (field === 'name') {
    return touched[field] && (!props.cardData[field] || !/^[a-zA-Z\s]+$/.test(props.cardData[field]))
  }
  return touched[field] && !props.cardData[field]
}

const handleNumberInput = (field) => {
  touched[field] = true
}
</script>

<template>
  <!-- Card Form -->
  <form v-if="!isComplete" class="flex w-81.75 flex-col gap-6 md:w-95.75 md:gap-10" @submit.prevent="handleSubmit" novalidate>

    <!-- Cardholder Name Field -->
    <fieldset class="flex flex-col gap-6">
      <legend class="sr-only">Cardholder information</legend>

      <!-- Cardholder Name Label -->
      <div class="field-group">
        <label for="cardName">Cardholder Name</label>
        <input
          id="cardName"
          type="text"
          v-model="cardData.name"
          placeholder="e.g. Jane Appleseed"
          class="input-field"
          :class="{ 'border-red500': showError('name') }"
          aria-describedby="nameError"
          maxlength="25"
          required
          @blur="handleBlur('name')"
        />
        <span v-if="showError('name')" id="nameError" role="alert" class="text-red500 text-xs mt-1">Can't be blank</span>
      </div>

      <!-- Card Number Field -->
      <div class="field-group">
        <label for="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          v-model="cardData.number"
          placeholder="e.g. 1234 5678 9123 0000"
          class="input-field peer"
          :class="{ 'border-red500': showError('number') }"
          aria-describedby="numberError"
          maxlength="16"
          required          
          @blur="handleBlur('number')"
          @input="handleNumberInput"
        />        
        <span v-if="showError('number')" id="numberError" role="alert" class="text-red500 text-xs mt-1">Wrong format, numbers only</span>
      </div>

      <!-- Expiry and CVC Fields -->
      <div class="flex gap-6">

        <!-- Expiry Date Field -->
        <div class="field-group flex-1">
          <fieldset class="flex flex-col gap-2">
            <legend class="sr-only">Expiration date</legend>
            <label for="expMonth">Exp. Date (MM/YY)</label>
            <div class="flex gap-2">
              <input
                type="text"
                id="expMonth"
                v-model="cardData.month"
                placeholder="MM"
                class="input-field"
                :class="{ 'border-red500': showError('month') }"
                aria-label="Month"
                maxlength="2"
                required
                @blur="handleBlur('month')"
                @input="handleNumberInput('month')"
              />
              <input
                type="text"
                id="expYear"
                v-model="cardData.year"
                placeholder="YY"
                class="input-field"
                :class="{ 'border-red500': showError('year') }"
                aria-label="Year"
                maxlength="2"
                required
                @blur="handleBlur('year')"
                @input="handleNumberInput('year')"
              />
            </div>
          </fieldset>
          <span v-if="showError('month') || showError('year')" id="expError" role="alert" class="text-red500 text-xs mt-1">Can't be blank</span>
        </div>

        <!-- CVC Field -->
        <div class="field-group flex-1">
          <label for="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            v-model="cardData.cvc"
            placeholder="e.g. 123"
            class="input-field focus-visible:ring-off"
            :class="{ 'border-red500': showError('cvc') }"
            aria-describedby="cvcError"
            maxlength="3"
            required
            @blur="handleBlur('cvc')"
          />
          <span v-if="showError('cvc')" id="cvcError" role="alert" class="text-red500 text-xs mt-1">Can't be blank</span>
        </div>
      </div>
    </fieldset>

    <!-- Confirm Button -->
    <button type="submit" class="btn active:scale-95">Confirm</button>    
  </form>

  <!-- Complete State -->
  <article v-else class="flex flex-col gap-8 items-center w-81.75" aria-live="polite">
    <img src="/src/assets/images/icon-complete.svg" alt="Form completed successfully" class="size-20" />

    <!-- Message Container -->
    <div class="flex flex-col gap-12 items-center w-full">

      <!-- Message Text Container -->
      <div class="flex flex-col gap-4 w-full items-center">
        <h2 class="text-[28px] leading-[1.3] tracking-[3.5px] text-purple950">THANK YOU!</h2>
        <p class="text-[18px] leading-[1.3] text-gray400">Your card details have been added.</p>
      </div>

      <!-- Button Continue -->
      <button type="button" class="btn w-full" @click="handleContinue">Continue</button>
    </div>
  </article>
</template>
