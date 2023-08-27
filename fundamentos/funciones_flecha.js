// Funciones normales
/* function sumar(a, b) {
  return a + b;
} */

// Funciones flecha

/* const sumar = (a, b) => {
  return a + b;
};
console.log(sumar(1, 2));
 */

// Cuando el cuerpo de la funcion tiene solo una linea
// y dicha linea es el return se puede simplificar
// de la siguiente manera.
const sumar = (a, b) => a + b;

console.log(sumar(1, 2));
// Return implicito
const nombre = () => "Facundo";

console.log(nombre());
