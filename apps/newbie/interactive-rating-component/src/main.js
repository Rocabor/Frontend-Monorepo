const ratingButtons = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingSpan = document.getElementById('selected-rating');

ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {

    ratingButtons.forEach((btn) => {
      btn.classList.remove('selected');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('selected');
    button.setAttribute('aria-pressed', 'true');
  });
});

submitBtn.addEventListener('click', () => {
  const selectedBtn = document.querySelector('.rating-btn.selected');

  if (!selectedBtn) {
    alert('Please select a rating before submitting');
    return;
  } else {
    const rating = selectedBtn.textContent;

    selectedRatingSpan.textContent = rating;

    ratingState.hidden = true;
    thankYouState.hidden = false;
  }
});
