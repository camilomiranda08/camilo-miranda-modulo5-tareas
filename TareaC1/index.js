//Punto 1
let libros = [
  { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 300 },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 400,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    paginas: 350,
  },
];

// 1. Imprimiendo nombre y el autor del segundo libro
console.log(`Título: ${libros[1].titulo}, Autor: ${libros[1].autor}`);

// 2. Actualizando páginas del primer libro a 350
libros[0].paginas = 350;

// 3. Imprimiendo información del primer libro después de la actualización
console.log(libros[0]);

// 4. Utilizando map para generar un nuevo array con titulo y autor
let librosSimplificados = libros.map((libro) => ({
  titulo: libro.titulo,
  autor: libro.autor,
}));

console.log(librosSimplificados);

//Punto 2
const estudiantes = [
  { nombre: "Pedro", edad: 29, promedio: 7.9 },
  { nombre: "Ana", edad: 33, promedio: 8.9 },
  { nombre: "Pablo", edad: 32, promedio: 9.5 },
  { nombre: "Juan", edad: 25, promedio: 6.0 },
  { nombre: "Maria", edad: 28, promedio: 7.3 },
  { nombre: "Andres", edad: 45, promedio: 8.7 },
];

// 1. Calculando suma de edades de todos los estudiantes
let sumaEdades = 0;

for (let i = 0; i < estudiantes.length; i++) {
  sumaEdades += estudiantes[i].edad;
}

// 2. Calculando promedio edad de los estudiantes
let promedioEdad = sumaEdades / estudiantes.length;

// 3. Imprimiendo la suma y el promedio de edad
console.log(`Suma de edades: ${sumaEdades}`);
console.log(`Promedio de edades: ${promedioEdad}`);

// Utiliza el array de estudiantes del Punto 2
let estudianteConMejorPromedio = estudiantes[0];

//Estudiante con mayor promedio
for (let i = 1; i < estudiantes.length; i++) {
  if (estudiantes[i].promedio > estudianteConMejorPromedio.promedio) {
    estudianteConMejorPromedio = estudiantes[i];
  }
}

console.log(
  `El estudiante con el mejor promedio es ${estudianteConMejorPromedio.nombre} con un promedio de ${estudianteConMejorPromedio.promedio}`
);

//Punto 3
// Array de productos
let productos = [
  { nombre: "Camisa", categoria: "Ropa", precio: 20 },
  { nombre: "Computadora", categoria: "Electrónica", precio: 800 },
  { nombre: "Zapatos", categoria: "Ropa", precio: 50 },
  { nombre: "Teléfono", categoria: "Electrónica", precio: 300 },
];

// 1. Filtrando productos con la categoría 'Ropa'
let ropa = productos.filter((producto) => producto.categoria === "Ropa");
console.log(ropa);

// 2. Filtrando productos con precio mayor de 30 en nuevo array
let preciosMayores = productos.filter((producto) => producto.precio > 30);
console.log(preciosMayores);
