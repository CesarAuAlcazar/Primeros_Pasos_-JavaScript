// Crea un objeto con tres atributos

let Pais = {
    nombre: "Rusia",
    continente: "Europa",
    población: 150000000
}

console.log(Pais)
console.log("************************************************")

// Accede y muestra su valor

console.log(`El nombre del país es: ${Pais.nombre}`)
console.log(`El país, ${Pais.nombre} tiene ${Pais.población} habitantes`)
console.log("************************************************")

// Agrega un atributo nuevo

Pais.idioma = "Ruso"
console.log(Pais)
console.log("************************************************")

// Elimina un atributo

delete Pais.continente
console.log(Pais)
console.log("************************************************")

// Agrega una función e invócala

Pais.clima = function (){
    console.log("En invierno hace frio  y en verano el clima es más agradable")
}
Pais.clima()
console.log("************Función agregada************************************")

// Itera los atributos del objeto

for (let clave in Pais) {
    console.log(clave)
}

for (let clave in Pais) {
    console.log(clave + " : " + Pais [clave])
}
Pais.clima()
console.log("************************************************")

// Crea un objeto anidado

let Pais2 = {
    nombre: "Rusia",
    continente: "Europa",
    población: 150000000,
    clima2: function () {
        console.log("En invierno hace frio")
    },
    Ciudades : {
        capital: "Moscú",
        segunda: "San Petersburgo",
        tercera: "Kazán",
        cuarta: "Ekaterimburgo"
    }
}

console.log(Pais2)
console.log("************************************************")

// Accede y muestra el valor de los objetos anidados

// Comprueba si los dos objetos creados son iguales

console.log(this.Pais === this.Pais2)
console.log("************************************************")

// Comprueba si dos atributos son iguales

console.log(Pais.nombre === Pais2.Ciudades.capital)
console.log(Pais.nombre === Pais2.nombre)
console.log("************************************************")





// Crea un objeto con tres atributos

// Accede y muestra su valor

// Agrega un atributo nuevo

// Elimina un atributo

// Agrega una función e invócala

// Itera los atributos del objeto

// Crea un objeto anidado

// Accede y muestra el valor de los objetos anidados

// Comprueba si los dos objetos creados son iguales

// Comprueba si dos atributos son iguales