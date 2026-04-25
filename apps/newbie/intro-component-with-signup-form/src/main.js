const form = document.getElementById('signup-form');
const inputs = form.querySelectorAll('input');

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const showError = (input, message) => {
  const errorMessage = input.parentElement.querySelector('.error-message');
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
};

const clearError = (input) => {
  const errorMessage = input.parentElement.querySelector('.error-message');
  input.classList.remove('invalid');
  input.removeAttribute('aria-invalid');
  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');
};

const validateField = (input) => {
  const value = input.value.trim();
  const fieldName = input.name;

  if (!value) {
    showError(input, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} cannot be empty`);
    return false;
  }

  if (input.type === 'email' && !validateEmail(value)) {
    showError(input, 'Looks like this is not an email');
    return false;
  }

  clearError(input);
  return true;
};

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim()) {
      validateField(input);
    } else {
      clearError(input);
    }
  });

  input.addEventListener('blur', () => {
    validateField(input);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    console.log('Form submitted successfully!');
    form.reset();
  }
});