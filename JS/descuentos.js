function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuentoIncluido = precio * porcentajePrecioDescuento / 100;
  return precioConDescuentoIncluido;
}

function precioConDescuento() {
  const precio = document.getElementById("precio");
  const precioValor = precio.value;
  const descuento = document.getElementById("descuento");
  const descuentoValor = descuento.value;
  const valorTotal = calcularPrecioConDescuento(precioValor, descuentoValor);
  const resultado = document.getElementById("rPrecio");
  resultado.innerText = "El precio con descuento es: " + valorTotal;
}

const cupones = ["cupon_de_amazon", "cupon_de_exito", "cupon_de_D1"];

function porcentajePrecioDescuentoCupon() {
  const precio = document.getElementById("precio");
  const precioValor = precio.value;

  const cupon = document.getElementById("cupoDescuento");
  const cuponDescuento = cupon.value;

  let descuento;

  switch (cuponDescuento) {
    case cupones[0]: // "JuanDC_es_Batman"
      descuento = 15;
      break;
    case cupones[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
      break;
    case cupones[2]: // "es_un_secreto"
      descuento = 25;
      break;
  }

  const valorTotal = calcularPrecioConDescuento(precioValor, descuento);

  const resultP = document.getElementById("rPrecioCupon");
  resultP.innerText = "El precio con descuento son: $" + valorTotal;
}
