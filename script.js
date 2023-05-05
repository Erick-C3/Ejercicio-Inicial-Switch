const pagina = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");

function cambioEstetica(){
    console.log(selectOpcionColor.value);

    switch (selectOpcionColor.value ) {
        case "color 1":
            pagina.style.color = "white";
            pagina.style.backgroundColor = "black";
            break;
    
        default:
            alert("ERROR");
            break;
    }
}