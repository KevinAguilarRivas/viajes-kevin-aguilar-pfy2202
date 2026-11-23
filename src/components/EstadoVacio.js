// Mensaje para listas vacías
export default function EstadoVacio({ icono, children }) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-np border border-dashed border-np-border p-8 text-center text-np-muted">
      {icono && <span className="text-5xl" aria-hidden="true">{icono}</span>}
      {children}
    </div>
  );
}
