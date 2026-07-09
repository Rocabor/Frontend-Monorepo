<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let ctx = null;
const particles = [];
let explosionParticles = [];
let animationFrameId = null;

// Inicializamos con 50, sumaremos de 5 en 5 hasta 100
let totalParticulas = 50; 

const coloresBase = ['59, 130, 246', '168, 85, 247', '78, 93, 115', '83, 255, 170'];
const formas = ['circle', 'square', 'triangle', 'x'];

class Particle {
  constructor(isExplosion = false, origin = null) {
    this.isExplosion = isExplosion;
    this.shape = formas[Math.floor(Math.random() * formas.length)];
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    this.reset(origin);
  }

  reset(origin = null) {
    if (this.isExplosion) {
      this.x = origin?.x || window.innerWidth / 2;
      this.y = origin?.y || window.innerHeight / 2;
      this.radius = Math.random() * 8 + 5;
      this.opacity = 1;
      this.color = '255, 255, 255';
      const angle = Math.random() * Math.PI * 2;
      const force = Math.random() * 8 + 4;
      this.dx = Math.cos(angle) * force;
      this.dy = Math.sin(angle) * force;
    } else {
      this.x = origin ? origin.x : Math.random() * window.innerWidth;
      this.y = origin ? origin.y : Math.random() * window.innerHeight;
      this.dx = (Math.random() - 0.5) * 0.4;
      this.dy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 3 + 3; // Un poco más grandes
      this.opacity = 0.5;
      this.color = coloresBase[Math.floor(Math.random() * coloresBase.length)];
    }
  }

  update(cardRect) {
    this.x += this.dx;
    this.y += this.dy;
    this.rotation += this.rotationSpeed;

    if (this.isExplosion) {
      this.dx *= 0.90;
      this.dy *= 0.90;
      this.opacity -= 0.01;
    } else {
      // Detección de colisión con la tarjeta
      if (cardRect && this.x > cardRect.left && this.x < cardRect.right && this.y > cardRect.top && this.y < cardRect.bottom) {
        this.dx *= -1;
        this.dy *= -1;
        this.x += this.dx * 2;
        this.y += this.dy * 2;
      }
      if (this.x < 0 || this.x > window.innerWidth) this.dx *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.dy *= -1;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    ctx.strokeStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    if (this.shape === 'circle') ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    else if (this.shape === 'square') ctx.rect(-this.radius, -this.radius, this.radius * 2, this.radius * 2);
    else if (this.shape === 'triangle') {
      ctx.moveTo(0, -this.radius);
      ctx.lineTo(this.radius, this.radius);
      ctx.lineTo(-this.radius, this.radius);
      ctx.closePath();
    } else if (this.shape === 'x') {
      const s = this.radius;
      ctx.moveTo(-s, -s); ctx.lineTo(s, s);
      ctx.moveTo(s, -s); ctx.lineTo(-s, s);
    }
    this.isExplosion ? ctx.fill() : ctx.stroke();
    ctx.restore();
  }
}

const triggerExplosion = () => {
  const tarjeta = document.querySelector('.advCont');
  const rect = tarjeta?.getBoundingClientRect() || { left: window.innerWidth/2, top: window.innerHeight/2, width: 0, height: 0 };
  const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };

  // Lógica para añadir 5 hasta el límite de 100
  if (totalParticulas < 100) {
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(false, origin));
    }
    totalParticulas += 5;
  }

  // 15 partículas de explosión visibles
  for (let i = 0; i < 15; i++) {
    explosionParticles.push(new Particle(true, origin));
  }
};

const animate = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const tarjeta = document.querySelector('.advCont');
  const cardRect = tarjeta?.getBoundingClientRect();

  particles.forEach(p => { p.update(cardRect); p.draw(); });
  explosionParticles = explosionParticles.filter(p => p.opacity > 0);
  explosionParticles.forEach(p => { p.update(); p.draw(); });
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  ctx = canvasRef.value.getContext('2d');
  canvasRef.value.width = window.innerWidth;
  canvasRef.value.height = window.innerHeight;
  // Iniciamos con 50 partículas
  for (let i = 0; i < 50; i++) particles.push(new Particle(false));
  animate();
  window.addEventListener('explotar-particulas', triggerExplosion);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('explotar-particulas', triggerExplosion);
});
</script>

<template>
  <canvas ref="canvasRef" class="fixed inset-0 z-0 pointer-events-none" />
</template>