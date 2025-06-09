// Concatena dos cadenas de texto

let texto1 = "El perro de Roque no tiene rabo, "
let texto2 = "porque Ramón Rodríguez se lo ha robado"

console.log(texto1.concat(texto2))
console.log("************************************************")

// Muestra la longitud de una cadena de texto

console.log(texto1.length)
console.log(texto2.length)
console.log("************************************************")

// Muestra el primer y el último carácter de un texto

console.log(texto2[0])
console.log(texto2[37])
console.log("************************************************")

// Convierte a mayúsculas y a minúsculas un texto

console.log(texto1.toUpperCase())
console.log(texto1.toLowerCase())
console.log("************************************************")

// Crea una cadena de texto en varias líneas

let mensajeEnDosLineas = `El perro de San Roque no tiene rabo,
porque Ramón Rodríguez se lo ha robado`
console.log(mensajeEnDosLineas)
console.log("************************************************")

// Interpola el valor de una variable en un texto

let nombre = "Asunción"
console.log(`Hola, me llamo ${nombre} y tengo mucho calor`)
console.log("************************************************")

// Reemplaza todos los espacios en blanco de un texto por guiones

console.log(texto1.replaceAll(" ", "-"))
console.log("************************************************")

// Comprueba si el texto contiene una palabra concreta

console.log(texto1.includes("Roque"))
console.log("************************************************")

// Comprueba si dos textos son iguales

console.log(texto1 == texto2)
console.log("************************************************")

// Comprueba si dos textos miden lo mismo

console.log(texto1.length == texto2.length)



// Concatena dos cadenas de texto
// Muestra la longitud de una cadena de texto
// Muestra el primer y el último carácter de un texto
// Convierte a mayúsculas y a minúsculas un texto
// Crea una cadena de texto en varias líneas
// Interpola el valor de una variable en un texto
// Reemplaza todos los espacios en blanco de un texto por guiones
// Comprueba si el texto contiene una palabra concreta
// Comprueba si dos textos son iguales
// Comprueba si dos textos miden lo mismo
