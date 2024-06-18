

      function enviarWhatsapp() {
        // Reemplaza '123456789' con tu número de teléfono de WhatsApp
        var numeroWhatsApp = "+5491122405919";
        var mensaje = "Hola, quiero contactarte";

        // Construye la URL de WhatsApp
        var urlWhatsApp =
          "https://api.whatsapp.com/send?phone=" +
          numeroWhatsApp +
          "&text=" +
          encodeURIComponent(mensaje);

        // Abre la ventana de WhatsApp
        window.open(urlWhatsApp);
              }
function enviarMensajeInstagram(){
    var instagram ="https://www.instagram.com/hernanmanera/" 
    window.open(instagram);
}

function enviarMensajeLinkedin(){
    var linke ="https://www.linkedin.com/in/hernan-manera-62312682"
    window.open(linke);
}