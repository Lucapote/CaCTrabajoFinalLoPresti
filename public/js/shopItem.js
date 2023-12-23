//seleccion del input de la cantidad
const cantidadItem = document.getElementById("cantidadItem");
//seleccion botones + / -
const botonCantidad = document.getElementsByClassName("botonCantidad")
//etiqueta p cantidad elementos
const cantidadElementos = document.querySelector("#cantidadElementos");

//calcular total
const calcularSubtotal = ()=>{
    const precioProdcuto = document.querySelector("#precioProducto").textContent;
    const cantidadItem = document.querySelector("#cantidadItem").value;
    const total = cantidadItem * precioProdcuto;
    document.querySelectorAll(".subtotalCuenta")[0].textContent = `$${total}`;
    document.querySelectorAll(".subtotalCuenta")[1].textContent = `$${total}`;
    return total;
}

const cuantosVan = ()=>{
    cantidadElementos.textContent = cantidadItem.value;
}

//costo envio
const costoEnvio = ()=> {
    const envioStatus = document.querySelector("#envioStatus")
    const envioPrecio = document.querySelector("#envioPrecio")
    const subtotal = calcularSubtotal();
    let totalEnvio;

    if(subtotal > 5000){
        envioStatus.textContent = "Envio Gratuito"
        envioPrecio.textContent = "$0"
        return totalEnvio = 0;
    }else{
        envioStatus.textContent = "Envio gratis a partir de $5000"
        envioPrecio.textContent = "$1500.00"
        return totalEnvio = 1500;
    }
}

//calcular total
const calcularTotal = ()=>{
    const precioTotal = document.querySelector("#precioTotal");
    const subtotal = calcularSubtotal();
    const envioValor = costoEnvio();
    const total = subtotal + envioValor;

    precioTotal.textContent = `$${total}`;
}

const rectificar = ()=>{
    calcularSubtotal();
    cuantosVan();
    costoEnvio();
    calcularTotal();
}


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

//ejecutamos para que se actualicen los valores
rectificar();