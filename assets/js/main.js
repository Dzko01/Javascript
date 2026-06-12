// el usuario ingresa su edad
// si tiene menos de 12... es un niñx
// si tiene menos de 18... es un adolescente
// si tiene menos de 60... es un adulto
// si tiene 60 o más... es un adulto mayor

const nombre= "Antonia"
let edad = 3

// valores falsies
// 0, null, undefined, ""

// valores truthly
// !0, "contenido", {}, []


if (!nombre) {
    console.log('el nombre no está definido')
} else if (!edad) {
    console.log("No pudimos determinar la edad de " + nombre)
} else if (edad < 12) {
    console.log(nombre + ", es niñx")
} else if (edad < 18) {
    console.log(nombre + ", es adolescente")
} else if (edad < 60) {
    console.log(nombre + ", es adulto")
} else {
    console.log(nombre + ", es adulto mayor")
}