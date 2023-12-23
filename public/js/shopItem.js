//seleccion del input de la cantidad
const cantidadItem = document.getElementById("cantidadItem");
//seleccion botones + / -
const botonCantidad = document.getElementsByClassName("botonCantidad")
//etiqueta p cantidad elementos
const cantidadElementos = document.querySelector("#cantidadElementos");

//calcular total
const calcularTotal = ()=>{
    const precioProdcuto = document.querySelector("#precioProducto").textContent;
    const cantidadItem = document.querySelector("#cantidadItem").value;
    const total = cantidadItem * precioProdcuto;
    document.querySelectorAll(".subtotalCuenta")[0].textContent = `$${total}`;
    document.querySelectorAll(".subtotalCuenta")[1].textContent = `$${total}`;
}

const cuantosVan = ()=>{
    cantidadElementos.textContent = cantidadItem.value;
}

const rectificar = ()=>{
    calcularTotal();
    cuantosVan();
}

//ejecutamos para que se actualicen los valores
rectificar();

//suma o resta botones
//suma
botonCantidad[0].addEventListener("click", ()=>{
    if(cantidadItem.value >= 1){
        cantidadItem.value = +cantidadItem.value + 1;
        rectificar(); 
    }
})
//resta
botonCantidad[1].addEventListener("click", ()=>{
    if(cantidadItem.value > 1){
        cantidadItem.value = +cantidadItem.value - 1;
        rectificar();
    }
})

//cambio numero desde el input
cantidadItem.addEventListener("change", ()=>{
    calcularTotal();
})

//cambiar las imagenes
const cambiarImg = (img, urlNueva) => {
    img.src = urlNueva;
}

const imgOriginal = (img, urlPrincipal) => {
    img.src = urlPrincipal;
}