import { ref, watch, onUnmounted } from 'vue'

export function useCountdown(configRef = ref({ days: 14, hours: 0, minutes: 0, seconds: 0 })) {
  let interval = null
  const target = ref(new Date())

  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const isFinished = ref(false)

  // Calcula una nueva fecha objetivo basada en los valores actuales de la configuración
  function startCountdown() {
    if (interval) clearInterval(interval)

    const now = new Date()
    const config = configRef.value || configRef
    
    // Sumamos la configuración actual a partir de la hora de inicio (ahora)
    const d = Number(config.days ?? 14)
    const h = Number(config.hours ?? 0)
    const m = Number(config.minutes ?? 0)
    const s = Number(config.seconds ?? 0)

    now.setDate(now.getDate() + d)
    now.setHours(now.getHours() + h)
    now.setMinutes(now.getMinutes() + m)
    now.setSeconds(now.getSeconds() + s)

    target.value = now
    isFinished.value = false

    update()
    interval = setInterval(update, 1000)
  }

  function update() {
    const now = new Date()
    const diff = Math.max(0, Math.ceil((target.value - now) / 1000))

    if (diff === 0) {
      isFinished.value = true
      if (interval) clearInterval(interval)
    }

    days.value = Math.floor(diff / 86400)
    hours.value = Math.floor((diff % 86400) / 3600)
    minutes.value = Math.floor((diff % 3600) / 60)
    seconds.value = diff % 60
  }

  watch(configRef, () => {
    startCountdown()
  }, { immediate: true })

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })

  return { days, hours, minutes, seconds, isFinished }
}
