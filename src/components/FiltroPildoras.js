// Filtro por continente y búsqueda (en móvil se muestra un select)
export default function FiltroPildoras({
  opciones,
  activa,
  onChange,
  conteo,
  busqueda,
  onBuscar,
  etiqueta = 'Categoría',
  placeholder = 'Buscar…',
  etiquetaBusqueda = 'Buscar',
}) {
  const todas = ['Todos', ...opciones];
  const cantidad = (op) => (op === 'Todos' ? conteo.total : conteo[op] ?? 0);

  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="hidden flex-wrap gap-2 md:flex" role="group" aria-label={`Filtrar por ${etiqueta.toLowerCase()}`}>
        {todas.map((op) => {
          const seleccionada = op === activa;
          return (
            <button
              key={op}
              type="button"
              onClick={() => onChange(op)}
              aria-pressed={seleccionada}
              className={`pill ${seleccionada ? 'pill-active' : 'pill-idle'}`}
            >
              {op}
              <span className="badge-count">{cantidad(op)}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(260px,420px)]">
        <div className="md:hidden">
          <label htmlFor="filtroOpcion" className="form-label text-sm">{etiqueta}</label>
          <select id="filtroOpcion" className="form-input" value={activa} onChange={(e) => onChange(e.target.value)}>
            {todas.map((op) => (
              <option key={op} value={op}>{`${op} (${cantidad(op)})`}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="buscarTexto" className="form-label text-sm">{etiquetaBusqueda}</label>
          <div className="flex gap-2">
            <input
              id="buscarTexto"
              type="search"
              className="form-input"
              placeholder={placeholder}
              value={busqueda}
              onChange={(e) => onBuscar(e.target.value)}
            />
            {busqueda && (
              <button type="button" className="btn btn-secondary" onClick={() => onBuscar('')}>
                Limpiar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
