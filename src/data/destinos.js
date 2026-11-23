// Datos del backend mock. El frontend los obtiene por REST o GraphQL.

export const CONTINENTES = ['Sudamérica', 'Norteamérica', 'Europa', 'Asia', 'Oceanía'];

// Destinos (API REST)
export const DESTINOS = [
  {
    id: 'cusco',
    ciudad: 'Cusco',
    pais: 'Perú',
    codigoPais: 'pe',
    icono: '⛰️',
    continente: 'Sudamérica',
    descripcion:
      'La antigua capital del Imperio inca: calles de piedra, templos coloniales y la puerta de entrada a Machu Picchu.',
    clima: 'Templado de montaña (8 °C a 20 °C)',
    idioma: 'Español y quechua',
    moneda: 'Sol peruano (PEN)',
    mejorEpoca: 'Abril a octubre',
    actividades: [
      { nombre: 'Machu Picchu', icono: '🏛️', descripcion: 'Visita guiada a la ciudadela inca, una de las 7 maravillas del mundo moderno.' },
      { nombre: 'Valle Sagrado', icono: '🌄', descripcion: 'Recorrido por Pisac, Ollantaytambo y sus mercados artesanales.' },
      { nombre: 'Montaña de 7 colores', icono: '🌈', descripcion: 'Trekking de altura hasta el famoso Vinicunca.' },
      { nombre: 'Tour gastronómico', icono: '🍲', descripcion: 'Degustación de cocina andina en el mercado de San Pedro.' },
    ],
  },
  {
    id: 'rio-de-janeiro',
    ciudad: 'Río de Janeiro',
    pais: 'Brasil',
    codigoPais: 'br',
    icono: '🏖️',
    continente: 'Sudamérica',
    descripcion: 'Playas icónicas, cerros con vistas espectaculares y la mejor energía carioca.',
    clima: 'Tropical (22 °C a 32 °C)',
    idioma: 'Portugués',
    moneda: 'Real brasileño (BRL)',
    mejorEpoca: 'Diciembre a marzo',
    actividades: [
      { nombre: 'Cristo Redentor', icono: '✝️', descripcion: 'Subida en tren al cerro Corcovado.' },
      { nombre: 'Pan de Azúcar', icono: '🚡', descripcion: 'Teleférico con vista a la bahía de Guanabara.' },
      { nombre: 'Playa de Copacabana', icono: '🏝️', descripcion: 'Sol, caipiriñas y fútbol en la arena.' },
      { nombre: 'Samba en Lapa', icono: '💃', descripcion: 'Noche de música en vivo en el barrio bohemio.' },
    ],
  },
  {
    id: 'bariloche',
    ciudad: 'Bariloche',
    pais: 'Argentina',
    codigoPais: 'ar',
    icono: '🏔️',
    continente: 'Sudamérica',
    descripcion: 'Lagos, bosques y montañas nevadas en plena Patagonia, ideal en invierno y en verano.',
    clima: 'Frío de montaña (-2 °C a 22 °C)',
    idioma: 'Español',
    moneda: 'Peso argentino (ARS)',
    mejorEpoca: 'Julio a septiembre (nieve) y enero a marzo',
    actividades: [
      { nombre: 'Cerro Catedral', icono: '⛷️', descripcion: 'El centro de ski más grande de Sudamérica.' },
      { nombre: 'Circuito Chico', icono: '🚲', descripcion: 'Recorrido en bicicleta por miradores y lagos.' },
      { nombre: 'Ruta del chocolate', icono: '🍫', descripcion: 'Degustación en las fábricas artesanales del centro.' },
      { nombre: 'Isla Victoria', icono: '⛴️', descripcion: 'Navegación por el lago Nahuel Huapi.' },
    ],
  },
  {
    id: 'cancun',
    ciudad: 'Cancún',
    pais: 'México',
    codigoPais: 'mx',
    icono: '🌴',
    continente: 'Norteamérica',
    descripcion: 'Aguas turquesas del Caribe mexicano, cenotes y ruinas mayas a pocas horas.',
    clima: 'Tropical (24 °C a 33 °C)',
    idioma: 'Español',
    moneda: 'Peso mexicano (MXN)',
    mejorEpoca: 'Diciembre a abril',
    actividades: [
      { nombre: 'Chichén Itzá', icono: '🛕', descripcion: 'Excursión de día completo a la pirámide de Kukulcán.' },
      { nombre: 'Snorkel en cenotes', icono: '🤿', descripcion: 'Nado en pozos de agua cristalina en la Riviera Maya.' },
      { nombre: 'Isla Mujeres', icono: '⛵', descripcion: 'Catamarán con barra libre y playa Norte.' },
      { nombre: 'Playa Delfines', icono: '🐬', descripcion: 'La playa pública más fotografiada de la zona hotelera.' },
    ],
  },
  {
    id: 'nueva-york',
    ciudad: 'Nueva York',
    pais: 'Estados Unidos',
    codigoPais: 'us',
    icono: '🗽',
    continente: 'Norteamérica',
    descripcion: 'La ciudad que nunca duerme: rascacielos, museos de clase mundial y musicales de Broadway.',
    clima: 'Continental (-3 °C a 29 °C)',
    idioma: 'Inglés',
    moneda: 'Dólar estadounidense (USD)',
    mejorEpoca: 'Abril a junio y septiembre a noviembre',
    actividades: [
      { nombre: 'Central Park', icono: '🌳', descripcion: 'Paseo en bicicleta por el pulmón verde de Manhattan.' },
      { nombre: 'Estatua de la Libertad', icono: '🗽', descripcion: 'Ferry a Liberty Island y Ellis Island.' },
      { nombre: 'Broadway', icono: '🎭', descripcion: 'Entradas para un musical en Times Square.' },
      { nombre: 'Top of the Rock', icono: '🏙️', descripcion: 'Mirador con vista al Empire State.' },
    ],
  },
  {
    id: 'madrid',
    ciudad: 'Madrid',
    pais: 'España',
    codigoPais: 'es',
    icono: '🏰',
    continente: 'Europa',
    descripcion: 'Arte, tapas y vida nocturna en la capital española, con trenes rápidos a toda la península.',
    clima: 'Mediterráneo continental (3 °C a 33 °C)',
    idioma: 'Español',
    moneda: 'Euro (EUR)',
    mejorEpoca: 'Marzo a junio y septiembre a octubre',
    actividades: [
      { nombre: 'Museo del Prado', icono: '🖼️', descripcion: 'Velázquez, Goya y El Greco en un solo lugar.' },
      { nombre: 'Palacio Real', icono: '👑', descripcion: 'Recorrido por la residencia oficial de la corona.' },
      { nombre: 'Parque del Retiro', icono: '🚣', descripcion: 'Paseo en bote por el estanque grande.' },
      { nombre: 'Tapas en La Latina', icono: '🥘', descripcion: 'Ruta de bares tradicionales por la Cava Baja.' },
    ],
  },
  {
    id: 'paris',
    ciudad: 'París',
    pais: 'Francia',
    codigoPais: 'fr',
    icono: '🗼',
    continente: 'Europa',
    descripcion: 'La ciudad de la luz: museos, cafés y bulevares que inspiran a todo el mundo.',
    clima: 'Oceánico templado (3 °C a 25 °C)',
    idioma: 'Francés',
    moneda: 'Euro (EUR)',
    mejorEpoca: 'Abril a junio y septiembre',
    actividades: [
      { nombre: 'Torre Eiffel', icono: '🗼', descripcion: 'Subida a la cima al atardecer.' },
      { nombre: 'Museo del Louvre', icono: '🖼️', descripcion: 'Visita a la Mona Lisa y la Venus de Milo.' },
      { nombre: 'Crucero por el Sena', icono: '🛥️', descripcion: 'Navegación nocturna bajo los puentes iluminados.' },
      { nombre: 'Montmartre', icono: '🎨', descripcion: 'Barrio de artistas y la basílica del Sagrado Corazón.' },
    ],
  },
  {
    id: 'tokio',
    ciudad: 'Tokio',
    pais: 'Japón',
    codigoPais: 'jp',
    icono: '🏯',
    continente: 'Asia',
    descripcion: 'Tradición y tecnología: templos milenarios junto a barrios de neón, anime y videojuegos.',
    clima: 'Subtropical húmedo (2 °C a 31 °C)',
    idioma: 'Japonés',
    moneda: 'Yen (JPY)',
    mejorEpoca: 'Marzo a mayo (sakura) y octubre a noviembre',
    actividades: [
      { nombre: 'Akihabara', icono: '🎮', descripcion: 'El paraíso gamer: arcades, tiendas retro y cafés temáticos.' },
      { nombre: 'Templo Senso-ji', icono: '⛩️', descripcion: 'El templo más antiguo de la ciudad, en Asakusa.' },
      { nombre: 'Cruce de Shibuya', icono: '🚦', descripcion: 'El cruce peatonal más concurrido del mundo.' },
      { nombre: 'Monte Fuji', icono: '🗻', descripcion: 'Excursión de día completo a los cinco lagos.' },
    ],
  },
  {
    id: 'sidney',
    ciudad: 'Sídney',
    pais: 'Australia',
    codigoPais: 'au',
    icono: '🦘',
    continente: 'Oceanía',
    descripcion: 'Playas de surf, una bahía espectacular y la icónica Ópera frente al mar.',
    clima: 'Templado (9 °C a 26 °C)',
    idioma: 'Inglés',
    moneda: 'Dólar australiano (AUD)',
    mejorEpoca: 'Septiembre a noviembre y marzo a mayo',
    actividades: [
      { nombre: 'Ópera de Sídney', icono: '🎼', descripcion: 'Tour guiado y función en la sala principal.' },
      { nombre: 'Bondi Beach', icono: '🏄', descripcion: 'Clase de surf y caminata costera Bondi–Coogee.' },
      { nombre: 'Harbour Bridge', icono: '🌉', descripcion: 'Escalada al arco del puente.' },
      { nombre: 'Blue Mountains', icono: '🏞️', descripcion: 'Parque nacional con las Tres Hermanas.' },
    ],
  },
];

