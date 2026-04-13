let currentInterval = null;

function setupYearBlink() {
  const yearElement = document.querySelector('.year');
  if (!yearElement) return;
  
  if (currentInterval) {
    clearInterval(currentInterval);
  }
  
  let blink = true;
  currentInterval = setInterval(() => {
    yearElement.style.opacity = blink ? '0.2' : '1';
    blink = !blink;
  }, 800);
}

function cleanupYearBlink() {
  if (currentInterval) {
    clearInterval(currentInterval);
    currentInterval = null;
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cleanupYearBlink();
  } else {
    setupYearBlink();
  }
});

document.addEventListener('DOMContentLoaded', setupYearBlink);
