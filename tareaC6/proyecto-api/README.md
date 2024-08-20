# Proyecto API de Productos

## Descripción

Esta es una API simple creada con Node.js que gestiona una lista de productos. La API proporciona dos endpoints para obtener información sobre los productos almacenados.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:

2. Navega al directorio del proyecto:

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. **Iniciar el servidor**

   Ejecuta el siguiente comando para iniciar el servidor en el puerto 3003:

   ```bash
   node index.js
   npm run dev
   uno es para correrlo con node.js y el otro con nodemon, cualquiera funciona.
   ```

   Esto iniciará el servidor y lo pondrá a escuchar en el puerto 3003.

2. **Endpoints**

   - **GET /products**

     Retorna la lista completa de productos en formato JSON.

     **Ejemplo de solicitud:**

     ```bash
     curl http://localhost:3003/products
     ```

     **Respuesta esperada:**

     ```json
     [
       {
         "id": 1,
         "name": "Laptop",
         "price": 999.99,
         "category": "Electronics"
       },
       {
         "id": 2,
         "name": "Chair",
         "price": 49.99,
         "category": "Furniture"
       },
       {
         "id": 3,
         "name": "Pen",
         "price": 1.99,
         "category": "Stationery"
       }
     ]
     ```

   - **GET /products/:id**

     Retorna los detalles de un producto específico basado en el ID.

     **Ejemplo de solicitud:**

     ```bash
     curl http://localhost:3003/products/1
     ```

     **Respuesta esperada:**

     ```json
     {
       "id": 1,
       "name": "Laptop",
       "price": 999.99,
       "category": "Electronics"
     }
     ```

     **Si el producto no se encuentra:**

     ```json
     {
       "message": "Product not found"
     }
     ```

## Pruebas con Postman

Aquí están las capturas de pantalla de las pruebas realizadas con Postman:

- **GET /products**

  ![GET /products](![alt text](./assets/image.png))

- **GET /products/:id**

  ![GET /products/:id](![alt text](./assets/image-1.png))

## Documentación Adicional

Para más detalles sobre cómo utilizar Postman para probar
