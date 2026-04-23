const form = document.querySelector('.form');
const input = document.querySelector('#email');
const message = document.querySelector('.message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = input.value.trim();

  if (!email) {
    message.textContent = 'Oops! Please add your email';
    message.className = 'message error';
    message.classList.remove('hidden');
    input.setAttribute('aria-invalid', 'true');
    return;
  }

  if (!isValidEmail(email)) {
    message.textContent = 'Oops! Please check your email';
    message.className = 'message error';
    message.classList.remove('hidden');
    input.setAttribute('aria-invalid', 'true');
    return;
  }

  message.textContent = 'Thanks! We\'ll be in touch soon.';
  message.className = 'message success';
  message.classList.remove('hidden');
  input.setAttribute('aria-invalid', 'false');

  input.value = '';
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

input.addEventListener('input', () => {
  if (message.classList.contains('error')) {
    message.classList.add('hidden');
    input.setAttribute('aria-invalid', 'false');
  }
});