// Vuelos desde Santiago (API GraphQL)
export const VUELOS = [
  // Cusco
  { id: 'v-101', destinoId: 'cusco', aerolinea: 'LATAM', codigo: 'LA2047', origen: 'Santiago (SCL)', llegada: 'Cusco (CUZ)', fechaSalida: '2026-12-12', horaSalida: '06:15', fechaRegreso: '2026-12-18', duracion: '5h 05m', escalas: 1, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 389000, asientosDisponibles: 14 },
  { id: 'v-102', destinoId: 'cusco', aerolinea: 'Sky Airline', codigo: 'H2 1310', origen: 'Santiago (SCL)', llegada: 'Cusco (CUZ)', fechaSalida: '2027-01-08', horaSalida: '09:40', fechaRegreso: '2027-01-15', duracion: '5h 30m', escalas: 1, clase: 'Económica', equipaje: 'Solo equipaje de mano', precio: 289000, asientosDisponibles: 3 },
  { id: 'v-103', destinoId: 'cusco', aerolinea: 'LATAM', codigo: 'LA2051', origen: 'Santiago (SCL)', llegada: 'Cusco (CUZ)', fechaSalida: '2027-02-20', horaSalida: '12:00', fechaRegreso: '2027-02-27', duracion: '4h 55m', escalas: 1, clase: 'Premium Economy', equipaje: '2 maletas de 23 kg', precio: 549000, asientosDisponibles: 0 },
  // Río de Janeiro
  { id: 'v-201', destinoId: 'rio-de-janeiro', aerolinea: 'LATAM', codigo: 'LA750', origen: 'Santiago (SCL)', llegada: 'Río de Janeiro (GIG)', fechaSalida: '2026-12-27', horaSalida: '07:30', fechaRegreso: '2027-01-03', duracion: '4h 10m', escalas: 0, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 459000, asientosDisponibles: 9 },
  { id: 'v-202', destinoId: 'rio-de-janeiro', aerolinea: 'GOL', codigo: 'G3 7811', origen: 'Santiago (SCL)', llegada: 'Río de Janeiro (GIG)', fechaSalida: '2027-02-10', horaSalida: '14:20', fechaRegreso: '2027-02-17', duracion: '6h 45m', escalas: 1, clase: 'Económica', equipaje: 'Solo equipaje de mano', precio: 329000, asientosDisponibles: 22 },
  { id: 'v-203', destinoId: 'rio-de-janeiro', aerolinea: 'LATAM', codigo: 'LA752', origen: 'Santiago (SCL)', llegada: 'Río de Janeiro (GIG)', fechaSalida: '2027-03-05', horaSalida: '22:05', fechaRegreso: '2027-03-12', duracion: '4h 15m', escalas: 0, clase: 'Ejecutiva', equipaje: '2 maletas de 32 kg', precio: 1290000, asientosDisponibles: 4 },
  // Bariloche
  { id: 'v-301', destinoId: 'bariloche', aerolinea: 'Aerolíneas Argentinas', codigo: 'AR1281', origen: 'Santiago (SCL)', llegada: 'Bariloche (BRC)', fechaSalida: '2027-01-15', horaSalida: '08:10', fechaRegreso: '2027-01-21', duracion: '4h 40m', escalas: 1, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 319000, asientosDisponibles: 11 },
  { id: 'v-302', destinoId: 'bariloche', aerolinea: 'JetSMART', codigo: 'JA3020', origen: 'Santiago (SCL)', llegada: 'Bariloche (BRC)', fechaSalida: '2027-07-10', horaSalida: '11:30', fechaRegreso: '2027-07-17', duracion: '4h 55m', escalas: 1, clase: 'Económica', equipaje: 'Solo equipaje de mano', precio: 249000, asientosDisponibles: 2 },
  // Cancún
  { id: 'v-401', destinoId: 'cancun', aerolinea: 'LATAM', codigo: 'LA620', origen: 'Santiago (SCL)', llegada: 'Cancún (CUN)', fechaSalida: '2027-01-20', horaSalida: '01:50', fechaRegreso: '2027-01-30', duracion: '8h 05m', escalas: 0, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 749000, asientosDisponibles: 16 },
  { id: 'v-402', destinoId: 'cancun', aerolinea: 'Copa Airlines', codigo: 'CM406', origen: 'Santiago (SCL)', llegada: 'Cancún (CUN)', fechaSalida: '2027-02-14', horaSalida: '05:45', fechaRegreso: '2027-02-21', duracion: '10h 20m', escalas: 1, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 619000, asientosDisponibles: 7 },
  { id: 'v-403', destinoId: 'cancun', aerolinea: 'Aeroméxico', codigo: 'AM013', origen: 'Santiago (SCL)', llegada: 'Cancún (CUN)', fechaSalida: '2027-03-22', horaSalida: '00:55', fechaRegreso: '2027-03-29', duracion: '11h 35m', escalas: 1, clase: 'Premium Economy', equipaje: '2 maletas de 23 kg', precio: 989000, asientosDisponibles: 0 },
  // Nueva York
  { id: 'v-501', destinoId: 'nueva-york', aerolinea: 'LATAM', codigo: 'LA532', origen: 'Santiago (SCL)', llegada: 'Nueva York (JFK)', fechaSalida: '2027-04-08', horaSalida: '23:15', fechaRegreso: '2027-04-16', duracion: '10h 50m', escalas: 0, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 899000, asientosDisponibles: 12 },
  { id: 'v-502', destinoId: 'nueva-york', aerolinea: 'American Airlines', codigo: 'AA940', origen: 'Santiago (SCL)', llegada: 'Nueva York (JFK)', fechaSalida: '2027-05-03', horaSalida: '21:40', fechaRegreso: '2027-05-11', duracion: '14h 25m', escalas: 1, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 759000, asientosDisponibles: 5 },
  { id: 'v-503', destinoId: 'nueva-york', aerolinea: 'Delta', codigo: 'DL146', origen: 'Santiago (SCL)', llegada: 'Nueva York (JFK)', fechaSalida: '2027-09-18', horaSalida: '22:30', fechaRegreso: '2027-09-26', duracion: '14h 05m', escalas: 1, clase: 'Ejecutiva', equipaje: '2 maletas de 32 kg', precio: 2890000, asientosDisponibles: 2 },
  // Madrid
  { id: 'v-601', destinoId: 'madrid', aerolinea: 'Iberia', codigo: 'IB6830', origen: 'Santiago (SCL)', llegada: 'Madrid (MAD)', fechaSalida: '2027-04-12', horaSalida: '13:55', fechaRegreso: '2027-04-26', duracion: '13h 05m', escalas: 0, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 1090000, asientosDisponibles: 18 },
  { id: 'v-602', destinoId: 'madrid', aerolinea: 'LATAM', codigo: 'LA704', origen: 'Santiago (SCL)', llegada: 'Madrid (MAD)', fechaSalida: '2027-05-20', horaSalida: '12:20', fechaRegreso: '2027-06-03', duracion: '12h 50m', escalas: 0, clase: 'Premium Economy', equipaje: '2 maletas de 23 kg', precio: 1590000, asientosDisponibles: 6 },
  // París
  { id: 'v-701', destinoId: 'paris', aerolinea: 'Air France', codigo: 'AF401', origen: 'Santiago (SCL)', llegada: 'París (CDG)', fechaSalida: '2027-05-06', horaSalida: '16:35', fechaRegreso: '2027-05-18', duracion: '14h 15m', escalas: 0, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 1190000, asientosDisponibles: 10 },
  { id: 'v-702', destinoId: 'paris', aerolinea: 'KLM', codigo: 'KL702', origen: 'Santiago (SCL)', llegada: 'París (CDG)', fechaSalida: '2027-06-10', horaSalida: '19:10', fechaRegreso: '2027-06-22', duracion: '17h 40m', escalas: 1, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 989000, asientosDisponibles: 1 },
  { id: 'v-703', destinoId: 'paris', aerolinea: 'Air France', codigo: 'AF403', origen: 'Santiago (SCL)', llegada: 'París (CDG)', fechaSalida: '2027-09-09', horaSalida: '16:35', fechaRegreso: '2027-09-21', duracion: '14h 15m', escalas: 0, clase: 'Ejecutiva', equipaje: '2 maletas de 32 kg', precio: 3490000, asientosDisponibles: 0 },
  // Tokio
  { id: 'v-801', destinoId: 'tokio', aerolinea: 'Qatar Airways', codigo: 'QR812', origen: 'Santiago (SCL)', llegada: 'Tokio (HND)', fechaSalida: '2027-03-25', horaSalida: '10:45', fechaRegreso: '2027-04-08', duracion: '31h 20m', escalas: 2, clase: 'Económica', equipaje: '2 maletas de 23 kg', precio: 1690000, asientosDisponibles: 8 },
  { id: 'v-802', destinoId: 'tokio', aerolinea: 'Delta', codigo: 'DL177', origen: 'Santiago (SCL)', llegada: 'Tokio (HND)', fechaSalida: '2027-10-14', horaSalida: '22:30', fechaRegreso: '2027-10-28', duracion: '27h 50m', escalas: 1, clase: 'Económica', equipaje: '1 maleta de 23 kg', precio: 1490000, asientosDisponibles: 13 },
  // Sídney
  { id: 'v-901', destinoId: 'sidney', aerolinea: 'Qantas', codigo: 'QF28', origen: 'Santiago (SCL)', llegada: 'Sídney (SYD)', fechaSalida: '2027-03-01', horaSalida: '13:05', fechaRegreso: '2027-03-15', duracion: '14h 30m', escalas: 0, clase: 'Económica', equipaje: '2 maletas de 23 kg', precio: 1390000, asientosDisponibles: 6 },
  { id: 'v-902', destinoId: 'sidney', aerolinea: 'LATAM', codigo: 'LA801', origen: 'Santiago (SCL)', llegada: 'Sídney (SYD)', fechaSalida: '2027-10-04', horaSalida: '12:40', fechaRegreso: '2027-10-18', duracion: '17h 55m', escalas: 1, clase: 'Premium Economy', equipaje: '2 maletas de 23 kg', precio: 1990000, asientosDisponibles: 3 },
];

