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

console.log("************************************************")
console.log("***********Operadores aritméticos*************")
console.log("Suma:", a + b)
console.log("Resta:", a - b)
console.log("Multiplicación:", a * b)
console.log("División:", a / b)
console.log("Módulo:", a % b)
console.log("Exponente:", a ** b)

// Operadores de comparación
console.log("************************************************")
console.log("***********Operadores de comparación************")
console.log("Igualdad:", a == b)
console.log("Desigualdad:", a != b)
console.log("Mayor que:", a > b)
console.log("Menor que:", a < b)
console.log("Mayor o igual que:", a >= b)

// Operadores lógicos
console.log("************************************************")
console.log("**************Operadores lógicos****************")
console.log("AND lógico:", a > 5 && b < 10)
console.log("OR lógico:", a > 5 || b > 10)
console.log("NOT lógico:", !(a > 5))

// Operador ternario
console.log("************************************************")
console.log("*************Operadores ternarios***************")
const estaLloviendo = false
estaLloviendo ? console.log("Lleva paraguas") : console.log("No es necesario llevar paraguas");


// Combina operadores aritméticos, de comparación y lógicos
console.log("************************************************")
console.log("*************Operadores combinados**************")
let x = 15;
let y = 10;
let z = 5;
let combinacion = (x + y > z) && (x - y < z) ? "Combinación válida" : "Combinación no válida"
console.log("Resultado de la combinación:", combinacion)

// HASTA AQUÍ LA PRIMERA PARTE



// STRINGS
console.log("************************************************")

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
console.log("************************************************")

// Plantillas literales

console.log("*****************Strings************************")

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
console.log("¿Estos Strings son iguales?")
console.log(unSaludo == mensaje)
console.log("¿Estos Strings son iguales?")
console.log(unSaludo == unSaludo)

// Comparamos la longitud de dos cadenas de texto
console.log("¿Estos Strings miden lo mismo?")
console.log(unSaludo.length == mensaje.length)
console.log("¿Estos Strings miden lo mismo?")
console.log(unSaludo.length == unSaludo.length)
console.log("************************************************")


// CONDICIONALES

// if - else
console.log("************************************************")

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
console.log("************************************************")

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
console.log("************************************************")
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
console.log("************************************************")
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


// ARRAYS

// Crea un array que almacene cinco paises

let paises = ["Rusia", "España", "China", "Cuba", "México"]
console.log("************************************************")
console.log(paises)

// Añade dos paises más, un al principio y otro al final
paises.unshift("Jamaica")
paises.push("Vietnám")
console.log("************************************************")
console.log(paises)

// Elimina el que se encuentra en primera posición
paises.shift(1)
console.log("************************************************")
console.log(paises)

// Crea un set que almacene cinco ciudades
let ciudades = new Set (["Moscú", "Madrid", "San Petersburgo", "La Habana", "Krasnodar"])
console.log("************************************************")
console.log(ciudades)

// Añade dos ciudades más, una de ella que ya exista
ciudades.add("Moscú")
ciudades.add("Kazán")
console.log("************************************************")
console.log(ciudades)

// Elimina una ciudad
ciudades.delete("Kazán")
console.log(ciudades)

// Crea un mapa que asocie el pais a la capital
let capitales = new Map ()
    capitales = new Map([
    ["Irán", "Teheran"],
    ["Rusia", "Moscú"],
    ["España", "Madrid"],
    ["Cuba", "La Habana"],
    ["Jamaica", "Kingston"],
    ["México", "Ciudad de México"],
    ["Venezuela", "Caracas"]
])
console.log("************************************************")
console.log("Paises con sus capitales")
console.log(capitales)

// Comprueba que un país está en el mapa

console.log(capitales.has("Rusia"))

// Añade al mapa una clave con un array que almacene los paises de Europa

capitales.set("Paises de Europa", ["Rusia", "España"])
console.log(capitales)

// Crea un array, transfórmalo a set y almacénalo en un map

console.log("************************************************")
let deportes = ["Tenis", "Baloncesto", "Fútbol", " Balonmano"]
console.log(deportes)

let misDeportes = new Set(deportes)
console.log(misDeportes)

let mapaDeportes = new Map()
mapaDeportes.set("Deportes", misDeportes)
console.log(mapaDeportes)
console.log("************************************************")

// BUCLES

// Crea un bucle que imprima los números del 1 al 10

let num = 0
for(let num = 1; num <=10; num++)
    console.log(num)
console.log("************************************************")

// Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let resul = 0
for (let su = 1; su <= 100; su++) {
    resul += su
}
    console.log(resul)
console.log("************************************************")

// Crea un bucle que imprima todos los números pares entre 1 y 50

for(let num = 1; num<=50; num++){
    if (num % 2 === 0){
        console.log(num)
    }
}
console.log("************************************************")

// Con un Array de nombres, usa un bucle para imprimir cada nombre por consola

let nombres = ["Ana", "Benito", "Casimiro", "Dionisio", "Evaristo", "Fernanda", "Genaro"]
for(let valor of nombres){
    console.log(valor)
}
console.log("************************************************")

// Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "Este es un texto para contar vocales"
let vocales = 0
for (let v = 0; v < texto.length; v ++){
    let carac = texto [v].toLowerCase();
    if (carac == `a`|| carac == `e` || carac == `i` || carac == `o` || carac == `u`) {
        vocales++
    }
}
 console.log(`La cantidad de vocales que hay en el texto:  ${vocales}`)
console.log("************************************************")

// Con un Array de números, usa un bucle para multiplicar todos los números y muestra el resultado

let numeritos = [1, 2, 3, 4, 5]
let result = 1
for (let n = 0; n<numeritos.length; n++) {
    result *= numeritos[n]
}
console.log(`El resultado de multiplicar los valores del Array es: ${result}`)
console.log("************************************************")

//Escribe un bucle que escriba la tabla de multiplicar del 5

for (let mul = 0; mul <=10; mul ++) {
    const total = 5 * mul
    console.log(`La tabla del 5 es: 5 * ${mul} = ${total}`)
}

// Usa un bucle para invertir una cadena de texto

// Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// Con un Array de número, usa un bucle para crear un nuevo Array con los números mayores de 10

