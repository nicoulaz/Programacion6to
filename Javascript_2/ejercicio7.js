let cantidad = 0;
let total = 0;

let precio = parseFloat(prompt("Ingrese un precio (0 para finalizar):"));

while (precio !== 0) {
    total += precio;
    cantidad++;

    precio = parseFloat(prompt("Ingrese un precio (0 para finalizar):"));
}

let promedio = 0;

if (cantidad > 0) {
    promedio = total / cantidad;
}

alert("Cantidad de productos ingresados: " + cantidad);
alert("Total de la compra: $" + total);
alert("Promedio de precios: $" + promedio.toFixed(2));