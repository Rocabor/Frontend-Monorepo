<script setup>
import AppHeader from './AppHeader.vue';
import SearchBar from './SearchBar.vue';
import ProfileSection from './ProfileSection.vue';
import { ref } from 'vue';

const currentUser = ref(null);
const isLoading = ref(false);

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
  <div class="gap-main-gap md:mt-main-top md:min-w-main-width mt-8 flex mx-auto w-[343px] flex-col">
    <AppHeader />
    <SearchBar @search="handleSearch" />
    <ProfileSection :user="currentUser" />
  </div>
</template>
