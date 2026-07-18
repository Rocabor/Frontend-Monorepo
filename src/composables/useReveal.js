import { ref, onMounted, onUnmounted } from 'vue';

export function useReveal(options = {}) {
  const target = ref(null);
  const revealed = ref(false);

  let observer = null;

  onMounted(() => {
    const el = target.value;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      revealed.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealed.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { target, revealed };
}
