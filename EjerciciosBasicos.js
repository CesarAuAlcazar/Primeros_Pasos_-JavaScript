// EMPEZANDO

// Declaración de variables
let nombre = "Маша"
let edad = 25
let licencia = true
let undefinidedValue
let nuloValue = null
let simbolo = Symbol("un simbolo")
let bigIntValue = BigInt(1234567890123456789012345678901234567890n)

// Imprimir variables
console.log("Nombre:", nombre)
console.log("Edad:", edad)
console.log("Licencia:", licencia)
console.log("Valor indefinido:", undefinidedValue)
console.log("Valor nulo:", nuloValue)
console.log("Símbolo:", simbolo)
console.log("BigInt:", bigIntValue)

// Imprime el tipo de cada variable
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof licencia)
console.log(typeof undefinidedValue)
console.log(typeof nuloValue)
console.log(typeof simbolo)
console.log(typeof bigIntValue)

// Modificar variables
nombre = "Иван"
edad = 30
licencia = false

//EJERCICIOS CON OPERADORES

// Operadores aritméticos
let a = 10
let b = 5

// Operadores de asignación
console.log("Suma:", a + b)
console.log("Resta:", a - b)
console.log("Multiplicación:", a * b)
console.log("División:", a / b)
console.log("Módulo:", a % b)
console.log("Exponente:", a ** b)

// Operadores de comparación
console.log("Igualdad:", a == b)
console.log("Desigualdad:", a != b)
console.log("Mayor que:", a > b)
console.log("Menor que:", a < b)
console.log("Mayor o igual que:", a >= b)

// Operadores lógicos
console.log("AND lógico:", a > 5 && b < 10)
console.log("OR lógico:", a > 5 || b > 10)
console.log("NOT lógico:", !(a > 5))

// Operador ternario
const estaLloviendo = false
estaLloviendo ? console.log("Lleva paraguas") : console.log("No es necesario llevar paraguas");


// Combina operadores aritméticos, de comparación y lógicos
let x = 15;
let y = 10;
let z = 5;
let combinacion = (x + y > z) && (x - y < z) ? "Combinación válida" : "Combinación no válida"
console.log("Resultado de la combinación:", combinacion)

// HASTA AQUÍ LA PRIMERA PARTE



// STRINGS

let miNombre = "Маша"
let unSaludo = "Hola, yo soy " + miNombre + "!"
console.log(unSaludo)
console.log(typeof  unSaludo)

// Métodos String

console.log(unSaludo.length) // Mide la longitud de unSaludo

console.log(unSaludo[0]) // Te dice el carácter de la posición 0
console.log(unSaludo[10]) // Te dice el carácter de la posición 10

console.log(unSaludo.toUpperCase()) // Convierte el texto en mayúsculas
console.log(unSaludo.toLowerCase()) // Convierte el texo a minúsculas
console.log(unSaludo.indexOf("Hola")) // Te devuelve 0 si existe la cadena
console.log(unSaludo.indexOf("Juan")) // Te devuelve -1 si no existe la cadena
console.log(unSaludo.includes("Hola")) // Te devuelve True si existe la cadena
console.log(unSaludo.includes("Juan")) // Te devuelve False si no existe la cadena
console.log(unSaludo.slice(0,7)) // Te muestra los caracteres desde la posición 0 a la 7
console.log(unSaludo.replace("Hola", "Adios")) // Reemplaza la palabra Hola por Adios


// Plantillas literales

let mensaje = `Este es un texto que
    se muestra en dos líneas` // Tienes que meter la cadena entre dos ` `
console.log(mensaje)

console.log(`Hola, yo soy  ${miNombre}  !`) // Para interpolar el valor de una variable es necesario usar ``

let  correoElectronico = "correo@correo.ru"

console.log(`Hola ${miNombre} ! Tú correo electrónico es ${correoElectronico}.`)

// Ejercicios

// Reemplazar los espacios por guiones en una cadena de texto
console.log(unSaludo.replaceAll(" ", "-"))

