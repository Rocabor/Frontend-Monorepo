<script setup>
import { ref, onMounted } from 'vue';

// 1. Creamos variables reactivas para guardar los datos que nos dé la API
const adviceId = ref(null);
const adviceText = ref('Loading advice...');

// 2. Creamos la función asíncrona para conectarnos a la API
const fetchAdvice = async () => {
  try {
    // Agregamos el timestamp al final para evitar que la API nos devuelva consejos repetidos por el caché
    const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
    const data = await response.json();
    
    // 3. Guardamos los datos del JSON dentro de nuestras variables reactivas
    // Recuerda que la API los agrupa dentro del objeto ".slip"
    adviceId.value = data.slip.id;
    adviceText.value = data.slip.advice;
  } catch (error) {
    console.error('Error al conectar con la API:', error);
    adviceText.value = 'Could not load advice. Please try again.';
  }
};

// 4. Queremos que aparezca un consejo apenas el usuario abra la página web
onMounted(() => {
  fetchAdvice();
});
</script>

<template>
  <!--* Advice Container -->
  <main class="advCont relative">
    <!-- *** -->
    <!--* Text and Button Container -->
    <div class="cont ">
      <div class="flex flex-col  justify-evenly min-h-[162px] gap-[clamp(16px,calc(8.366px+2.036vw),24px)] text-center ">
        <h1 class="text-[13px] leading-[1.35] tracking-[4px] text-green-300">ADVICE #{{ adviceId || '...' }}</h1>
        <p class="text-[clamp(1rem,calc(1.261rem+1.018vw),1.75rem)] leading-[1.35] tracking-[-0.3px]">
          “{{ adviceText }}”
        </p>
      </div>
      <!-- *** -->
      <picture>
        <source
          srcset="../assets/images/pattern-divider-desktop.svg"
          media="(min-width:768px)" />
        <img
          src="../assets/images/pattern-divider-mobile.svg"
          alt="divider" />
      </picture>
      <!-- *** -->
      <button
        type="button"
        aria-label="Generate new advice"
        class="flex size-16 cursor-pointer items-center justify-center rounded-full bg-green-300 active:scale-90 absolute bottom-0 translate-y-1/2"
        @click="fetchAdvice">
        <img
          src="../assets/images/icon-dice-3d.svg"
          alt=""
          class="size-9" />
      </button>
    </div>
  </main>
</template>

<style scoped>
.advCont {
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-900);
  border-radius: clamp(10px, calc(5.23px + 1.27vw), 15px);
  width: clamp(343px, calc(155.02px + 50.13vw), 540px);
  min-height: 314px;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.1002);
  padding-top: clamp(40px, 32.37px + 2.04vw, 48px);
  padding-bottom: 64px;
}

.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(32px, calc(24.37px + 2.04vw), 40px);
  width: clamp(296px, calc(154.78px + 37.66vw), 444px);
}

button:hover, button:active {
  box-shadow: 0px 0px 40px rgba(83, 255, 170, 1);
}

button:focus-visible{
  outline: 3px solid rgba(83, 255, 170, 1);
  outline-offset: 4px;
}
</style>
