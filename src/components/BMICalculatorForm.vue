<template>
  <div class="bg-white p-300 md:p-400 shadow-xl rounded-2xl border border-blue-100/50 w-full">
    <h2 class="text-preset-4 text-blue-900 mb-300">Enter your details below</h2>
    
    <div class="grid grid-cols-2 gap-200 mb-300">
      <label class="flex items-center gap-100 cursor-pointer text-preset-6-semibold text-blue-900">
        <input type="radio" value="metric" v-model="unitSystem" class="w-5 h-5 accent-blue-500" />
        Metric
      </label>
      <label class="flex items-center gap-100 cursor-pointer text-preset-6-semibold text-blue-900">
        <input type="radio" value="imperial" v-model="unitSystem" class="w-5 h-5 accent-blue-500" />
        Imperial
      </label>
    </div>

    <div class="space-y-200">
      <div v-if="unitSystem === 'metric'" class="grid grid-cols-1 md:grid-cols-2 gap-200">
        <div>
          <label class="text-preset-7-regular text-grey-500 block mb-100">Height</label>
          <div class="relative">
            <input type="number" v-model.number="metric.height" placeholder="0" class="w-full border border-grey-300 rounded-xl p-200 text-preset-4 font-bold text-blue-900 focus:outline-none focus:border-blue-500 pr-500" />
            <span class="absolute right-200 top-1/2 -translate-y-1/2 text-preset-4 font-bold text-blue-500">cm</span>
          </div>
        </div>
        <div>
          <label class="text-preset-7-regular text-grey-500 block mb-100">Weight</label>
          <div class="relative">
            <input type="number" v-model.number="metric.weight" placeholder="0" class="w-full border border-grey-300 rounded-xl p-200 text-preset-4 font-bold text-blue-900 focus:outline-none focus:border-blue-500 pr-500" />
            <span class="absolute right-200 top-1/2 -translate-y-1/2 text-preset-4 font-bold text-blue-500">kg</span>
          </div>
        </div>
      </div>

      <div v-else class="space-y-200">
        <div>
          <label class="text-preset-7-regular text-grey-500 block mb-100">Height</label>
          <div class="grid grid-cols-2 gap-200">
            <div class="relative">
              <input type="number" v-model.number="imperial.ft" placeholder="0" class="w-full border border-grey-300 rounded-xl p-200 text-preset-4 font-bold text-blue-900 focus:outline-none focus:border-blue-500 pr-400" />
              <span class="absolute right-200 top-1/2 -translate-y-1/2 text-preset-4 font-bold text-blue-500">ft</span>
            </div>
            <div class="relative">
              <input type="number" v-model.number="imperial.in" placeholder="0" class="w-full border border-grey-300 rounded-xl p-200 text-preset-4 font-bold text-blue-900 focus:outline-none focus:border-blue-500 pr-400" />
              <span class="absolute right-200 top-1/2 -translate-y-1/2 text-preset-4 font-bold text-blue-500">in</span>
            </div>
          </div>
        </div>
        <div>
          <label class="text-preset-7-regular text-grey-500 block mb-100">Weight</label>
          <div class="grid grid-cols-2 gap-200">
            <div class="relative">
              <input type="number" v-model.number="imperial.st" placeholder="0" class="w-full border border-grey-300 rounded-xl p-200 text-preset-4 font-bold text-blue-900 focus:outline-none focus:border-blue-500 pr-400" />
              <span class="absolute right-200 top-1/2 -translate-y-1/2 text-preset-4 font-bold text-blue-500">st</span>
            </div>
            <div class="relative">
              <input type="number" v-model.number="imperial.lbs" placeholder="0" class="w-full border border-grey-300 rounded-xl p-200 text-preset-4 font-bold text-blue-900 focus:outline-none focus:border-blue-500 pr-400" />
              <span class="absolute right-200 top-1/2 -translate-y-1/2 text-preset-4 font-bold text-blue-500">lbs</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-400 bg-blue-500 text-white p-300 md:p-400 rounded-2xl md:rounded-r-[100px] md:rounded-l-2xl">
      <div v-if="bmi > 0" class="grid grid-cols-1 md:grid-cols-2 gap-200 items-center">
        <div>
          <p class="text-preset-6-semibold text-white/90">Your BMI is...</p>
          <h3 class="text-[48px] md:text-[64px] font-semibold leading-none tracking-tight my-100">{{ bmi }}</h3>
        </div>
        <div>
          <p class="text-preset-7-regular text-white/90">
            Your BMI suggests you're a <span class="font-bold">{{ bmiClassification }}</span>. 
            Your ideal weight is between <span class="font-bold">{{ idealWeightRange }}</span>.
          </p>
        </div>
      </div>
      <div v-else>
        <h3 class="text-preset-4 text-white mb-100">Welcome!</h3>
        <p class="text-preset-7-regular text-white/80">Enter your height and weight and you’ll see your BMI result here.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

const emit = defineEmits(['update-bmi']);

const unitSystem = ref('metric');
const metric = reactive({ height: '', weight: '' });
const imperial = reactive({ ft: '', in: '', st: '', lbs: '' });

// Cálculo del IMC
const bmi = computed(() => {
  if (unitSystem.value === 'metric') {
    if (metric.height > 0 && metric.weight > 0) {
      return Number((metric.weight / Math.pow(metric.height / 100, 2)).toFixed(1));
    }
  } else {
    const totalInches = (Number(imperial.ft) * 12) + Number(imperial.in);
    const totalLbs = (Number(imperial.st) * 14) + Number(imperial.lbs);
    if (totalInches > 0 && totalLbs > 0) {
      return Number(((totalLbs / Math.pow(totalInches, 2)) * 703).toFixed(1));
    }
  }
  return 0;
});

const bmiClassification = computed(() => {
  if (bmi.value < 18.5) return 'underweight';
  if (bmi.value <= 24.9) return 'healthy weight';
  if (bmi.value <= 29.9) return 'overweight';
  return 'obese';
});

const idealWeightRange = computed(() => {
  if (unitSystem.value === 'metric') {
    const h = metric.height > 0 ? metric.height / 100 : 1.85;
    return `${(18.5 * h * h).toFixed(1)}kgs - ${(24.9 * h * h).toFixed(1)}kgs`;
  } else {
    const totalInches = ((Number(imperial.ft) || 6) * 12) + (Number(imperial.in) || 1);
    const min = ((18.5 * totalInches * totalInches) / 703).toFixed(1);
    const max = ((24.9 * totalInches * totalInches) / 703).toFixed(1);
    return `${min}lbs - ${max}lbs`;
  }
});

// Emitir cambios hacia el componente padre si los necesitas para sincronizar estados
watch(bmi, (newBmi) => {
  emit('update-bmi', { bmi: newBmi, classification: bmiClassification.value });
});
</script>