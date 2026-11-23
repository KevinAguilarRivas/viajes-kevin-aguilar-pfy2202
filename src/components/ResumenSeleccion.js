import Button from './Button';
import { formatoCLP } from './formato';
import { useViaje } from '../context/ViajeContext';

// Resumen de lo elegido para el destino
export default function ResumenSeleccion({ destinoId, ciudad }) {
  const { viaje, costos } = useViaje();
  const esEsteDestino = viaje.destinoId === destinoId;
  const vuelo = esEsteDestino ? viaje.vuelo : null;
  const hotel = esEsteDestino ? viaje.hotel : null;

  return (
    <aside className="panel lg:sticky lg:top-24" aria-labelledby="resumen-titulo">
      <h2 id="resumen-titulo" className="mb-4 text-lg">Tu viaje a {ciudad ?? '…'}</h2>

      {viaje.destinoId && !esEsteDestino && (
        <p className="mb-4 rounded-md border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-sm text-amber-200">
          Ya tienes un viaje armado a otro destino. Si eliges aquí, se reemplazará.
        </p>
      )}

      <dl>
        <dt className="dato-titulo">Vuelo</dt>
        <dd className="dato-valor">{vuelo ? `${vuelo.aerolinea} ${vuelo.codigo} · ${formatoCLP(vuelo.precio)}` : 'Sin elegir'}</dd>
        <dt className="dato-titulo">Hotel</dt>
        <dd className="dato-valor">{hotel ? `${hotel.nombre} · ${formatoCLP(hotel.precioNoche)}/noche` : 'Sin elegir'}</dd>
      </dl>

      {esEsteDestino && (
        <>
          <p className="mt-2 border-t border-np-border pt-4 text-np-muted">
            Total estimado ({viaje.pasajeros} pas. · {viaje.noches} noches)
          </p>
          <p className="font-display text-2xl font-bold">{formatoCLP(costos.total)}</p>
          <Button to="/mi-viaje" className="mt-4 w-full">Revisar y reservar</Button>
        </>
      )}
    </aside>
  );
}
