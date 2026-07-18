import { ref, watch, onUnmounted } from 'vue';

export function useCountUp(target, duration = 900) {
  const value = ref(0);
  let raf = null;
  let start = 0;
  let from = 0;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animate = (ts) => {
    if (!start) start = ts;
    const elapsed = ts - start;
    const t = Math.min(1, elapsed / duration);
    const to = getTarget();
    value.value = Math.round(from + (to - from) * easeOut(t));
    if (t < 1) {
      raf = requestAnimationFrame(animate);
    } else {
      value.value = to;
    }
  };

  const run = (to) => {
    from = value.value;
    start = 0;
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(animate);
  };

  const isRef = !!target && typeof target === 'object' && 'value' in target;
  const getTarget = () => (isRef ? target.value : target);

  watch(
    () => getTarget(),
    (to) => { if (typeof to === 'number') run(to); }
  );

  if (typeof getTarget() === 'number') run(getTarget());

  onUnmounted(() => { if (raf) cancelAnimationFrame(raf); });

  return { value };
}
