const hexagonoClass = document.querySelector('.hexagono');
const tecnologiaClass = document.querySelector(".skills");
const sobremeClass = document.querySelector(".sobremi");

function ActiveContenido(value) {
  switch (value) {
    case "about": {
      ActiveAbout();  
      console.log("Contenido activo:", value);
      break;
    }
    case "proyectos":
        ActiveProyecto();
      console.log("Contenido activo:", value);
      break;
    case "stack":
        ActiveStack();
      console.log("Contenido activo:", value);
      break;
    default:
      console.log("default:", value);
      break;
  }
}

function ActiveProyecto() {
  hexagonoClass.style.opacity = 1;
  tecnologiaClass.style.opacity =0;
  sobremeClass.style.opacity = 0;
};

function ActiveStack(value) {
  hexagonoClass.style.opacity = 0;
  tecnologiaClass.style.opacity = 1;
  sobremeClass.style.opacity = 0;


};

function ActiveAbout(value) {

  hexagonoClass.style.opacity = 0;
  tecnologiaClass.style.opacity = 0;
  sobremeClass.style.opacity = 1;


};