// Hoteles (API GraphQL)
export const HOTELES = [
  // Cusco
  { id: 'h-101', destinoId: 'cusco', nombre: 'Casa Andina Plaza', estrellas: 4, ubicacion: 'Centro histórico', precioNoche: 89000, disponibleDesde: '2026-12-01', disponibleHasta: '2027-03-31', habitacionesDisponibles: 6, calificacion: 8.9, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Desayuno', 'Oxígeno', 'Recepción 24 h'], descripcion: 'Casona colonial restaurada a dos cuadras de la Plaza de Armas.' },
  { id: 'h-102', destinoId: 'cusco', nombre: 'Inca Mochilero Hostel', estrellas: 2, ubicacion: 'San Blas', precioNoche: 29000, disponibleDesde: '2026-12-01', disponibleHasta: '2027-06-30', habitacionesDisponibles: 12, calificacion: 8.1, regimen: 'Solo alojamiento', servicios: ['Wi-Fi', 'Cocina compartida', 'Tours'], descripcion: 'Hostal juvenil con terraza y vista a los tejados del barrio de los artesanos.' },
  { id: 'h-103', destinoId: 'cusco', nombre: 'Palacio del Inka', estrellas: 5, ubicacion: 'Qoricancha', precioNoche: 249000, disponibleDesde: '2027-01-10', disponibleHasta: '2027-04-30', habitacionesDisponibles: 0, calificacion: 9.4, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Spa', 'Restaurante', 'Bar', 'Oxígeno'], descripcion: 'Hotel de lujo construido sobre un antiguo palacio inca.' },
  // Río de Janeiro
  { id: 'h-201', destinoId: 'rio-de-janeiro', nombre: 'Copacabana Mar Hotel', estrellas: 4, ubicacion: 'Copacabana', precioNoche: 119000, disponibleDesde: '2026-12-15', disponibleHasta: '2027-03-31', habitacionesDisponibles: 5, calificacion: 8.6, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Piscina', 'Desayuno', 'Gimnasio'], descripcion: 'Frente al mar, con piscina en la azotea y vista al Pan de Azúcar.' },
  { id: 'h-202', destinoId: 'rio-de-janeiro', nombre: 'Ipanema Beach House', estrellas: 3, ubicacion: 'Ipanema', precioNoche: 74000, disponibleDesde: '2026-12-01', disponibleHasta: '2027-05-31', habitacionesDisponibles: 9, calificacion: 8.3, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Piscina', 'Bar'], descripcion: 'Casa boutique a una cuadra de la playa de Ipanema.' },
  { id: 'h-203', destinoId: 'rio-de-janeiro', nombre: 'Belmond Copacabana Palace', estrellas: 5, ubicacion: 'Copacabana', precioNoche: 459000, disponibleDesde: '2027-02-01', disponibleHasta: '2027-03-31', habitacionesDisponibles: 2, calificacion: 9.5, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Spa', 'Piscina', 'Restaurante', 'Traslado'], descripcion: 'El hotel más emblemático de Río, frente a la avenida Atlántica.' },
  // Bariloche
  { id: 'h-301', destinoId: 'bariloche', nombre: 'Llao Llao Resort', estrellas: 5, ubicacion: 'Península Llao Llao', precioNoche: 389000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-09-30', habitacionesDisponibles: 3, calificacion: 9.6, regimen: 'Media pensión', servicios: ['Wi-Fi', 'Spa', 'Golf', 'Restaurante', 'Traslado'], descripcion: 'Resort de montaña entre los lagos Nahuel Huapi y Moreno.' },
  { id: 'h-302', destinoId: 'bariloche', nombre: 'Cabañas del Lago', estrellas: 3, ubicacion: 'Km 7 Av. Bustillo', precioNoche: 69000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 8, calificacion: 8.4, regimen: 'Solo alojamiento', servicios: ['Wi-Fi', 'Estacionamiento', 'Chimenea'], descripcion: 'Cabañas de madera con cocina equipada y vista al lago.' },
  // Cancún
  { id: 'h-401', destinoId: 'cancun', nombre: 'Riu Caribe', estrellas: 5, ubicacion: 'Zona hotelera', precioNoche: 219000, disponibleDesde: '2027-01-05', disponibleHasta: '2027-04-30', habitacionesDisponibles: 7, calificacion: 9.0, regimen: 'Todo incluido', servicios: ['Wi-Fi', 'Piscina', 'Todo incluido', 'Spa', 'Gimnasio'], descripcion: 'Resort todo incluido frente a la playa, con 5 restaurantes temáticos.' },
  { id: 'h-402', destinoId: 'cancun', nombre: 'Hotel Xbalamqué', estrellas: 3, ubicacion: 'Centro de Cancún', precioNoche: 59000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-06-30', habitacionesDisponibles: 10, calificacion: 7.9, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Piscina', 'Desayuno'], descripcion: 'Hotel temático maya en el centro, cerca de la estación de buses.' },
  { id: 'h-403', destinoId: 'cancun', nombre: 'Playa Mujeres Suites', estrellas: 4, ubicacion: 'Costa Mujeres', precioNoche: 159000, disponibleDesde: '2027-02-01', disponibleHasta: '2027-03-31', habitacionesDisponibles: 0, calificacion: 8.8, regimen: 'Todo incluido', servicios: ['Wi-Fi', 'Piscina', 'Todo incluido', 'Kids club'], descripcion: 'Suites familiares con acceso directo a una playa tranquila.' },
  // Nueva York
  { id: 'h-501', destinoId: 'nueva-york', nombre: 'Times Square Pod Hotel', estrellas: 3, ubicacion: 'Midtown', precioNoche: 139000, disponibleDesde: '2027-03-01', disponibleHasta: '2027-12-15', habitacionesDisponibles: 15, calificacion: 8.2, regimen: 'Solo alojamiento', servicios: ['Wi-Fi', 'Rooftop bar', 'Recepción 24 h'], descripcion: 'Habitaciones compactas y modernas a pasos de Times Square.' },
  { id: 'h-502', destinoId: 'nueva-york', nombre: 'The Central Park Plaza', estrellas: 5, ubicacion: 'Upper East Side', precioNoche: 529000, disponibleDesde: '2027-04-01', disponibleHasta: '2027-10-31', habitacionesDisponibles: 4, calificacion: 9.3, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Spa', 'Restaurante', 'Gimnasio', 'Conserjería'], descripcion: 'Hotel clásico con vista directa a Central Park.' },
  // Madrid
  { id: 'h-601', destinoId: 'madrid', nombre: 'Hostal Gran Vía', estrellas: 2, ubicacion: 'Gran Vía', precioNoche: 49000, disponibleDesde: '2027-03-01', disponibleHasta: '2027-10-31', habitacionesDisponibles: 9, calificacion: 8.0, regimen: 'Solo alojamiento', servicios: ['Wi-Fi', 'Aire acondicionado'], descripcion: 'Hostal sencillo y bien ubicado, a pasos de la Puerta del Sol.' },
  { id: 'h-602', destinoId: 'madrid', nombre: 'Only You Boutique', estrellas: 4, ubicacion: 'Chueca', precioNoche: 169000, disponibleDesde: '2027-04-01', disponibleHasta: '2027-07-31', habitacionesDisponibles: 5, calificacion: 9.1, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Desayuno', 'Bar', 'Gimnasio'], descripcion: 'Palacete del siglo XIX con interiorismo de diseño.' },
  // París
  { id: 'h-701', destinoId: 'paris', nombre: 'Le Petit Montmartre', estrellas: 3, ubicacion: 'Montmartre', precioNoche: 129000, disponibleDesde: '2027-04-01', disponibleHasta: '2027-09-30', habitacionesDisponibles: 6, calificacion: 8.5, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Desayuno', 'Recepción 24 h'], descripcion: 'Hotel con encanto a los pies del Sagrado Corazón.' },
  { id: 'h-702', destinoId: 'paris', nombre: 'Hôtel Lumière Eiffel', estrellas: 4, ubicacion: 'Trocadéro', precioNoche: 279000, disponibleDesde: '2027-05-01', disponibleHasta: '2027-10-31', habitacionesDisponibles: 1, calificacion: 9.0, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Vista a la Torre', 'Bar', 'Spa'], descripcion: 'Balcones con vista directa a la Torre Eiffel.' },
  // Tokio
  { id: 'h-801', destinoId: 'tokio', nombre: 'Akiba Capsule Inn', estrellas: 2, ubicacion: 'Akihabara', precioNoche: 39000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 20, calificacion: 8.4, regimen: 'Solo alojamiento', servicios: ['Wi-Fi', 'Sala gamer', 'Onsen'], descripcion: 'Hotel cápsula futurista en pleno distrito gamer.' },
  { id: 'h-802', destinoId: 'tokio', nombre: 'Shinjuku Neon Tower', estrellas: 4, ubicacion: 'Shinjuku', precioNoche: 189000, disponibleDesde: '2027-03-01', disponibleHasta: '2027-11-30', habitacionesDisponibles: 7, calificacion: 9.2, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Desayuno', 'Bar panorámico', 'Gimnasio'], descripcion: 'Rascacielos con vista nocturna a las luces de Shinjuku.' },
  { id: 'h-803', destinoId: 'tokio', nombre: 'Ryokan Asakusa', estrellas: 4, ubicacion: 'Asakusa', precioNoche: 159000, disponibleDesde: '2027-03-15', disponibleHasta: '2027-05-15', habitacionesDisponibles: 0, calificacion: 9.4, regimen: 'Media pensión', servicios: ['Wi-Fi', 'Onsen', 'Cena kaiseki'], descripcion: 'Posada tradicional japonesa con tatami y baños termales.' },
  // Sídney
  { id: 'h-901', destinoId: 'sidney', nombre: 'Harbour View Hotel', estrellas: 4, ubicacion: 'The Rocks', precioNoche: 209000, disponibleDesde: '2027-02-01', disponibleHasta: '2027-11-30', habitacionesDisponibles: 4, calificacion: 9.0, regimen: 'Desayuno incluido', servicios: ['Wi-Fi', 'Desayuno', 'Vista a la bahía'], descripcion: 'Vista al Harbour Bridge y a la Ópera desde cada habitación.' },
  { id: 'h-902', destinoId: 'sidney', nombre: 'Bondi Surf Lodge', estrellas: 3, ubicacion: 'Bondi Beach', precioNoche: 99000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 11, calificacion: 8.3, regimen: 'Solo alojamiento', servicios: ['Wi-Fi', 'Guarda tablas', 'Terraza'], descripcion: 'Lodge relajado a una cuadra de la playa de Bondi.' },
];
