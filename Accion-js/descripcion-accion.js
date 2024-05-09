

let proye = function(){
  let proyecto =[
    {
      "nombre": "Calculadora",
      "tecnologias": "Html, CSS y JS",
      "Descripcion": "Calculadora js",
   "link": "https://uboras.github.io/CalculadoraJS/"
  },
  {
    "nombre": "LogIn",
    "tecnologias": "React Native",
    "Descripcion": "Inicio de sesion con React native",
    "link": "https://github.com/Uboras/LogIn-ReactNative"
  },
  {
    "nombre": "10 Programas en java",
    "tecnologias": "Java",
    "Descripcion": "Aplicando 10 java app ",
    "link": "https://github.com/Uboras/10-Programas-Java"
  },
 {
   "nombre": "Calculadora en java",
   "tecnologias": "Java",
   "Descripcion": "Calculadora Java y juegos",
   "link": "https://github.com/Uboras/PrograMane"
  },
  {
    "nombre": "UTN DesarrolladorWeb",
    "tecnologias": "HTML,CSS Y REACT",
    "Descripcion": "Programa React avanzado Utn-web",
    "link": "https://github.com/Uboras/UTN-DesarolladorWeb"
  },
  {
    "nombre": "Egg Corporation PseudoCódigo",
    "tecnologias": "PsInt,  java",
    "Descripcion": "",
    "link": ""
  },
  {
    "nombre": "Codo a Codo FullStack Python/Vue",
    "tecnologias": "HTML, CSS Y JS-VUE",
    "Descripcion": "Proyecto full stack grupo 4 integrantes. Python/Vue",
    "link": "https://uboras.github.io/CAC-C1-Python-2024/Peliculas/index.html"
  }
]
let aux="";
proyecto.forEach(elements =>{
  let sentence =  `<p><strong>${elements.Descripcion}</strong></p><a>${elements.link}</a><p><i>${elements.tecnologias}</i></p> `
  aux+=sentence
  return aux
  
}
)

return aux}

let sobremi ="<p><strong>¡Hola! Soy Hernán</strong></p><p>Un apasionado de la tecnología y los viajes, con una trayectoria laboral en servicio que ha evolucionado hacia el fascinante mundo de la programación. Con 37 años de edad, he invertido mi último año en adquirir habilidades como desarrollador full stack.</p>";
let tecnologias = `<p><strong>BackEnd:</strong> JAVA, SPRING, SQL, POO, GIT, JDBC, JPA</p><p><strong>FrontEnd:</strong> HTML, CSS, JAVASCRIPT, REACT,</p><p><strong>App:</strong> React-Native.</p>`;
let contactame=`<p><strong>LinkedIn:</strong></p><p>linkedin.com/in/hernan-manera-62312682</p><p><strong>Sitio web (Personal)</strong></p><p>uboras.github.io/paginaMensajeria.io/</p><p><strong>Enviar email:</strong></p><p>Hernanmanera@hotmail.com.ar</p>`;
let proyectos = proye();
const predefinidos =[sobremi,tecnologias,proyectos,contactame]


const caras = document.getElementsByClassName("caras")
function remove(){
  caras.classList.remove(".animacionCara");
}
function add(){
caras.classList.add(".animacionCara");
}

function cuadro (texto){
  
  const palabraContainer = document.getElementById("text");

  let parrafos = texto.split(" ");
  let palabrasPasadas = "";
  
  parrafos.forEach((parrafo, index) => {
    let palabras = parrafo.split(" ");
    palabras.forEach((palabra, palabraIndex) => {
      setTimeout(() => {
        palabrasPasadas += `<span class="text">${palabra} &nbsp;</span>`;
        palabraContainer.innerHTML = palabrasPasadas;
      }, 10 * (index + palabraIndex));
      palabraContainer.innerHTML += "/n";
    });
    
  });
  
}
function lectura(texto){
  let textoMostrado;
predefinidos.forEach(element => {
  (element = texto)? textoMostrado=element : ""; 
});
 
  cuadro(textoMostrado);

}
lectura(sobremi);
