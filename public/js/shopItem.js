//seleccion del input de la cantidad
const cantidadItem = document.getElementById("cantidadItem");
//seleccion botones + / -
const botonCantidad = document.getElementsByClassName("botonCantidad")

//suma o resta botones
//suma
botonCantidad[0].addEventListener("click", ()=>{
    if(cantidadItem.value >= 0){
        cantidadItem.value = +cantidadItem.value + 1;
    }
})
//resta
botonCantidad[1].addEventListener("click", ()=>{
    if(cantidadItem.value > 0){
        cantidadItem.value = +cantidadItem.value - 1;
    }
})

//cambiar las imagenes
const cambiarImg = (img, urlNueva) => {
    img.src = urlNueva;
}

const imgOriginal = (img, urlPrincipal) => {
    img.src = urlPrincipal;
}