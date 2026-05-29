<script setup>
import FeatureCard from './FeatureCard.vue'

const featuresData = [
  { 
    icon: 'icon-access-anywhere.svg', 
    title: 'Access your files, anywhere', 
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.' 
  },
  { 
    icon: 'icon-security.svg', 
    title: 'Security you can trust', 
    description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' 
  },
  { 
    icon: 'icon-collaboration.svg', 
    title: 'Real-time collaboration', 
    description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' 
  },
  { 
    icon: 'icon-any-file.svg', 
    title: 'Store any type of file', 
    description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared." 
  }
]

// Función para que Vite resuelva la ruta correcta en el monorepo
const getIconUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="features" class="mx-auto py-12 max-w-5xl">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-18">
      <!-- Pasamos el resultado de la función al prop :icon -->
      <FeatureCard 
        v-for="(feat, idx) in featuresData" :key="idx"
        :icon="getIconUrl(feat.icon)"
        :title="feat.title"
        :description="feat.description"
      />
    </div>
  </section>
</template>