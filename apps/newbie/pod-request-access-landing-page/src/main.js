const form = document.querySelector('.form');
const input = document.querySelector('#email');
const message = document.querySelector('.message');

function showError(text) {
  message.textContent = text;
  message.className = 'message error';
  message.classList.remove('hidden');
  input.setAttribute('aria-invalid', 'true');
}

function showSuccess(text) {
  message.textContent = text;
  message.className = 'message success';
  message.classList.remove('hidden');
  input.setAttribute('aria-invalid', 'false');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = input.value.trim();

  if (!email) {
    showError('Oops! Please add your email');
    return;
  }

  if (!input.checkValidity()) {
    showError('Oops! Please check your email');
    return;
  }

  showSuccess("Thanks! We'll be in touch soon.");
  input.value = '';
});

input.addEventListener('input', () => {
  if (!message.classList.contains('hidden')) {
    message.classList.add('hidden');
    message.textContent = '';
    input.setAttribute('aria-invalid', 'false');
  }
});