// DOM elements
const hexagono = document.getElementById("hexagono");
const tecnologiaContainer = document.querySelector("#skills");
const contactoContainer = document.querySelector("#contact");
const sobremeContainer = document.querySelector("#about");
const navContainer = document.querySelectorAll("#nav");

// ================== DATA ==================
const about = [
  "Desarrollador Full Stack",
  "Experiencia en diseño, desarrollo e implementación de aplicaciones web escalables, siguiendo buenas prácticas de arquitectura y metodologías ágiles.",
  "Capacidad para integrar front-end y back-end, optimizar bases de datos relacionales (MySQL, PostgreSQL) y trabajar con APIs REST.",
  "Apasionado por el aprendizaje continuo, la resolución de problemas y el trabajo colaborativo en entornos multidisciplinarios.",
];

const proyectossss = [
  {
    tecnologias: "React Native",
    Descripcion: "Inicio de sesión con React Native",
    link: "https://github.com/Uboras/LogIn-ReactNative",
  },
  {
    tecnologias: "Java",
    Descripcion: "10 programas de Java",
    link: "https://github.com/Uboras/10-Programas-Java",
  },
  {
    tecnologias: "Java",
    Descripcion: "Calculadora y juegos en Java",
    link: "https://github.com/Uboras/PrograMane",
  },
  {
    tecnologias: "HTML, CSS y React",
    Descripcion: "Programa React avanzado UTN",
    link: "https://github.com/Uboras/UTN-DesarolladorWeb",
  },
];

const tecnologias = [
  { nombre: "HTML", icon: "fa-brands fa-html5" },
  { nombre: "CSS", icon: "fa-brands fa-css3-alt" },
  { nombre: "JavaScript", icon: "fa-brands fa-js" },
  { nombre: "React", icon: "fa-brands fa-react" },
  { nombre: "React Native", icon: "fa-brands fa-react" },
  { nombre: "Java", icon: "fa-brands fa-java" },
  { nombre: "Spring Boot", icon: "fa-solid fa-leaf" },
  { nombre: "MySQL", icon: "fa-solid fa-database" },
];

const contactos = {
  email: "manedevSolution@gmail.com",
  linkedin: "https://www.linkedin.com/in/hernan-manera-62312682/",
  github: "https://github.com/Uboras",
  instagram: "https://www.instagram.com/tu_usuario/",
  twitter: "https://twitter.com/tu_usuario",
};

// ================== HTML GENERATION ==================

// NAV
const insnav = `
  <nav>
    <ul>
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>`;
navContainer.forEach((e) => (e.innerHTML = insnav));

// SOBRE MÍ
const insSobre = `
  <div class='sobremi'>
  <div class='titleHex'>About</div>
    <h1>${about[0]}</h1>
    ${about
      .slice(1)
      .map((parrafo) => `<p>${parrafo}</p>`)
      .join("")}
  </div>`;
sobremeContainer.innerHTML = insSobre;

// PROYECTOS
const hexagonotemplate = `
  <div class="hexagono">
      <div class="titleHex">Proyectos</div>
  ${proyectossss
    .map(
      (p, i) =>
        `<div class="side side${i+1} ">
          <h3>${p.tecnologias}</h3>
          <p>${p.Descripcion}</p>
          <a href="${p.link}" target="_blank">Ver proyecto</a>
       </div>
      `
    )
    .join("")}
  </div>
`;

hexagono.innerHTML = hexagonotemplate;

// HABILIDADES
const insTecno = `
  <div class='skills'>
    <div class='titleHex'>Stack</div>
    <ul>
      ${tecnologias
        .map(
          (t) => `
        <li>
          <i class="${t.icon}"></i>
          <span>${t.nombre}</span>
        </li>
      `
        )
        .join("")}
    </ul>
  </div>`;
tecnologiaContainer.innerHTML = insTecno;

// CONTACTO
const inscontacto = `
<div class='contac'>
<div class='botonesContenido'>
<button class="expand-btn" value="about" onclick="ActiveContenido(this.value)">About</button>
<button class="expand-btn" value="proyectos" onclick="ActiveContenido(this.value)">Proyectos</button>
<button class="expand-btn" value="stack" onclick="ActiveContenido(this.value)">Stack</button>
<button class="expand-btn" id="btonAllContent" value="all" onclick="ActiveContenido(this.value)">Todo</button>
</div>
    <h2>Hernán Manera</h2>
    
    <p>Mail:  <a href="mailto:${contactos.email}">
        <i class="fa-solid fa-envelope"></i> ${contactos.email}
      </a></p>
    
      <div class="social-icons">
      <p>Sígueme en:</p>
      <a href="${contactos.linkedin}" target="_blank" title="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="${contactos.github}" target="_blank" title="GitHub">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="${contactos.instagram}" target="_blank" title="Instagram">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="${contactos.twitter}" target="_blank" title="Twitter">
        <i class="fa-brands fa-twitter"></i>
      </a>
    </div>
  </div>
`;

contactoContainer.innerHTML = inscontacto;
