<script setup>
import { ref, onMounted } from 'vue'

// Recibir datos del formulario via props
const props = defineProps({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  githubUsername: { type: String, required: true },
  avatarPreview: { type: String, required: true }
})

// Variable reactiva para la localización (empieza con un valor por defecto)
const location = ref('Austin, TX')

// Generar número de ticket aleatorio
const generateTicketNumber = () => {
  const min = 10000
  const max = 99999
  return `#${Math.floor(Math.random() * (max - min + 1) + min)}`
}

// Función para obtener fecha actual del sistema
const getCurrentDate = () => {
  const date = new Date()
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return date.toLocaleDateString('en-US', options)
}

const ticketNumber = ref(generateTicketNumber())
const conferenceDate = ref(getCurrentDate())

// Lógica de Geolocalización al montar el componente
onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        
        try {
          // Usamos una API pública y gratuita de reverse-geocoding para obtener la ciudad
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
          const data = await response.json()
          
          // Si la API nos devuelve una ciudad, formateamos como "Ciudad, Estado/País"
          if (data.city) {
            const region = data.principalSubdivision || data.countryCode
            location.value = `${data.city}, ${region}`
          }
        } catch (error) {
          console.error("Error al consultar el servicio de geolocalización:", error)
          // Se mantiene 'Austin, TX' en caso de error en la API
        }
      },
      (error) => {
        console.warn("El usuario denegó el permiso o la ubicación no está disponible:", error.message)
        // Se mantiene 'Austin, TX' si el usuario rechaza el permiso
      }
    )
  } else {
    console.warn("La geolocalización no es soportada por este navegador.")
  }
})
</script>

<template>
  <div class="flex flex-col gap-18 items-center w-full max-w-222.75 md:mx-7.75 xl:mx-auto">
    <div class="flex flex-col gap-5 text-center">
      <h1 class="text-preset-1">
        Congrats,
        <span class="bg-gradient-text text-transparent bg-clip-text">{{ fullName }}!</span>
        Your ticket is ready.
      </h1>
      <p class="text-preset-5t text-neutral-300 md:w-[514px] md:mx-auto">
        We've emailed your ticket to <span class="text-orange-500">{{ emailAddress }}</span> and will send updates in the run up to the event.
      </p>
    </div>

    <div class="bg-pattern-ticket h-40 w-full bg-cover bg-center bg-no-repeat md:w-[600px] md:h-[280px] ">
      
      <div class="relative flex flex-col justify-between h-full p-4 md:p-6">

        <header class="flex gap-3 md:gap-4">
          <img src="../assets/images/logo-mark.svg" alt="Coding Conf Logo" />
          <div class="flex flex-col gap-2 md:gap-3">
            <h2 class="text-preset-1t">Coding Conf</h2>
            <span class="text-preset-2t">{{ conferenceDate }} / {{ location }}</span>
          </div>
        </header>

        <div class="flex gap-3 md:gap-4">
          <img :src="avatarPreview" 
               :alt="`Avatar of ${fullName}`" 
               class="size-11.25 rounded-[6.75px] object-cover md:size-20" />

          <div class="flex flex-col justify-center gap-1 md:gap-2">
            <h2 class="text-preset-3t">{{ fullName }}</h2>
            <p class="flex gap-1 items-center">
              <img src="../assets/images/icon-github.svg" alt="" class="w-3.75 h-4 md:w-[21px] md:h-[22px]">
              <span class="text-preset-4t">{{ githubUsername }}</span>
            </p>
          </div>
        </div>

        <p class="absolute top-1/2 -translate-y-1/2 right-8 md:right-[50px] rotate-90 translate-x-1/2 text-preset-6t text-neutral-500">
          {{ ticketNumber }}
        </p>

      </div>
    </div>
  </div>
</template>