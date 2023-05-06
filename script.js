const pagina = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");
const imgColor = document.querySelector("img");

const OPCION_1 = "color 1";
const OPCION_2 = "color 2";
const OPCION_3 = "color 3";

const COLOR_OPC_1 = "white";

const IMG_OPC_1 = "https://www.biografiasyvidas.com/monografia/chaplin/fotos/chaplin340a.jpg";
const IMG_OPC_2 = "https://http2.mlstatic.com/D_NQ_NP_821054-MLA25926284569_082017-O.jpg";
const IMG_OPC_3 = "https://www.proyectacolor.cl/wp-content/uploads/2008/12/ros3.jpg";


function cambioEstetica(){
    switch (selectOpcionColor.value ) {
        case OPCION_1:
            pagina.style.color = COLOR_OPC_1;
            pagina.style.backgroundColor = "black";
            selectOpcionColor.style.color = COLOR_OPC_1;
            imgColor.src = IMG_OPC_1;
            break;
        case OPCION_2:
            pagina.style.color = "violet";
            pagina.style.backgroundColor = "orange";
            imgColor.src = IMG_OPC_2;
            selectOpcionColor.style.color = "violet";
            break;
        case OPCION_3:
            pagina.style.color = "pink";
            selectOpcionColor.style.color = "pink";
            imgColor.src = IMG_OPC_3;
            pagina.style.backgroundColor = "blue";
            break;
        default:
            alert("ERROR");
            break;
    }
}