const empleados = [
  {
    id: 1,
    nombre: "Facundo",
  },
  {
    id: 2,
    nombre: "Lisa",
  },
  {
    id: 3,
    nombre: "Leandro",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: "500",
  },
  {
    id: 3,
    salario: "100",
  },
];

const getEmpleado = (id, callback) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    if (empleado) {
      // Enviar null es como decir que no existe error en este punto
      resolve(empleado);
    }
  });
  return promesa;
};

const id = 6;

getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch((err) => console.log(err));
