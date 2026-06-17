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

// Nuevas variables para el estado del error
const errorMessage = ref('');
const isError = ref(false);

const fieldErrors = ref({
  fullName: '',
  emailAddress: '',
  githubUsername: '',
});

function openFilePicker() {
  fileinput.value.click();
}
function changeImage() {
  fileinput.value.click();
}
function removeImage() {
  avatarFile.value = null;
  avatarPreview.value = null;
  fileinput.value.value = '';
}

function processFile(file) {
  if (!file) return;

  // 1. Validar formato
  const validTypes = ['image/jpeg', 'image/png'];
  if (!validTypes.includes(file.type)) {
    errorMessage.value = 'Invalid file type. Please upload a JPG or PNG image.';
    isError.value = true;
    return;
  }

  // 2. Validar tamaño (500 KB)
  if (file.size > 500 * 1024) {
    errorMessage.value = 'File too large. Please upload a photo under 500KB.';
    isError.value = true;
    return;
  }

  // Si pasa las validaciones, limpiamos cualquier error previo
  errorMessage.value = '';
  isError.value = false;

  avatarFile.value = file;
  avatarPreview.value = URL.createObjectURL(file);
}

// Controla la selección clásica (Click)
function handleFileChange(event) {
  const file = event.target.files[0];
  processFile(file);
}

// Controla el arrastre (Drag & Drop)
function handleDrop(event) {
  const file = event.dataTransfer.files[0];
  processFile(file);
}

function validateForm() {
  let isValid = true;

  // Reset errores
  fieldErrors.value = { fullName: '', emailAddress: '', githubUsername: '' };

  // Validar Full Name
  if (!formData.value.fullName.trim()) {
    fieldErrors.value.fullName = 'Please enter your full name.';
    isValid = false;
  }

  // Validar Email (regex básico)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.emailAddress)) {
    fieldErrors.value.emailAddress = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validar GitHub Username
  if (!formData.value.githubUsername.trim()) {
    fieldErrors.value.githubUsername = 'Please enter your GitHub username.';
    isValid = false;
  }

  return isValid;
}

function handleSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    // TODO: generar ticket (próximo paso)
    console.log('Form valid:', formData.value);
  }
}

function validateField(fieldId) {
  // Resetear error de ese campo
  fieldErrors.value[fieldId] = '';

  if (fieldId === 'fullName' && !formData.value.fullName.trim()) {
    fieldErrors.value.fullName = 'Please enter your full name.';
  }
  
  if (fieldId === 'emailAddress') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.value.emailAddress)) {
      fieldErrors.value.emailAddress = 'Please enter a valid email address.';
    }
  }

  if (fieldId === 'githubUsername' && !formData.value.githubUsername.trim()) {
    fieldErrors.value.githubUsername = 'Please enter your GitHub username.';
  }
}
</script>

<template>
  <form @submit="handleSubmit" class="mt-10 flex w-full flex-col gap-6 md:mt-11.25 md:w-130.5 xl:w-115">
    <!--* Upload -->
    <div class="flex w-full flex-col gap-3">
      <label>Upload Avatar</label>

      <!--* Drag and drop container -->
      <div
        tabindex="0"
        @dragover.prevent
        @drop.prevent="handleDrop"
        @click="!avatarPreview && openFilePicker()"
        @keydown.enter="openFilePicker"
        @keydown.space.prevent="openFilePicker"
        class="bg-neutral-0/5 relative flex aspect-[2.72/1] h-31.5 w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900"
        :class="{
          'hover:bg-neutral-0/20 cursor-pointer': !avatarPreview,
        }">
        <!--* upload file -->
        <input ref="fileinput" type="file" accept="image/png, image/jpeg" @change="handleFileChange" class="sr-only" />

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

        <div v-if="avatarPreview" class="text-preset-7b flex h-5.5 w-45 gap-2">
          <button
            type="button"
            @click.stop="removeImage"
            class="bg-neutral-0/10 cursor-pointer rounded-sm px-2 py-1 hover:text-neutral-300 hover:underline hover:underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900">
            Remove image
          </button>

          <button
            type="button"
            @click.stop="changeImage"
            class="bg-neutral-0/10 cursor-pointer rounded-sm px-2 py-1 hover:text-neutral-300 hover:underline hover:underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900">
            Change image
          </button>
        </div>

        <p v-else class="text-preset-4 text-center text-neutral-300">Drag and drop or click to upload</p>
      </div>

      <!--* Hint text -->
      <div class="flex items-center gap-2">
        <div
          class="size-3 mask-[url('../assets/images/icon-info.svg')] mask-contain mask-center mask-no-repeat transition-colors"
          :class="isError ? 'bg-orange-500' : 'bg-neutral-300'"></div>

        <p class="text-preset-5 text-neutral-300" :class="isError ? 'text-orange-500' : 'text-neutral-300'">
          {{ isError ? errorMessage : 'Upload your photo (JPG or PNG, max size: 500KB).' }}
        </p>
      </div>
    </div>

    <!--* Text input -->
    <div v-for="field in formFields" :key="field.id" :class="['flex flex-col gap-3', field.className]">
      <label :for="field.id">{{ field.label }}</label>
      <input
        v-model="formData[field.id]"
         @blur="validateField(field.id)"
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
        :class="[
          'text-preset-4 h-13.5 w-full rounded-xl border bg-white/8 px-4 placeholder-neutral-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900',
          fieldErrors[field.id]
            ? 'border-orange-500 hover:bg-orange-500/10'
            : 'hover:bg-neutral-0/20 border-neutral-500',
        ]" />

      <!--* Error message -->
      <div v-if="fieldErrors[field.id]" class="flex items-center gap-2">
        <div
          class="size-3 bg-orange-500 mask-[url('../assets/images/icon-info.svg')] mask-contain mask-center mask-no-repeat"></div>
        <p class="text-preset-5 text-orange-500">{{ fieldErrors[field.id] }}</p>
      </div>
    </div>

    <button
      type="submit"
      class="text-preset-6 focus:outline-neutral-0 flex h-13.5 w-full items-center justify-center rounded-xl bg-orange-500 text-neutral-900 transition-colors hover:bg-orange-700 hover:inset-shadow-[0_-4px_0_rgba(245,116,99,1)] focus:outline-2 focus:outline-offset-3 active:scale-95">
      Generate My Ticket
    </button>
  </form>
</template>
