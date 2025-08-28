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
     
      break;
    case "stack":
        ActiveStack();
     
      break;
      case "all":
        ActiveContenidoAll()
        break;
    default:
      console.log("default:", value);
      break;
  }
}

function ActiveProyecto() {
  hexagonoClass.style.opacity = 1;
  hexagonoClass.style.zIndex = 1;
  tecnologiaClass.style.opacity =0;
  tecnologiaClass.style.zIndex =0;
  sobremeClass.style.opacity = 0;
  sobremeClass.style.zIndex = 0;
};

function ActiveStack() {
    hexagonoClass.style.opacity = 0;
  hexagonoClass.style.zIndex = 0;
  tecnologiaClass.style.opacity =1;
  tecnologiaClass.style.zIndex =1;
  sobremeClass.style.opacity = 0;
  sobremeClass.style.zIndex = 0;
};

function ActiveAbout() {
  hexagonoClass.style.opacity = 0;
  hexagonoClass.style.zIndex = 0;
  tecnologiaClass.style.opacity =0;
  tecnologiaClass.style.zIndex =0;
  sobremeClass.style.opacity = 1;
  sobremeClass.style.zIndex = 1;
};

function ActiveContenidoAll(){
  hexagonoClass.style.opacity = 1;
  hexagonoClass.style.zIndex = 1;
  tecnologiaClass.style.opacity =1;
  tecnologiaClass.style.zIndex =1;
  sobremeClass.style.opacity = 1;
  sobremeClass.style.zIndex = 1;

}