<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const canvas = ref(null);
let ctx, raf, particles, w, h, dpr;
let mouse = { x: -9999, y: -9999 };

const COLORS = ['#8ed5ff', '#38bdf8', '#818cf8'];
const COUNT_BASE = 70;

const resize = () => {
  const c = canvas.value;
  if (!c) return;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  w = c.clientWidth;
  h = c.clientHeight;
  c.width = w * dpr;
  c.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
};

const initParticles = () => {
  const count = Math.round(COUNT_BASE * Math.min(Math.max(w / 1280, 0.5), 1.4));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.8 + 0.8,
    c: COLORS[(Math.random() * COLORS.length) | 0],
  }));
};

const draw = () => {
  ctx.clearRect(0, 0, w, h);
  const maxDist = 130;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    // interaccion con el mouse
    const mdx = p.x - mouse.x;
    const mdy = p.y - mouse.y;
    const mDist = Math.hypot(mdx, mdy);
    if (mDist < 160) {
      const f = (160 - mDist) / 160;
      p.x += (mdx / (mDist || 1)) * f * 1.2;
      p.y += (mdy / (mDist || 1)) * f * 1.2;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.globalAlpha = 0.6;
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.18;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = a.c;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
  raf = requestAnimationFrame(draw);
};

const onMove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};
const onLeave = () => {
  mouse.x = -9999;
  mouse.y = -9999;
};

onMounted(() => {
  ctx = canvas.value.getContext('2d');
  resize();
  initParticles();
  draw();
  window.addEventListener('resize', () => { resize(); initParticles(); });
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseout', onLeave);
});

onUnmounted(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener('resize', resize);
  window.removeEventListener('mousemove', onMove);
  window.removeEventListener('mouseout', onLeave);
});
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10 w-full h-full pointer-events-none"></canvas>
</template>
