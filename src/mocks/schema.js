import { buildSchema } from 'graphql';
import { VUELOS, HOTELES } from '../data/destinos';

// Esquema de la API GraphQL mock
export const schema = buildSchema(`
  type Vuelo {
    id: ID!
    destinoId: ID!
    aerolinea: String!
    codigo: String!
    origen: String!
    llegada: String!
    fechaSalida: String!
    horaSalida: String!
    fechaRegreso: String!
    duracion: String!
    escalas: Int!
    clase: String!
    equipaje: String!
    precio: Int!
    asientosDisponibles: Int!
    disponible: Boolean!
  }

  type Hotel {
    id: ID!
    destinoId: ID!
    nombre: String!
    estrellas: Int!
    ubicacion: String!
    precioNoche: Int!
    disponibleDesde: String!
    disponibleHasta: String!
    habitacionesDisponibles: Int!
    disponible: Boolean!
    calificacion: Float!
    regimen: String!
    servicios: [String!]!
    descripcion: String!
  }

  type Reserva {
    codigo: ID!
    destinoId: ID!
    pasajeros: Int!
    noches: Int!
    total: Int!
    vuelo: Vuelo
    hotel: Hotel
  }

  input ReservaInput {
    destinoId: ID!
    vueloId: ID
    hotelId: ID
    pasajeros: Int!
    noches: Int!
  }

  type Query {
    vuelos(destinoId: ID!, soloDisponibles: Boolean = false): [Vuelo!]!
    hoteles(destinoId: ID!, soloDisponibles: Boolean = false): [Hotel!]!
    vuelo(id: ID!): Vuelo
    hotel(id: ID!): Hotel
  }

  type Mutation {
    crearReserva(input: ReservaInput!): Reserva!
  }
`);

// Copias en memoria (se reinician al recargar la página)
let vuelos = VUELOS.map((v) => ({ ...v }));
let hoteles = HOTELES.map((h) => ({ ...h }));
let correlativo = 1000;

export const reiniciarDatos = () => {
  vuelos = VUELOS.map((v) => ({ ...v }));
  hoteles = HOTELES.map((h) => ({ ...h }));
};

const conDisponibilidadVuelo = (v) => ({ ...v, disponible: v.asientosDisponibles > 0 });
const conDisponibilidadHotel = (h) => ({ ...h, disponible: h.habitacionesDisponibles > 0 });
const habitacionesNecesarias = (pasajeros) => Math.ceil(pasajeros / 2); // 2 personas por habitación

// Resolvers
export const rootValue = {
  vuelos: ({ destinoId, soloDisponibles }) =>
    vuelos
      .filter((v) => v.destinoId === destinoId && (!soloDisponibles || v.asientosDisponibles > 0))
      .map(conDisponibilidadVuelo),

  hoteles: ({ destinoId, soloDisponibles }) =>
    hoteles
      .filter((h) => h.destinoId === destinoId && (!soloDisponibles || h.habitacionesDisponibles > 0))
      .map(conDisponibilidadHotel),

  vuelo: ({ id }) => {
    const vuelo = vuelos.find((v) => v.id === id);
    return vuelo ? conDisponibilidadVuelo(vuelo) : null;
  },

  hotel: ({ id }) => {
    const hotel = hoteles.find((h) => h.id === id);
    return hotel ? conDisponibilidadHotel(hotel) : null;
  },

  crearReserva: ({ input }) => {
    const { destinoId, vueloId, hotelId, pasajeros, noches } = input;
    if (!vueloId && !hotelId) throw new Error('Debes seleccionar al menos un vuelo o un hotel.');
    if (pasajeros < 1 || noches < 1) throw new Error('La cantidad de pasajeros y noches debe ser mayor a 0.');

    const vuelo = vueloId ? vuelos.find((v) => v.id === vueloId) : null;
    const hotel = hotelId ? hoteles.find((h) => h.id === hotelId) : null;

    if (vueloId && !vuelo) throw new Error('El vuelo seleccionado no existe.');
    if (hotelId && !hotel) throw new Error('El hotel seleccionado no existe.');
    if (vuelo && vuelo.asientosDisponibles < pasajeros)
      throw new Error(`El vuelo ${vuelo.codigo} solo tiene ${vuelo.asientosDisponibles} asiento(s) disponible(s).`);
    if (hotel && hotel.habitacionesDisponibles < habitacionesNecesarias(pasajeros))
      throw new Error(`${hotel.nombre} no tiene habitaciones suficientes para ${pasajeros} pasajero(s).`);

    // Descontar asientos y habitaciones
    if (vuelo) {
      vuelos = vuelos.map((v) => (v.id === vuelo.id ? { ...v, asientosDisponibles: v.asientosDisponibles - pasajeros } : v));
    }
    if (hotel) {
      const habitaciones = habitacionesNecesarias(pasajeros);
      hoteles = hoteles.map((h) =>
        h.id === hotel.id ? { ...h, habitacionesDisponibles: h.habitacionesDisponibles - habitaciones } : h
      );
    }

    const total =
      (vuelo ? vuelo.precio * pasajeros : 0) +
      (hotel ? hotel.precioNoche * noches * habitacionesNecesarias(pasajeros) : 0);

    correlativo += 1;
    return {
      codigo: `NPT-${correlativo}`,
      destinoId,
      pasajeros,
      noches,
      total,
      vuelo: vuelo ? rootValue.vuelo({ id: vuelo.id }) : null,
      hotel: hotel ? rootValue.hotel({ id: hotel.id }) : null,
    };
  },
};
