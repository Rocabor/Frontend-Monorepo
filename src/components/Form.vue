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

const fileinput = ref(null);
const avatarFile = ref(null);
const avatarPreview = ref(null);

function openFilePicker () {
  fileinput.value.click();
}
function changeImage() {
  fileinput.value.click()  
}
function removeImage() {
  avatarFile.value = null
  avatarPreview.value = null
  fileinput.value.value = ''  
}


function handleFileChange(event) {
  const file = event.target.files[0];
  if (!file) return;
  avatarFile.value = file;
  avatarPreview.value = URL.createObjectURL(file);
}
</script>

<template>
  <form class="mt-10 flex w-full flex-col gap-6 md:mt-11.25 md:w-130.5 xl:w-115">
    <!--* Upload -->
    <div class="flex w-full flex-col gap-3">
      <label>Upload Avatar</label>

      <!--* upload file -->
      <input ref="fileinput" type="file" accept="image/png, image/jpeg" @change="handleFileChange" class="sr-only" />

      <!--* Drag and drop container -->
      <button
        type="button"
        @click="openFilePicker"
        class="bg-neutral-0/5 hover:bg-neutral-0/20 relative flex aspect-[2.72/1] h-31.5 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900">

        <div
          v-if="!avatarPreview"
          class="bg-neutral-0/10 flex size-12.5 items-center justify-center rounded-xl border-2 border-neutral-700 shadow-[0_2px_4px_-2px_rgba(4,1,40,1)] backdrop-blur-sm">
          <img src="../assets/images/icon-upload.svg" alt="" class="aspect-square w-1/2" />
        </div>

        <div
          v-else
          class="bg-neutral-0/10 flex size-12.5 items-center justify-center rounded-xl border-2 border-neutral-500 shadow-[0_2px_4px_-2px_rgba(4,1,40,1)] backdrop-blur-sm">
          <img :src="avatarPreview" alt="" class="size-full rounded-xl object-cover" />
        </div>

        <div v-if="avatarPreview" class="w-[180px] h-[22px] flex gap-2 text-preset-7b">

          <button type="button" @click="removeImage" class="underline underline-offset-2 text-neutral-300 bg-neutral-0/10 px-2 py-1 rounded-sm cursor-pointer">Remove image</button>
          
          <button type="button" @click="changeImage" class="text-neutral-0 bg-neutral-0/10 px-2 py-1 rounded-sm cursor-pointer">Change image</button>
        </div>

        <p v-else class="text-preset-4 text-center text-neutral-300">Drag and drop or click to upload</p>
      </button>

      <!--* Hint text -->
      <div class="flex items-center gap-2">
        <img src="../assets/images/icon-info.svg" alt="" class="size-3" />
        <p class="text-preset-5 text-neutral-300">Upload your photo (JPG or PNG, max size: 500KB).</p>
      </div>
    </div>

    <!--* Text input -->
    <div v-for="field in formFields" :key="field.id" :class="['flex flex-col gap-3', field.className]">
      <label :for="field.id">{{ field.label }}</label>
      <input
        v-model="formData[field.id]"
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
        class="text-preset-4 hover:bg-neutral-0/20 h-13.5 w-full rounded-xl border border-neutral-500 bg-white/8 px-4 placeholder-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900" />
    </div>

    <button
      type="submit"
      class="text-preset-6 focus:outline-neutral-0 flex h-13.5 w-full items-center justify-center rounded-xl bg-orange-500 text-neutral-900 transition-colors hover:bg-orange-700 hover:inset-shadow-[0_-4px_0_rgba(245,116,99,1)] focus:outline-2 focus:outline-offset-3">
      Generate My Ticket
    </button>
  </form>
</template>
