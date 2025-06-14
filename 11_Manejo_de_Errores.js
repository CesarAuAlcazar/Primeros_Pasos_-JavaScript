// Captura una excepción con try/catch

let objeto;
    try {
        console.log(objeto)
        console.log("La operación se efectúa correctamente");
    } catch {
        console.log("Se ha producido un error");
    }
console.log("************************************************");

// Captura una excepción con try/catch/finally

let objeto2;
try {
    console.log(objeto2);
    console.log("La operación se efectúa correctamente");
} catch {
    console.log("Se ha producido un error");
} finally {
    console.log("Fin de programa");
}
console.log("************************************************");

// Lanza una excepción genérica

function suma(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Solo se pueden sumar número enteros");
    }
    return a +b;
}
try {
    console.log(suma("5", 10));
} catch (error) {
    console.log("Existe un error: ", error.message)
}
console.log("************************************************")

// Crea una excepción personalizada

class ErrorPersonalizado extends Error {
    constructor(message, nombre, a, b) {
        super(message);
        this.nombre = "Error de suma"
        this.a = a;
        this.b = b;
    }
    imprimeNumeros () {
        console.log("Numeros recibidos: ", this.nombre, this.a, "+", this.b);
    }
}

function suma2(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new ErrorPersonalizado("Solo se pueden sumar número enteros");
    }
    return a + b;
}

try {
    console.log(suma2(0.5, 10));
    console.log("Suma realizada con éxito")
} catch (error) {
    console.log("Hay un error: ", error.message);
    if (error instanceof ErrorPersonalizado) {
        error.imprimeNumeros();
    } else {
        console.log("Error desconocido:", error);
    }
}

console.log("************************************************")

// Lanza una excepción personalizada

// Lanza varias excepciones según una lógica definida

// Captura varias excepciones en un mismo try/catch

// Crea un bucle que intente transformar a float cada valor y capture y muestre errores

// Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// Crea una función que realice reintentos en caso de error hasta un máximo de 10







// Captura una excepción con try/catch

// Captura una excepción con try/catch/finally

// Lanza una excepción genérica

// Crea una excepción personalizada

// Lanza una excepción personalizada

// Lanza varias excepciones según una lógica definida

// Captura varias excepciones en un mismo try/catch

// Crea un bucle que intente transformar a float cada valor y capture y muestre errores

// Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// Crea una función que realice reintentos en caso de error hasta un máximo de 10
