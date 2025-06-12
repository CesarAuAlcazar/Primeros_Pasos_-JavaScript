// Desestructura los dos primeros elementos de un Array y muéstralos por pantalla

let paises = ["Rusia", "España", "Cuba", "China"]

let [valor0, valor1, valor2, valor3] = paises
console.log(valor0)
console.log(valor1)
console.log("************************************************")

// Desestructura un Array y asigna un valor predeterminado a una variable

let [valor4, valor5, valor6, valor7, valor8 = "Mexico"] = paises
console.log(valor4)
console.log(valor5)
console.log(valor6)
console.log(valor7)
console.log(valor8)
console.log("************************************************")

// Desestructura un objeto y extrae dos propiedades

let ciudades = {
    Rusia: "Moscú",
    España: "Madrid",
    Cuba: "La Habana",
    Mexico: "Ciudad de Mexico"
}
let {Rusia, España, Cuba, Mexico} = ciudades
console.log(España)
console.log("************************************************")

// Desestructura dos propiedades de un objeto y asígnalas a nuevas variables con valores diferentes

let {Rusia: Rusia2, España: España2, Cuba: Cuba2, Mexico: Mexico2} = ciudades
console.log(España2)
console.log("************************************************")


// Desestructura un objeto anidado y muestra dos atributos

let Pais2 = {
    nombre: "Rusia",
    continente: "Europa",
    población: 150000000,
    Ciudades2 : {
        capital: "Moscú",
        segunda: "San Petersburgo",
        tercera: "Kazán",
        cuarta: "Ekaterimburgo"
    }
}

let {nombre: nombre2, Ciudades2: {capital: capital2}} = Pais2
console.log(nombre2)
console.log(capital2)
console.log("************************************************")

// Combina dos Arrays en uno nuevo con propagación

let Capitales = ["Moscú", "Madrid", "La Habana"]
let Ciudad = ["San Petersburgo", "Barcelona"]

let Ciudad2 = [...Ciudad, ...Capitales]
console.log(Ciudad2)
console.log("************************************************")

// Crea una copia de un Array con propagación

let Ciudad3 = [...Ciudad2]
console.log(Ciudad2)
console.log("************************************************")

// Crea una copia de un objeto con propagación

let ciudades2 = {...ciudades}
console.log(ciudades2)
console.log("***********ciudades2*************************************")

// Combina dos objetos en otro nuevo con propagación

let ciudades3 = {
    capital: "Moscú",
    segunda: "San Petersburgo",
    tercera: "Kazán",
    cuarta: "Ekaterimburgo"
}

let ciudades4 = {...ciudades, ...ciudades3}
console.log(ciudades4)
console.log("***********ciudades3*************************************")

// Combina desestructuración y propagación







// Desestructura los dos primeros elementos de un Array y muestralos por pantalla

// Desestructura un Array y asigna un valor predeterminado a una variable

// Desestructura un objeto y extrae dos propiedades

// Desestructura dos propiedades de un objeto y asígnalas a nuevas variables con valores diferentes

// Desestructura un objeto anidado y muestra dos atributos

// Combina dos Arrays en uno nuevo con propagación

// Crea una copia de un Array con propagación

// Combina dos objetos en otro nuevo con propagación

// Crea una copia de un objeto con propagación

// Combina desestructuración y propagación

