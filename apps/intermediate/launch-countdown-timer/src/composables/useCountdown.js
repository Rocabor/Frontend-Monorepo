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
    const { days: d = 14, hours: h = 0, minutes: m = 0, seconds: s = 0 } = configRef.value || configRef

    now.setDate(now.getDate() + Number(d))
    now.setHours(now.getHours() + Number(h))
    now.setMinutes(now.getMinutes() + Number(m))
    now.setSeconds(now.getSeconds() + Number(s))

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
