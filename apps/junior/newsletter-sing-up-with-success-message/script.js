const form = document.getElementById("form-email");
const main = document.getElementById("main-page");
const success = document.getElementById("container-success");
const eUser = document.getElementById("e-user");
const messError = document.getElementById("message-error");
const input = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = input.value;

  if (email === "") {
    messError.innerHTML = `Email required`;
    input.classList.add("highlight-effect");
    setTimeout(function () {
      input.classList.remove("highlight-effect");
    }, 220);
  } else {
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
      success.style.display = "flex";
      eUser.textContent = email;
      input.classList.remove("input-error");
      messError.innerHTML = "";
    }
  }
});

function dissmiss() {
  success.style.display = "none";
  main.style.display = "flex";
  form.reset();
}
