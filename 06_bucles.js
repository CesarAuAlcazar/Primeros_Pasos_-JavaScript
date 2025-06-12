// Crea un bucle que imprima los números del 1 al 20

let número = 0
for(let número = 0; número <= 20; número++){
    console.log(número)
}
console.log("************************************************")

// Crea un bucle que sume todos los números del 1 al 100

let resultado = 0
for(let número = 1; número <= 100; número++) {
    resultado += número
}
console.log(resultado)
console.log("************************************************")

// Crea un bucle con todos los números pares entre 1 y 50

for(let pares = 1; pares <= 50; pares++){
    if (pares % 2 == 0){
        console.log(pares)
    }
}
console.log("************************************************")

// Con un array de nombres, usa un bucle para imprimir todos los nombres

let nombres = ["Anastasio", "Belinda", "Cornelio", "Dámaso", "Eusebio"]
for(let valor of nombres) {
    console.log(valor)
}
console.log("************************************************")

// Usa un bucle para contar las vocales de una cadena de texto

let texto = "Anita lava la tina"
let vocales = 0
for (let i = 0; i < texto.length; i ++){
    let vocal = texto [i].toLowerCase();
    if (vocal == `a`|| vocal == `e` || vocal == `i` || vocal == `o` || vocal == `u`) {
        vocales++
    }
}
console.log(`La cantidad de vocales que hay en el texto:  ${vocales}`)
console.log("************************************************")

// Con un array de números, usa un bucle para multiplicar todos los números del array

let números = [1, 2, 3, 4, 10]
let multiplicacion = 1
for(m = 0; m < números.length; m++){
    multiplicacion *= números[m]
}
console.log(`La multiplicación de todos los número del arrays es: ${multiplicacion}`)
console.log("************************************************")

// Escribe un bucle con la tabla del 5

for (tabla = 0; tabla <=10; tabla++){
    const total = 5 * tabla
    console.log(`La tabla del 5 es: ${tabla} * 5 = ${total}`)
}
console.log("************************************************")

// Usa un bucle para invertir una cadena de texto

let texto1 = "Anita lava la tina"
let textoAlReves = ""
for(var i = texto.length-1; i>= 0; i--) {
    textoAlReves += texto1[i]
}
console.log(textoAlReves)
console.log("************************************************")

// Usa un bucle para los 10 primeros números de Fibonacci

let a = 0
let b = 1

for(let v = 0; v < 10; v++) {
    let next = a +b
    console.log(next)
    a = b
    b = next
}
console.log("************************************************")

// Con un array de números, usa un bucle para crear un nuevo array con los números mayores de 10

let masNumeros = [1, 10, 2, 20, 3, 30, 4, 40]
let mayoresDeDiez = []

for(let n = 0; n < masNumeros.length; n++) {
    if (masNumeros [n] >= 10) {
        mayoresDeDiez.push(masNumeros[n])
    }
}
console.log(mayoresDeDiez)
console.log("************************************************")
console.log("************************************************")


// Crea un bucle que imprima los números del 1 al 20

for(p = 0; p <= 20; p++) {
    console.log(p)
}
console.log("************************************************")

// Crea un bucle que sume todos los números del 1 al 100

let suma = 0
for (s = 0; s <= 100; s++) {
    suma += s
}
console.log(suma)
console.log("************************************************")

// Crea un bucle con todos los números pares entre 1 y 50

for(p2 = 0; p2 <=50; p2++) {
    if (p2 % 2 == 0) {
        console.log(p2)
    }
}
console.log("************************************************")

// Con un array de nombres, usa un bucle para imprimir todos los nombres

// Usa un bucle para contar las vocales de una cadena de texto

// Con un array de números, usa un bucle para multiplicar todos los numeros del array

// Escribe un bucle con la tabla del 5

// Usa un bucle para invertir una cadena de texto

// Usa un bucle para con los 10 primeros números de Fibonacci

// Con un array de números, usa un bucle para crear un nuevo array con los números mayores de 10




// Crea un bucle que imprima los números del 1 al 20

// Crea un bucle que sume todos los números del 1 al 100

// Crea un bucle con todos los números pares entre 1 y 50

// Con un array de nombres, usa un bucle para imprimir todos los nombres

// Usa un bucle para contar las vocales de una cadena de texto

// Con un array de números, usa un bucle para multiplicar todos los numeros del array

// Escribe un bucle con la tabla del 5

// Usa un bucle para invertir una cadena de texto

// Usa un bucle para con los 10 primeros números de Fibonacci

// Con un array de números, usa un bucle para crear un nuevo array con los números mayores de 10