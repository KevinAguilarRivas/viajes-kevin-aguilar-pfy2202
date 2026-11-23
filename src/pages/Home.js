import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DestinoCard from '../components/DestinoCard';
import Loader from '../components/Loader';
import ErrorMensaje from '../components/ErrorMensaje';
import { useDestinos } from '../hooks/useDestinos';
import { useViaje } from '../context/ViajeContext';

const PASOS = [
  { icono: '🌎', titulo: 'Elige tu destino', texto: 'Explora los destinos con su país y las actividades más populares.' },
  { icono: '✈️', titulo: 'Compara vuelos y hoteles', texto: 'Revisa precios, fechas y disponibilidad de cada opción.' },
  { icono: '🧳', titulo: 'Arma y reserva tu viaje', texto: 'Ajusta pasajeros y noches, revisa el total y confirma.' },
];

const ICONOS_CONTINENTE = { Sudamérica: '🌎', Norteamérica: '🗽', Europa: '🏰', Asia: '🏯', Oceanía: '🦘' };

export default function Home() {
  const { data: destinos, cargando, error, reintentar } = useDestinos();
  const { cantidadElegidos, reservas } = useViaje();

  const lista = destinos ?? [];
  const continentes = [...new Set(lista.map((d) => d.continente))];
  const paises = new Set(lista.map((d) => d.pais)).size;

  const stats = [
    { valor: cargando ? '…' : lista.length, texto: 'destinos disponibles' },
    { valor: cargando ? '…' : paises, texto: 'países' },
    { valor: cantidadElegidos, texto: 'opciones en tu viaje' },
    { valor: reservas.length, texto: 'reservas confirmadas' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-np-hero py-12 sm:py-[4.5rem]" aria-labelledby="hero-titulo">
        <div className="container-app grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[0.2em] text-lime-300">Agencia de viajes online</p>
            <h1 id="hero-titulo" className="mb-4 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.1]">
              Tu próximo destino
              <span className="block bg-np-title bg-clip-text text-transparent">a un clic</span>
            </h1>
            <p className="mb-7 max-w-[52ch] text-xl text-emerald-50/90">
              Descubre destinos, compara vuelos y hoteles con precios, fechas y disponibilidad, y planifica tu viaje
              completo con NextPixel Travel.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button to="/destinos" size="lg">Explorar destinos</Button>
              <Button to="/mi-viaje" variant="light" size="lg">Mi viaje</Button>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <li key={s.texto} className="flex flex-col rounded-np border border-white/15 bg-np-bg/45 p-5">
                <strong className="font-display text-2xl text-np-white sm:text-[1.8rem]">{s.valor}</strong>
                <span className="text-emerald-50/90">{s.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Destinos destacados */}
      <section className="section" aria-labelledby="destacados-titulo">
        <div className="container-app">
          <div className="section-head flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="destacados-titulo">Destinos destacados</h2>
              <p>Los favoritos de nuestros viajeros para esta temporada.</p>
            </div>
            <Button to="/destinos" variant="secondary">Ver todos los destinos</Button>
          </div>

          {cargando ? (
            <Loader texto="Cargando destinos…" />
          ) : error ? (
            <ErrorMensaje error={error} onReintentar={reintentar} />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {lista.slice(0, 4).map((d) => (
                <DestinoCard key={d.id} destino={d} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section section-alt" aria-labelledby="pasos-titulo">
        <div className="container-app">
          <div className="section-head">
            <h2 id="pasos-titulo">Planifica en 3 pasos</h2>
            <p>Una experiencia completa de planificación de viaje.</p>
          </div>
          <ol className="grid gap-5 md:grid-cols-3">
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="panel relative">
                <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-np-accent/25">0{i + 1}</span>
                <span className="text-4xl" aria-hidden="true">{p.icono}</span>
                <h3 className="mb-1 mt-3 text-lg">{p.titulo}</h3>
                <p className="text-np-muted">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Continentes */}
      {continentes.length > 0 && (
        <section className="section" aria-labelledby="continentes-titulo">
          <div className="container-app">
            <div className="section-head">
              <h2 id="continentes-titulo">Viaja por el mundo</h2>
              <p>Filtra los destinos por continente.</p>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {continentes.map((c) => (
                <li key={c}>
                  <Link
                    to="/destinos"
                    state={{ continente: c }}
                    className="panel flex h-full flex-col items-center gap-2 !p-5 text-center transition hover:-translate-y-1 hover:border-np-accent/50 hover:shadow-glow"
                  >
                    <span className="text-4xl" aria-hidden="true">{ICONOS_CONTINENTE[c] ?? '🌐'}</span>
                    <span className="font-semibold">{c}</span>
                    <span className="text-sm text-np-muted">
                      {lista.filter((d) => d.continente === c).length} destinos
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
