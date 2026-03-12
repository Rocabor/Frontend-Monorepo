const form = document.getElementById("form-email");
const main = document.getElementById("main-page");
const success = document.getElementById("container-success");
const eUser = document.getElementById("e-user");
const messError = document.getElementById("message-error");
const input = document.getElementById("email");
const btn = document.getElementById("subscribe");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // FUNCION DE VALIDACION DEL EMAIL
  function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email); // El método test() devuelve true o false
  }

  const email = input.value;

  if (email === "") {
    messError.innerHTML = `Email required`;
    input.classList.add("highlight-effect");
    setTimeout(function () {
      input.classList.remove("highlight-effect");
    }, 220);
  } else if (validarEmail(email)) {
    console.log("valido");
    main.style.display = "none";
    success.style.display = "flex";
    eUser.textContent = email;
    input.classList.remove("input-error");
    messError.innerHTML = "";
  } else {
    console.log("Es inválido. ");
    input.classList.add("input-error");
    messError.innerHTML = `Valid email requerid`;
    messError.style.display = "block";
  }
  
});

// ACTIVACION BOTON SUBSCRIBE EMAIL VALIDO

input.addEventListener("input", function () {
  const email = input.value;
  if (email.includes("@") && email.includes(".com") && email.length > 5) {
    btn.classList.add("btn-focus");  
  }
});

// FUNCION DE BOTON DISSMISS

function dissmiss() {
  success.style.display = "none";
  main.style.display = "flex";
  form.reset();
  btn.classList.remove("btn-focus");
}

const dismissBtn = document.getElementById("dismissBtn");
dismissBtn.addEventListener("click", dissmiss);


