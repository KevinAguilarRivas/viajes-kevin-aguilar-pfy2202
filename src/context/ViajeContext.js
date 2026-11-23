import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { calcularNoches, calcularTotal } from '../utils/viaje';

const STORAGE_KEY = 'nextpixel-travel-viaje';

const VIAJE_VACIO = { destinoId: null, vuelo: null, hotel: null, pasajeros: 1, noches: 5 };

// Lee lo guardado en localStorage
const leerGuardado = () => {
  try {
    const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      viaje: { ...VIAJE_VACIO, ...guardado?.viaje },
      reservas: Array.isArray(guardado?.reservas) ? guardado.reservas : [],
    };
  } catch {
    return { viaje: VIAJE_VACIO, reservas: [] };
  }
};

const ViajeContext = createContext(null);

// Estado global de "Mi viaje"
export function ViajeProvider({ children }) {
  const [viaje, setViaje] = useState(() => leerGuardado().viaje);
  const [reservas, setReservas] = useState(() => leerGuardado().reservas);

  // Guardar en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ viaje, reservas }));
    } catch {
      // sin localStorage la app igual funciona
    }
  }, [viaje, reservas]);

  const valor = useMemo(() => {
    // Si se elige algo de otro destino se reemplaza el viaje
    const mismoDestino = (destinoId) => viaje.destinoId === destinoId;

    const elegirVuelo = (vuelo) =>
      setViaje((v) => ({
        ...(mismoDestino(vuelo.destinoId) ? v : { ...VIAJE_VACIO, pasajeros: v.pasajeros }),
        destinoId: vuelo.destinoId,
        vuelo,
        noches: calcularNoches(vuelo.fechaSalida, vuelo.fechaRegreso),
        pasajeros: Math.min(v.pasajeros, vuelo.asientosDisponibles) || 1,
      }));

    const elegirHotel = (hotel) =>
      setViaje((v) => ({
        ...(mismoDestino(hotel.destinoId) ? v : { ...VIAJE_VACIO, pasajeros: v.pasajeros }),
        destinoId: hotel.destinoId,
        hotel,
      }));

    const quitarVuelo = () => setViaje((v) => (v.hotel ? { ...v, vuelo: null } : VIAJE_VACIO));
    const quitarHotel = () => setViaje((v) => (v.vuelo ? { ...v, hotel: null } : VIAJE_VACIO));
    const cambiarPasajeros = (delta) =>
      setViaje((v) => ({ ...v, pasajeros: Math.max(1, Math.min(9, v.pasajeros + delta)) }));
    const cambiarNoches = (delta) => setViaje((v) => ({ ...v, noches: Math.max(1, Math.min(30, v.noches + delta)) }));
    const vaciarViaje = () => setViaje(VIAJE_VACIO);

    // Guarda la reserva y limpia el viaje
    const registrarReserva = (reserva) => {
      setReservas((r) => [{ ...reserva, fecha: new Date().toISOString() }, ...r]);
      setViaje(VIAJE_VACIO);
    };

    return {
      viaje,
      reservas,
      cantidadElegidos: (viaje.vuelo ? 1 : 0) + (viaje.hotel ? 1 : 0),
      costos: calcularTotal(viaje),
      elegirVuelo,
      elegirHotel,
      quitarVuelo,
      quitarHotel,
      cambiarPasajeros,
      cambiarNoches,
      vaciarViaje,
      registrarReserva,
    };
  }, [viaje, reservas]);

  return <ViajeContext.Provider value={valor}>{children}</ViajeContext.Provider>;
}

export function useViaje() {
  const contexto = useContext(ViajeContext);
  if (!contexto) throw new Error('useViaje debe usarse dentro de <ViajeProvider>');
  return contexto;
}
