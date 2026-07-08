<script setup>
import { ref, onMounted } from 'vue';
import Dice3D from './Dice3D.vue';

// Variables reactivas
const adviceId = ref(null);
const adviceText = ref('Loading advice...');
const textOriginalIngles = ref('');
const idiomaActual = ref('en');
const menuAbierto = ref(false);

// Textos fijos de la interfaz
const textosInterfaz = {
  en: {
    titulo: 'ADVICE',
    cargando: 'Loading advice...',
    error: 'Could not load advice. Please try again.',
    botonAlt: 'Generate new advice',
  },
  es: {
    titulo: 'CONSEJO',
    cargando: 'Cargando consejo...',
    error: 'No se pudo cargar el consejo. Por favor, intenta de nuevo.',
    botonAlt: 'Generar nuevo consejo',
  },
  fr: {
    titulo: 'CONSEIL',
    cargando: 'Chargement du conseil...',
    error: 'Impossible de charger le conseil. Veuillez réessayer.',
    botonAlt: 'Générer un nouveau conseil',
  },
};

const dadoRef = ref(null);

// Se encarga exclusivamente de traducir el texto guardado
const traducirTexto = async (texto, idioma) => {
  if (idioma === 'en') return texto;

  try {
    const resTraduccion = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|${idioma}`,
    );
    const dataTraduccion = await resTraduccion.json();
    return dataTraduccion.responseData.translatedText;
  } catch (error) {
    console.error('Error al traducir:', error);
    return textosInterfaz[idioma].error;
  }
};

// solo obtiene un consejo nuevo cuando tiras el dado
const fetchAdvice = async () => {
  if (dadoRef.value) {
    dadoRef.value.iniciarGiro();
  }

  adviceText.value = textosInterfaz[idiomaActual.value].cargando;

  try {
    const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
    const data = await response.json();

    adviceId.value = data.slip.id;
    textOriginalIngles.value = data.slip.advice;

    // Traducimos el consejo recién obtenido al idioma activo
    adviceText.value = await traducirTexto(textOriginalIngles.value, idiomaActual.value);
  } catch (error) {
    console.error('Error en la petición principal:', error);
    adviceText.value = textosInterfaz[idiomaActual.value].error;
  } finally {
    // El bloque 'finally' se ejecuta SIEMPRE (termine bien o con error)
    // Justo aquí paramos el dado en seco en el mismo render cycle
    if (dadoRef.value) {
      dadoRef.value.detenerGiro();
    }
  }
};

// Cambia el idioma y traduce el texto actual en pantalla
const cambiarIdioma = async (codigoIdioma) => {
  idiomaActual.value = codigoIdioma;
  menuAbierto.value = false;

  // Si ya tenemos un consejo cargado, lo traducimos directamente sin consultar de nuevo a Advice Slip
  if (textOriginalIngles.value) {
    adviceText.value = textosInterfaz[codigoIdioma].cargando;
    adviceText.value = await traducirTexto(textOriginalIngles.value, codigoIdioma);
  }
};

onMounted(() => {
  fetchAdvice();
});
</script>

<template>
  <main class="advCont relative">
    <!-- ** -->
    <div
      v-if="menuAbierto"
      class="animate-fade-in absolute inset-0 z-10 rounded-[inherit] bg-slate-950/70 backdrop-blur-xs transition-all duration-300"
      @click="menuAbierto = false" />
      
    <!-- ** -->
    <div class="absolute top-4 right-4 z-10 flex gap-2">
      <span
        class="text-[12px] font-bold tracking-wider uppercase select-none"
        style="color: var(--color-blue-200)">
        {{ idiomaActual }}
      </span>

      <button
        type="button"
        aria-label="Select language"
        :aria-expanded="menuAbierto.toString()"
        aria-haspopup="true"
        class="btnHam group flex h-4 w-6 cursor-pointer flex-col justify-between"
        @click="menuAbierto = !menuAbierto">
        <span
          class="h-0.5 w-full bg-blue-200 transition-all duration-300"
          :class="{ 'translate-y-1.5 rotate-45': menuAbierto }" />
        <span
          class="h-0.5 w-full bg-blue-200 transition-all duration-300"
          :class="{ 'opacity-0': menuAbierto }" />
        <span
          class="h-0.5 w-full bg-blue-200 transition-all duration-300"
          :class="{ '-translate-y-2 -rotate-45': menuAbierto }" />
      </button>

      <ul
        v-if="menuAbierto"
        class="absolute right-0 mt-6 w-24 rounded-md border border-blue-950 bg-slate-800 py-1 text-[14px] shadow-lg">
        <li>
          <button
            class="btnLang"
            :class="{ 'font-bold text-green-300!': idiomaActual === 'en' }"
            @click="cambiarIdioma('en')">
            English
          </button>
        </li>
        <li>
          <button
            class="btnLang"
            :class="{ 'font-bold text-green-300!': idiomaActual === 'es' }"
            @click="cambiarIdioma('es')">
            Español
          </button>
        </li>
        <li>
          <button
            class="btnLang"
            :class="{ 'font-bold text-green-300!': idiomaActual === 'fr' }"
            @click="cambiarIdioma('fr')">
            Français
          </button>
        </li>
      </ul>
    </div>

    <!-- ** -->
    <div class="cont">
      <div class="flex min-h-40.5 flex-col justify-evenly gap-[clamp(16px,calc(8.366px+2.036vw),24px)] text-center">
        <h1 class="text-[13px] leading-[1.35] tracking-[4px] text-green-300">
          {{ textosInterfaz[idiomaActual].titulo }} #{{ adviceId || '...' }}
        </h1>
        <p class="text-[clamp(1rem,calc(1.261rem+1.018vw),1.75rem)] leading-[1.35] tracking-[-0.3px]" aria-live="polite">
          “{{ adviceText }}”
        </p>
      </div>

      <picture>
        <source
          srcset="../assets/images/pattern-divider-desktop.svg"
          media="(min-width:768px)">
        <img
          src="../assets/images/pattern-divider-mobile.svg"
          alt="">
      </picture>

      <button
        type="button"
        :aria-label="textosInterfaz[idiomaActual].botonAlt"
        class="btnAdv absolute bottom-0 flex size-16 translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-green-300 active:scale-90"
        @click="fetchAdvice">
        <Dice3D ref="dadoRef" />
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

.btnAdv:hover,
.btnAdv:active {
  box-shadow: 0px 0px 40px rgba(83, 255, 170, 1);
}

.btnLang {
  width: 100%;
  text-align: center;
  padding-block: 8px;
  padding-inline: 16px;
  color: var(--color-blue-200);
  border-radius: 6px;
  transition: all;
  cursor: pointer;
}

.btnLang:hover {
  color: var(--color-green-300);
  box-shadow: 0px 0px 3px rgba(83, 255, 170, 1);
}

.btnAdv:focus-visible,
.btnLang:focus-visible,
.btnHam:focus-visible {
  outline: 3px solid rgba(83, 255, 170, 1);
  outline-offset: 4px;
}
</style>
