<script setup>
import iconGender from '../assets/images/icon-gender.svg';
import iconAge from '../assets/images/icon-age.svg';
import iconMuscle from '../assets/images/icon-muscle.svg';
import iconPreg from '../assets/images/icon-pregnancy.svg';
import iconRace from '../assets/images/icon-race.svg';

const limitations = [
  {
    iconSrc: iconGender,
    title: 'Gender',
    desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    gridClass: 'xl:col-start-8 xl:w-[365px] ',
  },
  {
    iconSrc: iconAge,
    title: 'Age',
    desc: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
    gridClass: 'xl:col-start-5 xl:w-[365px]',
  },
  {
    iconSrc: iconMuscle,
    title: 'Muscle',
    desc: "BMI may mislead muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    gridClass: 'xl:col-start-9 xl:w-[365px] ',
  },
  {
    iconSrc: iconPreg,
    title: 'Pregnancy',
    desc: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.',
    gridClass: 'xl:col-start-3 xl:w-[365px] ',
  },
  {
    iconSrc: iconRace,
    title: 'Race',
    desc: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
    gridClass: 'md:col-span-2 mx-auto max-w-[365px] xl:col-start-7 xl:w-[365px]',
  },
];
</script>

<template>
  <section
    class="relative mx-auto my-20.5 grid grid-cols-1 gap-x-4 gap-y-6 px-6 md:grid-cols-2 md:grid-rows-[auto_232px_256px_232px] md:px-10 xl:grid-cols-12 xl:grid-rows-[232px_184px_232px] xl:my-26 xl:w-290 xl:px-0 xl:gap-8 ">
    <div class="space-y-8 pr-0 text-center md:col-span-2 md:text-left xl:w-141 ">
      <h2 class="text-preset-3 md:text-center xl:text-start">
        Limitations of BMI
      </h2>

      <p class="text-preset-6-regular mb-10 md:mb-14 md:text-center xl:text-start">
        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
        groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial
        to use.
      </p>
    </div>

    <img src="../assets/images/pattern-curved-line-right.svg" alt="" class="absolute hidden xl:block top-62.5 left-40">

    <div
      v-for="(item, index) in limitations"
      :key="index"
      :class="['shadow-form flex flex-col gap-4 rounded-2xl bg-white p-6 md:p-8', item.gridClass]">
      <div class="flex items-center gap-4">
        <span><img :src="item.iconSrc" alt=""></span>

        <h4 class="text-preset-5">
          {{ item.title }}
        </h4>
      </div>

      <p class="text-preset-6-regular">
        {{ item.desc }}
      </p>
    </div>
  </section>
</template>
