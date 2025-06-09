// Crea una variable para cada operación aritmética

let suma = 20 + 15
let resta = 20 - 15
let multiplicación = 20 * 2
let división = 20 / 2
let modulo = 20 % 6
let exponente = 2 ** 3

console.log("La suma de los dos numeros es: ", suma)
console.log("La resta de los dos numeros es: ", resta)
console.log("La multiplicación de los dos numeros es: ", multiplicación)
console.log("La division de los dos numeros es: ", división)
console.log("El módulo de 20/6 es : ", modulo)
console.log("2 elevado a 3 es: ", exponente)
console.log("************************************************")

// Crea una variable para cada tipo de operación de asignación y utilice de las variables anteriores

suma += 3
resta -= 2
multiplicación *= 2
división /= 2
modulo %= 2
exponente **= 2

console.log("La nueva suma es: ", suma)
console.log("La nueva resta es: ", resta)
console.log("La nueva multiplicación es: ", multiplicación)
console.log("La nueva division es: ", división)
console.log("El nuevo módulo es : ", modulo)
console.log("El nuevo exponete es: ", exponente)
console.log("************************************************")

// Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let a = 14
let b = 7
let c = 7

console.log("¿A es mayor que B?: ", a>b)
console.log("¿A es mayor que C?: ", a>=c)
console.log("¿B es menor que A?: ", b<a)
console.log("¿C es menor que A?: ", c<=a)
console.log("¿B es igual que C?: ", b==c)
console.log("************************************************")

// Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("¿A es diferente de B?: ", a===b)
console.log("¿A es diferente de C?: ", a===c)
console.log("¿B es diferente de A?: ", b>=a)
console.log("¿C es diferente de A?: ", c>=a)
console.log("¿B es diferente de C?: ", b!==c)
console.log("************************************************")

// Utiliza un and

console.log("Lógico and: ", a>b && b<a)
console.log("Lógico and: ", b>a && c<a)
console.log("Lógico and: ", c=b && b<a)
console.log("************************************************")

// Utiliza un or

console.log("Lógico or: ", a>b || b<a)
console.log("Lógico or: ", b>a || c<a)
console.log("Lógico or: ", b=c || b>a)
console.log("************************************************")

// Combina los dos operadores lógicos

console.log("Lógico and y or: ", a>b && b<a || c>a)
console.log("Lógico and y or: ", b>a && c<a || c>b)
console.log("Lógico and y or: ", c=b && b<a || c>a)
console.log("************************************************")

// Añade una negación

console.log("Lógico or: ", !(c=b))
console.log("************************************************")

// Utiliza el operador ternario

const haceCalor = true
haceCalor ? console.log("Estamos a 40 grados y el sol pega con justicia"): console.log("Ponte el abrigo si sales a la calle")
console.log("************************************************")

// Combina operadores aritméticos, de comparación y lógicos

console.log(suma >= multiplicación || resta <= división)
console.log("************************************************")



// Crea una variable para cada operación aritmética
// Crea una variable para cada tipo de operación de asignación y utilice de las variables anteriores
// Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
// Imprime 5 comparaciones falsas con diferentes operadores de comparación
// Utiliza un and
// Utiliza un or
// Combina los dos operadores lógicos
// Añade una negación
// Utiliza el operador ternario
// Combina operadores aritméticos, de comparación y lógicos
