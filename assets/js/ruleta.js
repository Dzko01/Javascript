const participantes = [
    "Bastián Abarca",
    "Stefany Aguilera",
    "María Cárdenas",
    "Yerica Cortés",
    "Francisca Fernández",
    "Francisco Fuentealba",
    "Kamila González",
    "Vesna Guerra",
    "Williams Jacobs",
    "Daniela Martínez",
    "Ellymar Mendoza",
    "Sebastián Ortega",
    "Jesus Pereira",
    "Diego Pinilla",
    "Alan Rodríguez",
    "Brigitte Rudas",
    "Daniel Schnettler",
    "Nadia Sepúlveda",
    "Ronald Stark",
    "Rodolfo Moreno",
    "Cristóbal Estrada",
    "Kevin Reyes",
    "Babinsky Magloire",
    "Pablo Canto",
    "Damazo Sepúlveda"
];

const colores = [
    "azul",
    "rojo",
    "violeta",
    "morado"
]

function lanzarRuleta(min, max) {
    const numeroAleatorio = Math.random() // entre 0 y <1

    const resultado = Math.floor(numeroAleatorio * (max - min + 1)) + min

    return resultado
}
// Modificamos esta funcion para que retorne el numero en vez del nombre.
function aleatorioDesdeArreglo(arreglo) {
    const index = lanzarRuleta(0, arreglo.length - 1)
    return index;

}

function renderizarResultado(idElement, texto) {
    const elementoARenderizar = document.getElementById(idElement)

    elementoARenderizar.textContent = texto
}

const getRandomButton = document.querySelector("#getRandom")

getRandomButton.addEventListener("click", () => {
    // verificamos si aun hay participantes con if + "===" (valor estricto igual 0)
    if (participantes.length === 0) {
        renderizarResultado("resultado", "Todos participaron")
        window.location.reload()
    }

    else {
        // si no se cumple la condicion del if, seguira buscando al ganador al azar
        const ganador = aleatorioDesdeArreglo(participantes)
        // Dara el nombre del participante en la posicion indicada
        const nombre = participantes[ganador]
        // Aqui se eliminan los participantes
        participantes.splice(ganador, 1)
        // Se muestra nombre del ganador
        renderizarResultado("resultado", nombre)
        // Se verifica por consola nombre participantes y cuantos quedan por participar
        console.log(`salio: ${nombre} quedan ${participantes.length}`)

    }
})

//modificamos la ruleta para que sea sin repetición. 
//Cambiamos la función para que nos devuelva el índice numérico. 
//Con ese número, rescatamos el nombre para el HTML y luego aplicamos participantes.splice()
//para remover a ese alumno del arreglo original, haciendo que la lista se reduzca dinámicamente. 
//Controlamos con un if que cuando el length del arreglo llegue a cero, 
//la página se refresque para reiniciar el juego.