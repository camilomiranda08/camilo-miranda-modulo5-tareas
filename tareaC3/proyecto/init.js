import esperarSegundos from "./async.js";

const ejecutar = async () => {
  await esperarSegundos(3);
  await esperarSegundos(5);
  await esperarSegundos(8);
};

ejecutar();
