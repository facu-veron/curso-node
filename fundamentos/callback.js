// Los callbacks son funciones que se van a ejecutar despues en cierto
// punto del tiempo.

// ejecuta una funcion o callback en cierta parte del tiempo
/* setTimeout(function () {
  console.log("hola Mundo");
}, 1500);
 */
const getUsuarioById = (id, callback) => {
  const usuario = {
    //id: id,
    id,
    nombre: "Facundo",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});
