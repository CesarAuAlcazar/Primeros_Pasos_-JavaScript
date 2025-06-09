// Imprime un texto si una variable toma su valor

let a = 14

if(a >=18) {
    console.log("Eres mayor de edad")
}
else {
    console.log("Eres menor de edad")
}
console.log("************************************************")

// Imprime un mensaje si el usuario y la contraseña coincide con las reales

let usuario = "Sara"
let contraseña = "sarita"

if(usuario == "Sara" && contraseña == "sarita") {
    console.log("El usuario y la contraseña son correctas")
}
else{
    console.log("Datos erróneos, inténtelo de nuevo")
}
console.log("************************************************")

// Verifica si un número es positivo, negativo o cero.

b = -1
if (b >= 1) {
    console.log("El número es positivo")
} else if (b = 0) {
    console.log("El número es 0")
}else {
    console.log("El número es negativo")
}
console.log("************************************************")

// Verifica si una persona puede votar o no y en caso negativo cuantos años le faltan para votar

edad = 17
if (edad >= 18) {
    console.log("Eres mayor de edad y puedes votar")
}else {
    console.log("Lo siento no puedes votar aún")
}
console.log("Te faltan " + (18 - edad) + " años para poder votar"  )
console.log("************************************************")

// Usa un operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let madurez = true

madurez ? console.log("Eres un adulto") : console.log("Eres menor")
console.log("************************************************")

// Muestra en que estación estamos dependiendo del mes

let mes = "Junio"

if(mes == "Enero" || mes == "Febrero" || mes == "Marzo") {
    console.log("Estamos en Invierno")
} else if(mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Estamos en primavera")
    }else if(mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Estamos en verano")
        }else if(mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
        console.log("Estamos en otoño")
            }else {
             console.log("Este mes no existe")
}
console.log("************************************************")

// Muestra el número de días que tiene un mes concreto

let mes2 = "Febrero"
if(mes2 == "Enero" || mes2 == "Marzo" || mes2 == "Mayo" || mes2 == "Julio" || mes2== "Agosto"
    || mes2 == "Octubre" || mes == "Diciembre") {
    console.log("Este mes tiene 31 días")
} else if (mes2 == "Febrero") {
    console.log("Este mes tiene 28 días, 29 si es año bisiesto")
} else if(mes2 == "Abril" || mes2 == "Junio" || mes2 == "Septiembre" || mes2 == "Noviembre") {
    console.log("Este mes tiene 30 días")
}else {
    console.log("Este mes no existe")
}
console.log("************************************************")

// Usa un switch para imprimir un mensaje dependiendo del idioma

let idioma = "Ruso"
let mesaje

switch (idioma) {
    case "Español":
        mensaje = "Hola"
        break
    case "Ruso":
        mensaje = "Прибет"
        break
    case "Ingles":
        mensaje = "Hello"
}
console.log("Hola en " + idioma + " se dice " + mensaje)
console.log("************************************************")

// Usa un switch para saber en que estación del año estamos

let mesDelAño = "Diciembre"
let estación

switch (mesDelAño) {
    case "Enero":
        estación = "Invierno"
        break
    case "Febrero":
        estación = "Invierno"
        break
    case "Marzo":
        estación = "Invierno"
        break
    case "Abril":
        estación = "Primavera"
        break
    case "Mayo":
        estación = "Primavera"
        break
    case "Junio":
        estación = "Primavera"
        break
    case "Julio":
        estación = "Verano"
        break
    case "Agosto":
        estación = "Verano"
        break
    case "Septiembre":
        estación = "Verano"
        break
    case "Octubre":
        estación = "Otoño"
        break
    case "Noviembre":
        estación = "Otoño"
        break
    case "Diciembre":
        estación = "Otoño"
        break
}
console.log(estación)
console.log("************************************************")

// Usa un switch para saber cuantos días tiene un mes

switch (mesDelAño) {
    case "Enero":
        estación = 31
        break
    case "Febrero":
        estación = "28 ó 29"
        break
    case "Marzo":
        estación = 31
        break
    case "Abril":
        estación = 30
        break
    case "Mayo":
        estación = 31
        break
    case "Junio":
        estación = 30
        break
    case "Julio":
        estación = 31
        break
    case "Agosto":
        estación = 31
        break
    case "Septiembre":
        estación = 30
        break
    case "Octubre":
        estación = 31
        break
    case "Noviembre":
        estación = 30
        break
    case "Diciembre":
        estación = 31
        break
}

console.log(`El mes seleccionado es ${mesDelAño} y tiene ${estación} días`)
console.log("************************************************")




// Imprime un texto si una variable toma su valor
// Imprime un mensaje si el usuario y la contraseña coincide con las reales
// Verifica si un número es positivo, negativo o cero.
// Verifica si una persona puede votar o no y en caso negativo cuantos años le faltan para votar
// Usa un operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
// Muestra en que estación estamos dependiendo del mes
// Muestra el número de días que tiene un mes concreto
// Usa un switch para imprimir un mensaje dependiendo del idioma

// Usa un switch para saber en que estación del año estamos

// Usa un switch para saber cuantos días tiene un mes
