import { ref } from 'vue';

const toasts = ref([]);
let idSeq = 0;

export function useToast() {
  const push = (message, type = 'success', duration = 2200) => {
    const id = ++idSeq;
    toasts.value.push({ id, message, type });
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, duration);
  };

  return { toasts, push };
}
