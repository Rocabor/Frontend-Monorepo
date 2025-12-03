// METODO API FormData

document.getElementById("form-email").addEventListener("submit", function (event) {
  event.preventDefault();

  const messError = document.getElementById("message-error");
  const input = document.getElementById("email");
  const email = input.value;

  function validarEmail(email) {
    // Expresión regular básica para validar el formato de un email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // El método test() devuelve true o false
  }

  // Función que aplica o quita el estilo de error
  function manejarEstiloError(esValido) {
    if (!esValido) {
      // Si NO es válido:
      input.classList.add("input-error"); // Añade la clase CSS de error
      messError.innerHTML = `Valid email requerid`;
      messError.style.display = "block"; // Muestra el mensaje de error
    } else {
      // Si es válido:
      input.classList.remove("input-error"); // Quita la clase CSS de error
      messError.style.display = "none"; // Oculta el mensaje de error
    }
  }

  // Añadimos el Event Listener para el evento 'blur' (cuando el usuario sale del input
  input.addEventListener("blur", function () {
    const email = this.value;
    const esValido = validarEmail(email);
    manejarEstiloError(esValido);
  });

  // Opcional: Limpiar el estilo de error si el usuario vuelve a hacer clic para corregir
  input.addEventListener("focus", function () {
    this.classList.remove("input-error");
    messError.style.display = "none";
  });
});
