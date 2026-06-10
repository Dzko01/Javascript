// declarar una funcion
function saludar(nombre, multiplicador = 1) {
    var raza = "saiyajin"

function calcularKi(nombre, multiplicador) {
    const ki = nombre.length * multiplicador;
    return " tengo " + ki + " de ki. "
}
    return " Hola soy " + nombre + " y soy " + raza + calcularKi(nombre, multiplicador);
}

// invocar la funcion (ejecutar la funcion)
const saludogoku = saludar("Goku", 2);
const saludovegeta = saludar("Vegeta");

console.log(saludogoku); // Imprime: Hola, soy Goku
console.log(saludovegeta); // Imprime: Hola, soy Vegeta

