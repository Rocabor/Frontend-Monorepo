const accordionButtons = Array.from(document.querySelectorAll('.faq-question-btn'));

accordionButtons.forEach((button, index) => {
  // Manejador de Clic (Existente con validaciones)
  button.addEventListener('click', () => {
    toggleAccordion(button);
  });

  // NUEVO: Manejador de Teclado (Accesibilidad Avanzada)
  button.addEventListener('keydown', (event) => {
    const { key } = event;
    let targetButton;

    switch (key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        targetButton = accordionButtons[index + 1] || accordionButtons[0];
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        targetButton = accordionButtons[index - 1] || accordionButtons[accordionButtons.length - 1];
        break;

      case 'Home':
        event.preventDefault();
        targetButton = accordionButtons[0];
        break;

      case 'End':
        event.preventDefault();
        targetButton = accordionButtons[accordionButtons.length - 1];
        break;
    }

    if (targetButton) {
      targetButton.focus();
    }
  });
});

function toggleAccordion(button) {
  const contentId = button.getAttribute('aria-controls');
  if (!contentId) return;

  const content = document.getElementById(contentId);
  const questionText = button.querySelector('.question');

  if (!content) return;

  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Cerrar otros
  accordionButtons.forEach((otherButton) => {
    if (otherButton !== button) {
      otherButton.setAttribute('aria-expanded', 'false');
      const otherContentId = otherButton.getAttribute('aria-controls');
      const otherContent = document.getElementById(otherContentId);
      if (otherContent) otherContent.hidden = true;
    }
  });

  // Alternar actual
  const newState = !isExpanded;
  button.setAttribute('aria-expanded', newState.toString());
  content.hidden = !newState;

  if (newState && questionText) {
    questionText.classList.add('viewed');
  }
}
