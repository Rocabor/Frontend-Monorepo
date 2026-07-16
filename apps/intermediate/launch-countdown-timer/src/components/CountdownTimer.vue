<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useCountdown } from '../composables/useCountdown';
import FlipCard from './FlipCard.vue';

const isSettingsOpen = ref(false);

const DEFAULT_CONFIG = { days: 15, hours: 0, minutes: 0, seconds: 0 };

const config = ref({ ...DEFAULT_CONFIG });
const tempConfig = ref({ ...DEFAULT_CONFIG });

const { days, hours, minutes, seconds, isFinished } = useCountdown(config);

const toggleSettings = () => {
  if (!isSettingsOpen.value) {
    tempConfig.value = { ...config.value };
  }
  isSettingsOpen.value = !isSettingsOpen.value;
};

const applySettings = () => {
  config.value = {
    days: Math.max(0, Math.floor(tempConfig.value.days || 0)),
    hours: Math.max(0, Math.floor(tempConfig.value.hours || 0)),
    minutes: Math.max(0, Math.floor(tempConfig.value.minutes || 0)),
    seconds: Math.max(0, Math.floor(tempConfig.value.seconds || 0)),
  };
  isSettingsOpen.value = false;
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape') isSettingsOpen.value = false;
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div class="countdown-container">
    <!-- Contenedor del botón hamburguesa y dropdown de configuración -->
    <div class="settings-container">
      <button
        class="burger-btn"
        :class="{ 'is-active': isSettingsOpen }"
        aria-label="Open countdown settings"
        :aria-expanded="isSettingsOpen"
        aria-controls="settings-dropdown"
        @click="toggleSettings">
        <span
          class="burger-line"
          aria-hidden="true" />
        <span
          class="burger-line"
          aria-hidden="true" />
        <span
          class="burger-line"
          aria-hidden="true" />
      </button>

      <div
        v-if="isSettingsOpen"
        id="settings-dropdown"
        class="settings-dropdown">
        <form
          class="settings-form"
          @submit.prevent="applySettings">
          <div class="form-group">
            <label for="input-days">Days</label>
            <input
              id="input-days"
              v-model.number="tempConfig.days"
              type="number"
              min="0" />
          </div>
          <div class="form-group">
            <label for="input-hours">Hours</label>
            <input
              id="input-hours"
              v-model.number="tempConfig.hours"
              type="number"
              min="0"
              max="23" />
          </div>
          <div class="form-group">
            <label for="input-minutes">Minutes</label>
            <input
              id="input-minutes"
              v-model.number="tempConfig.minutes"
              type="number"
              min="0"
              max="59" />
          </div>
          <div class="form-group">
            <label for="input-seconds">Seconds</label>
            <input
              id="input-seconds"
              v-model.number="tempConfig.seconds"
              type="number"
              min="0"
              max="59" />
          </div>
          <button
            type="submit"
            class="apply-btn">
            Apply
          </button>
        </form>
      </div>
    </div>

    <h1 class="title">We're launching soon</h1>

    <div
      v-if="!isFinished"
      class="cards"
      role="timer"
      aria-live="polite"
      aria-label="Countdown">
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
  padding: 130px 24px 0;
  box-sizing: border-box;
}

/* Estilos de Configuración (Hamburguesa & Dropdown) */
.settings-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 100;
}

.burger-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  padding: 0;
  box-sizing: border-box;
}

.burger-line {
  display: block;
  width: 100%;
  height: 2.5px;
  background-color: #8486a9;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-btn:focus-visible {
  outline: 2px solid #fb5e84;
  outline-offset: 6px;
  border-radius: 2px;
}

.burger-btn:hover .burger-line {
  background-color: #fb5e84;
  transform: scale(1.4);
}

/* Animación de Hamburguesa a X */
.burger-btn.is-active .burger-line:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.burger-btn.is-active .burger-line:nth-child(2) {
  opacity: 0;
}

.burger-btn.is-active .burger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.settings-dropdown {
  position: absolute;
  top: 32px;
  right: 0;
  background-color: #1e1e28;
  border: 1px solid #343650;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.settings-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-group label {
  color: #8486a9;
  font-family: 'Red Hat Text', sans-serif;
  font-size: 14px;
}

.form-group input {
  width: 70px;
  background-color: #251d2c;
  border: 1px solid #343650;
  border-radius: 4px;
  color: #fff;
  padding: 6px 8px;
  font-family: 'Red Hat Text', sans-serif;
  font-size: 14px;
  text-align: center;
}

.form-group input:focus {
  outline: none;
  border-color: #fb5e84;
}

.apply-btn {
  background-color: #fb5e84;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 4px;
}

.apply-btn:hover {
  background-color: #d1496c;
}

.apply-btn:focus-visible {
  outline: 2px solid #fb5e84;
  outline-offset: 2px;
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
  gap: clamp(12px, 3vw, 32px); 
  margin-top: 100px;
}

.launched-message {
  margin-top: 100px;
}

.launched-message h2 {
  font-family: 'Red Hat Text', sans-serif;
  font-size: clamp(1.88rem, calc(0.086rem + 7.634vw), 3.75rem);
  background: linear-gradient(to right, white, #f44336);
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.social-icons {
  display: flex;
  gap: 32px;
  margin-top: auto;
  margin-bottom: 48px;
  z-index: 10;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.social-icons a:focus-visible {
  outline: 2px solid #fb5e84;
  outline-offset: 4px;
  border-radius: 2px;
}

/* Color exacto de hover usando filtros CSS */
.social-icons a:hover {
  transform: scale(1.4) rotate(30deg);
  filter: invert(53%) sepia(24%) saturate(4646%) hue-rotate(315deg) brightness(101%) contrast(98%)
    drop-shadow(0px 0px 10px #fb5e84);
}
.social-icons img {
  width: 24px;
  height: 24px;
}
</style>
