
let text = "¡Hola! Soy Hernán, un apasionado de la tecnología y los viajes, con una trayectoria laboral en servicio que ha evolucionado hacia el fascinante mundo de la programación. Con 37 años de edad, he invertido mi último año en adquirir habilidades como desarrollador full stack, dominando tecnologías como HTML, CSS, JavaScript, React y Java. Además, he complementado mi formación con cursos en Python y Docker, ampliando así mi conjunto de habilidades y  mi versatilidad en el desarrollo de software.";

const palabraContainer = document.getElementById("text");
let parrafos = text.split(" ");
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




