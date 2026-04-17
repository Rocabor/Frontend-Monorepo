const accordionButtons = document.querySelectorAll('.faq-question-btn');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    const questionText = button.querySelector('.question');

    // 1. Cerrar todos los demás acordeones
    accordionButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute('aria-expanded', 'false');
        const otherContent = document.getElementById(otherButton.getAttribute('aria-controls'));
        otherContent.hidden = true;
      }
    });

    // 2. Alternar el estado del actual
    const newState = !isExpanded;
    button.setAttribute('aria-expanded', newState.toString());
    content.hidden = !newState;

    // 3. Efecto visual de "leído"
    if (newState) {
      questionText.classList.add('viewed');
    }
  });
});
