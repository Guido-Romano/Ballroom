"use strict";

/* 

MODIFICAR TODAS LAS MEDIDAS A RELATIVAS (VW)
agregar destellos al hacer clikc con en el mouse
hacer las fotos mas azuladas (como la del medio)
moveer la primer imagen del chino (porque el queda muy afuera del lado izquierdo)
ver si puedo poner el JUAN MANUEL ALMIRON con letra italica
achicar los espacios entre los elementos del nav
tratar de cambiar el numero largo de los el,entos de instagram y facebook, por un codigo mas compacto

ESTUDIAR BIEN EL ::AFTER Y EL ::BEFOREE

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
