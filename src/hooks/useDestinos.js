import useFetch from './useFetch';
import { listarDestinos, obtenerDestino } from '../api/destinosApi';

// GET /api/destinos
export const useDestinos = () => useFetch((signal) => listarDestinos(signal), []);

// GET /api/destinos/:id
export const useDestino = (id) => useFetch((signal) => obtenerDestino(id, signal), [id]);
