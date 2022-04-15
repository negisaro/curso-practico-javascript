// configuración Cuadrado

console.group("cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();

// configuración Triangulo
console.group("triangulos");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo  = 4;


console.log("Los lados el triangulo miden: "
    + ladoTriangulo1
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + baseTriangulo 
    + " cm"
);
const alturaTriangulo  = 3.3;
console.log("La altura del triangulo mide: " + alturaTriangulo + " cm^2");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("La perimetro del triangulo mide: " + perimetroTriangulo + " cm^2");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El Area del triangulo mide: " + perimetroTriangulo + " cm^2");

console.groupEnd();

// configuración Circulo
console.group("circulo");
//Radio
const radioCirculo = 4;
console.log("El radio del Circulo mide: " + radioCirculo + " cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Circulo mide: " + diametroCirculo + " cm");
//PI
const PI = Math.PI
console.log("El PI del Circulo mide: " + PI + " cm");
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo mide: " + perimetroCirculo + " cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Circulo mide: " + areaCirculo + " cm");


console.groupEnd();