window.onload = function() {
  var anchoVentana = window.innerWidth;
  var altoVentana = window.innerHeight;
  var objeto = document.querySelector(".pacman");

  var posX = Math.floor(anchoVentana / 2);
  var posY = Math.floor(altoVentana / 2);

  objeto.style.top = posY + "px";
  objeto.style.left = posX + "px";

  objeto.addEventListener("click", function () {
    objeto.classList.add("movePacman");
    
    // 8 segundos de animacion
    setTimeout(function() {
      objeto.classList.remove("movePacman");
    }, 9000);
  });
};
