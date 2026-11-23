import { calcularNoches, calcularTotal, habitacionesNecesarias } from './viaje';

describe('cálculos del viaje', () => {
  test('habitaciones: 2 pasajeros por habitación', () => {
    expect(habitacionesNecesarias(1)).toBe(1);
    expect(habitacionesNecesarias(2)).toBe(1);
    expect(habitacionesNecesarias(3)).toBe(2);
  });

  test('noches entre dos fechas', () => {
    expect(calcularNoches('2026-12-12', '2026-12-18')).toBe(6);
    expect(calcularNoches('2026-12-12', '2026-12-12')).toBe(1); // mínimo 1
  });

  test('total = vuelo × pasajeros + hotel × noches × habitaciones', () => {
    const vuelo = { precio: 100000 };
    const hotel = { precioNoche: 50000 };
    expect(calcularTotal({ vuelo, hotel, pasajeros: 3, noches: 4 })).toEqual({
      totalVuelo: 300000,
      totalHotel: 400000, // 50.000 × 4 noches × 2 habitaciones
      habitaciones: 2,
      total: 700000,
    });
  });

  test('sin vuelo ni hotel el total es 0', () => {
    expect(calcularTotal({ vuelo: null, hotel: null, pasajeros: 1, noches: 5 }).total).toBe(0);
  });
});
