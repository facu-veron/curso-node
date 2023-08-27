// La desestructuración

const address = {
  barrio: "Villa del Rosario",
  calle: "Hipolito Yrigoyen",
  numero: 3935,
  getFullAddress: function () {
    return `${this.barrio} ${this.calle} ${this.numero}`;
  },
};

/* const barrio = address.barrio;
const calle = address.calle;
const numero = address.numero;
 */
// se puede poner un valor por defecto en caso de que no llegue por el objeto
/* const { barrio, calle, numero, edad = 24 } = address;

console.log(barrio, calle, numero, edad);
 */

/* function printAddress(address) {
  const { barrio, calle, numero, edad = 24 } = address;
  console.log(barrio, calle, numero, edad);
}
printAddress(address);
 */

function printAddress({ barrio, calle, numero, edad = 24 }) {
  console.log(barrio, calle, numero, edad);
}
printAddress(address);

const heroes = ["Deadpool", "Batman", "Superman"];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];
 */
//console.log(h1, h2, h3);
// Se le asigna los nombres dentro de los corchetes
/* const [h1, h2, h3] = heroes;
console.log(h1, h2, h3); */

// Si solo me interesa el ultimo
const [, , h3] = heroes;
console.log(h3);

function printHeroe([h1, h2, h3]) {
  console.log(h1, h2, h3);
}
printHeroe(heroes);
