// DOM elements
var projectContainer = document.querySelector("#projects");
var tecnologiaContainer = document.querySelector("#skills");
var contactoContainer = document.querySelector("#contact");
var sobremeContainer = document.querySelector("#about");
var navContainer = document.querySelectorAll("#nav");
// Variables
var about = [
  "Soy Hernán Manera",
  "Con más de 11 años de experiencia como cajero en Cencosud S.A. , decidí seguir mi pasión por la programación web y me convertí en desarrollador FullStack Junior en Egg Corporation, una empresa líder en la formación de programadores informáticos. En Egg Corporation, trabajo con tecnologías como Java, SQL, HTML, CSS, JavaScript, Git, JDBC y JPA, y desarrollo aplicaciones web y móviles que aportan valor a los clientes y a la sociedad.",
  "Me caracterizo por ser un aprendiz constante y curioso, siempre en busca de nuevas tecnologías y mejores prácticas para mejorar mi habilidad como desarrollador. Recientemente obtuve dos certificaciones en Java y SQL, y estoy cursando un programa de Programación Web en la Universidad de Buenos Aires. Mi objetivo es seguir creciendo profesionalmente y contribuir al avance de la industria de la programación web con soluciones innovadoras y de calidad.",
];
var velocidad = [
  ,
  {
    tecnologias: "React Native",
    Descripcion: "Inicio de sesion con React native",
    link: "https://github.com/Uboras/LogIn-ReactNative",
  },
  {
    tecnologias: "Java",
    Descripcion: "Aplicando 10 java app ",
    link: "https://github.com/Uboras/10-Programas-Java",
  },
  {
    tecnologias: "Java",
    Descripcion: "Calculadora Java y juegos",
    link: "https://github.com/Uboras/PrograMane",
  },
  {
    tecnologias: "HTML, CSS Y REACT",
    Descripcion: "Programa React avanzado Utn-web",
    link: "https://github.com/Uboras/UTN-DesarolladorWeb",
  },
  {
    tecnologias: "Html, CSS y JS",
    Descripcion: "Calculadora js",
    link: "https://uboras.github.io/CalculadoraJS/",
  },
  {
    tecnologias: "HTML, CSS Y JS-VUE",
    Descripcion: "Proyecto full stack grupo 4 integrantes. Python/Vue",
    link: "https://uboras.github.io/CAC-C1-Python-2024/",
  },
  {
    tecnologias: "",
    Descripcion: "....  más en https://github.com/Uboras",
    link: "",
  },
];
var tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "ReactNative",
  "Java",
  "SpringBoot",
  "MySql",
];
var contactos = [
  "hernanmanera@hotmail.com.ar",
  "https://www.linkedin.com/in/hernan-manera-62312682/",
  "https://github.com/Uboras",
];

// Variables componentes
var insnav =  `<nav><ul><li><a href="#about">Sobre mí</a></li><li><a href="#projects">Proyectos</a></li><li><a href="#skills">Habilidades</a></li><li><a href="#contact">Contacto</a></li></ul></nav>`;
var insSobre = `<h1>${about[0]}</h1><p>${about[1]}</p><p>${about[2]}</p>`;
var insProyectos = "<h2>Proyectos</h2>" + velocidad.map((element) => `<div class="project"><h3>${element.tecnologias}</h3><p>${element.Descripcion}</p><a href="${element.link}" target="_blank">Ver proyecto</a></div>`).join("");
var insTecno = "<h2>Habilidades</h2>" + "<ul>" + tecnologias.map((element) => `<li>${element}</li> `).join("") + "</ul>";
var inscontacto = "<h2>Contacto</h2>" + `<p>Puedes contactarme en: <a href="mailto:${contactos[0]}"> Hernana Manera(Mail)</a></p><p>Sígueme en <a href="${contactos[1]}" target="_blank">LinkedIn</a> o <a href="${contactos[2]}" target="_blank">GitHub</a>.</p>`;

// Inner sections
navContainer.forEach((element)=> 
element.innerHTML = insnav)
sobremeContainer.innerHTML = insSobre;
projectContainer.innerHTML = insProyectos;
tecnologiaContainer.innerHTML = insTecno;
contactoContainer.innerHTML = inscontacto;
