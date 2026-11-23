import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FiltroPildoras from '../components/FiltroPildoras';
import DestinoCard from '../components/DestinoCard';
import Loader from '../components/Loader';
import ErrorMensaje from '../components/ErrorMensaje';
import EstadoVacio from '../components/EstadoVacio';
import Button from '../components/Button';
import { useDestinos } from '../hooks/useDestinos';

export default function Destinos() {
  const location = useLocation();

  const { data: destinos, cargando, error, reintentar } = useDestinos();

  // filtros
  const [continente, setContinente] = useState(location.state?.continente ?? 'Todos');
  const [busqueda, setBusqueda] = useState('');

  const lista = useMemo(() => destinos ?? [], [destinos]);
  const continentes = useMemo(() => [...new Set(lista.map((d) => d.continente))], [lista]);

  const filtrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return lista.filter((d) => {
      const coincideContinente = continente === 'Todos' || d.continente === continente;
      const coincideTexto =
        texto === '' ||
        d.ciudad.toLowerCase().includes(texto) ||
        d.pais.toLowerCase().includes(texto) ||
        d.actividadesPopulares.some((a) => a.toLowerCase().includes(texto));
      return coincideContinente && coincideTexto;
    });
  }, [lista, continente, busqueda]);

  const conteo = useMemo(
    () => lista.reduce((acc, d) => ({ ...acc, [d.continente]: (acc[d.continente] ?? 0) + 1 }), { total: lista.length }),
    [lista]
  );

  return (
    <section className="section">
      <div className="container-app">
        <PageHeader title="Destinos" subtitle="Selecciona un destino para ver sus vuelos y hoteles disponibles." />

        {cargando ? (
          <Loader texto="Cargando destinos…" />
        ) : error ? (
          <ErrorMensaje error={error} onReintentar={reintentar} />
        ) : (
          <>
            <FiltroPildoras
              opciones={continentes}
              activa={continente}
              onChange={setContinente}
              conteo={conteo}
              busqueda={busqueda}
              onBuscar={setBusqueda}
              etiqueta="Continente"
              etiquetaBusqueda="Buscar por ciudad, país o actividad"
              placeholder="Ej: Japón, playa, ski…"
            />

            <p className="mb-4 font-semibold text-np-muted">
              Mostrando <span className="text-np-white">{filtrados.length}</span> de {lista.length} destinos
              {continente !== 'Todos' && <> en <span className="text-np-white">{continente}</span></>}
            </p>

            {filtrados.length === 0 ? (
              <EstadoVacio icono="🧭">
                <p>No hay destinos que coincidan con el filtro.</p>
                <Button variant="secondary" onClick={() => { setContinente('Todos'); setBusqueda(''); }}>
                  Quitar filtros
                </Button>
              </EstadoVacio>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtrados.map((d) => (
                  <DestinoCard key={d.id} destino={d} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
