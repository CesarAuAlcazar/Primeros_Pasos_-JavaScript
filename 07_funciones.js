// Crea una función que reciba dós números y devuelva su suma

function suma(a = 0, b = 0){
    return a + b
}
let resultado = suma (3, 8)
console.log(`La suma de a y b es: ${resultado}`)

console.log("************************************************")

// Crea una función que reciba un array de números y devuelva el mayor

const numeros = [1, 5, 2, 8, 3, 14, 9, 7];
const nMayor = buscarMayor(numeros);

function buscarMayor(numeros){

    let mayor = numeros  [0]
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    return mayor
}

console.log("El número más grande es: " + nMayor);
console.log("************************************************")

// Crea una función que reciba un string y devuelva el número de vocales que contiene

const texto = "Anita lava la tina"
const nVocales =contarVocales(texto)

function contarVocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u']
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            contador++
        }
    }
    return contador
}

console.log(`La cantidad de vocales que hay en el texto:  ${nVocales}`)
console.log("************************************************")

// Crea una función que reciba un array de Strings y devuelva un nuevo array en mayúsculas

const cadena = ["Anita", "lava", "la", "tina"]
const cMayusculas = aMayusculas(cadena)

function aMayusculas(texto1) {
    return texto1.map(cadena => cadena.toUpperCase())
}

console.log(cMayusculas)
console.log("************************************************")

// Crea una función que reciba un número y devuelva true si es primo y false si no lo es

function primo(numero2) {
    if (numero2 < 1) {
        return false
    }
    if (numero2 <=3) {
        return true
    }
    if (numero2 % 2 === 0 || numero2 % 3 === 0) {
        return false
    }
    for (let p = 5; p * p <= numero2; p +=6) {
        if (numero2 % p === 0 || numero2 % (p + 2) === 0){
            return false
        }
    }
    return true
}

console.log(primo(1))
console.log("************************************************")

// Crea una función que reciba dos arrays y devuelva otro con los elementos comunes de ambos

const aNum1 = [5, 14, 6, 9, 77, 21, 32]
const aNum2 = [6, 14, 7, 10, 77, 22, 33]

function eComunes (aNum1, aNum2) {
    const comunes = []
    for (let a = 0; a < aNum1.length; a++) {
        for (let b = 0; b < aNum2.length; b++) {
            if (aNum1[a] === aNum2[b]){
                comunes.push(aNum1[a])
                break
            }
        }
    }
    return comunes
}
console.log(`Los números que se repiten son:  ${eComunes(aNum1, aNum2)}`)
console.log("************************************************")

// Crea una función con un array de números y devuelva la suma de los números pares

// Crea una función que reciba un array de números y devuelva otro array con los números elevados al cuadrado

// Crea una función que reciba una cadena de texto y devuelva la cadena con las palabras en orden inverso

// Crea una función que calcule el factorial de un número dado







// Crea una función que reciba dós números y devuelva su suma

// Crea una función que reciba un array de números y devuelva el mayor

// Crea una función que reciba un string y devuelva el número de vocales que contiene

// Crea una función que reciba un array de Strings y devuelva un nuevo array en mayúsculas

// Crea una función que reciba un número y devuelva true si es primo y false si no lo es

// Crea una función que reciba dos arrays y devuelva otro con los elementos comunes de ambos

// Crea una función con un array de números y devuelva la suma de los números pares

// Crea una función que reciba un array de números y devuelva otro array con los números elevados al cuadrado

// Crea una función que reciba una cadena de texto y devuelva la cadena con las palabras en orden inverso

// Crea una función que calcule el factorial de un número dado