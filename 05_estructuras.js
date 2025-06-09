// Crea un array con 5 elementos

let paises = ["Rusia", "Cuba", "España", "China", "Irán"]
console.log(paises)
console.log("************************************************")

// Añade dos elementos, uno al principio y otro al final
paises.push("Jamaica")
paises.unshift("Madagascar")
console.log(paises)
console.log("************************************************")

// Elimina un elemento del array

paises.splice(5, 1)
console.log(paises)
console.log("************************************************")

// Crea un set que almacene cinco elementos

let ciudades = new Set (["Moscú", "Madrid", "La Habana", "Teherán", "Kingston"])
console.log(ciudades)
console.log("************************************************")

// Añade dos elementos más. Uno de ellos repetido

ciudades.add("Pekín", "Madrid")
console.log(ciudades)
console.log("************************************************")

// Elimina un elemento del set

ciudades.delete("Kingston")
console.log(ciudades)
console.log("************************************************")

// Crea un mapa que asocie el número del mes a su nombre

let meses = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(meses)
console.log("************************************************")

// Comprueba que un mes existe

console.log("El mes " + meses.get(12) + " existe")
console.log("************************************************")

// Añade al mapa una clave con un array

meses.set(13, ciudades)
console.log(meses)
console.log("************************************************")

// Crea un Array, transfórmalo a un Set y almacénalo en un Map

let countries = new Set(paises)
console.log(countries)
meses.set(14, countries)
console.log(meses)
console.log("************************************************")