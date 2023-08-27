// Puede ejecutar codigo js del lado del servidor
// Corre sobre el motor v8 de google
//  es un Engine de js de alto desempenio escrito en c++
//  el mismo que usa google. Convierte codigo js a lenguaje de maquina

// Las entradas y salidas no bloquean el servidor y es sumamente facil de utilizar

// Modelo de entradas y salidas no bloqueante.

//let nombre = "Facundo";
//console.log(nombre);

// Ciclo de eventos en node js
// Crea y registra la funcion dentro del objeto global
// Buscar que es el objeto global
/* const saludar = (nombre) => {
  return `Saludos ${nombre}`;
};
 */
//console.log(saludar("Facundo"));

console.log("Inicio del programa");

setTimeout(() => {
  console.log("Primer Timeout");
}, 3000);

// Caen al stack por eso no se ejecutan de forma instantanea.
setTimeout(() => {
  console.log("Segundo Timeout");
}, 0);

// Caen al stack por eso no se ejecutan de forma instantanea.
setTimeout(() => {
  console.log("Tercer Timeout");
}, 0);

console.log("Fin del Programa");
