// Muestra la categoría de un hotel con estrellas (★★★☆☆)
export default function Estrellas({ cantidad, max = 5 }) {
  return (
    <span className="tracking-[0.1em] text-np-accent" role="img" aria-label={`${cantidad} de ${max} estrellas`}>
      {'★'.repeat(cantidad)}
      <span className="text-np-muted/40">{'★'.repeat(max - cantidad)}</span>
    </span>
  );
}
