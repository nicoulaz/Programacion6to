let numero = parseInt(prompt("Ingrese un número:"));
let lista = "";
for (let i = 1; i <= numero; i++) {
    lista += i + " ";
}
alert("Los números del 1 al " + numero + " son: " + lista);