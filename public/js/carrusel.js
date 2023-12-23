const anchoTarjeta = document.querySelector('.producto').offsetWidth;
const tarjeta = document.querySelector('.tarjeta');
let tarjetaActual = 0;

const siguienteTarjeta = () => {
    if (tarjetaActual < tarjeta.children.length - 3) {
        tarjetaActual++;
        tarjeta.style.transform = `translateX(-${anchoTarjeta * tarjetaActual}px)`;
    } else {
        tarjetaActual = 0;
        tarjeta.style.transform = `translateX(0)`;
    }
}

const autoSlide = () => {
    siguienteTarjeta();
}

setInterval(autoSlide, 3000);
