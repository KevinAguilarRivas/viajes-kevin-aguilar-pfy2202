// Indicador de carga
export default function Loader({ texto = 'Cargando…' }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 text-np-muted" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-np-surface-alt border-t-np-accent" />
      <span>{texto}</span>
    </div>
  );
}
