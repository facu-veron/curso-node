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
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    // Enviar null es como decir que no existe error en este punto
    callback(null, empleado);
  } else {
    return `Empleado con id ${id} no existe`;
  }
};

getEmpleado(2, (err, empleado) => {
  // el null es igual a false entonces este bloque no se ejecuta

  if (err) {
    console.log("Error!");
    return console.log(err);
  }

  console.log("Empleado existe!");
  console.log(empleado);
});

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;

  if (salario) {
    // Enviar null es como decir que no existe error en este punto
    callback(null, salario);
  } else {
    return `Salario con id ${id} no existe`;
  }
};

getSalario(2, (err, salario) => {
  // el null es igual a false entonces este bloque no se ejecuta

  if (err) {
    console.log("Error!");
    return console.log(err);
  }

  console.log("El salario existe!");
  console.log(salario);
});
