import { useState } from 'react';
import { Link } from 'react-router-dom';
import Bandera from './Bandera';

// Portada del destino: foto de public/img/destinos y, si no carga, el emoji
export function DestinoPortada({ destino, className = '' }) {
  const [sinFoto, setSinFoto] = useState(false);
  const alt = `${destino.ciudad}, ${destino.pais}`;

  return (
    <div
      className={`relative grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#065f46_0%,#143023_55%,#0a1a13_100%)] ${className}`}
    >
      {sinFoto ? (
        <span className="text-6xl drop-shadow-[0_8px_24px_rgba(163,230,53,0.45)] sm:text-7xl" role="img" aria-label={alt}>
          {destino.icono ?? '✈️'}
        </span>
      ) : (
        <>
          <img
            src={`${process.env.PUBLIC_URL}/img/destinos/${destino.id}.jpg`}
            alt={alt}
            loading="lazy"
            onError={() => setSinFoto(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/25" />
        </>
      )}
    </div>
  );
}

// Tarjeta de destino
export default function DestinoCard({ destino }) {
  return (
    <article className="product-card max-sm:grid max-sm:grid-cols-[110px_1fr] max-sm:hover:translate-y-0">
      <div className="relative">
        <DestinoPortada destino={destino} className="aspect-[4/3] max-sm:h-full max-sm:aspect-auto" />
        <span className="badge-accent absolute right-3 top-3 max-sm:right-1.5 max-sm:top-1.5 max-sm:text-[0.65rem]">
          {destino.continente}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-[0.95rem] font-semibold text-np-cyan">
          <Bandera codigo={destino.codigoPais} pais={destino.pais} /> {destino.pais}
        </p>
        <h3 className="mb-2 text-lg leading-snug">{destino.ciudad}</h3>
        <p className="mb-3 line-clamp-2 text-np-muted max-sm:hidden">{destino.descripcion}</p>

        {destino.actividadesPopulares && (
          <ul className="mb-1 flex flex-1 flex-wrap content-start gap-1.5" aria-label="Actividades populares">
            {destino.actividadesPopulares.map((a) => (
              <li key={a} className="rounded-full border border-np-border px-2 py-0.5 text-xs text-np-muted">
                {a}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/destinos/${destino.id}`}
          className="btn btn-secondary btn-sm mt-4 w-full"
          aria-label={`Ver vuelos y hoteles para ${destino.ciudad}`}
        >
          Ver vuelos y hoteles
        </Link>
      </div>
    </article>
  );
}
