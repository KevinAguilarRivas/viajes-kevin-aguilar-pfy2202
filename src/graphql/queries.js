import { gql } from '@apollo/client';

// Campos que se repiten en varias consultas
export const CAMPOS_VUELO = gql`
  fragment CamposVuelo on Vuelo {
    id
    destinoId
    aerolinea
    codigo
    fechaSalida
    horaSalida
    fechaRegreso
    duracion
    escalas
    clase
    precio
    asientosDisponibles
    disponible
  }
`;

export const CAMPOS_HOTEL = gql`
  fragment CamposHotel on Hotel {
    id
    destinoId
    nombre
    estrellas
    ubicacion
    precioNoche
    disponibleDesde
    disponibleHasta
    habitacionesDisponibles
    disponible
    calificacion
  }
`;

// Vuelos y hoteles de un destino
export const OPCIONES_VIAJE = gql`
  query OpcionesViaje($destinoId: ID!, $soloDisponibles: Boolean) {
    vuelos(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      ...CamposVuelo
    }
    hoteles(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      ...CamposHotel
    }
  }
  ${CAMPOS_VUELO}
  ${CAMPOS_HOTEL}
`;

// Detalle de un vuelo
export const DETALLE_VUELO = gql`
  query DetalleVuelo($id: ID!) {
    vuelo(id: $id) {
      ...CamposVuelo
      origen
      llegada
      equipaje
    }
  }
  ${CAMPOS_VUELO}
`;

// Detalle de un hotel
export const DETALLE_HOTEL = gql`
  query DetalleHotel($id: ID!) {
    hotel(id: $id) {
      ...CamposHotel
      regimen
      servicios
      descripcion
    }
  }
  ${CAMPOS_HOTEL}
`;

// Confirmar reserva
export const CREAR_RESERVA = gql`
  mutation CrearReserva($input: ReservaInput!) {
    crearReserva(input: $input) {
      codigo
      destinoId
      pasajeros
      noches
      total
      vuelo {
        id
        asientosDisponibles
        disponible
      }
      hotel {
        id
        habitacionesDisponibles
        disponible
      }
    }
  }
`;
