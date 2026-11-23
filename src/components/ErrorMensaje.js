import Button from './Button';

// Mensaje de error con botón para reintentar
export default function ErrorMensaje({ titulo = 'No pudimos cargar la información', error, onReintentar, children }) {
  return (
    <div
      className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-np border border-red-500/40 bg-red-500/10 p-8 text-center"
      role="alert"
    >
      <span className="text-4xl" aria-hidden="true">⚠️</span>
      <p className="font-display text-lg text-np-white">{titulo}</p>
      {error && <p className="text-red-300">{error.message ?? String(error)}</p>}
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {onReintentar && <Button onClick={onReintentar}>Reintentar</Button>}
        {children}
      </div>
    </div>
  );
}
