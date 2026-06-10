const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const mesSeleccionado = prompt ("¿En que mes naciste?, pon un numero de 1 al 12")
const mesSeleccionadoNumber = Number(mesSeleccionado)

// Con esto validamos que sea un número válido entre 1 y 12
if (!mesSeleccionadoNumber || mesSeleccionadoNumber < 1 || mesSeleccionadoNumber > 12) {
    console.log("Por favor, ingresa un número válido");
} else {
//Si es valido obtenemos el mes
    const mesNombre = meses[mesSeleccionadoNumber - 1];
    let estacion = "";

//Condicionales según el número del mes para determinar la estación del año
    if (mesSeleccionadoNumber === 12 || mesSeleccionadoNumber === 1 || mesSeleccionadoNumber === 2) {
        estacion = "Verano";
    } else if (mesSeleccionadoNumber >= 3 && mesSeleccionadoNumber <= 5) {
        estacion = "Otoño";
    } else if (mesSeleccionadoNumber >= 6 && mesSeleccionadoNumber <= 8) {
        estacion = "Invierno";
    } else if (mesSeleccionadoNumber >= 9 && mesSeleccionadoNumber <= 11) {
        estacion = "Primavera";
    }
// Mostramos el resultado en la página y en la consola
    document.write("<p class='mes-estacion'>El mes seleccionado es: " + mesNombre + " y la estación del año es: " + estacion + "</p>"); // el <p></p> me separan cada resultado en una nueva linea, y la clase 'mes-estacion' me permite darle estilos a cada resultado
    console.log(`${mesNombre} / ${estacion}`);
}