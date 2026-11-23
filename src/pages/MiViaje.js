import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import EstadoVacio from '../components/EstadoVacio';
import QuantityControl from '../components/QuantityControl';
import Estrellas from '../components/Estrellas';
import Bandera from '../components/Bandera';
import { formatoCLP } from '../components/formato';
import { formatoFecha } from '../utils/viaje';
import { useDestino } from '../hooks/useDestinos';
import { useViaje } from '../context/ViajeContext';
import { CREAR_RESERVA } from '../graphql/queries';

// La fecha del vuelo debe estar dentro de la disponibilidad del hotel
const fechasCompatibles = (vuelo, hotel) =>
  !vuelo || !hotel || (vuelo.fechaSalida >= hotel.disponibleDesde && vuelo.fechaSalida <= hotel.disponibleHasta);

export default function MiViaje() {
  const { viaje, reservas, vaciarViaje } = useViaje();

  return (
    <section className="section">
      <div className="container-app">
        <PageHeader title="Mi viaje" subtitle="Revisa tu selección, ajusta pasajeros y noches, y confirma la reserva.">
          {viaje.destinoId && <Button variant="danger" onClick={vaciarViaje}>Vaciar viaje</Button>}
        </PageHeader>

        {viaje.destinoId ? (
          <PlanActual />
        ) : (
          <EstadoVacio icono="🧳">
            <p>Aún no has elegido vuelos ni hoteles.</p>
            <Button to="/destinos">Explorar destinos</Button>
          </EstadoVacio>
        )}

        <Reservas reservas={reservas} />
      </div>
    </section>
  );
}

