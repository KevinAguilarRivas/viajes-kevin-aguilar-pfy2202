import { graphql } from 'graphql';
import { schema, rootValue, reiniciarDatos } from './schema';

const ejecutar = (source, variableValues) => graphql({ schema, rootValue, source, variableValues });

beforeEach(() => reiniciarDatos());

describe('API GraphQL mock', () => {
  test('lista vuelos y hoteles de un destino con solo los campos pedidos', async () => {
    const { data, errors } = await ejecutar(
      `query ($d: ID!) { vuelos(destinoId: $d) { id precio } hoteles(destinoId: $d) { nombre } }`,
      { d: 'cusco' }
    );
    expect(errors).toBeUndefined();
    expect(data.vuelos).toHaveLength(3);
    expect(Object.keys(data.vuelos[0])).toEqual(['id', 'precio']);
    expect(data.hoteles.length).toBeGreaterThan(0);
  });

  test('filtra solo los que tienen disponibilidad', async () => {
    const { data } = await ejecutar(
      `{ vuelos(destinoId: "cusco", soloDisponibles: true) { asientosDisponibles } }`
    );
    expect(data.vuelos.every((v) => v.asientosDisponibles > 0)).toBe(true);
  });

  test('la reserva descuenta asientos y habitaciones', async () => {
    const { data, errors } = await ejecutar(
      `mutation ($i: ReservaInput!) { crearReserva(input: $i) { codigo total vuelo { asientosDisponibles } hotel { habitacionesDisponibles } } }`,
      { i: { destinoId: 'cusco', vueloId: 'v-101', hotelId: 'h-101', pasajeros: 3, noches: 6 } }
    );
    expect(errors).toBeUndefined();
    expect(data.crearReserva.vuelo.asientosDisponibles).toBe(14 - 3);
    expect(data.crearReserva.hotel.habitacionesDisponibles).toBe(6 - 2);
    expect(data.crearReserva.total).toBe(389000 * 3 + 89000 * 6 * 2);
  });

  test('rechaza reservas sin asientos suficientes', async () => {
    const { errors } = await ejecutar(
      `mutation { crearReserva(input: { destinoId: "cusco", vueloId: "v-102", pasajeros: 5, noches: 7 }) { codigo } }`
    );
    expect(errors[0].message).toMatch(/solo tiene 3 asiento/);
  });
});
