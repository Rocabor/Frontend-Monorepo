<script setup>
import { useCountdown } from '../composables/useCountdown'

const { days, hours, minutes, seconds, isFinished } = useCountdown(14)
</script>

<template>
  <div class="countdown-container">
    <h1 class="title">
      We're launching soon
    </h1>

    <div v-if="!isFinished" class="cards">
      <FlipCard :value="days" label="Days" />
      <FlipCard :value="hours" label="Hours" />
      <FlipCard :value="minutes" label="Minutes" />
      <FlipCard :value="seconds" label="Seconds" />
    </div>

    <div v-else class="launched-message">
      <h2>We've launched!</h2>
    </div>

    <div class="social-icons">
      <a href="#" aria-label="Facebook">
        <img src="../assets/images/icon-facebook.svg" alt="">
      </a>
      <a href="#" aria-label="Pinterest">
        <img src="../assets/images/icon-pinterest.svg" alt="">
      </a>
      <a href="#" aria-label="Instagram">
        <img src="../assets/images/icon-instagram.svg" alt="">
      </a>
    </div>
  </div>
</template>

<style scoped>
.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 3rem;
}

.cards {
  display: flex;
  gap: 1.5rem;
  margin-bottom: auto;
}

.launched-message h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: #ff5e7a;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  padding-top: 3rem;
}

.social-icons a {
  transition: filter 0.3s ease;
}

.social-icons a:hover {
  filter: brightness(0) saturate(100%) invert(54%) sepia(58%) saturate(4000%) hue-rotate(320deg);
}

.social-icons img {
  width: 24px;
  height: 24px;
}

@media (max-width: 500px) {
  .cards {
    gap: 0.5rem;
  }
}
</style>
