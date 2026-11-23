import { http, graphql, HttpResponse, delay } from 'msw';
import { graphql as ejecutarGraphQL } from 'graphql';
import { DESTINOS } from '../data/destinos';
import { schema, rootValue } from './schema';

// Retardo para simular la red
const LATENCIA_MS = 600;

// Datos resumidos para el listado
const resumenDestino = ({ id, ciudad, pais, codigoPais, icono, continente, descripcion, actividades }) => ({
  id,
  ciudad,
  pais,
  codigoPais,
  icono,
  continente,
  descripcion,
  actividadesPopulares: actividades.slice(0, 3).map((a) => a.nombre),
});

export const handlers = [
  // REST - destinos ("*" para que funcione también en GitHub Pages)
  // GET /api/destinos
  http.get('*/api/destinos', async ({ request }) => {
    await delay(LATENCIA_MS);
    const url = new URL(request.url);
    const continente = url.searchParams.get('continente');
    const texto = (url.searchParams.get('q') ?? '').trim().toLowerCase();

    const resultado = DESTINOS.filter(
      (d) =>
        (!continente || d.continente === continente) &&
        (!texto || d.ciudad.toLowerCase().includes(texto) || d.pais.toLowerCase().includes(texto))
    ).map(resumenDestino);

    return HttpResponse.json(resultado);
  }),

  // GET /api/destinos/:destinoId
  http.get('*/api/destinos/:destinoId', async ({ params }) => {
    await delay(LATENCIA_MS);
    const destino = DESTINOS.find((d) => d.id === params.destinoId);

    if (!destino) {
      return HttpResponse.json({ mensaje: `No existe el destino "${params.destinoId}".` }, { status: 404 });
    }
    return HttpResponse.json(destino);
  }),

  // GraphQL - vuelos, hoteles y reservas (usa el esquema de schema.js)
  graphql.operation(async ({ query, variables }) => {
    await delay(LATENCIA_MS);
    const { data, errors } = await ejecutarGraphQL({
      schema,
      source: query,
      variableValues: variables,
      rootValue,
    });

    return HttpResponse.json({
      data,
      errors: errors?.map((e) => ({ message: e.message, path: e.path })),
    });
  }),
];
