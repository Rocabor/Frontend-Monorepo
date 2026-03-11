function setupYearBlink() {
  const yearElement = document.querySelector(".year");
  if (yearElement) {
    let blink = true;
    setInterval(() => {
      yearElement.style.opacity = blink ? "0.2" : "1";
      blink = !blink;
    }, 800);
  }
}

document.addEventListener('DOMContentLoaded', setupYearBlink);