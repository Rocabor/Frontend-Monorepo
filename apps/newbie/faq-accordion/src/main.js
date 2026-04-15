
const accordionButtons = document.querySelectorAll('.qtn-cont button');

accordionButtons.forEach((button) => {
  button.addEventListener('click', toggleAccordion);
});

function toggleAccordion() {
  // 1. Obtener el ID del contenido desde aria-controls
  const button = this;
  const contentId = button.getAttribute('aria-controls');
  const content = document.getElementById(contentId);
  const question = button.parentElement.querySelector('h2')

  accordionButtons.forEach((otherButton) => {
    if (otherButton !== button) {
      const otherContentId = otherButton.getAttribute('aria-controls');
      const otherContent = document.getElementById(otherContentId);

      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.classList.remove('active');
      otherContent.hidden = true;
    }
  });

  // 2. Obtener el estado actual (true/false)
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // 3. Toggle: cambiar al estado opuesto
  const newState = !isExpanded;

  // 4. Actualizar aria-expanded
  button.setAttribute('aria-expanded', newState.toString());

  // 5. Toggle el contenido (hidden)
  content.hidden = !newState;

  // 6. Toggle clase CSS para cambiar icono (plus/minus)
  button.classList.toggle('active');

  if (!isExpanded) {
    // Al abrir por primera vez
    question.classList.add('viewed');
  }
}

;




