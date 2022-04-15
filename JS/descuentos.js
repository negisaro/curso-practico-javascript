function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuentoIncluido = (precio * porcentajePrecioDescuento);
    return precioConDescuentoIncluido;
}

function precioConDescuento(){
    const precio = document.getElementById("precio");
    const precioValor = precio.value;
    const descuento = document.getElementById("descuento");
    const descuentoValor = descuento.value;
    const valorTotal = calcularPrecioConDescuento(precioValor, descuentoValor);
    const resultado = document.getElementById("rPrecio");
    resultado.innerText = "El precio con descuento es: " + valorTotal;
}