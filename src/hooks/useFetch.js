import { useCallback, useEffect, useState } from 'react';

// Hook para consumir la API REST: devuelve { data, cargando, error, reintentar }
export default function useFetch(peticion, dependencias = []) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0); // al cambiarlo se vuelve a ejecutar el efecto

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ejecutar = useCallback(peticion, dependencias);

  useEffect(() => {
    // cancela la petición si el componente se desmonta
    const controlador = new AbortController();
    setCargando(true);
    setError(null);

    ejecutar(controlador.signal)
      .then((respuesta) => setData(respuesta))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => {
        if (!controlador.signal.aborted) setCargando(false);
      });

    return () => controlador.abort();
  }, [ejecutar, intento]);

  const reintentar = useCallback(() => setIntento((n) => n + 1), []);

  return { data, cargando, error, reintentar };
}
