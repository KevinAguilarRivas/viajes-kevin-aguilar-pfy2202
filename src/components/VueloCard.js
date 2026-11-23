import { Link } from 'react-router-dom';
import Button from './Button';
import StockBadge from './StockBadge';
import { formatoCLP } from './formato';
import { formatoFecha } from '../utils/viaje';

const textoEscalas = (escalas) => (escalas === 0 ? 'Directo' : `${escalas} escala${escalas > 1 ? 's' : ''}`);

// Tarjeta de vuelo
export default function VueloCard({ vuelo, seleccionado, onElegir }) {
  return (
    <article
      className={`panel flex flex-col gap-4 !p-4 transition sm:flex-row sm:items-center ${
        seleccionado ? '!border-np-accent shadow-glow' : 'hover:border-np-accent/50'
      } ${vuelo.disponible ? '' : 'opacity-70'}`}
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-np-surface-alt text-3xl" aria-hidden="true">
        ✈️
      </span>

      <div className="flex-1">
        <p className="text-[0.95rem] font-semibold text-np-cyan">
          {vuelo.aerolinea} · {vuelo.codigo}
        </p>
        <p className="font-semibold">
          {formatoFecha(vuelo.fechaSalida)} <span className="text-np-muted">→</span> {formatoFecha(vuelo.fechaRegreso)}
        </p>
        <p className="text-sm text-np-muted">
          Sale {vuelo.horaSalida} h · {vuelo.duracion} · {textoEscalas(vuelo.escalas)} · {vuelo.clase}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-col sm:items-end">
        <div className="sm:text-right">
          <p className="product-price">{formatoCLP(vuelo.precio)}</p>
          <p className="text-xs text-np-muted">por pasajero, ida y vuelta</p>
        </div>
        <StockBadge stock={vuelo.asientosDisponibles} unidad="asientos" />
        <div className="flex gap-2">
          <Link to={`/vuelos/${vuelo.id}`} className="btn btn-secondary btn-sm">Detalle</Link>
          <Button size="sm" onClick={() => onElegir(vuelo)} disabled={!vuelo.disponible || seleccionado}>
            {seleccionado ? '✔ Elegido' : 'Elegir'}
          </Button>
        </div>
      </div>
    </article>
  );
}
