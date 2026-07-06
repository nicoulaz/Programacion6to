//tenes que ejecutar uno por uno


//1
let nombre = "Nicolas";
console.log(nombre);

//2
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

//3
let resultado = 8 * 6;
console.log(resultado);

//4
let encendido = true;
console.log(encendido);



//1
let edad = Number(prompt("Ingrese su edad"));
alert("Su edad es: " + edad);

//2
let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));
alert("La suma es: " + (numero1 + numero2));

//3
let texto = prompt("Ingrese un texto");
alert("Hola " + texto);

//4
let nota = Number(prompt("Ingrese una nota"));

if (nota > 6) {
    alert("Aprobado");
}


 
//1
let nombre2 = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

alert("Su nombre completo es: " + nombre2 + " " + apellido);

//2
let n1 = Number(prompt("Ingrese el primer número"));
let n2 = Number(prompt("Ingrese el segundo número"));
let n3 = Number(prompt("Ingrese el tercer número"));

let promedio = (n1 + n2 + n3) / 3;

alert("El promedio es: " + promedio);

//3
let precio = Number(prompt("Ingrese el precio del producto"));

let iva = precio * 0.21;
let total = precio + iva;

alert("Precio con IVA: " + total);

//4
let numero = Number(prompt("Ingrese un número"));

alert("El doble es: " + (numero * 2));



//1
let numero3 = Number(prompt("Ingrese un número"));

if (numero3 > 10) {
    alert("Es mayor a 10");
}

//2
let edad2 = Number(prompt("Ingrese su edad"));

if (edad2 >= 18) {
    alert("Es mayor de edad");
}

//3
let temperatura = Number(prompt("Ingrese la temperatura"));

if (temperatura > 30) {
    alert("Hace calor");
}

//4
let numero4 = Number(prompt("Ingrese un número"));

if (numero4 > 0) {
    alert("Es positivo");
}



//1
let numero5 = Number(prompt("Ingrese un número"));

if (numero5 % 2 == 0) {
    alert("Es par");
}
else {
    alert("Es impar");
}

//2
let numero6 = Number(prompt("Ingrese un número"));

if (numero6 >= 0) {
    alert("Es mayor o igual a 0");
}
else {
    alert("Es negativo");
}

//3
let nota2 = Number(prompt("Ingrese una nota"));

if (nota2 >= 6) {
    alert("Aprobado");
}
else {
    alert("Desaprobado");
}

//4
let año = Number(prompt("Ingrese un año"));

if (año % 4 == 0) {
    alert("Es bisiesto");
}
else {
    alert("No es bisiesto");
}




//1
let nota3 = Number(prompt("Ingrese una nota"));

if (nota3 >= 6) {
    alert("Aprobado");
}
else {
    if (nota3 >= 4) {
        alert("Regular");
    }
    else {
        alert("Desaprobado");
    }
}

//2
let numero7 = Number(prompt("Ingrese un número"));

if (numero7 > 0) {
    alert("Positivo");
}
else {
    if (numero7 < 0) {
        alert("Negativo");
    }
    else {
        alert("Es cero");
    }
}

//3
let edad3 = Number(prompt("Ingrese una edad"));

if (edad3 <= 12) {
    alert("Niño");
}
else {
    if (edad3 <= 17) {
        alert("Adolescente");
    }
    else {
        alert("Adulto");
    }
}

//4
let calificacion = Number(prompt("Ingrese una calificación"));

if (calificacion >= 9) {
    alert("Excelente");
}
else {
    if (calificacion >= 7) {
        alert("Bueno");
    }
    else {
        if (calificacion >= 6) {
            alert("Regular");
        }
        else {
            alert("Insuficiente");
        }
    }
}




//1
let numero8 = Number(prompt("Ingrese el primer número"));
let numero9 = Number(prompt("Ingrese el segundo número"));

if (numero8 > 10 && numero9 > 10) {
    alert("Ambos son mayores a 10");
}

//2
let edad4 = Number(prompt("Ingrese su edad"));
let licencia = prompt("¿Tiene licencia? (si/no)");

if (edad4 >= 18 && licencia == "si") {
    alert("Puede conducir");
}

//3
let nota4 = Number(prompt("Ingrese la primera nota"));
let nota5 = Number(prompt("Ingrese la segunda nota"));

if (nota4 > 6 && nota5 > 6) {
    alert("Ambas notas son mayores a 6");
}

//4
let numero10 = Number(prompt("Ingrese un número"));

if (numero10 >= 10 && numero10 <= 20) {
    alert("Está entre 10 y 20");
}




//1
let edad5 = Number(prompt("Ingrese su edad"));

if (edad5 < 18 || edad5 > 65) {
    alert("Cumple la condición");
}

//2
let nota6 = Number(prompt("Ingrese la primera nota"));
let nota7 = Number(prompt("Ingrese la segunda nota"));

if (nota6 >= 6 || nota7 >= 6) {
    alert("Al menos una nota está aprobada");
}

//3
let numero11 = Number(prompt("Ingrese un número"));

if (numero11 == 0 || numero11 < 0) {
    alert("Es cero o negativo");
}

//4
let usuario = prompt("Ingrese el usuario");

if (usuario == "admin" || usuario == "Admin") {
    alert("Usuario válido");
}
else {
    alert("Usuario incorrecto");
}