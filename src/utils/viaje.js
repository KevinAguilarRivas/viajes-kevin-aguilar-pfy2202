// Cálculos del viaje

// 2 pasajeros por habitación
export const habitacionesNecesarias = (pasajeros) => Math.max(1, Math.ceil(pasajeros / 2));

// Noches entre dos fechas "AAAA-MM-DD" (mínimo 1)
export const calcularNoches = (desde, hasta) => {
  const MS_DIA = 24 * 60 * 60 * 1000;
  const diferencia = Math.round((Date.parse(hasta) - Date.parse(desde)) / MS_DIA);
  return Number.isFinite(diferencia) && diferencia > 0 ? diferencia : 1;
};

// Desglose del costo total del viaje
export const calcularTotal = ({ vuelo, hotel, pasajeros, noches }) => {
  const totalVuelo = vuelo ? vuelo.precio * pasajeros : 0;
  const habitaciones = habitacionesNecesarias(pasajeros);
  const totalHotel = hotel ? hotel.precioNoche * noches * habitaciones : 0;
  return { totalVuelo, totalHotel, habitaciones, total: totalVuelo + totalHotel };
};

// "2026-12-12" -> "sáb, 12 dic 2026"
export const formatoFecha = (fechaISO) =>
  new Intl.DateTimeFormat('es-CL', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${fechaISO}T00:00:00Z`));
