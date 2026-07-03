<script setup>
defineProps({
  value: { type: Number, required: true },
  label: { type: String, required: true }
})
</script>

<template>
  <div class="flip-card">
    <div class="card-top">
      <span class="number">{{ String(value).padStart(2, '0') }}</span>
    </div>
    <div class="card-bottom">
      <span class="number">{{ String(value).padStart(2, '0') }}</span>
    </div>
    <div class="divider" />
    <span class="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.flip-card {
  position: relative;
  width: clamp(60px, 15vw, 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-top,
.card-bottom {
  width: 100%;
  height: clamp(40px, 10vw, 90px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d2d44;
  border-radius: 8px;
}

.card-top {
  border-radius: 8px 8px 0 0;
  background: linear-gradient(180deg, #34364e 0%, #343650 100%);
}

.card-bottom {
  border-radius: 0 0 8px 8px;
  background: linear-gradient(180deg, #3a3a56 0%, #3a3a58 100%);
}

.number {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 700;
  color: #ff5e7a;
  line-height: 1;
}

.card-top .number {
  transform: translateY(25%);
}

.card-bottom .number {
  transform: translateY(-25%);
}

.divider {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.label {
  margin-top: 1rem;
  font-size: clamp(0.5rem, 1.5vw, 0.875rem);
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #8486a9;
}

@media (max-width: 500px) {
  .label {
    letter-spacing: 2px;
  }
}
</style>
