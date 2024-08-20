# Proyecto API de Estudiantes

Esta API proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar estudiantes. Utiliza Express.js y un archivo JSON como base de datos. La API incluye middleware de autorización y validación para proteger y asegurar los datos.

## Funcionalidades

- **GET /students**: Obtiene una lista de todos los estudiantes.
- **GET /students/:id**: Obtiene un estudiante específico por ID.
- **POST /students**: Crea un nuevo estudiante (requiere autenticación y validación).
- **PUT /students/:id**: Actualiza un estudiante existente (requiere autenticación y validación).
- **DELETE /students/:id**: Elimina un estudiante por ID (requiere autenticación).

## Middleware

### Middleware de Autorización

- **`authMiddleware`**: Verifica la presencia y validez del token de autorización en el header de la solicitud.
  - Token esperado: `Bearer mysecrettoken`
  - Respuesta:
    - **403 Forbidden**: Si el token es incorrecto o no está presente.

### Middleware de Validación

- **`validationMiddleware`**: Valida los datos del estudiante en solicitudes POST y PUT.
  - Campos requeridos:
    - `name`: Cadena de texto no vacía.
    - `age`: Número no negativo.
    - `major`: Cadena de texto no vacía.
  - Respuesta:
    - **400 Bad Request**: Si algún campo no cumple con los requisitos.

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

![Ejemplo DELETE /students/:5](![eliminando esudiante 5 con middlewares ](./assets/image-11.png))
![Ejemplo DELETE /students/:5](![estudiante eliminado ya reflejado enla base de datos](./assets/image-12.png))

**Respuesta:**

- **Código 204**: El estudiante fue eliminado exitosamente.
- **Código 404**: El estudiante no fue encontrado.

### POST /students

Crea un nuevo estudiante.

**Ejemplo de respuesta:**

![Ejemplo POST /students](![Creando 1 esudiante con middlewares](./assets/image-9.png))

### PUT /students/:id

Actualiza la información de un estudiante específico por su ID.

**Ejemplo de respuesta:**

![Ejemplo PUT /students/1](![Actualizando la informacion de 1 esudiante con middlewares.](./assets/image-10.png))

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
