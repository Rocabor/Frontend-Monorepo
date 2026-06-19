<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  fullName: { type: String, default: '' },
  emailAddress: { type: String, default: '' },
  githubUsername: { type: String, default: '' },
  avatarPreview: { type: String, default: '' },
});

const location = ref('Austin, TX');
const ticketContainer = ref(null); // Referencia para enfocar el contenedor principal

// Exponemos el método focus() para que el componente padre lo invoque
const focus = () => {
  ticketContainer.value?.focus();
};
defineExpose({ focus });

const generateTicketNumber = () => {
  const min = 10000;
  const max = 99999;
  return `#${Math.floor(Math.random() * (max - min + 1) + min)}`;
};

const getCurrentDate = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

const ticketNumber = ref(generateTicketNumber());
const conferenceDate = ref(getCurrentDate());

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
          );
          const data = await response.json();

          if (data.city) {
            let regionAbreviada = data.countryCode;

            if (data.principalSubdivisionCode) {
              const partes = data.principalSubdivisionCode.split('-');
              regionAbreviada = partes[1] || data.countryCode;
            }

            location.value = `${data.city}, ${regionAbreviada}`;
          }
        } catch (error) {
          console.error('Error al consultar el servicio de geolocalización:', error);
        }
      },
      (error) => {
        console.warn('Permiso denegado o ubicación no disponible:', error.message);
      },
    );
  }
});
</script>

<template>
  <!-- tabindex="-1" permite enfocar programáticamente este contenedor sin interferir con la navegación normal de Tabulación -->
  <div
    ref="ticketContainer"
    tabindex="-1"
    class="flex w-full max-w-222.75 flex-col items-center gap-18 focus:outline-none md:mx-7.75 xl:mx-auto"
    aria-live="polite">
    <div class="flex flex-col gap-5 text-center">
      <h1 class="text-preset-1">
        Congrats,
        <span class="bg-gradient-text bg-clip-text text-transparent">{{ fullName }}!</span>
        Your ticket is ready.
      </h1>
      <p class="text-preset-5t text-neutral-300 md:mx-auto md:w-128.5">
        We've emailed your ticket to
        <span class="text-orange-500">{{ emailAddress }}</span>
        and will send updates in the run up to the event.
      </p>
    </div>

    <!-- Tarjeta del ticket -->
    <div
      class="bg-pattern-ticket h-40 w-full bg-cover bg-center bg-no-repeat md:h-70 md:w-150"
      role="article"
      :aria-label="`Conference ticket for ${fullName}`">
      <div class="relative flex h-full flex-col justify-between p-4 md:p-6">
        <header class="flex gap-3 md:gap-4">
          <img
            src="../assets/images/logo-mark.svg"
            alt=""
            aria-hidden="true">
          <div class="flex flex-col gap-2 md:gap-3">
            <h2 class="text-preset-1t">
              Coding Conf
            </h2>
            <span class="text-preset-2t">{{ conferenceDate }} / {{ location }}</span>
          </div>
        </header>

        <div class="flex gap-3 md:gap-4">
          <img
            :src="avatarPreview"
            :alt="`Profile photo of ${fullName}`"
            class="size-11.25 rounded-[6.75px] object-cover md:size-20">

          <div class="flex flex-col justify-center gap-1 md:gap-2">
            <p class="text-preset-3t font-medium">
              {{ fullName }}
            </p>
            <p class="flex items-center gap-1">
              <img
                src="../assets/images/icon-github.svg"
                alt=""
                aria-hidden="true"
                class="h-4 w-3.75 md:h-5.5 md:w-5.25">
              <span class="text-preset-4t">
                <span class="sr-only">GitHub username:</span>
                {{ githubUsername }}
              </span>
            </p>
          </div>
        </div>

        <p
          class="text-preset-6t absolute top-1/2 right-8 translate-x-1/2 -translate-y-1/2 rotate-90 text-neutral-500 md:right-12.5">
          <span class="sr-only">Ticket number:</span>
          {{ ticketNumber }}
        </p>
      </div>
    </div>
  </div>
</template>
