const notasalumno = [6.5, 3.4, 7, 5.1, 1];
const notasalumno2 = [3.3, 4.0, 5.1, 6, 1];

// para calcular las notas de un alumno
// debemoss sumar todas las notas y luego dividir por la cantidad de notas




function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
const promedio = suma / notas.length;

return promedio;
}

function evaluarEstado(promedio) {
        if (promedio > 4) {
        return("Aprobado");
    } else {
        return("Reprobado");
    }
}

function evaluarAlumno(notas) {
    const promedio = calcularPromedio(notas);
    const evaluacion = evaluarEstado(promedio);

    document.write("<p class='nota-alumno'>El alumno tiene nota: " + promedio + " y su estado es: " + evaluacion + "</p>"); // el <p></p> me separan cada resultado en una nueva linea, y la clase 'nota-alumno' me permite darle estilos a cada resultado
}

evaluarAlumno(notasalumno);
document.write("<br>");
evaluarAlumno(notasalumno2);