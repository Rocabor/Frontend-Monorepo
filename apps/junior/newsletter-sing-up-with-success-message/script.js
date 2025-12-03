const form = document.getElementById("form-email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const messError = document.getElementById("message-error");
  const input = document.getElementById("email");
  const email = input.value;
  const main = document.getElementById("main-page");
  const success = document.getElementById("container-success");
  const eUser = document.getElementById("e-user");

  function validarEmail(email) {
    // Expresión regular básica para validar el formato de un email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // El método test() devuelve true o false
  }

  if (validarEmail(email) === false) {
    // Si NO es válido:
    input.classList.add("input-error");
    messError.innerHTML = `Valid email requerid`;
    messError.style.display = "block";
  } else {
    // Si es válido:
    main.style.display = "none";
    success.style.display = "block";
    eUser.textContent = email;
  }

  // Limpiar el estilo de error si el usuario vuelve a hacer clic para corregir
  input.addEventListener("focus", function () {
    this.classList.remove("input-error");
    messError.style.display = "none";
  });
});
