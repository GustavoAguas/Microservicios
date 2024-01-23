# Proyecto de Microservicios

Este proyecto consta de dos microservicios que se comunican entre sí mediante solicitudes HTTP.

## Microservicio 1

### Descripción
El Microservicio 1 sirve como punto de entrada y se comunica con el Microservicio 2 para obtener datos adicionales.

### Configuración
1. Asegúrate de tener Node.js y npm instalados.
2. En la carpeta `microservicio1`, ejecuta `npm install` para instalar las dependencias.
3. Inicia el microservicio con `npm start`.

## Microservicio 2

### Descripción
El Microservicio 2 proporciona datos que son consumidos por el Microservicio 1.

### Configuración
1. Asegúrate de tener Node.js y npm instalados.
2. En la carpeta `microservicio2`, ejecuta `npm install` para instalar las dependencias.
3. Inicia el microservicio con `npm start`.

## Ejecución

Asegúrate de ejecutar ambos microservicios antes de probar la comunicación entre ellos. Cada microservicio debe ejecutarse en su propio puerto.

1. Microservicio 1: http://localhost:3001
2. Microservicio 2: http://localhost:3002

## Dependencias

- [Express](https://expressjs.com/): Framework web para Node.js.
- [Axios](https://axios-http.com/): Cliente HTTP para hacer solicitudes.

