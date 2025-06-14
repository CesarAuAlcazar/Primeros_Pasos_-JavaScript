// Crea una función que utilice error correctamente

// Crea una función que utilice warn correctamente

// Crea una función que utilice info correctamente

// Utiliza un table

let datos = [
    ["España", "Madrid"],
    ["Rusia", "Moscú"],
    ["Cuba", "La Habana"]
];
console.table(datos);

    datos = [
        {País: "España", Capital: "Madrid"},
        {País: "Rusia", Capital: "Moscú"},
        {País: "Cuba", Capital: "La Habana"}
];
console.table(datos);
console.log("************************************************");

// Utiliza un group

console.group("Paises");
console.log("Pais: España");
console.log("Capital: Madrid");
console.log("Población: 45000000");
console.groupEnd();
console.log("************************************************");

// Utiliza un time

console.time("¿Cuanto tarda en ejecutarse?");
for (let i = 0; i <= 10000; i++);
console.timeEnd("¿Cuanto tarda en ejecutarse?");
console.log("************************************************");

// Valida con assert si un número es positivo

console.assert();
let población =15000000;
console.assert(población <=10000000, "Tienes poca población");
console.log("************************************************");

// Utiliza un count

console.count("Rusia");
console.count("Rusia");
console.count("Rusia");
console.count("Rusia");
console.countReset();
console.count("España");
console.count("España");
console.count("España");
console.log("************************************************")

// Utiliza un trace

console.trace ();
    function FA () {
        FB ();
    }
    function FB () {
    console.log("Ejecución paso a paso");
    }
    FA ();

// Utiliza un clear