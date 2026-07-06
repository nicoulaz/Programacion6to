let cantidadP = parseInt(prompt("Ingrese la cantidad de productos:"));
let totalC = 0;
for (let i = 0; i < cantidadP; i++) {
    let nombreP = prompt("Ingrese el nombre del producto:");
    let precioP = parseFloat(prompt("Ingrese el precio del producto:"));
    totalC = totalC + precioProducto;
}
alert("Cantidad de productos: " + cantidadP);
alert("Total de la compra: $" + totalC);