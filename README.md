# Trabajo práctico 07 - Reservas de salas con MongoDB

## Descripción

El proyecto parte de la aplicación de reservas de salas de estudio desarrollada en el trabajo práctico anterior.

Se conserva la aplicación web con Express y EJS, sus rutas, controladores, middleware, vistas y el servicio que administra las reservas en memoria.

En esta unidad se incorpora Mongoose para conectarse a MongoDB Atlas y trabajar con reservas persistidas mediante scripts ejecutados desde la terminal.

La aplicación web continúa utilizando el almacenamiento en memoria. Las rutas HTTP todavía no utilizan MongoDB.

## Tecnologías

- Node.js
- Express
- EJS
- Mongoose
- MongoDB Atlas
- ESLint
- Prettier

## Instalación

Instalar las dependencias del proyecto:

    npm install

## Configuración del entorno

Crear un archivo `.env` a partir de `.env.example`.

Completar las variables:

- `PORT`: puerto de la aplicación web.
- `NODE_ENV`: entorno de ejecución.
- `MONGODB_URI`: cadena de conexión de MongoDB Atlas.

La base de datos utilizada es `reservas_salas_u7` y la colección es `reservas`.

La cadena de conexión debe incluir el nombre de la base de datos.

El archivo `.env` contiene información privada y no debe subirse al repositorio.

## Ejecución de la aplicación web

Iniciar el servidor:

    npm start

Abrir en el navegador:

    http://localhost:3000

La aplicación web mantiene las reservas en memoria. Al reiniciarla, las reservas creadas desde el formulario no se conservan.

## Pruebas de MongoDB

### Comprobar la conexión

    npm run db:comprobar

Este comando establece la conexión con MongoDB Atlas y la cierra al finalizar. No crea documentos.

### Crear una reserva

    npm run db:crear

Este comando guarda una reserva de prueba en MongoDB y muestra su identificador.

Cada ejecución correcta agrega una nueva reserva.

### Listar las reservas

    npm run db:listar

Este comando consulta los documentos guardados y muestra la cantidad total de reservas. No modifica la colección.

## Modelo de Reserva

El modelo define los siguientes campos:

- `estudiante`: texto obligatorio.
- `email`: texto obligatorio que debe contener `@`.
- `sala`: Sala Norte, Sala Sur o Sala Multimedia.
- `fecha`: texto obligatorio.
- `turno`: Mañana, Tarde o Noche.
- `personas`: número entero entre 1 y 6.

MongoDB genera automáticamente un identificador `_id` para cada documento.

## Verificación de la persistencia

Para comprobar que los datos permanecen guardados entre ejecuciones:

1. Ejecutar `npm run db:listar` y registrar la cantidad inicial.
2. Ejecutar `npm run db:crear`.
3. Registrar el identificador `_id` que devuelve el script.
4. Ejecutar nuevamente `npm run db:listar`.
5. Verificar que el documento con ese identificador aparece y que la cantidad aumentó en uno.
6. Ejecutar otra vez `npm run db:listar` y comprobar que la cantidad no cambió.
7. Revisar la colección `reservas` en MongoDB Atlas, desde Data Explorer.

## Formato y análisis estático

Aplicar el formato:

    npm run format

Comprobar el formato:

    npm run format:check

Ejecutar ESLint:

    npm run lint

Ejecutar ambas comprobaciones:

    npm run check

## Estructura de los módulos

- `src/index.js`: inicia la aplicación web.
- `src/app.js`: configura Express y sus rutas.
- `src/config/entorno.js`: lee y valida la configuración del entorno y la URI de MongoDB.
- `src/config/base-datos.js`: centraliza la conexión y desconexión de MongoDB.
- `src/modelos/reserva.js`: define el esquema de reservas.
- `src/controladores/reservas.js`: gestiona las respuestas HTTP.
- `src/rutas/reservas.js`: define las rutas de reservas.
- `src/servicios/reservas.js`: administra las reservas en memoria.
- `src/middleware/`: contiene los middleware de la aplicación.
- `scripts/comprobar-conexion.js`: prueba la conexión a MongoDB.
- `scripts/crear-reserva.js`: crea una reserva persistida.
- `scripts/listar-reservas.js`: consulta las reservas persistidas.

## Alcance

La persistencia en MongoDB se prueba mediante scripts independientes. No se modifican las rutas HTTP para conectarlas a la base de datos en esta etapa del trabajo.