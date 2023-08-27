// Ambito global
var nombre_var = "Batman";
console.log(`Heroe ${nombre_var}`);

if (true) {
  var nombre_var = "Super Man";
  console.log(nombre_var);
}

console.log(nombre_var);

// Como se observa al ser de ambito global se puede modificar
// el valor de dicha variable en cualquier punto de la aplicacion.
console.log("");

// Ambito de bloque
let nombre_let = "Batman";
console.log(`Heroe ${nombre_let}`);

if (true) {
  let nombre_let = "Super Man";
  console.log(nombre_let);
}

console.log(nombre_let);

// Se puede observar que la variable declarada fuera del bloque if
// no cambia su valor ya que let es una variable de bloque.

console.log("");
// Ambito de bloque
const nombre_const = "Batman";
console.log(`Heroe ${nombre_const}`);

if (true) {
  const nombre_const = "Super Man";
  console.log(nombre_const);
}

console.log(nombre_const);
// las constantes no pueden cambiar su valor en ningun punto de la aplicacion.
// Es decir que al definir una constante con el nombre heroe y se le asigna un valor
// este no va a poder cambiar salvo que se encuentre en otro scope o bloque de codigo
