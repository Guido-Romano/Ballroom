"use strict";

/* 
git add .
git commit -m "modificaciones del dia de hoy"
git push -u origin main

https://guido-romano.github.io/Ballroom/


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
revisar el bug del viewport abajo de todo en la version movile
revisar en la pagina de leeciones, cuando abro el nav bar en la version movile, que queda mal puesto con la imagen del header


--------font-family: "Dancing Script", cursive;--------
--------font-family: "Crimson Text", serif; --------









<!--
<header>
  <img src="assets/img08.jpeg" alt="Imagen de encabezado" class="img-fluid">

</header>

<footer>
  <img src="assets/img08.jpeg" alt="Imagen de pie de página" class="img-fluid">

</footer>



<section class="section-1">
  <div class="d-flex justify-content-center">
    <div class="row col-sm-12">
      <h1>Juan Manuel Almirón</h1>
    </div>
  </div>
</section>

<header>
  <img src="assets/img08.jpeg" class="img-fluid" alt="Imagen adaptada al ancho de la pantalla">
  <h2 data-section="Header" data-value="texto1">Entrena como si nunca hubieras ganado, actúa como si nunca hubieras perdido.</h2>
</header>

<div class="container section-2">
  <div class="row my-5">
    <div class="col-sm-12">
      <h2 data-section="Header" data-value="Apasionado">Este es tu gran oportunidad </h2>
  <p data-section="Header" data-value="Apasionado">Apasionado por la Dinámica, me especializo en resaltar la verdadera pasión e intención del baile para hacerte destacar en la pista de baile.
    Doy clases a competidores de todo el mundo y a estudiantes de Pro-Am. Con las restricciones actuales estoy entrenando online para que podamos seguir desarrollando juntos el mundo de la danza.<br><br>
    Apasionado por la Dinámica, me especializo en resaltar la verdadera pasión e intención del baile para hacerte destacar en la pista de baile.
    Doy clases a competidores de todo el mundo y a estudiantes de Pro-Am. Con las restricciones actuales estoy entrenando online para que podamos seguir desarrollando juntos el mundo de la danza.</p>
</div>
</div>
</div>

<div class="row col-sm-12 mt-4">
  <p data-section="Header" data-value="texto1">Apasionado por la Dinámica, me especializo en resaltar la verdadera pasión e intención del baile para hacerte destacar en la pista de baile.
    Doy clases a competidores de todo el mundo y a estudiantes de Pro-Am. Con las restricciones actuales estoy entrenando online para que podamos seguir desarrollando juntos el mundo de la danza.</p>
</div>


    <footer class="py-4">
        <div class="container text-center">
            <span data-section="footer" data-value="footer">
                &copy; 2024 Todos los derechos reservados</span>
        </div>
    </footer>

-->






/*
.section-2{
  position: relative;
  margin-top: calc(40px + -28vw); 
}

header{
  overflow: hidden; 
  position: relative; 
  height: 85vh; 
  bottom: 28vw;
  z-index: -1;
}

header h2{
font-size: calc(15px + 0.390625vw);
position: relative; 
bottom: 38vw;
font-size: 1.9em;
text-align: center;
margin: auto;
width: 80%;
}

header img, footer img {
filter: brightness(40%);
}


.footer-section{
            position: relative;
            overflow: hidden;
            height:25vw;
            top: 2.1vw;
            }
            
            .footer-section img {
            position: relative; 
            left: 0vw;
            width: 100%; 
            height: auto; 
            object-fit: cover; 
            bottom: 4.7vw;
            filter: brightness(25%);
            }

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


$(document).ready(function() {
    // Función para ajustar la posición vertical del texto debajo de la imagen visible
    function ajustarPosicionTexto() {
        var alturaImagenVisible = $(window).scrollTop() + $(window).height() - $('img').offset().top;
        $('#texto').css('top', alturaImagenVisible + 'px');
    }

    // Llama a la función cuando se carga la página y cuando se desplaza la ventana
    ajustarPosicionTexto();
    $(window).scroll(function() {
        ajustarPosicionTexto();
    });
});




