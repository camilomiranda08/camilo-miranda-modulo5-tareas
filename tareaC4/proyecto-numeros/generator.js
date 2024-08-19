import fs from "fs";

let numeros = "";
for (let i = 1; i <= 1000; i++) {
  numeros += i + (i < 1000 ? "\n" : "");
}

fs.writeFile("numeros.txt", numeros, (err) => {
  if (err) throw err;
  console.log("Archivo numeros.txt generado exitosamente.");
});
