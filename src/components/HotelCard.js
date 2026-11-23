import { Link } from 'react-router-dom';
import Button from './Button';
import Estrellas from './Estrellas';
import StockBadge from './StockBadge';
import { formatoCLP } from './formato';
import { formatoFecha } from '../utils/viaje';

// Tarjeta de hotel
export default function HotelCard({ hotel, seleccionado, onElegir }) {
  return (
    <article
      className={`panel flex flex-col gap-4 !p-4 transition sm:flex-row sm:items-center ${
        seleccionado ? '!border-np-accent shadow-glow' : 'hover:border-np-accent/50'
      } ${hotel.disponible ? '' : 'opacity-70'}`}
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-np-surface-alt text-3xl" aria-hidden="true">
        🏨
      </span>

      <div className="flex-1">
        <p className="text-[0.95rem] font-semibold text-np-cyan">
          {hotel.ubicacion} · <Estrellas cantidad={hotel.estrellas} />
        </p>
        <p className="font-semibold">{hotel.nombre}</p>
        <p className="text-sm text-np-muted">
          Disponible del {formatoFecha(hotel.disponibleDesde)} al {formatoFecha(hotel.disponibleHasta)} · Nota{' '}
          <strong className="text-np-white">{hotel.calificacion.toFixed(1)}</strong>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-col sm:items-end">
        <div className="sm:text-right">
          <p className="product-price">{formatoCLP(hotel.precioNoche)}</p>
          <p className="text-xs text-np-muted">por noche, habitación doble</p>
        </div>
        <StockBadge stock={hotel.habitacionesDisponibles} unidad="habitaciones" />
        <div className="flex gap-2">
          <Link to={`/hoteles/${hotel.id}`} className="btn btn-secondary btn-sm">Detalle</Link>
          <Button size="sm" onClick={() => onElegir(hotel)} disabled={!hotel.disponible || seleccionado}>
            {seleccionado ? '✔ Elegido' : 'Elegir'}
          </Button>
        </div>
      </div>
    </article>
  );
}
