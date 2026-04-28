// Función que crea una card
function createCard(project) {
  return `
    <a href="${project.href}" class="card card--${project.difficulty.toLowerCase()}">
      <div class="cont-img">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <h2>${project.title}</h2>
      <div class="tech-stack">
        ${project.technologies.map(tech => 
          `<img src="icons/${tech}.png" alt="${tech} icon" title="${tech.toUpperCase()}" />`
        ).join('')}
      </div>
      <div class="footer-card footer-card--${project.difficulty.toLowerCase()}">
        <p class="dificulty">${project.difficulty}</p>
      </div>
    </a>
  `;
}

// Función para agrupar proyectos por dificultad
function groupByDifficulty(projects) {
  const difficulties = ['Newbie', 'Junior', 'Intermediate', 'Advanced', 'Guru'];
  const grouped = {};
  
  difficulties.forEach(diff => {
    grouped[diff] = projects.filter(p => p.difficulty === diff);
  });
  
  return grouped;
}

// Renderizar todas las cards agrupadas por dificultad
function renderProjects() {
  const container = document.getElementById('projects-container');
  const groupedProjects = groupByDifficulty(projects);
  let html = '';
  
  // Recorrer cada dificultad
  Object.entries(groupedProjects).forEach(([difficulty, projectsList]) => {
    if (projectsList.length > 0) {
      // Título de la sección con ID para el enlace
      html += `
        <div class="section-header" id="${difficulty.toLowerCase()}">
          <h2 class="section-title ${difficulty.toLowerCase()}">${difficulty}</h2>
          <span class="project-count">${projectsList.length} projects</span>
        </div>
      `;
      
      // Grid de proyectos
      html += '<div class="grid">';
      html += projectsList.map(createCard).join('');
      html += '</div>';
    }
  });
  
  container.innerHTML = html;
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderProjects);



// Base de datos de proyectos - SOLO MANTIENES ESTO
const projects = [
  // NEWBIE PROJECTS (17 proyectos)
  {
    href: './apps/newbie/qr-code-component/dist/index.html',
    image: 'images/1.jpg',
    title: 'qr code component',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/blog-preview-card/dist/index.html',
    image: 'images/2.jpg',
    title: 'blog preview card',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/social-link-profile/dist/index.html',
    image: 'images/3.jpg',
    title: 'social links profile',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/recipe-page/dist/index.html',
    image: 'images/4.jpg',
    title: 'recipe page',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/product-preview-card-component/dist/index.html',
    image: 'images/5.jpg',
    title: 'product preview card',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/four-card-feature-section/dist/index.html',
    image: 'images/6.jpg',
    title: 'four card feature section',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },  
  {
    href: './apps/newbie/meet-landing-page/dist/index.html',
    image: 'images/8.jpg',
    title: 'meet landing page',
    technologies: ['html', 'css'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/result-summary-component/dist/index.html',
    image: 'images/9.jpg',
    title: 'results summary component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/order-summary-component/dist/index.html',
    image: 'images/10.jpg',
    title: 'order summary component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/profile-card-component/dist/index.html',
    image: 'images/11.jpg',
    title: 'profile card component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/huddle-landingpage-with-single-introductory-section/dist/index.html',
    image: 'images/12.jpg',
    title: 'huddle landing page with single introductory section',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/single-price-grid-component/dist/index.html',
    image: 'images/13.jpg',
    title: 'single price grid component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/social-proof-section/dist/index.html',
    image: 'images/14.jpg',
    title: 'social proof section',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/3-column-preview-card-component/dist/index.html',
    image: 'images/15.jpg',
    title: '3 column preview card component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/stats-preview-card-component/dist/index.html',
    image: 'images/16.jpg',
    title: 'stats preview card component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/equalizer-landing-page/dist/index.html',
    image: 'images/17.jpg',
    title: 'equalizer landing page',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/nft-preview-card-component/dist/index.html',
    image: 'images/18.jpg',
    title: 'nft preview card component',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/workit-landing-page/dist/index.html',
    image: 'images/19.jpg',
    title: 'workit landing page',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/skilled-elearning-landing-page/dist/index.html',
    image: 'images/20.jpg',
    title: 'skilled elearning landing page',
    technologies: ['html', 'css', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/faq-accordion/dist/index.html',
    image: 'images/faq-accordion.jpg',
    title: 'faq accordion',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/interactive-rating-component/dist/index.html',
    image: 'images/interactive-rating-component.jpg',
    title: 'interactive rating component',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/pod-request-access-landing-page/dist/index.html',
    image: 'images/pod-request-access-landing-page.jpg',
    title: 'pod request access landing page',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },
  {
    href: './apps/newbie/intro-component-with-signup-form/dist/index.html',
    image: 'images/intro-component-with-signup-form.jpg',
    title: 'intro component with signup form',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Newbie',
  },

  // JUNIOR PROJECTS
  {
    href: './apps/junior/testimonials-grid-section/dist/index.html',
    image: 'images/7.jpg',
    title: 'testimonials grid section',
    technologies: ['html', 'css'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/article-preview-component/dist/index.html',
    image: 'images/1j.jpg',
    title: 'article preview component',
    technologies: ['html', 'css', 'js'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/newsletter-sing-up-with-success-message/dist/index.html',
    image: 'images/2j.jpg',
    title: 'newsletter sign up with success message',
    technologies: ['html', 'css', 'js'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/time-tracking-dashboard/dist/index.html',
    image: 'images/3j.jpg',
    title: 'time tracking dashboard',
    technologies: ['html', 'css', 'js'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/tip-calculator-app/dist/index.html',
    image: 'images/4j.jpg',
    title: 'tip calculator app',
    technologies: ['html', 'css', 'js'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/typing-speed-test-main/dist/index.html',
    image: 'images/5j.jpg',
    title: 'typing speed test main',
    technologies: ['html', 'css', 'js'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/fylo-data-storage-component/dist/index.html',
    image: 'images/fylo-data-storage-component.jpg',
    title: 'fylo data storage component',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/clipboard-landing-page/dist/index.html',
    image: 'images/clipboard-landing-page.jpg',
    title: 'clipboard landing page',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Junior',
  },
  {
    href: './apps/junior/contact-form/dist/index.html',
    image: 'contact-form.jpg',
    title: 'contact form',
    technologies: ['html', 'css', 'js', 'tailwind', 'vite'],
    difficulty: 'Junior',
  },

  // INTERMEDIATE PROJECTS
  {
    href: './apps/intermediate/password-generator-app/dist/index.html',
    image: 'images/6j.jpg',
    title: 'password generator app',
    technologies: ['html', 'css', 'js'],
    difficulty: 'Intermediate',
  },
];

