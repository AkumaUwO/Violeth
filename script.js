let indiceImagen = 1;
const imagenes = ["./sources/images/Buhito.jpg", "./sources/images/gatitos-durmiendo.jpg", "./sources/images/Piton.jpg", "./sources/images/Gatitobaby.jpg", "./sources/images/morrocoy.jpg"];

function cambiarImagen() {
  const imagenElemento = document.getElementById("animales");
  
  // Fade out: baja la opacidad a 0
  imagenElemento.style.opacity = 0;
  
  // Después de 500ms (tiempo de la transición), cambia la src y fade in
  setTimeout(() => {
    imagenElemento.src = imagenes[indiceImagen];
    imagenElemento.style.opacity = 1;  // Fade in: sube la opacidad a 1
    
    // Avanza al siguiente índice y reinicia si llega al final
    indiceImagen++;
    if (indiceImagen >= imagenes.length) {
      indiceImagen = 0;
    }
  }, 500);  // 500ms para coincidir con la duración de la transición CSS
}

// Ejecuta la función cambiarImagen cada 3000 milisegundos (3 segundos)
setInterval(cambiarImagen, 7000);
