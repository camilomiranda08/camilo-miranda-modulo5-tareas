# Proyecto API de Estudiantes

Este proyecto es una API simple para gestionar una lista de estudiantes utilizando Node.js y Express. La API permite realizar operaciones CRUD básicas (GET, DELETE) sobre una lista de estudiantes almacenada en un archivo JSON.

## Endpoints

### GET /students

Obtiene la lista de todos los estudiantes.

**Ejemplo de respuesta:**

![Ejemplo GET /students](![alt text](./assets/image.png))

### GET /students/:id

Obtiene los detalles de un estudiante específico por su ID.

**Ejemplo de respuesta:**

![Ejemplo GET /students/:id](![alt text](./assets/image-1.png))

### DELETE /students/:id

Elimina un estudiante específico por su ID.

**Ejemplo de respuesta:**

![Ejemplo DELETE /students/:id](![eliminando 1 esudiante](./assets/image-2.png))
![Ejemplo 2 DELETE /students/:id](![eliminado 1 estudiante de la "base de datos"](./assets/image-3.png))
![Ejemplo 3 DELETE /students/:id](![servidor actualizado con el 1 estudiante eliminado en postman](./assets/image-4.png))

**Respuesta:**

- **Código 204**: El estudiante fue eliminado exitosamente.
- **Código 404**: El estudiante no fue encontrado.

## Configuración del Proyecto

### Requisitos

- Node.js
- npm

### Instalación

1. Clona el repositorio:

2. Navega al directorio del proyecto:

3. Instala las dependencias:

   ```bash
   npm install
   ```

### Ejecución

Para iniciar el servidor, ejecuta:

```bash
npm run dev
```

### Nota

Despues de realizar las pruebas volvi a la normalidad el archivo (students.json) con todos los estudiantes.
