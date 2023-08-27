const nombre = "Batman";
const real = "Bruce Wayne";

const normal = nombre + " " + real;
const normal_template = `${nombre} ${real}`;
const edad = 24;
// Convierte a string
const template = `Edad: ${edad} años`;

console.log(normal);
console.log(template);
console.log(normal === normal_template);
