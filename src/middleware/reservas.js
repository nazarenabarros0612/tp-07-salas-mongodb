const salasPermitidas = ["Sala Norte", "Sala Sur", "Sala Multimedia"];

function prepararAreaReservas(req, res, next) {
  res.locals.seccion = "Reservas de salas";
  next();
}

function validarReserva(req, res, next) {
  const valores = req.body ?? {};

  const estudiante = String(valores.estudiante ?? "").trim();
  const email = String(valores.email ?? "").trim();
  const sala = String(valores.sala ?? "").trim();
  const fecha = String(valores.fecha ?? "").trim();
  const turno = String(valores.turno ?? "").trim();
  const personas = Number(valores.personas);

  const emailValido = email.includes("@");
  const personasValidas =
    Number.isInteger(personas) && personas >= 1 && personas <= 6;

  if (
    !estudiante ||
    !email ||
    !sala ||
    !fecha ||
    !turno ||
    !emailValido ||
    !salasPermitidas.includes(sala) ||
    !["Mañana", "Tarde", "Noche"].includes(turno) ||
    !personasValidas
  ) {
    return res.status(400).render("reservas/nueva", {
      titulo: "Nueva reserva",
      error: "Completá todos los campos con valores válidos.",
      valores,
    });
  }

  req.reservaValidada = {
    estudiante,
    email,
    sala,
    fecha,
    turno,
    personas,
  };

  next();
}

module.exports = {
  prepararAreaReservas,
  validarReserva,
};
