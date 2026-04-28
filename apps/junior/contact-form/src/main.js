// Selección de elementos principales
const form = document.querySelector('form');
const successToast = document.querySelector('[role="alert"]');
const errorMessages = document.querySelectorAll('[role="alert"]:not(.bg-grey-900)');

// 1. Estado inicial: Ocultar Toast y mensajes de error
if (successToast) successToast.classList.add('hidden');
errorMessages.forEach((msg) => msg.classList.add('hidden'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isFormValid = true;

  // 2. Validar campos de texto (First Name, Last Name, Email, Message)
  const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');

  textInputs.forEach((input) => {
    const errorId = input.getAttribute('aria-describedby');
    const errorSpan = document.getElementById(errorId);

    if (!input.value.trim()) {
      showElementError(input, errorSpan);
      isFormValid = false;
    } else {
      // Validación específica para el email
      if (input.type === 'email' && !validateEmail(input.value)) {
        showElementError(input, errorSpan);
        isFormValid = false;
      } else {
        hideElementError(input, errorSpan);
      }
    }
  });

  // 3. Validar Radio Buttons (Query Type)
  const radioGroup = form.querySelectorAll('input[name="query-type"]');
  const radioError = document.getElementById('radio-select');
  const isRadioChecked = Array.from(radioGroup).some((radio) => radio.checked);

  if (!isRadioChecked) {
    radioError.classList.remove('hidden');
    isFormValid = false;
  } else {
    radioError.classList.add('hidden');
  }

  // 4. Validar Checkbox (Consent)
  const consentCheckbox = document.getElementById('consent');
  const consentError = document.getElementById('consent-error'); 

  if (!consentCheckbox.checked) {
    consentError.classList.remove('hidden');
    isFormValid = false;
  } else {
    consentError.classList.add('hidden');
  }

  // 5. Si todo es válido, mostrar éxito
  if (isFormValid) {
    displaySuccessMessage();
    form.reset();
    // Limpiar estilos de éxito en los campos si fuera necesario
  }
});

// Funciones de utilidad
function showElementError(input, errorSpan) {
  if (errorSpan) errorSpan.classList.remove('hidden');
  input.classList.add('error'); // Clase de tu style.css
  input.setAttribute('aria-invalid', 'true');
}

function hideElementError(input, errorSpan) {
  if (errorSpan) errorSpan.classList.add('hidden');
  input.classList.remove('error');
  input.setAttribute('aria-invalid', 'false');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function displaySuccessMessage() {
  successToast.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Ocultar el mensaje automáticamente tras 5 segundos
  setTimeout(() => {
    successToast.classList.add('hidden');
  }, 5000);
}
