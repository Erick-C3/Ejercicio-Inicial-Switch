const pagina = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");
const imgColor = document.querySelector("img");

const OPCION_1 = "color 1";
const OPCION_2 = "color 2";
const OPCION_3 = "color 3";

const COLOR_OPC_1 = "white";
const COLOR_OPC_2 = "violet";
const COLOR_OPC_3 = "pink";

const IMG_OPC_1 = "https://www.biografiasyvidas.com/monografia/chaplin/fotos/chaplin340a.jpg";
const IMG_OPC_2 = "https://http2.mlstatic.com/D_NQ_NP_821054-MLA25926284569_082017-O.jpg";
const IMG_OPC_3 = "https://www.proyectacolor.cl/wp-content/uploads/2008/12/ros3.jpg";


const COLOR_FONDO_OPC_1 = "black";
const COLOR_FONDO_OPC_2 = "orange";
const COLOR_FONDO_OPC_3 = "blue";

const MSJ_ERROR = "Error!";

function cambioEstetica(){
    switch (selectOpcionColor.value ) {
        case OPCION_1:
            pagina.style.color = COLOR_OPC_1;
            pagina.style.backgroundColor = COLOR_FONDO_OPC_1;
            selectOpcionColor.style.color = COLOR_OPC_1;
            imgColor.src = IMG_OPC_1;
            break;
        case OPCION_2:
            pagina.style.color = COLOR_OPC_2;
            pagina.style.backgroundColor = COLOR_FONDO_OPC_2;
            imgColor.src = IMG_OPC_2;
            selectOpcionColor.style.color = COLOR_OPC_2;
            break;
        case OPCION_3:
            pagina.style.color = COLOR_OPC_3;
            selectOpcionColor.style.color = COLOR_OPC_3;
            imgColor.src = IMG_OPC_3;
            pagina.style.backgroundColor = COLOR_FONDO_OPC_3;
            break;
        default:
            alert(MSJ_ERROR);
            break;
    }
}