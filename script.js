const pagina = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");

const COLOR_1 = "color 1";

const COLOR_2 = "color 2";
const COLOR_3 = "color 3";
function cambioEstetica(){
    console.log(selectOpcionColor.value);

    switch (selectOpcionColor.value ) {
        case COLOR_1:
            pagina.style.color = "white";
            pagina.style.backgroundColor = "black";
            break;
        case COLOR_2:
            pagina.style.color = "violet";
            pagina.style.backgroundColor = "orange";
            break;
        case COLOR_3:
            pagina.style.color = "pink";
            pagina.style.backgroundColor = "blue";
            break;
        default:
            alert("ERROR");
            break;
    }
}