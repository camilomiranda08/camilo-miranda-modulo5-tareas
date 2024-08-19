import fs from "fs";

fs.readFile("numeros.txt", "utf8", (err, data) => {
  if (err) throw err;

  const numeros = data.split("\n");
  const numerosPares = numeros.filter((num) => parseInt(num) % 2 === 0);

  console.log("Números pares encontrados:");
  console.log(numerosPares.join(", "));

  fs.writeFile("numeros_pares.txt", numerosPares.join("\n"), (err) => {
    if (err) throw err;
    console.log("Archivo numeros_pares.txt generado exitosamente.");
  });
});
