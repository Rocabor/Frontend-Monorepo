// Usa 'let' para data, ya que será asignada después de la declaración inicial
let data = [];

// Selectores
const currentElements = document.querySelectorAll(".hr-act");
const previousElements = document.querySelectorAll(".hr-prev");
const timeSelector = document.getElementById("time-selector");
const dashboardContainer = document.getElementsByClassName("actibity-stats")[0];

// Función para manejar la actualización de la interfaz de usuario (valores numéricos)
function updateUI(selectedTimeframe) {
  if (data.length === 0) {
    console.error("Los datos no se han cargado todavía.");
    return;
  }

  // Iteramos sobre los datos Y usamos el índice para hacer coincidir con los elementos HTML
  data.forEach((item, index) => {
    const timeData = item.timeframes[selectedTimeframe];
    console.log(item.timeframes[selectedTimeframe]);

    if (currentElements[index] && previousElements[index]) {
      // Actualizamos los elementos HTML correspondientes usando textContent
      currentElements[index].textContent = `${timeData.current}hrs`;
      previousElements[index].textContent = `Previous - ${timeData.previous}hrs`;
    }
  });
}

// Función para gestionar la clase 'active' en los LI (debe estar fuera del listener)
function updateActiveButtonState(activeView) {
  // 1. Elimina la clase 'active' de todos los elementos 'li.time'
  document.querySelectorAll("#time-selector .time").forEach((item) => {
    item.classList.remove("active");
  });

  // 2. Añade la clase 'active' solo al elemento LI que tiene el data-opcion coincidente
  const activeItem = document.querySelector(`#time-selector .time[data-opcion="${activeView}"]`);

  if (activeItem) {
    activeItem.classList.add("active");
  }
}

// Manejador de Eventos para los botones de selección de tiempo (UL)
timeSelector.addEventListener("click", function (e) {
  const opcionSelect = e.target.getAttribute("data-opcion");

  if (opcionSelect) {
    // Llama a la función de actualización de VALORES
    updateUI(opcionSelect);

    // Llama a la función de actualización de ESTADO VISUAL
    updateActiveButtonState(opcionSelect);
  }
});

// Cargar el JSON al inicio (cuando carga la página)
async function cargarDatosIniciales() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("No se pudo cargar el archivo JSON.");
    data = await response.json();
    console.log("Datos cargados exitosamente.");

    // IMPORTANTE: Llama a updateUI y updateActiveButtonState solo DESPUÉS de que los datos se hayan cargado
    // Iniciamos mostrando la vista 'weekly' por defecto.
    updateUI("weekly");
    updateActiveButtonState("weekly"); // Establece el botón semanal como activo visualmente
  } catch (error) {
    console.error(error);
    if (dashboardContainer) {
      dashboardContainer.innerHTML = `<p style="color: red;">Error al cargar el menú: ${error.message}</p>`;
    }
  }
}

// Ejecutar la carga inicial
cargarDatosIniciales();
