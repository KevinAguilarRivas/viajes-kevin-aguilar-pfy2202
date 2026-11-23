import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Button from '../components/Button';
import Estrellas from '../components/Estrellas';
import StockBadge from '../components/StockBadge';
import DetalleLayout from '../components/DetalleLayout';
import { formatoCLP } from '../components/formato';
import { formatoFecha } from '../utils/viaje';
import { useViaje } from '../context/ViajeContext';
import { DETALLE_HOTEL } from '../graphql/queries';

export default function HotelDetalle() {
  const { hotelId } = useParams();
  const { viaje, elegirHotel } = useViaje();

  const { data, loading, error, refetch } = useQuery(DETALLE_HOTEL, { variables: { id: hotelId } });
  const hotel = data?.hotel;
  const elegido = viaje.hotel?.id === hotelId;

  return (
    <DetalleLayout
      loading={loading}
      error={error}
      encontrado={Boolean(hotel)}
      onReintentar={() => refetch()}
      textoCarga="Cargando hotel…"
      noEncontrado="Hotel no encontrado"
    >
      {hotel && (
        <article className="grid overflow-hidden rounded-np border border-np-border bg-np-surface md:grid-cols-[1fr_1.3fr]">
          <div
            className="relative grid min-h-[220px] place-items-center bg-[radial-gradient(circle_at_30%_20%,#065f46_0%,#143023_55%,#0a1a13_100%)]"
            role="img"
            aria-label={`Imagen de ${hotel.nombre}`}
          >
            <span className="text-7xl drop-shadow-[0_8px_24px_rgba(163,230,53,0.45)]">🏨</span>
            <span className="badge-accent absolute right-3 top-3">{hotel.regimen}</span>
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <p className="mb-1 font-semibold text-np-cyan">{hotel.ubicacion}</p>
            <h1 className="text-2xl sm:text-3xl">{hotel.nombre}</h1>
            <p className="mt-1"><Estrellas cantidad={hotel.estrellas} /> · Nota <strong>{hotel.calificacion.toFixed(1)}</strong></p>
            <p className="mt-3 text-np-muted">{hotel.descripcion}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Servicios">
              {hotel.servicios.map((s) => (
                <li key={s} className="rounded-full border border-np-border px-2.5 py-0.5 text-sm text-np-muted">{s}</li>
              ))}
            </ul>

            <dl className="mt-6 grid grid-cols-2 gap-x-6">
              <div>
                <dt className="dato-titulo">Disponible desde</dt>
                <dd className="dato-valor">{formatoFecha(hotel.disponibleDesde)}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Hasta</dt>
                <dd className="dato-valor">{formatoFecha(hotel.disponibleHasta)}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Habitaciones</dt>
                <dd><StockBadge stock={hotel.habitacionesDisponibles} unidad="disponibles" /></dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-np-border pt-6">
              <div className="mr-auto">
                <p className="font-display text-3xl font-bold">{formatoCLP(hotel.precioNoche)}</p>
                <p className="text-sm text-np-muted">por noche, habitación doble</p>
              </div>
              <Button size="lg" onClick={() => elegirHotel(hotel)} disabled={!hotel.disponible || elegido}>
                {!hotel.disponible ? 'Sin habitaciones' : elegido ? '✔ En tu viaje' : 'Agregar a mi viaje'}
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button to={`/destinos/${hotel.destinoId}`} variant="secondary" size="sm">Ver vuelos del destino</Button>
              {elegido && <Button to="/mi-viaje" variant="secondary" size="sm">Ir a Mi viaje</Button>}
            </div>
          </div>
        </article>
      )}
    </DetalleLayout>
  );
}
