<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const canvasRef = ref(null);
let ctx = null;
let rafId = null;
let width = 0;
let height = 0;
let dpr = 1;

let progress = 0;        // 0 = día, 1 = noche
let targetDark = false;
let lastTime = 0;
let dim = 0;             // atenuación cuando una nube tapa el sol

let stars = [];
let clouds = [];
const shootingStars = [];

const lerp = (a, b, t) => a + (b - a) * t;

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function lerpColor(c1, c2, t) {
  const a = hexToRgb(c1);
  const b = hexToRgb(c2);
  const r = Math.round(lerp(a[0], b[0], t));
  const g = Math.round(lerp(a[1], b[1], t));
  const bl = Math.round(lerp(a[2], b[2], t));
  return `rgb(${r}, ${g}, ${bl})`;
}

const DAY_TOP = '#87CEEB';
const DAY_BOTTOM = '#E0F6FF';
const NIGHT_TOP = '#0b1026';
const NIGHT_BOTTOM = '#243b55';

function resize() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

// Las posiciones se generan una sola vez al montar (no en cada resize ni frame)
function generateScene() {
  const starCount = Math.round((width * height) / 9000);
  stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.7,
      r: Math.random() * 1.4 + 0.3,
      base: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 2 + 1,
    });
  }
  clouds = [];
  for (let i = 0; i < 5; i++) {
    clouds.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.4 + 20,
      scale: Math.random() * 0.6 + 0.7,
      speed: Math.random() * 8 + 4,
    });
  }
}

function drawSky() {
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, lerpColor(DAY_TOP, NIGHT_TOP, progress));
  grad.addColorStop(1, lerpColor(DAY_BOTTOM, NIGHT_BOTTOM, progress));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
}

function drawStars(t) {
  if (progress <= 0.01) return;
  ctx.save();
  ctx.fillStyle = '#ffffff';
  for (const s of stars) {
    const a = progress * (s.base + 0.5 * Math.sin((t / 1000) * s.speed + s.phase));
    ctx.globalAlpha = Math.max(0, a);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawCloud(x, y, scale) {
  ctx.beginPath();
  ctx.arc(x, y, 22 * scale, 0, Math.PI * 2);
  ctx.arc(x + 24 * scale, y + 6 * scale, 18 * scale, 0, Math.PI * 2);
  ctx.arc(x - 24 * scale, y + 6 * scale, 16 * scale, 0, Math.PI * 2);
  ctx.arc(x, y + 12 * scale, 20 * scale, 0, Math.PI * 2);
  ctx.fill();
}

function drawClouds(dt) {
  if (progress >= 0.99) return;
  ctx.save();
  ctx.globalAlpha = (1 - progress) * 0.85;
  ctx.fillStyle = '#ffffff';
  for (const c of clouds) {
    c.x += c.speed * dt;
    if (c.x - 80 * c.scale > width) c.x = -80 * c.scale;
    drawCloud(c.x, c.y, c.scale);
  }
  ctx.restore();
}

function drawSun(t) {
  ctx.save();
  ctx.globalAlpha = 1 - progress;
  const cx = width * 0.82;
  const cy = height * 0.18;
  const R = 38;
  ctx.translate(cx, cy);
  ctx.rotate((t / 1000) * 0.2);
  ctx.strokeStyle = 'rgba(255, 213, 59, 0.9)';
  ctx.lineWidth = 3;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * (R + 8), Math.sin(a) * (R + 8));
    ctx.lineTo(Math.cos(a) * (R + 20), Math.sin(a) * (R + 20));
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.fillStyle = '#FFD93B';
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMoon() {
  ctx.save();
  ctx.globalAlpha = progress;
  const cx = width * 0.82;
  const cy = height * 0.18;
  const R = 34;
  ctx.beginPath();
  ctx.fillStyle = '#E8ECF2';
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fill();
  // Recortamos una luna creciente pintando un círculo del color del cielo
  ctx.beginPath();
  ctx.fillStyle = lerpColor(DAY_TOP, NIGHT_TOP, progress);
  ctx.arc(cx + 12, cy - 6, R, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function spawnShootingStar() {
  const startX = Math.random() * width * 0.9;
  const startY = Math.random() * height * 0.35;
  const angle = ((30 + Math.random() * 45) * Math.PI) / 180;
  const speed = 300 + Math.random() * 300;
  const dir = Math.random() < 0.5 ? -1 : 1;
  shootingStars.push({
    x: startX,
    y: startY,
    vx: dir * Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    len: 80 + Math.random() * 80,
    life: 0,
    maxLife: 0.6 + Math.random() * 0.5,
  });
}

function drawShootingStars() {
  if (progress <= 0.05) return;
  ctx.save();
  ctx.lineCap = 'round';
  for (const s of shootingStars) {
    const t = s.life / s.maxLife;
    const alpha = Math.sin(t * Math.PI) * progress; // aparece y se desvanece
    if (alpha <= 0) continue;
    const mag = Math.hypot(s.vx, s.vy);
    const tailX = s.x - (s.vx / mag) * s.len;
    const tailY = s.y - (s.vy / mag) * s.len;
    const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
    grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
  }
  ctx.restore();
}

function isSunCovered() {
  const cx = width * 0.82;
  const cy = height * 0.18;
  for (const c of clouds) {
    if (Math.abs(c.x - cx) < 75 * c.scale && Math.abs(c.y - cy) < 45 * c.scale) return true;
  }
  return false;
}

function frame(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;
  const target = targetDark ? 1 : 0;
  progress += (target - progress) * Math.min(dt * 3, 1);

  // El sol queda detrás de las nubes: si una nube lo tapa, atenuamos un poco el cielo
  const sunCovered = progress < 0.99 && isSunCovered();
  const dimTarget = sunCovered ? 0.16 : 0;
  dim += (dimTarget - dim) * Math.min(dt * 2, 1);

  // Estrellas fugaces: solo de noche y de forma ocasional
  if (progress > 0.5 && Math.random() < dt * 0.35) spawnShootingStar();
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.life += dt;
    if (s.life >= s.maxLife || s.x < -100 || s.x > width + 100 || s.y > height + 100) {
      shootingStars.splice(i, 1);
    }
  }

  ctx.clearRect(0, 0, width, height);
  drawSky();
  drawStars(now);
  drawShootingStars();
  drawSun(now);
  drawMoon();
  drawClouds(dt);

  // Oscurece sutilmente la escena cuando el sol está cubierto
  if (dim > 0.002) {
    ctx.fillStyle = `rgba(8, 12, 28, ${dim})`;
    ctx.fillRect(0, 0, width, height);
  }

  rafId = requestAnimationFrame(frame);
}

let observer = null;

// El canvas reacciona al toggle observando la clase .dark en <html>
function setupObserver() {
  const html = document.documentElement;
  targetDark = html.classList.contains('dark');
  observer = new MutationObserver(() => {
    targetDark = html.classList.contains('dark');
  });
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
}

onMounted(() => {
  const canvas = canvasRef.value;
  ctx = canvas.getContext('2d');
  resize();
  generateScene();
  window.addEventListener('resize', resize);
  setupObserver();
  lastTime = performance.now();
  rafId = requestAnimationFrame(frame);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('resize', resize);
  if (observer) observer.disconnect();
});
</script>

<template>
  <canvas ref="canvasRef" class="pointer-events-none fixed inset-0 -z-10" />
</template>
