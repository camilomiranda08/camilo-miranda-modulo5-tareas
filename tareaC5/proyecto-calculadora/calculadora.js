function calcular(num1, operacion, num2) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
    case "div":
      if (num2 === 0) {
        console.log("Error: División por cero.");
        return;
      }
      return num1 / num2;
    default:
      console.log("Operación no válida. Usa +, -, *, / o div.");
      return;
  }
}

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Uso: node calculadora.js [número1] [operación] [número2]");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operacion = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Error: Uno o ambos números son inválidos.");
  process.exit(1);
}

const resultado = calcular(num1, operacion, num2);
if (resultado !== undefined) {
  console.log(`Resultado: ${resultado}`);
}
