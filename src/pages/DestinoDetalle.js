import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Button from '../components/Button';
import Loader from '../components/Loader';
import ErrorMensaje from '../components/ErrorMensaje';
import EstadoVacio from '../components/EstadoVacio';
import VueloCard from '../components/VueloCard';
import HotelCard from '../components/HotelCard';
import ResumenSeleccion from '../components/ResumenSeleccion';
import { DestinoPortada } from '../components/DestinoCard';
import Bandera from '../components/Bandera';
import { useDestino } from '../hooks/useDestinos';
import { useViaje } from '../context/ViajeContext';
import { OPCIONES_VIAJE } from '../graphql/queries';

const ORDENES = {
  'precio-asc': { texto: 'Menor precio', comparar: (a, b) => a.precio - b.precio },
  'precio-desc': { texto: 'Mayor precio', comparar: (a, b) => b.precio - a.precio },
  fecha: { texto: 'Fecha más próxima', comparar: (a, b) => a.fecha.localeCompare(b.fecha) },
};

// Se copia el arreglo porque el de Apollo es de solo lectura
const ordenar = (lista, orden, precio, fecha) =>
  [...lista].sort((a, b) =>
    ORDENES[orden].comparar({ precio: a[precio], fecha: a[fecha] }, { precio: b[precio], fecha: b[fecha] })
  );

