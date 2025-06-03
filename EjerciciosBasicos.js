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

// HASTA AQUIÍ LA PRIMERA PARTE

