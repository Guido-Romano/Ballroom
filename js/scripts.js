"use strict";

/* 
https://www.joannaleunis.com/
MODIFICAR TODAS LAS MEDIDAS A RELATIVAS (VW)
agregar destellos al hacer clikc con en el mouse
hacer las fotos mas azuladas (como la del medio)
moveer la primer imagen del chino (porque el queda muy afuera del lado izquierdo)
ver si puedo poner el JUAN MANUEL ALMIRON con letra italica
achicar los espacios entre los elementos del nav
tratar de cambiar el numero largo de los el,entos de instagram y facebook, por un codigo mas compacto
agregar un color dorado al item del navegador donde estoy parado
evitar copiar y pegar codigo usando react o vue.js

ESTUDIAR BIEN EL ::AFTER Y EL ::BEFOREE


imporante: capaz puedo meter la tipografia dentro de un container
esas tipograficas podrian tener una medida fija como 16px
pero el container box podria justar la altura con vh y el ancho con vw
CREO QUE LA SOLUCION ES font-size: larger;
bajarle transparencia a las banderas?
oscurecer un poco la portada donde aparece el chino

--------font-family: "Dancing Script", cursive;--------
--------font-family: "Crimson Text", serif; --------


*/

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});


// Función para abrir una nueva ventana o pestaña con el contenido deseado
// Agregar evento de clic a los enlaces de "Inicio", "Sobre mí" y "Lecciones"
document.querySelector('a[data-value="Inicio"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    window.location.href = 'index.html'; // Redirigir a la página "index.html" en la misma ventana
  });
  
  document.querySelector('a[data-value="Sobre mi"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    window.location.href = 'sobremi.html'; // Redirigir a la página "sobre-mi.html" en la misma ventana
  });
  
  document.querySelector('a[data-value="Lecciones"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    window.location.href = 'lecciones.html'; // Redirigir a la página "lecciones.html" en la misma ventana
  });
  




  document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a los enlaces de "Inicio", "Sobre mí" y "Lecciones"
    document.querySelector('a[data-value="Inicio"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        window.location.href = 'index.html'; // Redirigir a la página "index.html" en la misma ventana
    });

    document.querySelector('a[data-value="Sobre mi"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        window.location.href = 'sobremi.html'; // Redirigir a la página "sobremi.html" en la misma ventana
    });

    document.querySelector('a[data-value="Lecciones"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
        window.location.href = 'lecciones.html'; // Redirigir a la página "lecciones.html" en la misma ventana
    });

   // Aplicar subrayado con propiedades adicionales al elemento con valor "Inicio" si estamos en la página "index.html"
   if (window.location.pathname.includes("index.html")) {
    document.querySelector('a[data-value="Inicio"]').style.textDecoration = "underline";
    document.querySelector('a[data-value="Inicio"]').style.textUnderlineOffset = "0.3em";
    document.querySelector('a[data-value="Inicio"]').style.textDecorationColor = "rgba(247, 240, 141, 0.5)";
} else if (window.location.pathname.includes("sobremi.html")) {
    document.querySelector('a[data-value="Sobre mi"]').style.textDecoration = "underline";
    document.querySelector('a[data-value="Sobre mi"]').style.textUnderlineOffset = "0.3em";
    document.querySelector('a[data-value="Sobre mi"]').style.textDecorationColor = "rgba(247, 240, 141, 0.5)";
} else if (window.location.pathname.includes("lecciones.html")) {
    document.querySelector('a[data-value="Lecciones"]').style.textDecoration = "underline";
    document.querySelector('a[data-value="Lecciones"]').style.textUnderlineOffset = "0.3em";
    document.querySelector('a[data-value="Lecciones"]').style.textDecorationColor = "rgba(247, 240, 141, 0.5)";
}
});







