document.addEventListener("DOMContentLoaded", () => {
  // Entradas
  const billInput = document.getElementById("bill-input");
  const tipButtons = document.querySelectorAll(".tip-btn");
  const customTipInput = document.querySelector(".custom");
  const peopleInput = document.getElementById("people-input");

  // Salidas
  const tipAmountDisplay = document.getElementById("tip-per-person");
  const totalAmountDisplay = document.getElementById("total-per-person");
  const resetButton = document.getElementById("reset-btn");
  const errorMsg = document.getElementById("people-error");

  let billValue = 0;
  let tipPercentage = 0;
  let peopleValue = 0;

  // --- Funciones de Cálculo ---

  function calculate() {
    if (peopleValue >= 1) {
      // Cálculos
      const totalTip = billValue * tipPercentage;
      const tipPerPerson = totalTip / peopleValue;
      const totalPerPerson = (billValue + totalTip) / peopleValue;

      // Renderizado
      tipAmountDisplay.innerText = `$${tipPerPerson.toFixed(2)}`;
      totalAmountDisplay.innerText = `$${totalPerPerson.toFixed(2)}`;

      // Activar botón reset si hay valores
      resetButton.classList.add("active");
    } else {
      tipAmountDisplay.innerText = "$0.00";
      totalAmountDisplay.innerText = "$0.00";
    }
  }

  // --- Event Listeners ---

  billInput.addEventListener("input", () => {
    billValue = parseFloat(billInput.value) || 0;
    calculate();
  });

  // Manejo de botones de propina
  tipButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remover estado activo de otros botones y del custom
      tipButtons.forEach((b) => b.classList.remove("active-tip"));
      customTipInput.value = "";

      // Establecer porcentaje
      e.target.classList.add("active-tip");
      tipPercentage = parseFloat(e.target.innerText) / 100;
      calculate();
    });
  });

  // Propina personalizada
  customTipInput.addEventListener("input", () => {
    tipButtons.forEach((b) => b.classList.remove("active-tip"));
    tipPercentage = (parseFloat(customTipInput.value) || 0) / 100;
    calculate();
  });

  // Validación de número de personas
  peopleInput.addEventListener("input", () => {
    peopleValue = parseInt(peopleInput.value) || 0;

    if (peopleValue <= 0 && peopleInput.value !== "") {
      errorMsg.innerText = "Can't be zero";
      peopleInput.classList.add("input-error");
    } else {
      errorMsg.innerText = "";
      peopleInput.classList.remove("input-error");
      calculate();
    }
  });

  // Botón Reset
  resetButton.addEventListener("click", () => {
    // Limpiar valores internos
    billValue = 0;
    tipPercentage = 0;
    peopleValue = 0;
    resetButton.classList.remove("active");

    // Limpiar UI
    tipButtons.forEach((b) => b.classList.remove("active-tip"));
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
    errorMsg.innerText = "";
    peopleInput.classList.remove("input-error");
  });
});
