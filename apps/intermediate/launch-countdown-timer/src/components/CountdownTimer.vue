<script setup>
import { useCountdown } from '../composables/useCountdown';
import FlipCard from './FlipCard.vue';

const { days, hours, minutes, seconds, isFinished } = useCountdown(15);
</script>

<template>
  <div class="countdown-container">
    <h1 class="title">We're launching soon</h1>

    <div
      v-if="!isFinished"
      class="cards">
      <FlipCard
        :value="days"
        label="Days" />
      <FlipCard
        :value="hours"
        label="Hours" />
      <FlipCard
        :value="minutes"
        label="Minutes" />
      <FlipCard
        :value="seconds"
        label="Seconds" />
    </div>

    <div
      v-else
      class="launched-message">
      <h2>We've launched!</h2>
    </div>

    <div class="social-icons">
      <a
        href="#"
        aria-label="Facebook">
        <img
          src="../assets/images/icon-facebook.svg"
          alt="" />
      </a>
      <a
        href="#"
        aria-label="Pinterest">
        <img
          src="../assets/images/icon-pinterest.svg"
          alt="" />
      </a>
      <a
        href="#"
        aria-label="Instagram">
        <img
          src="../assets/images/icon-instagram.svg"
          alt="" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  /* El diseño original usa dos fondos: las estrellas y las montañas abajo */
  background:
    url('../assets/images/pattern-hills.svg') no-repeat bottom center / 100% auto,
    url('../assets/images/bg-stars.svg') repeat center center,
    linear-gradient(to bottom, #1e1e28, #251d2c);
  padding: 130px 24px 0;
  box-sizing: border-box;
}

.title {
  font-family: 'Red Hat Text', sans-serif;
  font-size: clamp(14px, 4vw, 22px);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 7px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin-bottom: 0;
}

.cards {
  display: flex;
  gap: clamp(12px, 3vw, 32px); /* Espaciado adaptativo entre tarjetas */
  margin-top: 100px;
}

.launched-message {
  margin-top: 100px;
}

.launched-message h2 {
  font-family: 'Red Hat Text', sans-serif;
  font-size: clamp(1.5rem, 6vw, 3.5rem);
  color: #fb5e84;
}

.social-icons {
  display: flex;
  gap: 32px;
  margin-top: auto;
  padding-bottom: 48px;
  z-index: 10; /* Asegura que quede por encima del fondo de las montañas */
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

/* Color exacto de hover usando filtros CSS */
.social-icons a:hover {
  transform: scale(1.4) rotate(30deg);
  filter: invert(53%) sepia(24%) saturate(4646%) hue-rotate(315deg) brightness(101%) contrast(98%)
    drop-shadow(0px 0px 5px #fb5e84);
}
.social-icons img {
  width: 24px;
  height: 24px;
}
</style>
