document.addEventListener("DOMContentLoaded", () => {
  // =============================================
  //  ELEMENTOS DEL DOM
  // =============================================
  const rangeInput = document.getElementById("character-length-slider");
  const lengthValue = document.getElementById("character-length-value");
  const passwordOutput = document.getElementById("password-output");
  const copyBtn = document.getElementById("copy-btn");
  const copiedMessage = document.getElementById("copied-message");
  const generateBtn = document.getElementById("btn-generate");
  const strengthText = document.getElementById("strength-text");
  const strengthBars = document.getElementById("strength-bars");
  const form = document.getElementById("password-form");
  const checkboxes = document.querySelectorAll(".checkbox-input");

  // =============================================
  //  VARIABLES DE ESTADO
  // =============================================
  let hasGeneratedPassword = false;

  // =============================================
  //  CONJUNTOS DE CARACTERES
  // =============================================
  const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  // =============================================
  //  FUNCIONES DE VALIDACIÓN
  // =============================================
  function hasSelectedOptions() {
    return Array.from(checkboxes).some((checkbox) => checkbox.checked);
  }

  function showError(message) {
    alert(message);
    return false;
  }

  // =============================================
  //  FUNCIONES DE INTERFAZ
  // =============================================
  function updateSlider() {
    const value = rangeInput.value;
    const min = rangeInput.min;
    const max = rangeInput.max;
    const percentage = ((value - min) / (max - min)) * 100;

    lengthValue.textContent = value;
    rangeInput.style.backgroundSize = `${percentage}% 100%`;

    if (hasGeneratedPassword) {
      updatePassword();
    }
  }

  // =============================================
  //  GENERACIÓN DE CONTRASEÑA
  // =============================================
  function generatePassword() {
    const length = parseInt(rangeInput.value);
    const selectedChars = [];

    ["uppercase", "lowercase", "numbers", "symbols"].forEach((type) => {
      const checkbox = document.getElementById(type);
      if (checkbox.checked) {
        selectedChars.push(characters[type]);
      }
    });

    if (selectedChars.length === 0) {
      return null;
    }

    const charPool = selectedChars.join("");
    let password = "";

    selectedChars.forEach((chars) => {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      password += randomChar;
    });

    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return password.slice(0, length);
  }

  // =============================================
  //  CÁLCULO DE FORTALEZA
  // =============================================
  function calculateStrength(password) {
    if (!password || password.length === 0) return { level: 0, text: "", color: "" };

    let score = 0;
    const length = password.length;

    if (length >= 12) score += 2;
    else if (length >= 8) score += 1;

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    const levels = [
      { level: 0, text: "TOO WEAK!", color: "strength-too-weak" },
      { level: 1, text: "WEAK", color: "strength-weak" },
      { level: 2, text: "MEDIUM", color: "strength-medium" },
      { level: 3, text: "STRONG", color: "strength-strong" },
    ];

    let strengthLevel;
    if (score <= 2) strengthLevel = levels[0];
    else if (score === 3) strengthLevel = levels[1];
    else if (score === 4) strengthLevel = levels[2];
    else strengthLevel = levels[3];

    return strengthLevel;
  }

  // =============================================
  //  VISUALIZACIÓN DE FORTALEZA
  // =============================================
  function updateStrengthDisplay(password) {
    const strength = calculateStrength(password);

    if (hasGeneratedPassword && password !== "P4$5W0rD!") {
      strengthText.textContent = strength.text;
      strengthText.style.visibility = "visible";
    } else {
      strengthText.textContent = "";
      strengthText.style.visibility = "hidden";
    }

    const bars = strengthBars.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
      bar.className = "bar";

      if (!hasGeneratedPassword || password === "P4$5W0rD!") {
        bar.classList.add("active");
      } else if (index <= strength.level) {
        bar.classList.add("filled", strength.color);
      }
    });

    if (hasGeneratedPassword && password !== "P4$5W0rD!") {
      strengthBars.setAttribute("aria-valuenow", strength.level + 1);
    } else {
      strengthBars.setAttribute("aria-valuenow", 0);
    }
  }

  // =============================================
  //  MANEJO DEL PORTAPAPELES
  // =============================================
  function copyToClipboard() {
    const password = passwordOutput.textContent;

    if (!password) return;

    if (password === "P4$5W0rD!" && !hasGeneratedPassword) return;

    navigator.clipboard
      .writeText(password)
      .then(() => {
        copiedMessage.style.display = "block";

        setTimeout(() => {
          copiedMessage.style.display = "none";
        }, 1000);
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  }

  // =============================================
  //  ACTUALIZACIÓN DE CONTRASEÑA
  // =============================================
  function updatePassword() {
    if (!hasGeneratedPassword) return;

    if (!hasSelectedOptions()) {
      showError("Please select at least one character type");
      return;
    }

    const password = generatePassword();

    if (password === null) return;

    passwordOutput.textContent = password;
    passwordOutput.classList.add("active");

    updateStrengthDisplay(password);

    copyBtn.disabled = false;
  }

  // =============================================
  //  GENERACIÓN INICIAL DE CONTRASEÑA
  // =============================================
  function generateFirstPassword() {
    if (!hasSelectedOptions()) {
      showError("Please select at least one character type (uppercase, lowercase, numbers, or symbols)");
      return;
    }

    if (!hasGeneratedPassword) {
      hasGeneratedPassword = true;

      const password = generatePassword();

      if (password === null) return;

      passwordOutput.textContent = password;
      passwordOutput.classList.add("active");

      updateStrengthDisplay(password);

      copyBtn.disabled = false;
    } else {
      updatePassword();
    }
  }

  // =============================================
  //  INICIALIZACIÓN DE LA APLICACIÓN
  // =============================================
  function init() {
    rangeInput.addEventListener("input", updateSlider);

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (hasGeneratedPassword) {
          if (hasSelectedOptions()) {
            updatePassword();
          } else {
            showError("Cannot update password without at least one character type selected");
          }
        }
      });
    });

    copyBtn.addEventListener("click", copyToClipboard);

    generateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      generateFirstPassword();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      generateFirstPassword();
    });

    updateSlider();

    passwordOutput.textContent = "P4$5W0rD!";
    passwordOutput.classList.remove("active");

    strengthText.textContent = "";
    strengthText.style.visibility = "hidden";

    updateStrengthDisplay("P4$5W0rD!");

    copyBtn.disabled = true;
  }

  init();
});

// =============================================
//  EFECTO DE PARPADEO DEL AÑO / FOOTER
// =============================================
const yearElement = document.querySelector(".year");
let blink = true;
setInterval(() => {
  yearElement.style.opacity = blink ? "0.5" : "1";
  blink = !blink;
}, 800);