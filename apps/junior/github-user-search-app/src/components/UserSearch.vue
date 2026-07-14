<script setup>
import AppHeader from './AppHeader.vue';
import SearchBar from './SearchBar.vue';
import ProfileSection from './ProfileSection.vue';
import { ref, onMounted } from 'vue';

const currentUser = ref(null);
const isLoading = ref(false);

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  applyTheme()
}

const applyTheme = () => {
  // si theme es 'dark', agrega la clase; si no, la quita
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
}

onMounted(() => {
  const prefiereDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = prefiereDark ? 'dark' : 'light'
  applyTheme() 
})

const handleSearch = async (username) => {
  if (!username) return
  isLoading.value = true
  currentUser.value = null
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('Usuario no encontrado');
    currentUser.value = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="gap-main-gap md:mt-10 xl:mt-0 md:min-w-main-width mt-8 flex mx-auto w-[343px] flex-col ">
    <AppHeader :theme="theme" @toggle-theme="toggleTheme" />
    <SearchBar @search="handleSearch" />
    <ProfileSection :user="currentUser" />
  </div>
</template>
