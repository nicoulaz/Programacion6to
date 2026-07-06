let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));
let sumaNotas = 0;
let mayorNota = 0;
let menorNota = 10;
let cantidadAprobados = 0;
let cantidadDesaprobados = 0;

for (let i = 0; i < cantidadAlumnos; i++) {
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");
    let notaAlumno = parseFloat(prompt("Ingrese la nota del alumno:"));
    sumaNotas = notaAlumno;
    if (notaAlumno > mayorNota) {
        mayorNota = notaAlumno;
    }
    if (notaAlumno < menorNota) {
        menorNota = notaAlumno;
    }
    if (notaAlumno >= 7) {
        cantidadAprobados++;
    } else {
        cantidadDesaprobados++;
    }
}
let promedioGeneral = sumaNotas / cantidadAlumnos;
alert("Informe final:");
alert("Promedio general: " + promedioGeneral);
alert("Mayor nota: " + mayorNota);
alert("Menor nota: " + menorNota);
alert("Cantidad de aprobados: " + cantidadAprobados);
alert("Cantidad de desaprobados: " + cantidadDesaprobados);