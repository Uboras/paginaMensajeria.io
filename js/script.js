
// DOM elements
const projectContainer = document.querySelector("#projects");
const tecnologiaContainer = document.querySelector("#skills");
const contactoContainer = document.querySelector("#contact");
const sobremeContainer = document.querySelector("#about");
const navContainer = document.querySelectorAll("#nav");

const about = [
  "Soy Hernán Manera",
  "Con más de 11 años de experiencia como cajero en Cencosud S.A., decidí seguir mi pasión por la programación web. Me especialicé como desarrollador FullStack en Egg Corporation, trabajando con Java, SQL, HTML, CSS, JavaScript y Git.",
  "Estoy en constante búsqueda de nuevas tecnologías y mejores prácticas. Actualmente curso Programación Web en la UBA. Mi objetivo: aportar soluciones innovadoras y crecer como profesional."
];

const velocidad = [
  {
    tecnologias: "React Native",
    Descripcion: "Inicio de sesión con React Native",
    link: "https://github.com/Uboras/LogIn-ReactNative"
  },
  {
    tecnologias: "Java",
    Descripcion: "10 programas de Java",
    link: "https://github.com/Uboras/10-Programas-Java"
  },
  {
    tecnologias: "Java",
    Descripcion: "Calculadora y juegos en Java",
    link: "https://github.com/Uboras/PrograMane"
  },
  {
    tecnologias: "HTML, CSS y React",
    Descripcion: "Programa React avanzado UTN",
    link: "https://github.com/Uboras/UTN-DesarolladorWeb"
  },
  {
    tecnologias: "HTML, CSS y JS",
    Descripcion: "Calculadora JS",
    link: "https://uboras.github.io/CalculadoraJS/"
  },
  {
    tecnologias: "HTML, CSS y JS-Vue",
    Descripcion: "Proyecto full stack Python/Vue",
    link: "https://uboras.github.io/CAC-C1-Python-2024/"
  }
];

const tecnologias = [
  { nombre: "HTML", icon: "fa-brands fa-html5" },
  { nombre: "CSS", icon: "fa-brands fa-css3-alt" },
  { nombre: "JavaScript", icon: "fa-brands fa-js" },
  { nombre: "React", icon: "fa-brands fa-react" },
  { nombre: "React Native", icon: "fa-brands fa-react" },
  { nombre: "Java", icon: "fa-brands fa-java" },
  { nombre: "Spring Boot", icon: "fa-solid fa-leaf" },
  { nombre: "MySQL", icon: "fa-solid fa-database" }
];

const contactos = [
  "hernanmanera@hotmail.com.ar",
  "https://www.linkedin.com/in/hernan-manera-62312682/",
  "https://github.com/Uboras",
  "./PorfolioGamer/index.html"
];

const insnav = `<nav><ul><li><a href="#about">Sobre mí</a></li><li><a href="#projects">Proyectos</a></li><li><a href="#skills">Habilidades</a></li><li><a href="#contact">Contacto</a></li></ul></nav>`;
const insSobre = `<h1>${about[0]}</h1><p>${about[1]}</p><p>${about[2]}</p>`;
const insProyectos = "<h2>Proyectos</h2>" + velocidad.map(p => 
  `<div class="project"><h3>${p.tecnologias}</h3><p>${p.Descripcion}</p><a href="${p.link}" target="_blank">Ver proyecto</a></div>`
).join("");

const insTecno = "<h2>Habilidades</h2><ul class='skills'>" +
  tecnologias.map(t => `<li><i class="${t.icon}"></i><span>${t.nombre}</span></li>`).join("") +
  "</ul>";

const inscontacto = `<h2>Contacto</h2>
  <p>Puedes contactarme en: <a href="mailto:${contactos[0]}">${contactos[0]}</a></p>
  <p>Sígueme en <a href="${contactos[1]}" target="_blank">LinkedIn</a> o <a href="${contactos[2]}" target="_blank">GitHub</a>.</p>
  <h3><a href="${contactos[3]}" target="_blank">Ver perfil retro</a></h3>`;

navContainer.forEach(e => e.innerHTML = insnav);
sobremeContainer.innerHTML = insSobre;
projectContainer.innerHTML = insProyectos;
tecnologiaContainer.innerHTML = insTecno;
contactoContainer.innerHTML = inscontacto;
