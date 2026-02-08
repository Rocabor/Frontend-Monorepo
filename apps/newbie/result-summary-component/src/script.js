// =============================================
//  EFECTO DE PARPADEO DEL AÑO / FOOTER
// =============================================
const yearElement = document.querySelector(".year");
let blink = true;
setInterval(() => {
  yearElement.style.opacity = blink ? "0.2" : "1";
  blink = !blink;
}, 800);