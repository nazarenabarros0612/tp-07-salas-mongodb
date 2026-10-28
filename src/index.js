const { crearApp } = require("./app");
const { leerConfiguracion } = require("./config/entorno");
const { crearServicioReservas } = require("./servicios/reservas");

const reservasIniciales = [
  {
    id: 1,
    estudiante: "Lucía Gómez",
    email: "lucia@gmail.com",
    sala: "Sala Norte",
    fecha: "2026-09-23",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "Mateo Fernández",
    email: "mateo@gmail.com",
    sala: "Sala Sur",
    fecha: "2026-09-24",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Sofía Martínez",
    email: "sofia@gmail.com",
    sala: "Sala Multimedia",
    fecha: "2026-09-25",
    turno: "Noche",
    personas: 3,
  },
  {
    id: 4,
    estudiante: "Tomás Rodríguez",
    email: "tomas@gmail.com",
    sala: "Sala Norte",
    fecha: "2026-09-26",
    turno: "Tarde",
    personas: 1,
  },
];

function main() {
  const configuracion = leerConfiguracion();
  const servicioReservas = crearServicioReservas(reservasIniciales);

  const app = crearApp({
    servicioReservas,
    formatoMorgan: configuracion.formatoMorgan,
  });

  app.listen(configuracion.port, () => {
    console.log(
      `Aplicación disponible en http://localhost:${configuracion.port}`,
    );
  });
}

main();
