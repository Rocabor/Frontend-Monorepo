<script setup>
import { ref, reactive, computed, watch } from 'vue';

const emit = defineEmits(['update-bmi']);

const unitSystem = ref('metric');
const metric = reactive({ height: '', weight: '' });
const imperial = reactive({ ft: '', in: '', st: '', lbs: '' });

// Cálculo del IMC (Garantiza siempre el formato de 1 decimal string)
const bmi = computed(() => {
  if (unitSystem.value === 'metric') {
    if (metric.height > 0 && metric.weight > 0) {
      return (metric.weight / Math.pow(metric.height / 100, 2)).toFixed(1);
    }
  } else {
    const totalInches = Number(imperial.ft) * 12 + Number(imperial.in);
    const totalLbs = Number(imperial.st) * 14 + Number(imperial.lbs);
    if (totalInches > 0 && totalLbs > 0) {
      return ((totalLbs / Math.pow(totalInches, 2)) * 703).toFixed(1);
    }
  }
  return '0.0'; // Cambiado de 0 a "0.0" para consistencia de tipo string
});

const bmiClassification = computed(() => {
  const score = Number(bmi.value);
  if (score === 0) return 'enter details';
  if (score < 18.5) return 'underweight';
  if (score <= 24.9) return 'healthy weight';
  if (score <= 29.9) return 'overweight';
  return 'obese';
});

// Rango de peso ideal exacto y corregido
const idealWeightRange = computed(() => {
  if (unitSystem.value === 'metric') {
    // Si no hay altura válida, no calcula nada aún
    if (!metric.height || metric.height <= 0) return '';
    const h = metric.height / 100;
    return `${(18.5 * h * h).toFixed(1)}kgs - ${(24.9 * h * h).toFixed(1)}kgs`;
  } else {
    // Si no hay pies ni pulgadas válidas, no calcula nada aún
    const ft = Number(imperial.ft) || 0;
    const inch = Number(imperial.in) || 0;
    const totalInches = ft * 12 + inch;
    if (totalInches <= 0) return '';

    // Obtener libras totales para los límites de IMC (18.5 y 24.9)
    const minLbsTotal = (18.5 * Math.pow(totalInches, 2)) / 703;
    const maxLbsTotal = (24.9 * Math.pow(totalInches, 2)) / 703;

    // Conversión matemática a Stones (dividiendo entre 14) y Residuo de Libras
    const minStones = Math.floor(minLbsTotal / 14);
    const minLbs = Math.round(minLbsTotal % 14);

    const maxStones = Math.floor(maxLbsTotal / 14);
    const maxLbs = Math.round(maxLbsTotal % 14);

    // Retorna el formato exacto británico: 9st 6lbs - 12st 10lbs
    return `${minStones}st ${minLbs}lbs - ${maxStones}st ${maxLbs}lbs`;
  }
});

// Emitir cambios hacia el componente padre
watch(bmi, (newBmi) => {
  emit('update-bmi', { bmi: newBmi, classification: bmiClassification.value });
});
</script>

<template>
  <!--* Form -->
  <div class="w-full rounded-2xl bg-white p-6 shadow-(--shadow-form) md:p-8">
    
    <!--* Form Header -->
    <h2 class="text-preset-4 mb-6 md:mb-8 md:text-left">Enter your details below</h2>

    <!--* Unit Selector -->
    <div class="mb-6 grid grid-cols-2 gap-6 md:mb-8">
      <label class="text-preset-6-semibold flex cursor-pointer items-center gap-4">
        <input type="radio" value="metric" v-model="unitSystem" class="radio-custom size-7.75" />
        Metric
      </label>

      <label class="text-preset-6-semibold flex cursor-pointer items-center gap-4">
        <input type="radio" value="imperial" v-model="unitSystem" class="radio-custom size-7.75" />
        Imperial
      </label>
    </div>

    <!--* Input Fields | Metric -->
    <div class="space-y-4">
      <div v-if="unitSystem === 'metric'" class="grid grid-cols-1 gap-4 text-left md:grid-cols-2 md:gap-6">

        <!--* Height Input | Metric-->
        <div>
          <label class="text-preset-7-regular mb-2 block">Height</label>

          <div class="relative">
            <input
              type="number"
              v-model.number="metric.height"
              placeholder="0"
              class="border-grey-500 text-preset-4 w-full rounded-xl border p-6 pr-14  xl:py-4" />

            <span class="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">cm</span>
          </div>
        </div>

        <!--* Weight Input | Metric-->
        <div>
          <label class="text-preset-7-regular mb-2 block">Weight</label>

          <div class="relative">
            <input
              type="number"
              v-model.number="metric.weight"
              placeholder="0"
              class="border-grey-500 text-preset-4 w-full rounded-xl border p-6 pr-14  xl:py-4" />

            <span class="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">kg</span>
          </div>
        </div>
      </div>

      <!--* Input Fields | Imperial -->
      <div v-else class="space-y-4 text-left">
        <div>
          <!--* Height Input | Imperial-->
          <label class="text-preset-7-regular mb-2 block">Height</label>

          <div class="grid grid-cols-2 gap-4">
            <div class="relative">
              <input
                type="number"
                v-model.number="imperial.ft"
                placeholder="0"
                class="border-grey-300 text-preset-4 w-full rounded-xl border p-6 pr-12 " />

              <span class="text-preset-4 absolute top-1/2 right-4 -translate-y-1/2 text-blue-500">ft</span>
            </div>

            <div class="relative">
              <input
                type="number"
                v-model.number="imperial.in"
                placeholder="0"
                class="border-grey-300 text-preset-4 w-full rounded-xl border p-6 pr-12 text-blue-900 " />

              <span class="text-preset-4 absolute top-1/2 right-4 -translate-y-1/2 text-blue-500">in</span>
            </div>
          </div>
        </div>

        <!--* Weight Input | Imperial -->
        <div>
          <label class="text-preset-7-regular text-grey-500 mb-2 block">Weight</label>

          <div class="grid grid-cols-2 gap-4">
            <div class="relative">
              <input
                type="number"
                v-model.number="imperial.st"
                placeholder="0"
                class="border-grey-300 text-preset-4 w-full rounded-xl border p-6 pr-12 " />

              <span class="text-preset-4 absolute top-1/2 right-4 -translate-y-1/2 text-blue-500">st</span>
            </div>

            <div class="relative">
              <input
                type="number"
                v-model.number="imperial.lbs"
                placeholder="0"
                class="border-grey-300 text-preset-4 w-full rounded-xl border p-6 pr-12 " />

              <span class="text-preset-4 absolute top-1/2 right-4 -translate-y-1/2 text-blue-500">lbs</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--* Form Section -->
    <div class="mt-6 rounded-2xl bg-blue-500 p-8 text-left md:mt-8 md:rounded-l-2xl md:rounded-r-[100px]">
      <div v-if="bmi > 0" class="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div>
          <p class="text-preset-6-semibold text-white">Your BMI is...</p>
          <h3 class="text-preset-2 my-2 text-white">{{ bmi }}</h3>
        </div>

        <div>
          <p class="text-preset-7-regular text-white">
            Your BMI suggests you're a
            <span class="font-bold">{{ bmiClassification }}</span>
            . Your ideal weight is between
            <span class="font-bold">{{ idealWeightRange }}</span>
            .
          </p>
        </div>
      </div>

      <div v-else>
        <h3 class="text-preset-4 mb-6 text-white md:mb-4">Welcome!</h3>
        <p class="text-preset-7-regular text-white">
          Enter your height and weight and you’ll see your BMI result here.
        </p>
      </div>
    </div>
  </div>
</template>
