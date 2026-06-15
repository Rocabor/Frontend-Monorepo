<script setup>
import { ref } from 'vue';

// 1. Definimos los campos y sus datos
const formData = ref({
  fullName: '',
  emailAddress: '',
  githubUsername: '',
});

const formFields = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: '', className: '' },
  { id: 'emailAddress', label: 'Email Address', type: 'email', placeholder: 'example@email.com', className: '' },
  {
    id: 'githubUsername',
    label: 'GitHub Username',
    type: 'text',
    placeholder: '@yourusername',
    className: 'md:col-span-2',
  },
];
</script>

<template>
  <form class="mt-10 flex w-full flex-col gap-6 md:mt-11.25 md:w-130.5 xl:w-115">
    <!--* Upload -->
    <div class="flex w-full flex-col gap-3">
      <label>Upload Avatar</label>

      <!--* Drag and drop container -->
      <div
        class="bg-neutral-0/5 relative flex h-31.5 aspect-[2.72/1] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 transition-colors hover:border-neutral-500"
        :class="{ 'border-neutral-500': !filePreviewUrl && fileInputRef?.matches(':hover') }"
        @click="() => fileInputRef?.click()"
        @dragover.prevent
        @drop="handleDrop">
        <div
          class="bg-neutral-0/10 flex size-12.5 items-center justify-center rounded-xl border border-neutral-700 shadow-[0_2px_4px_-2px_rgba(4,1,40,1)] backdrop-blur-sm">
          <img src="../assets/images/icon-upload.svg" alt="" class="aspect-square w-1/2" />
        </div>

        <p class="text-preset-4 text-center text-neutral-300">Drag and drop or click to upload</p>

        <input type="file" ref="fileInputRef" class="sr-only" accept=".jpg, .jpeg, .png" @change="onFileChange" />

        <div
          v-if="filePreviewUrl"
          class="absolute inset-0 rounded-xl bg-cover bg-center"
          :style="{ backgroundImage: `url(${filePreviewUrl})` }"></div>
      </div>

      <!--* Hint text -->
      <div class="flex items-center gap-2">
        <img src="../assets/images/icon-info.svg" alt="" class="size-3" />
        <p class="text-preset-5 text-neutral-300">Upload your photo (JPG or PNG, max size: 500KB).</p>
      </div>
      <p v-if="fileError" class="text-preset-5 mt-1 text-orange-500">{{ fileError }}</p>
    </div>

    <!--* Text input -->
    <div v-for="field in formFields" :key="field.id" :class="['flex flex-col gap-3', field.className]">
      <label :for="field.id">{{ field.label }}</label>
      <input
        v-model="formData[field.id]"
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
        class="text-preset-4 h-13.5 w-full placeholder-neutral-300 rounded-xl border border-neutral-500 bg-white/8 px-4 focus:border-neutral-500 focus:outline-none" />
    </div>

    <button
      type="submit"
      class="text-preset-6 flex h-13.5 w-full items-center justify-center rounded-xl bg-orange-500 text-neutral-900 transition-colors hover:bg-orange-700">
      Generate My Ticket
    </button>
  </form>
</template>