export default function DestinoDetalle() {
  const { destinoId } = useParams();
  const navigate = useNavigate();
  const { viaje, elegirVuelo, elegirHotel } = useViaje();

  const [pestana, setPestana] = useState('vuelos');
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [orden, setOrden] = useState('precio-asc');
  const [mensaje, setMensaje] = useState('');

  // Destino (REST)
  const { data: destino, cargando: cargandoDestino, error: errorDestino, reintentar } = useDestino(destinoId);

  // Vuelos y hoteles (GraphQL)
  const { data, loading, error, refetch } = useQuery(OPCIONES_VIAJE, {
    variables: { destinoId, soloDisponibles },
  });

  const vuelos = useMemo(() => ordenar(data?.vuelos ?? [], orden, 'precio', 'fechaSalida'), [data, orden]);
  const hoteles = useMemo(() => ordenar(data?.hoteles ?? [], orden, 'precioNoche', 'disponibleDesde'), [data, orden]);

  const handleElegirVuelo = (vuelo) => {
    elegirVuelo(vuelo);
    setMensaje(`Vuelo ${vuelo.codigo} agregado a tu viaje.`);
  };
  const handleElegirHotel = (hotel) => {
    elegirHotel(hotel);
    setMensaje(`${hotel.nombre} agregado a tu viaje.`);
  };

  if (cargandoDestino) return <Loader texto="Cargando destino…" />;

  if (errorDestino) {
    return (
      <section className="section">
        <div className="container-app">
          <ErrorMensaje titulo="Destino no disponible" error={errorDestino} onReintentar={reintentar}>
            <Button to="/destinos" variant="secondary">Volver a destinos</Button>
          </ErrorMensaje>
        </div>
      </section>
    );
  }

  const esEsteDestino = viaje.destinoId === destinoId;
  const lista = pestana === 'vuelos' ? vuelos : hoteles;

  return (
    <section className="section">
      <div className="container-app">
        <button type="button" onClick={() => navigate(-1)} className="nav-link -ml-3 mb-4">
          ← Volver
        </button>

        <article className="grid overflow-hidden rounded-np border border-np-border bg-np-surface md:grid-cols-[1fr_1.4fr]">
          <div className="relative">
            <DestinoPortada destino={destino} className="aspect-[4/3] h-full md:aspect-auto md:min-h-[320px]" />
            <span className="badge-accent absolute right-3 top-3">{destino.continente}</span>
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <p className="mb-1 font-semibold text-np-cyan"><Bandera codigo={destino.codigoPais} pais={destino.pais} /> {destino.pais}</p>
            <h1 className="text-2xl sm:text-3xl">{destino.ciudad}</h1>
            <p className="mt-3 text-np-muted">{destino.descripcion}</p>

            <dl className="mt-6 grid gap-x-6 sm:grid-cols-2">
              <div>
                <dt className="dato-titulo">Clima</dt>
                <dd className="dato-valor">{destino.clima}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Mejor época</dt>
                <dd className="dato-valor">{destino.mejorEpoca}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Idioma</dt>
                <dd className="dato-valor">{destino.idioma}</dd>
              </div>
              <div>
                <dt className="dato-titulo">Moneda</dt>
                <dd className="dato-valor !mb-0">{destino.moneda}</dd>
              </div>
            </dl>
          </div>
        </article>

        <h2 className="mb-4 mt-10 text-xl">Actividades populares</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destino.actividades.map((a) => (
            <li key={a.nombre} className="panel border-l-4 !border-l-np-accent !p-5">
              <span className="text-3xl" aria-hidden="true">{a.icono}</span>
              <h3 className="mb-1 mt-2 text-base text-np-accent">{a.nombre}</h3>
              <p className="text-np-muted">{a.descripcion}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="section-head !mb-5">
              <h2>Opciones de viaje</h2>
              <p>Elige un vuelo y un hotel para armar tu viaje a {destino.ciudad}.</p>
            </div>

            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="inline-flex w-fit gap-1 rounded-full border border-np-border p-1" role="tablist" aria-label="Tipo de opción">
                {[
                  { id: 'vuelos', texto: `✈️ Vuelos (${data?.vuelos.length ?? '…'})` },
                  { id: 'hoteles', texto: `🏨 Hoteles (${data?.hoteles.length ?? '…'})` },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={pestana === t.id}
                    aria-controls="panel-opciones"
                    className={`pill border-0 ${pestana === t.id ? 'pill-active' : 'pill-idle'}`}
                    onClick={() => setPestana(t.id)}
                  >
                    {t.texto}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <label className="inline-flex cursor-pointer items-center gap-2 font-semibold text-np-muted">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-np-primary"
                    checked={soloDisponibles}
                    onChange={(e) => setSoloDisponibles(e.target.checked)}
                  />
                  Solo con disponibilidad
                </label>
                <label className="sr-only" htmlFor="orden">Ordenar por</label>
                <select id="orden" className="form-input !w-auto !py-1.5" value={orden} onChange={(e) => setOrden(e.target.value)}>
                  {Object.entries(ORDENES).map(([valor, { texto }]) => (
                    <option key={valor} value={valor}>{texto}</option>
                  ))}
                </select>
              </div>
            </div>

            {mensaje && (
              <div className="alert-ok mb-4" role="status">
                ✔ {mensaje}
                <Button to="/mi-viaje" variant="secondary" size="sm">Ir a Mi viaje</Button>
              </div>
            )}

            <div id="panel-opciones" role="tabpanel">
              {loading && !data ? (
                <Loader texto="Buscando vuelos y hoteles…" />
              ) : error ? (
                <ErrorMensaje error={error} onReintentar={() => refetch()} />
              ) : lista.length === 0 ? (
                <EstadoVacio icono={pestana === 'vuelos' ? '✈️' : '🏨'}>
                  <p>No hay {pestana} {soloDisponibles ? 'con disponibilidad ' : ''}para este destino.</p>
                  {soloDisponibles && (
                    <Button variant="secondary" onClick={() => setSoloDisponibles(false)}>Ver todos</Button>
                  )}
                </EstadoVacio>
              ) : (
                <ul className={`space-y-3 transition-opacity ${loading ? 'opacity-50' : ''}`}>
                  {pestana === 'vuelos'
                    ? vuelos.map((v) => (
                        <li key={v.id}>
                          <VueloCard
                            vuelo={v}
                            seleccionado={esEsteDestino && viaje.vuelo?.id === v.id}
                            onElegir={handleElegirVuelo}
                          />
                        </li>
                      ))
                    : hoteles.map((h) => (
                        <li key={h.id}>
                          <HotelCard
                            hotel={h}
                            seleccionado={esEsteDestino && viaje.hotel?.id === h.id}
                            onElegir={handleElegirHotel}
                          />
                        </li>
                      ))}
                </ul>
              )}
            </div>
          </div>

          <ResumenSeleccion destinoId={destinoId} ciudad={destino.ciudad} />
        </div>
      </div>
    </section>
  );
}
