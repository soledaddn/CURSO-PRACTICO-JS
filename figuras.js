// Codigo del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "Cm")

function perimetroCuadrado(Lado) {
    return Lado * 4;
}

//console.log("Los perimetro del cuadrado es: " + perimetroCuadrado + "Cm")

// const areaCuadrado = ladoCuadrado * ladoCuadrado
// console.log("El area del cuadrado es: " + areaCuadrado + "Cm2")

function areaCuadrado(Lado) {
    return Lado * Lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulo")

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "Cm, " + ladoTriangulo2 + "Cm," baseTriangulo + "Cm");

//const alturaTriangulo = 5.5;
//console.log("La autura del triangulo es de: " + alturaTriangulo + "Cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del traingulo es: " + perimetroTriangulo + "Cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es:" + areaTriangulo + "Cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

} 
 function areaTriangulo(base, altura) {
     return (base * altura) / 2;
 }

console.groupEnd();

// Codigo del Circulo

console.group("Circulo");

//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "Cm");

//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "Cm");

//const PI = Math.PI;
//console.log("El valor de PI es: " + PI + "Cm");

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "Cm");

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del ciruclo es: " + areaCirculo + "Cm2");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {

    return (radio * radio) * Math.PI;
}
console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const Input1 = document.getElementById("InputTriangulo3");
    const value1 = Input1.value;

    const Input2 = document.getElementById("InputTriangulo2");
    const value2 = Input2.value;


    const Input3 = document.getElementById("InputTriangulo1");
    const value3 = Input3.value;
  
   

    
    const perimentro = perimetroTriangulo(value2, value3, value1);
    alert(perimentro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InpudTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert (area);

}









