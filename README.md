# Link imagen docker 
https://hub.docker.com/r/jhonedwar/user-jhon74580

# Docker Pull Command

docker pull jhonedwar/user-jhon74580


# AdoptMe API

AdoptMe es una API RESTful para gestionar usuarios, mascotas y adopciones. Incluye funcionalidades como registro de usuarios, creación de mascotas y gestión de adopciones. La API está desarrollada con Node.js, Express y MongoDB.

## Características

- Gestión de usuarios (registro, inicio de sesión, operaciones CRUD)
- Gestión de adopciones
- Generación de datos mock
- Documentación de la API con Swagger

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v20.16.0 o superior)
- [Docker](https://www.docker.com/)
- Cadena de conexión a MongoDB (definida en el archivo `.env`)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/your-repo/adoptme.git
   cd adoptme
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` y configura tus variables de entorno:
   ```
   PORT=3000
   MONGO=<tu-cadena-de-conexión-mongodb>
   SECRET_JWT=<tu-clave-secreta>
   ```

   Reemplaza `<tu-cadena-de-conexión-mongodb>` y `<tu-clave-secreta>` con tus valores reales.

## Ejecutar la Aplicación

### Modo Desarrollo

Ejecuta la aplicación con recarga automática:

```bash
npm run dev
```

### Modo Producción

Ejecuta la aplicación en producción:

```bash
npm start
```

## Documentación de la API

La documentación Swagger estará disponible en `http://localhost:3000/api-docs` cuando el servidor esté en ejecución.



## Pruebas

Ejecuta el conjunto de pruebas con Mocha:

```bash
npm test
```

## Docker

### 1. Construir  imagen de Docker:

```bash
docker build -t nombre  .
```

### 2. Ejecutar el contenedor:

```bash
docker run -p 3000:3000 --env-file .env nombre
```

### 3. Acceder a la API:

```
http://localhost:3000
```



