<script setup>
import { useToast } from '../composables/useToast';

const { toasts } = useToast();
</script>

<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 flex flex-col items-center gap-2 pointer-events-none">
    <transition-group name="toast">
      <div
        v-for="t in toasts"
        :key="t.id"
        role="status"
        aria-live="polite"
        class="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[rgba(2,6,23,0.92)] border border-[rgba(56,189,248,0.4)] text-sm font-medium text-bright shadow-[0_8px_28px_rgba(56,189,248,0.25)] backdrop-blur-md"
      >
        <svg v-if="t.type === 'success'" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
        <svg v-else viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#e1002d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
        <span>{{ t.message }}</span>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
