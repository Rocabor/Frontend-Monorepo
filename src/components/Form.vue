<script setup>
import { ref } from 'vue';
import Ticket from './Ticket.vue';

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

const showTicket = ref(false);
const ticketData = ref({});

// Variables para el estado del error
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
  if (fileinput.value) fileinput.value.value = '';
}

function processFile(file) {
  if (!file) return;

  const validTypes = ['image/jpeg', 'image/png'];
  if (!validTypes.includes(file.type)) {
    errorMessage.value = 'Invalid file type. Please upload a JPG or PNG image.';
    isError.value = true;
    return;
  }

  if (file.size > 500 * 1024) {
    errorMessage.value = 'File too large. Please upload a photo under 500KB.';
    isError.value = true;
    return;
  }

  errorMessage.value = '';
  isError.value = false;

  avatarFile.value = file;
  avatarPreview.value = URL.createObjectURL(file);
}

function handleFileChange(event) {
  const file = event.target.files[0];
  processFile(file);
}

function handleDrop(event) {
  const file = event.dataTransfer.files[0];
  processFile(file);
}

function validateForm() {
  let isValid = true;

  // Reset errores
  fieldErrors.value = { fullName: '', emailAddress: '', githubUsername: '' };
  isError.value = false;

  // Validar si subió Avatar
  if (!avatarPreview.value) {
    errorMessage.value = 'An avatar image is required.';
    isError.value = true;
    isValid = false;
  }

  // Validar Full Name
  if (!formData.value.fullName.trim()) {
    fieldErrors.value.fullName = 'Please enter your full name.';
    isValid = false;
  }

  // Validar Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.emailAddress)) {
    fieldErrors.value.emailAddress = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validar GitHub Username al enviar el formulario
  if (!formData.value.githubUsername.trim()) {
    fieldErrors.value.githubUsername = 'Please enter your GitHub username.';
    isValid = false;
  } else {
    // Si no empieza con @, se lo agregamos automáticamente
    if (!formData.value.githubUsername.trim().startsWith('@')) {
      formData.value.githubUsername = '@' + formData.value.githubUsername.trim();
    }
  }

  return isValid;
}

function handleSubmit() {
  if (validateForm()) {
    ticketData.value = {
      fullName: formData.value.fullName,
      emailAddress: formData.value.emailAddress,
      githubUsername: formData.value.githubUsername,
      avatarPreview: avatarPreview.value
    };
    
    // 1. Cambiamos el estado para mostrar el ticket
    showTicket.value = true;
    
    // 2. Emitimos el evento hacia App.vue para ocultar los títulos viejos
    emit('ticket-generated');
    
    // 3. SOLUCIÓN: Subir la pantalla al tope de forma fluida
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Hace que la transición de subida sea suave en lugar de un salto brusco
    });
  }
}

const emit = defineEmits(['ticket-generated']);

// Corrección crítica de errores en la validación individual por campo
function validateField(fieldId) {
  fieldErrors.value[fieldId] = '';

  if (fieldId === 'fullName' && !formData.value.fullName.trim()) {
    fieldErrors.value.fullName = 'Please enter your full name.';
  }
  
  if (fieldId === 'emailAddress') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.value.emailAddress && !emailRegex.test(formData.value.emailAddress)) {
      fieldErrors.value.emailAddress = 'Please enter a valid email address.';
    }
  }

  if (fieldId === 'githubUsername') {
    if (!formData.value.githubUsername.trim()) {
      fieldErrors.value.githubUsername = 'Please enter your GitHub username.';
    } else {
      // CORRECCIÓN: Se eliminó 'isValid = false' que rompía el script
      // Autocorrección nativa: Agrega el @ si el usuario lo olvidó al salir del input
      if (!formData.value.githubUsername.trim().startsWith('@')) {
        formData.value.githubUsername = '@' + formData.value.githubUsername.trim();
      }
    }
  }
}

// Función auxiliar para limpiar el mensaje de error de un campo mientras el usuario escribe
function clearFieldError(fieldId) {
  fieldErrors.value[fieldId] = '';
}
</script>

<template>
  <form v-if="!showTicket" @submit.prevent="handleSubmit" class="mt-10 flex w-full flex-col gap-6 md:mt-11.25 md:w-130.5 xl:w-115 mb-4">
    
    <div class="flex w-full flex-col gap-3">
      <label>Upload Avatar</label>

      <div
        tabindex="0"
        @dragover.prevent
        @drop.prevent="handleDrop"
        @click="!avatarPreview && openFilePicker()"
        @keydown.enter="openFilePicker"
        @keydown.space.prevent="openFilePicker"
        class="bg-neutral-0/5 relative flex aspect-[2.72/1] h-31.5 w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900"
        :class="{ 'hover:bg-neutral-0/20 cursor-pointer': !avatarPreview }">
        
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

        <div v-if="avatarPreview" class="text-preset-7b flex h-5.5 w-45 gap-2 z-10">
          <button
            type="button"
            @click.stop="removeImage"
            class="bg-neutral-0/10 cursor-pointer rounded-sm px-2 py-1 hover:text-neutral-300 hover:underline hover:underline-offset-2 focus:outline-none">
            Remove image
          </button>
          <button
            type="button"
            @click.stop="changeImage"
            class="bg-neutral-0/10 cursor-pointer rounded-sm px-2 py-1 hover:text-neutral-300 hover:underline hover:underline-offset-2 focus:outline-none">
            Change image
          </button>
        </div>

        <p v-else class="text-preset-4 text-center text-neutral-300">Drag and drop or click to upload</p>
      </div>

      <div class="flex items-center gap-2">
        <div
          class="size-3 mask-[url('../assets/images/icon-info.svg')] mask-contain mask-center mask-no-repeat transition-colors"
          :class="isError ? 'bg-orange-700' : 'bg-neutral-300'"></div>

        <p class="text-preset-5" :class="isError ? 'text-orange-700' : 'text-neutral-300'">
          {{ isError ? errorMessage : 'Upload your photo (JPG or PNG, max size: 500KB).' }}
        </p>
      </div>
    </div>

    <div v-for="field in formFields" :key="field.id" :class="['flex flex-col gap-3', field.className]">
      <label :for="field.id">{{ field.label }}</label>
      <input
        v-model="formData[field.id]"
        @blur="validateField(field.id)"
        @input="clearFieldError(field.id)"
        :type="field.type"
        :id="field.id"
        :placeholder="field.placeholder"
        :class="[
          'text-preset-4 h-13.5 w-full rounded-xl border bg-white/8 px-4 placeholder-neutral-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900',
          fieldErrors[field.id] ? 'border-orange-700 hover:bg-orange-700/10' : 'hover:bg-neutral-0/20 border-neutral-500',
        ]" />

      <div v-if="fieldErrors[field.id]" class="flex items-center gap-2">
        <div class="size-3 bg-orange-700 mask-[url('../assets/images/icon-info.svg')] mask-contain mask-center mask-no-repeat"></div>
        <p class="text-preset-5 text-orange-700">{{ fieldErrors[field.id] }}</p>
      </div>
    </div>

    <button
      type="submit"
      class="text-preset-6 flex h-13.5 w-full items-center justify-center rounded-xl bg-orange-500 text-neutral-900 transition-colors hover:bg-orange-700 focus:outline-2 focus:outline-offset-3 active:scale-95 cursor-pointer">
      Generate My Ticket
    </button>
  </form>

  <Ticket 
    v-else
    :fullName="ticketData.fullName"
    :emailAddress="ticketData.emailAddress"
    :githubUsername="ticketData.githubUsername"
    :avatarPreview="ticketData.avatarPreview"
  />
</template>