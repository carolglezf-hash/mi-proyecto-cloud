// codigo.js

document.addEventListener("DOMContentLoaded", function() {
    // BOTÓN PARA VOLVER ATRÁS
    const botonAtras = document.querySelector(".boton-atras");
    if(botonAtras) { // verificar que exista
        botonAtras.addEventListener("click", function() {
            alert("¡Vas a volver a la página principal!");
            history.back();
        });
    }

    // BOTÓN PARA AÑADIR TEXTO EXTRA
    const botonExtra = document.getElementById("btn-extra");
    const contenedorExtra = document.getElementById("extra-texto");

    if(botonExtra && contenedorExtra) { // verificar que existan
        botonExtra.addEventListener("click", function() {
            const nuevoParrafo = document.createElement("p");
            nuevoParrafo.textContent = "Además, compartimos aficiones, risas y aventuras fuera de la universidad. Nos apoyamos mutuamente en todo momento.";
            contenedorExtra.appendChild(nuevoParrafo);
            botonExtra.disabled = true; // opcional
        });
    }
});


