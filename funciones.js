
function abrirFormulario(nombre) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("animalNombre").textContent = nombre;
  document.getElementById("animal").value = nombre;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function enviarFormulario(event) {
  event.preventDefault();
  const nombre = document.querySelector("#modal input[type='text']").value;
  const animal = document.getElementById("animal").value;
  alert(`Gracias ${nombre}, hemos recibido tu solicitud para adoptar a ${animal}. ¡Nos contactaremos contigo pronto!`);
  cerrarModal();
  event.target.reset();
}

window.onclick = function(event) {
  if (event.target === document.getElementById("modal")) {
    cerrarModal();
  }
};function verImagen(src) {
  const modal = document.getElementById("imgModal");
  const imagen = document.getElementById("imagenGrande");
  imagen.src = src;
  modal.style.display = "block";
}

function cerrarImagen() {
  document.getElementById("imgModal").style.display = "none";
}