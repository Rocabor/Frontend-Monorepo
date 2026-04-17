import "./style.css";
import "@fontsource/overpass/400.css";
import "@fontsource/overpass/700.css";

const card = document.querySelector(".card");
const ratingForm = document.querySelector(".rating-form");
const thankYouState = document.querySelector(".thank-you-state");
const ratingOptions = document.querySelectorAll(".rating-option");
const submitBtn = document.querySelector(".submit-btn");
const selectedRatingSpan = document.querySelector(".selected-rating");

let selectedRating = null;

ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    ratingOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    selectedRating = option.dataset.value;
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectedRating) {
    selectedRatingSpan.textContent = selectedRating;
    ratingForm.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }
});