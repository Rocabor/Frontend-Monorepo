function setupYearBlink() {
  const yearElement = document.querySelector('.year');
  if (yearElement) {
    let blink = true;
    const interval = setInterval(() => {
      yearElement.style.opacity = blink ? '0.2' : '1';
      blink = !blink;
    }, 800);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        setupYearBlink();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', setupYearBlink);
