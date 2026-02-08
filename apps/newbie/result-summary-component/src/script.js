// =============================================
//  CARGA Y PROCESAMIENTO DE DATOS
// =============================================

// Función para cargar los datos del JSON
async function loadData() {
  try {
    const response = await fetch('./src/data.json'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
}

// Función para calcular el promedio
function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  const sum = scores.reduce((total, item) => total + item.score, 0);
  return Math.round(sum / scores.length);
}

// Función para actualizar el contenido del HTML
function updateContent(data) {
  if (!data) return;

  // 1. Actualizar el puntaje promedio usando los IDs correctos
  const averageScore = calculateAverage(data);
  const scoreElement = document.getElementById('average-score');
  const scoreAriaElement = document.getElementById('average-score-sr');
  
  if (scoreElement) {
    scoreElement.textContent = averageScore;
  }
  if (scoreAriaElement) {
    scoreAriaElement.textContent = averageScore;
  }

  // 2. Actualizar las categorías dinámicamente usando el ID correcto
  const categoriesContainer = document.getElementById('categories-container');
  if (categoriesContainer) {
    // Limpiar contenido existente
    categoriesContainer.innerHTML = '';

    // Mapeo de colores y clases para cada categoría
    const categoryStyles = {
      'Reaction': {
        bgColor: 'bg-red-50',
        textColor: 'text-red-400',
        icon: './assets/images/icon-reaction.svg',
        alt: 'Lightning bolt icon representing Reaction score'
      },
      'Memory': {
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-400',
        icon: './assets/images/icon-memory.svg',
        alt: 'Brain icon representing Memory score'
      },
      'Verbal': {
        bgColor: 'bg-green-50',
        textColor: 'text-green-500',
        icon: './assets/images/icon-verbal.svg',
        alt: 'Chat bubble icon representing Verbal score'
      },
      'Visual': {
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800',
        icon: './assets/images/icon-visual.svg',
        alt: 'Eye icon representing Visual score'
      }
    };

    // Crear elementos para cada categoría
    data.forEach(item => {
      const style = categoryStyles[item.category] || categoryStyles['Reaction'];
      
      const categoryElement = document.createElement('div');
      categoryElement.className = `flex items-center justify-center h-[56px] rounded-xl ${style.bgColor}`;
      categoryElement.setAttribute('role', 'listitem');

      const innerDiv = document.createElement('div');
      innerDiv.className = `flex justify-between ${style.textColor} w-[283px] h-[21px] md:w-[235px] h-[23px]`;

      const leftDiv = document.createElement('div');
      leftDiv.className = 'flex gap-4 text-preset-6-medium md:text-preset-5-medium';

      // Usar el icono del JSON en lugar del mapeo fijo
      const iconImg = document.createElement('img');
      iconImg.src = item.icon; // CORRECCIÓN: Usar icono del JSON
      iconImg.alt = style.alt;
      iconImg.setAttribute('aria-hidden', 'true');

      const categoryName = document.createElement('span');
      categoryName.textContent = item.category;

      leftDiv.appendChild(iconImg);
      leftDiv.appendChild(categoryName);

      const rightDiv = document.createElement('div');
      rightDiv.className = 'text-preset-6-bold text-navy-950 md:text-preset-5-bold';

      const scoreSpan = document.createElement('span');
      scoreSpan.textContent = item.score;
      scoreSpan.setAttribute('aria-label', `${item.category} score: ${item.score} out of 100`);

      const separatorSpan = document.createElement('span');
      separatorSpan.className = 'opacity-50';
      separatorSpan.setAttribute('aria-hidden', 'true');
      separatorSpan.textContent = ' / 100';

      rightDiv.appendChild(scoreSpan);
      rightDiv.appendChild(separatorSpan);

      innerDiv.appendChild(leftDiv);
      innerDiv.appendChild(rightDiv);
      categoryElement.appendChild(innerDiv);

      categoriesContainer.appendChild(categoryElement);
    });
  }
}

// =============================================
//  EFECTO DE PARPADEO DEL AÑO / FOOTER
// =============================================
function setupYearBlink() {
  const yearElement = document.querySelector(".year");
  if (yearElement) {
    let blink = true;
    setInterval(() => {
      yearElement.style.opacity = blink ? "0.2" : "1";
      blink = !blink;
    }, 800);
  }
}

// =============================================
//  INICIALIZACIÓN PRINCIPAL
// =============================================
async function init() {
  // Cargar datos del JSON
  const data = await loadData();
  
  if (data) {
    // Actualizar contenido con los datos
    updateContent(data);
  } else {
    console.warn('No se pudieron cargar los datos, mostrando contenido estático.');
  }

  // Configurar efecto de parpadeo del año
  setupYearBlink();
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);