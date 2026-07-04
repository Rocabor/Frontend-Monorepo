<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  label: { type: String, required: true }
})

// Mantenemos tres estados para controlar el "pasado" y el "presente"
const currentValue = ref(props.value)
const previousValue = ref(props.value)
const isFlipping = ref(false)

watch(() => props.value, async (newVal, oldVal) => {
  if (newVal === oldVal) return
  
  // 1. Guardamos el valor viejo para las caras que se quedan estáticas o caen
  previousValue.value = oldVal
  currentValue.value = newVal
  
  // 2. Reiniciamos la animación de forma segura
  isFlipping.value = false
  await nextTick()
  isFlipping.value = true
})

// Cuando la animación de la solapa termina, limpiamos el estado de volteo
const handleAnimationEnd = () => {
  isFlipping.value = false
}
</script>

<template>
  <div class="flip-card">
    <div class="card">
      <div class="card-top">
        <span class="number">{{ String(currentValue).padStart(2, '0') }}</span>
      </div>
      
      <div class="card-bottom">
        <span class="number">{{ String(isFlipping ? previousValue : currentValue).padStart(2, '0') }}</span>
      </div>

      <template v-if="isFlipping">
        <div class="flip-top">
          <span class="number">{{ String(previousValue).padStart(2, '0') }}</span>
        </div>
        
        <div class="flip-bottom" @animationend="handleAnimationEnd">
          <span class="number">{{ String(currentValue).padStart(2, '0') }}</span>
        </div>
      </template>

      <div class="divider" />
      <div class="circle-left" />
      <div class="circle-right" />
    </div>
    <span class="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.flip-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  position: relative;
  width: clamp(70px, 11vw, 150px);
  height: clamp(71px, 11.5vw, 150px);
  background: #191a24;
  border-radius: 8px;
  box-shadow: 0px 8px 0px 0px #14141c;
  /* Mantiene el contexto 3D para los hijos que rotan */
  perspective: 300px; 
}

.card-top,
.card-bottom,
.flip-top,
.flip-bottom {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  backface-visibility: hidden;
}

.card-top {
  top: 0;
  border-radius: 8px 8px 0 0;
  background: #2c2c44;
}

.card-bottom {
  bottom: 0;
  border-radius: 0 0 8px 8px;
  background: #343650;
}

.number {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: clamp(36px, 6vw, 80px);
  font-weight: 700;
  color: #fb5e84;
  line-height: clamp(71px, 11.5vw, 150px);
  letter-spacing: -1px;
  font-family: 'Red Hat Text', sans-serif;
}

.card-top .number,
.flip-top .number {
  bottom: 0;
  transform: translateY(50%);
}

.card-bottom .number,
.flip-bottom .number {
  top: 0;
  transform: translateY(-50%);
}

/* --- ANIMACIONES Y CAPAS (Z-INDEX) --- */

.flip-top {
  top: 0;
  border-radius: 8px 8px 0 0;
  background: #2c2c44;
  transform-origin: bottom center;
  /* Se ejecuta en la primera mitad del segundo (0s a 0.15s) */
  animation: flipTop 0.15s linear forwards;
  z-index: 3;
}

.flip-bottom {
  bottom: 0;
  border-radius: 0 0 8px 8px;
  background: #343650;
  transform-origin: top center;
  transform: rotateX(90deg);
  /* Espera a que caiga la de arriba y luego se abre (0.15s a 0.3s) */
  animation: flipBottom 0.15s linear 0.15s forwards;
  z-index: 4; /* Queda por encima de la mitad inferior estática */
}

@keyframes flipTop {
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(-90deg); }
}

@keyframes flipBottom {
  0% { transform: rotateX(90deg); }
  100% { transform: rotateX(0deg); }
}

/* --- DETALLES ESTÁTICOS --- */

.divider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(0, 0, 0, 0.25);
  z-index: 5; /* Por encima de las solapas animadas */
}

.circle-left,
.circle-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(6px, 1vw, 12px);
  height: clamp(6px, 1vw, 12px);
  background: #1e1e28;
  z-index: 6; /* Por encima de todo */
  border-radius: 50%;
}

.circle-left { left: calc(clamp(6px, 1vw, 12px) / -2); }
.circle-right { right: calc(clamp(6px, 1vw, 12px) / -2); }

.label {
  margin-top: clamp(12px, 2vw, 24px);
  font-size: clamp(7px, 1.2vw, 14px);
  font-weight: 700;
  font-family: 'Red Hat Text', sans-serif;
  letter-spacing: clamp(3px, 0.4vw, 6px);
  text-transform: uppercase;
  color:#8385a9;
}
</style>