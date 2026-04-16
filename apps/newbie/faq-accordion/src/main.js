const accordionButtons = document.querySelectorAll('.faq-item button');

accordionButtons.forEach((button) => {
  button.addEventListener('click', toggleAccordion);
});

function toggleAccordion() {
  const button = this;
  const contentId = button.getAttribute('aria-controls');
  const content = document.getElementById(contentId);
  const question = button.parentElement.querySelector('h2');

  accordionButtons.forEach((otherButton) => {
    if (otherButton !== button) {
      const otherContentId = otherButton.getAttribute('aria-controls');
      const otherContent = document.getElementById(otherContentId);

      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.classList.remove('active');
      otherContent.hidden = true;
    }
  });

  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  const newState = !isExpanded;

  button.setAttribute('aria-expanded', newState.toString());

  content.hidden = !newState;

  button.classList.toggle('active');

  if (!isExpanded) {
    question.classList.add('viewed');
  }
}

