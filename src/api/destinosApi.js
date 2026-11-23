// Peticiones a la API REST de destinos
const BASE_URL = `${process.env.PUBLIC_URL}/api`;

async function obtenerJSON(url, signal) {
  const respuesta = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  if (!respuesta.ok) {
    const cuerpo = await respuesta.json().catch(() => ({}));
    throw new Error(cuerpo.mensaje ?? `Error ${respuesta.status} al consultar la API.`);
  }
  return respuesta.json();
}

// GET /api/destinos
export const listarDestinos = (signal) => obtenerJSON(`${BASE_URL}/destinos`, signal);

// GET /api/destinos/:id
export const obtenerDestino = (id, signal) => obtenerJSON(`${BASE_URL}/destinos/${encodeURIComponent(id)}`, signal);
