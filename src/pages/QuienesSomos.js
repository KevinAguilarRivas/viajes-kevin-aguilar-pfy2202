import PageHeader from '../components/PageHeader';

const VALORES = [
  { titulo: 'Transparencia', texto: 'Mostramos precios finales, fechas y disponibilidad reales antes de reservar.' },
  { titulo: 'Experiencias', texto: 'Cada destino incluye las actividades favoritas de nuestros viajeros.' },
  { titulo: 'Acompañamiento', texto: 'Te asesoramos antes, durante y después de tu viaje.' },
];

export default function QuienesSomos() {
  return (
    <section className="section">
      <div className="container-app">
        <PageHeader title="Quiénes somos" subtitle="Conoce la historia y los valores de NextPixel Travel." />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="panel lg:col-span-2">
            <h2 className="mb-2 text-xl">Nuestra historia</h2>
            <p className="leading-relaxed text-np-muted">
              NextPixel Travel es la nueva línea de negocio del grupo NextPixel. Después de digitalizar el inventario de
              NextPixel Market, quisimos llevar esa misma experiencia simple y moderna a la planificación de viajes: en
              un solo sitio puedes descubrir destinos, comparar vuelos y hoteles y reservar tu viaje completo.
            </p>
            <h2 className="mb-2 mt-6 text-xl">Misión</h2>
            <p className="leading-relaxed text-np-muted">
              Hacer que planificar un viaje sea tan fácil como hacer las compras: información clara, precios
              transparentes y reservas en pocos clics.
            </p>
          </article>

          <ul className="grid gap-4">
            {VALORES.map((v) => (
              <li key={v.titulo} className="panel border-l-4 !border-l-np-accent !p-5">
                <h3 className="text-base text-np-accent">{v.titulo}</h3>
                <p className="mt-1 text-np-muted">{v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