// Comparamos dos Strings
console.log(unSaludo == mensaje)
console.log(unSaludo == unSaludo)

// Comparamos la longitud de dos cadenas de texto
console.log(unSaludo.length == mensaje.length)
console.log(unSaludo.length == unSaludo.length)



// CONDICIONALES

// if - else

let nombre2 = "Маша"
if (nombre2 == "Машаs") {
    console.log(`Te llamas ${nombre2}`)
} else {
    console.log("No se como te llamas")
}

let años = 40
if (años < 18) {
    console.log("Eres menor de edad, estudia")
} else if (años >= 18 && años < 65) {
    console.log("Estás en edad de trabajar")
}else {
    console.log("Deberías jubilarte")
}

// Operador ternario 2

const mensaje2 = años >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mensaje2)

// Switch

let dia = 5
let nombreDia

switch (dia) {
    case 0:
        nombreDia = "lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia ="Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia ="Domingo"
        break
    default:
        nombreDia = "Este día no existe"
}

console.log(nombreDia)


// Ejercicios

// Usa un operador ternario para asignar el valor "adulto" o menor a una variable dependiendo d ela edad

let age = 15

const mensaje3 = age < 18 ? "Eres menor de edad" : "Eres mayor de edad"
console.log(mensaje3)

// Muestra en que estación del año estamos dependiendo del valor de la variable "mes"
// Con if else if

let mes = "Febrero"
if (mes == "Enero" || mes == "Febrero" | mes == "Marzo") {
    console.log("Estamos en Invierno")
}else if (mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Es Primavera")
} else if (mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Estamos en Verano")
} else if (mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
    console.log("Es Otoño")
}

// Con switch
let estacion
switch (mes) {
    case "Enero":
        estacion = "Invierno"
        break
    case "Febrero":
        estacion = "Invierno"
        break
    case "Marzo":
        estacion = "Invierno"
        break
    case "Abril":
        estacion = "Primavera"
        break
    case "Mayo":
        estacion = "Primavera"
        break
    case "Junio":
        estacion = "Primavera"
        break
    case "Julio":
        estacion = "Verano"
        break
    case "Agosto":
        estacion = "Verano"
        break
    case "Septiembre":
        estacion = "Verano"
        break
    case "Octubre":
        estacion = "Otoño"
        break
    case "Noviembre":
        estacion = "Otoño"
        break
    case "Diciembre":
        estacion = "Otoño"
        break
    default:
        estacion = "Este mes no existe"
}

console.log(estacion)

// Muestra el número de días que tiene el mes

// Con if else if

if ( mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
    console.log(`Este mes, ${mes}, tiene 31 días.`)
} else if (mes == "Febrero") {
    console.log(`Si no es bisiesto, ${mes} tiene 28 días.`)
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log(`El mes ${mes} tiene 30 días`)
}

// Con switch
let nDias
switch (mes) {
    case "Enero":
        nDias = `el ${mes} tiene 31 días`
        break
    case "Febrero":
        nDias = `el ${mes} tiene 28 días pero si es bisiesto tendrá 29`
        break
    case "Marzo":
        nDias = `el ${mes} tiene 31 días`
        break
    case "Abril":
        nDias = `el ${mes} tiene 30 días`
        break
    case "Mayo":
        nDias = `el ${mes} tiene 31 días`
        break
    case "Junio":
        nDias = `el ${mes} tiene 30 días`
        break
    case "Julio":
        nDias = `el ${mes} tiene 31 días`
        break
    case "Agosto":
        nDias = `el ${mes} tiene 31 días`
        break
    case "Septiembre":
        nDias = `el ${mes} tiene 30 días`
        break
    case "Octubre":
        nDias = `el ${mes} tiene 31 días`
        break
    case "Noviembre":
        nDias = `el ${mes} tiene 30 días`
        break
    case "Diciembre":
        nDias = `el ${mes} tiene 31 días`
        break
    default:
        estacion = "Este mes no existe"
}

console.log(nDias)

