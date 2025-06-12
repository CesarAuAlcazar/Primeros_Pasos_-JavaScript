// Crea una clase con dos atributos

class Pais {
    constructor(nombre, continente, capital) {
        this.nombre = nombre
        this.continente = continente
        this.capital = capital
    }
}

let pais1 = new Pais("Rusia", "Europa", "Moscú")
let pais2 = new Pais("España", "Europa", "Madrid")

console.log(pais1)
console.log(pais2)
console.log("************************************************")

// Añade un método a la clase que utilice los atributos

class Pais2 {
    constructor(nombre, continente, capital) {
        this.nombre = nombre
        this.continente = continente
        this.capital = capital
    }
    idioma () {
        console.log("Hablan un idioma")
    }
}

let pais3 = new Pais2("Rusia", "Europa", "Moscú")
let pais4 = new Pais2("España", "Europa", "Madrid")

console.log(pais1)
pais3.idioma()
console.log(pais2)
pais4.idioma()
console.log("************************************************")

// Muestra los valores de las propiedades e invoca una función

console.log(`Este pais, ${pais3.nombre}, tiene la capital en ${pais3.capital}`)
console.log("************************************************")

// Añade un método estático a la clase

class Resta {
    static rest(y, z) {
        return y - z
    }
}

// Utiliza el método estático

console.log(Resta.rest(50, 25))
console.log("************************************************")

// Crea una clase que herede

class Mueble {
    constructor(nombre, material, estilo) {
        this.nombre = nombre
        this.material = material
        this.estilo = estilo
    }
    utilidad () {
        console.log("El mueble sirve para decorar la casa")
    }
}

class Silla extends Mueble {
    patas () {
        console.log("La silla tiene patas")
    }
}

let miSilla = new Silla("Silla de comedor", "Madera", "Moderno")

miSilla.utilidad()
miSilla.patas()
console.log("************************************************")

// Crea una clase que utilice los getters y setters

class Mueble2 {

    constructor(nombre = "Silla", material = "Metal", estilo = "Modernista") {
        this.nombre = nombre
        this.material = material
        this.estilo = estilo
    }
    utilidad () {
        console.log("El mueble sirve para decorar la casa")
    }
    get nombre2() {
        return this.nombre
    }
}

let miMueble = new Mueble2 (nombre = "Mesa")

console.log(miMueble.nombre2)
console.log("************************************************")


// Modifica la clase con getters y setters para que use atributos privados

class Mueble3 {
    #nombre;
    #material;

    constructor(nombre = "Silla", material = "Metal", estilo = "Modernista") {
        this.#nombre = nombre;
        this.#material = material;
        this.estilo = estilo;
    }
    get nombre() {
        return this.#nombre;
    }
    get material() {
        return this.#material;
    }
    set material(nuevoMaterial ) {
        this.#material = nuevoMaterial;
    }
    mostrarDatos() {
        return `Nombre: ${this.#nombre}, Material: ${this.#material}, Estilo: ${this.estilo}`;
    }
}

miMueble2 = new Mueble3("Armario", "Bronce", "Clasico");

console.log(miMueble2);
console.log(miMueble2.nombre);
console.log(miMueble2.material);

miMueble2.material =  "Oro";

console.log(miMueble2.material);
console.log(miMueble2.mostrarDatos());
console.log("************************************************")

// Utiliza getters y setters para que muestre los valores

// Sobreescribe un método de una clase que use herencia



// Crea una clase con dos atributos

// Añade un método a la clase que utilice los atributos

// Muestra los valores de las propiedades e invoca una función

// Añade un método estático a la clase

// Utiliza el método estático

// Crea una clase que herede

// Crea una clase que utilice los getters y setters

// Modifica la clase con getters y setters para que use atributos privados

// Utiliza getters y setters para que muestre los valores

// Sobreescribe un método de una clase que use herencia