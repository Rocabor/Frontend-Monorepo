import { ref, onUnmounted } from 'vue'

export function useCountdown(daysToAdd = 14) {
  const target = new Date()
  target.setDate(target.getDate() + daysToAdd)

  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const isFinished = ref(false)

  function update() {
    const now = new Date()
    const diff = Math.max(0, Math.floor((target - now) / 1000))

    if (diff === 0) {
      isFinished.value = true
      clearInterval(interval)
    }

    days.value = Math.floor(diff / 86400)
    hours.value = Math.floor((diff % 86400) / 3600)
    minutes.value = Math.floor((diff % 3600) / 60)
    seconds.value = Math.floor(diff % 60)
  }

  update()
  const interval = setInterval(update, 1000)

  onUnmounted(() => clearInterval(interval))

  return { days, hours, minutes, seconds, isFinished }
}
