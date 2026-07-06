//mostrar tabla de multiplicacion del 5
let numero = 5;
let lista = "";
for (let i = 1; i <= 10; i++) {
    lista = lista + numero + " x " + i + " = " + (numero * i) + " ";
}
alert(lista);