// Viaje en curso
function PlanActual() {
  const { viaje, costos, quitarVuelo, quitarHotel, cambiarPasajeros, cambiarNoches, registrarReserva } = useViaje();
  const { vuelo, hotel, pasajeros, noches } = viaje;

  const { data: destino } = useDestino(viaje.destinoId);

  // Mutación GraphQL para reservar
  const [crearReserva, { loading, error, reset }] = useMutation(CREAR_RESERVA);

  const maxPasajeros = Math.min(9, vuelo?.asientosDisponibles ?? 9, (hotel?.habitacionesDisponibles ?? 5) * 2);
  const compatibles = fechasCompatibles(vuelo, hotel);

  const confirmar = async () => {
    try {
      const { data } = await crearReserva({
        variables: {
          input: { destinoId: viaje.destinoId, vueloId: vuelo?.id, hotelId: hotel?.id, pasajeros, noches },
        },
      });
      registrarReserva({
        ...data.crearReserva,
        ciudad: destino?.ciudad ?? viaje.destinoId,
        codigoPais: destino?.codigoPais ?? null,
        pais: destino?.pais ?? '',
        vuelo: vuelo ? `${vuelo.aerolinea} ${vuelo.codigo}` : null,
        hotel: hotel?.nombre ?? null,
        fechaSalida: vuelo?.fechaSalida ?? null,
      });
    } catch {
      // el error se muestra en el resumen
    }
  };

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-3">
        <Link to={`/destinos/${viaje.destinoId}`} className="panel flex items-center gap-4 !p-4 transition hover:border-np-accent/50">
          <span className="text-4xl" aria-hidden="true">{destino?.icono ?? '🌐'}</span>
          <div>
            <p className="text-[0.95rem] font-semibold text-np-cyan">{destino ? <><Bandera codigo={destino.codigoPais} pais={destino.pais} /> {destino.pais}</> : 'Cargando destino…'}</p>
            <p className="font-display text-xl font-bold">{destino?.ciudad ?? viaje.destinoId}</p>
          </div>
          <span className="ml-auto text-sm text-np-muted">Cambiar opciones →</span>
        </Link>

        {/* Vuelo elegido */}
        <article className="panel flex flex-col gap-4 !p-4 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-np-surface-alt text-3xl" aria-hidden="true">✈️</span>
          {vuelo ? (
            <>
              <div className="flex-1">
                <p className="text-[0.95rem] font-semibold text-np-cyan">{vuelo.aerolinea} · {vuelo.codigo} · {vuelo.clase}</p>
                <Link to={`/vuelos/${vuelo.id}`} className="font-semibold hover:text-np-accent">
                  {formatoFecha(vuelo.fechaSalida)} → {formatoFecha(vuelo.fechaRegreso)}
                </Link>
                <p className="text-sm text-np-muted">{formatoCLP(vuelo.precio)} por pasajero</p>
              </div>
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <p className="w-28 text-right font-display font-bold tabular-nums">{formatoCLP(costos.totalVuelo)}</p>
                <Button variant="danger" size="sm" onClick={quitarVuelo} aria-label="Quitar vuelo">✕</Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
              <p className="text-np-muted">Aún no eliges vuelo.</p>
              <Button to={`/destinos/${viaje.destinoId}`} variant="secondary" size="sm">Elegir vuelo</Button>
            </div>
          )}
        </article>

        {/* Hotel elegido */}
        <article className="panel flex flex-col gap-4 !p-4 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-np-surface-alt text-3xl" aria-hidden="true">🏨</span>
          {hotel ? (
            <>
              <div className="flex-1">
                <p className="text-[0.95rem] font-semibold text-np-cyan">{hotel.ubicacion} · <Estrellas cantidad={hotel.estrellas} /></p>
                <Link to={`/hoteles/${hotel.id}`} className="font-semibold hover:text-np-accent">{hotel.nombre}</Link>
                <p className="text-sm text-np-muted">
                  {formatoCLP(hotel.precioNoche)} por noche × {noches} noches × {costos.habitaciones} hab.
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <p className="w-28 text-right font-display font-bold tabular-nums">{formatoCLP(costos.totalHotel)}</p>
                <Button variant="danger" size="sm" onClick={quitarHotel} aria-label="Quitar hotel">✕</Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
              <p className="text-np-muted">Aún no eliges hotel.</p>
              <Button to={`/destinos/${viaje.destinoId}`} variant="secondary" size="sm">Elegir hotel</Button>
            </div>
          )}
        </article>

        {!compatibles && (
          <p className="rounded-md border border-amber-400/40 bg-amber-400/10 px-4 py-2.5 text-amber-200" role="alert">
            ⚠ El hotel está disponible del {formatoFecha(hotel.disponibleDesde)} al {formatoFecha(hotel.disponibleHasta)},
            pero tu vuelo llega el {formatoFecha(vuelo.fechaSalida)}. Elige otro vuelo u hotel para continuar.
          </p>
        )}
      </div>

      {/* Resumen y confirmación */}
      <aside className="panel lg:sticky lg:top-24" aria-labelledby="resumen-viaje">
        <h2 id="resumen-viaje" className="mb-4 text-lg">Resumen</h2>

        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-semibold">Pasajeros</span>
          <QuantityControl
            label="Cantidad de pasajeros"
            value={pasajeros}
            onDecrease={() => cambiarPasajeros(-1)}
            onIncrease={() => cambiarPasajeros(1)}
            disableDecrease={pasajeros <= 1}
            disableIncrease={pasajeros >= maxPasajeros}
          />
        </div>
        <div className="mb-1 flex items-center justify-between gap-3">
          <span className="font-semibold">Noches</span>
          <QuantityControl
            label="Cantidad de noches"
            value={noches}
            onDecrease={() => cambiarNoches(-1)}
            onIncrease={() => cambiarNoches(1)}
            disableDecrease={noches <= 1 || Boolean(vuelo)}
            disableIncrease={noches >= 30 || Boolean(vuelo)}
          />
        </div>
        {vuelo && <p className="mb-4 text-sm text-np-muted">Las noches se calculan según las fechas del vuelo.</p>}

        <dl className="mt-4 space-y-1 border-t border-np-border pt-4 text-np-muted">
          <div className="flex justify-between"><dt>Vuelos</dt><dd className="tabular-nums">{formatoCLP(costos.totalVuelo)}</dd></div>
          <div className="flex justify-between"><dt>Hotel</dt><dd className="tabular-nums">{formatoCLP(costos.totalHotel)}</dd></div>
        </dl>
        <div className="mt-3 flex items-end justify-between border-t border-np-border pt-3">
          <span className="font-semibold">Total</span>
          <span className="font-display text-2xl font-bold">{formatoCLP(costos.total)}</span>
        </div>

        {error && (
          <div className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300" role="alert">
            {error.message}
            <button type="button" className="ml-2 underline" onClick={() => reset()}>Cerrar</button>
          </div>
        )}

        <Button size="lg" className="mt-5 w-full" onClick={confirmar} disabled={loading || !compatibles}>
          {loading ? 'Confirmando…' : 'Confirmar reserva'}
        </Button>
      </aside>
    </div>
  );
}

// Reservas confirmadas
function Reservas({ reservas }) {
  if (reservas.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-xl">Reservas confirmadas</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {reservas.map((r) => (
          <li key={r.codigo} className="panel border-l-4 !border-l-np-accent !p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="dato-titulo">Código {r.codigo}</p>
                <p className="font-display text-lg font-bold"><Bandera codigo={r.codigoPais} pais={r.pais} /> {r.ciudad}</p>
              </div>
              <span className="badge-accent">Confirmada</span>
            </div>
            <p className="mt-2 text-np-muted">
              {[r.vuelo, r.hotel].filter(Boolean).join(' + ')}
              {r.fechaSalida && <> · sale el {formatoFecha(r.fechaSalida)}</>}
            </p>
            <p className="text-np-muted">
              {r.pasajeros} pasajero(s) · {r.noches} noche(s) · <strong className="text-np-white">{formatoCLP(r.total)}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
