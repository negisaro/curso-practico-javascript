
const PI = Math.PI;

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//empezamos a interactuar con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultadoPerimetro = document.getElementById("rPerimetro");
    resultadoPerimetro.innerText = "El perimetro es: " + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const resultadoArea = document.getElementById("rArea");
    resultadoArea.innerText = "El Area es: " + area;
}
   