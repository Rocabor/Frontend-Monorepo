<script setup>
import AppHeader from './AppHeader.vue';
import SearchBar from './SearchBar.vue';
import ProfileSection from './ProfileSection.vue';
import { ref, onMounted } from 'vue';

const currentUser = ref(null);
const isLoading = ref(false);
const error = ref(false);

const theme = ref('light');
const toggleTheme = (event) => {
  // Coordenadas del click para que el círculo salga del botón
  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? window.innerHeight / 2;

  const apply = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme();
  };

  // Fallback: navegadores sin View Transitions usan el fundido de color
  if (!document.startViewTransition) return apply();

  const transition = document.startViewTransition(apply);
  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  });
};

const applyTheme = () => {
  // si theme es 'dark', agrega la clase; si no, la quita
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
};

onMounted(() => {
  const prefiereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  theme.value = prefiereDark ? 'dark' : 'light';
  applyTheme();
});

const handleSearch = async (username) => {
  if (!username) return;
  isLoading.value = true;
  currentUser.value = null;
  error.value = false;
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('Usuario no encontrado');
    currentUser.value = await response.json();
  } catch (err) {
    error.value = true;
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="gap-main-gap md:min-w-main-width mx-auto mt-8 flex w-[343px] flex-col md:mt-10 xl:mt-0">
    <AppHeader
      :theme="theme"
      @toggle-theme="toggleTheme" />
    <SearchBar :has-error="error" @search="handleSearch" />
    <ProfileSection
      :user="currentUser"
      :has-error="error" />
  </div>
</template>
