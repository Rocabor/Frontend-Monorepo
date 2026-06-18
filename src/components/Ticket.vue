<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  githubUsername: { type: String, required: true },
  avatarPreview: { type: String, required: true }
})

const location = ref('Austin, TX')

const generateTicketNumber = () => {
  const min = 10000
  const max = 99999
  return `#${Math.floor(Math.random() * (max - min + 1) + min)}`
}

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

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
          const data = await response.json()
          if (data.city) {
            const region = data.principalSubdivision || data.countryCode
            location.value = `${data.city}, ${region}`
          }
        } catch (error) {
          console.error("Error al consultar el servicio de geolocalización:", error)
        }
      },
      (error) => {
        console.warn("Permiso denegado o ubicación no disponible:", error.message)
      }
    )
  }
})
</script>

<template>
  <div class="flex flex-col gap-18 items-center w-full max-w-222.75 md:mx-7.75 xl:mx-auto" aria-live="polite">
    
    <div class="flex flex-col gap-5 text-center">
      <h1 class="text-preset-1">
        Congrats,
        <span class="bg-gradient-text text-transparent bg-clip-text">{{ fullName }}!</span>
        Your ticket is ready.
      </h1>
      <p class="text-preset-5t text-neutral-300 md:w-128.5 md:mx-auto">
        We've emailed your ticket to <span class="text-orange-500">{{ emailAddress }}</span> and will send updates in the run up to the event.
      </p>
    </div>

    <div class="bg-pattern-ticket h-40 w-full bg-cover bg-center bg-no-repeat md:w-150 md:h-70 " role="article" :aria-label="`Conference ticket for ${fullName}`">
      <div class="relative flex flex-col justify-between h-full p-4 md:p-6">
        
        <header class="flex gap-3 md:gap-4">
          <img src="../assets/images/logo-mark.svg" alt="" aria-hidden="true" />
          <div class="flex flex-col gap-2 md:gap-3">
            <h2 class="text-preset-1t">Coding Conf</h2>
            <span class="text-preset-2t">{{ conferenceDate }} / {{ location }}</span>
          </div>
        </header>

        <div class="flex gap-3 md:gap-4">
          <img :src="avatarPreview" 
               :alt="`Profile photo of ${fullName}`" 
               class="size-11.25 rounded-[6.75px] object-cover md:size-20" />

          <div class="flex flex-col justify-center gap-1 md:gap-2">
            <p class="text-preset-3t font-medium">{{ fullName }}</p>
            <p class="flex gap-1 items-center">
              <img src="../assets/images/icon-github.svg" alt="" aria-hidden="true" class="w-3.75 h-4 md:w-5.25 md:h-5.5">
              <span class="text-preset-4t">
                <span class="sr-only">GitHub username:</span>{{ githubUsername }}
              </span>
            </p>
          </div>
        </div>

        <p class="absolute top-1/2 -translate-y-1/2 right-8 md:right-12.5 rotate-90 translate-x-1/2 text-preset-6t text-neutral-500">
          <span class="sr-only">Ticket number:</span> {{ ticketNumber }}
        </p>
      </div>
    </div>
  </div>
</template>