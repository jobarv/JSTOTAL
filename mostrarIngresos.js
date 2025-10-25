function mostrarNombre() {
    let elementoNombre = document.getElementById("nombreDeUsuario");
    let elementoTexto = document.getElementById("salida");
    let mensaje = "Tu te llamas " + elementoNombre.value;


    elementoTexto.textContent = mensaje;
}