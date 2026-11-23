import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Button from '../components/Button';
import StockBadge from '../components/StockBadge';
import DetalleLayout from '../components/DetalleLayout';
import { formatoCLP } from '../components/formato';
import { formatoFecha, calcularNoches } from '../utils/viaje';
import { useViaje } from '../context/ViajeContext';
import { DETALLE_VUELO } from '../graphql/queries';

export default function VueloDetalle() {
  const { vueloId } = useParams();
  const { viaje, elegirVuelo } = useViaje();

  const { data, loading, error, refetch } = useQuery(DETALLE_VUELO, { variables: { id: vueloId } });
  const vuelo = data?.vuelo;
  const elegido = viaje.vuelo?.id === vueloId;

  return (
    <DetalleLayout
      loading={loading}
      error={error}
      encontrado={Boolean(vuelo)}
      onReintentar={() => refetch()}
      textoCarga="Cargando vuelo…"
      noEncontrado="Vuelo no encontrado"
    >
      {vuelo && (
        <article className="overflow-hidden rounded-np border border-np-border bg-np-surface">
          {/* Cabecera tipo "pase de abordar" */}
          <div className="bg-np-hero p-6 sm:p-8">
            <p className="mb-1 font-semibold text-lime-300">{vuelo.aerolinea} · Vuelo {vuelo.codigo}</p>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.1em] text-emerald-50/80">Origen</p>
                <p className="font-display text-lg font-bold sm:text-2xl">{vuelo.origen}</p>
              </div>
              <span className="text-3xl" aria-hidden="true">✈️</span>
              <div className="text-right">
                <p className="text-sm uppercase tracking-[0.1em] text-emerald-50/80">Destino</p>
                <p className="font-display text-lg font-bold sm:text-2xl">{vuelo.llegada}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.3fr_1fr]">
            <dl className="grid grid-cols-2 gap-x-6">
              <div>
                <dt className="dato-titulo">Salida</dt>
                <dd className="dato-valor">{formatoFecha(vuelo.fechaSalida)} · {vuelo.horaSalida} h</dd>
              </div>
              <div>
                <dt className="dato-titulo">Regreso</dt>
                <dd className="dato-valor">{formatoFecha(vuelo.fechaRegreso)}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Duración</dt>
                <dd className="dato-valor">{vuelo.duracion}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Escalas</dt>
                <dd className="dato-valor">{vuelo.escalas === 0 ? 'Directo' : vuelo.escalas}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Clase</dt>
                <dd className="dato-valor">{vuelo.clase}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Equipaje</dt>
                <dd className="dato-valor">{vuelo.equipaje}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Estadía</dt>
                <dd className="dato-valor !mb-0">{calcularNoches(vuelo.fechaSalida, vuelo.fechaRegreso)} noches</dd>
              </div>
              <div>
                <dt className="dato-titulo">Disponibilidad</dt>
                <dd><StockBadge stock={vuelo.asientosDisponibles} unidad="asientos" /></dd>
              </div>
            </dl>

            <div className="panel flex flex-col justify-between !bg-np-bg-alt">
              <div>
                <p className="text-np-muted">Precio por pasajero (ida y vuelta)</p>
                <p className="font-display text-3xl font-bold">{formatoCLP(vuelo.precio)}</p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <Button size="lg" onClick={() => elegirVuelo(vuelo)} disabled={!vuelo.disponible || elegido}>
                  {!vuelo.disponible ? 'Sin asientos' : elegido ? '✔ En tu viaje' : 'Agregar a mi viaje'}
                </Button>
                <Button to={`/destinos/${vuelo.destinoId}`} variant="secondary">Ver hoteles del destino</Button>
                {elegido && <Button to="/mi-viaje" variant="secondary">Ir a Mi viaje</Button>}
              </div>
            </div>
          </div>
        </article>
      )}
    </DetalleLayout>
  );
}
