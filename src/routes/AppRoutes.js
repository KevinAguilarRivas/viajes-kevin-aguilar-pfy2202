import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/Loader';

// Páginas con lazy loading
const Home = lazy(() => import('../pages/Home'));
const Destinos = lazy(() => import('../pages/Destinos'));
const DestinoDetalle = lazy(() => import('../pages/DestinoDetalle'));
const VueloDetalle = lazy(() => import('../pages/VueloDetalle'));
const HotelDetalle = lazy(() => import('../pages/HotelDetalle'));
const MiViaje = lazy(() => import('../pages/MiViaje'));
const QuienesSomos = lazy(() => import('../pages/QuienesSomos'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="destinos">
            <Route index element={<Destinos />} />
            <Route path=":destinoId" element={<DestinoDetalle />} />
          </Route>
          <Route path="vuelos/:vueloId" element={<VueloDetalle />} />
          <Route path="hoteles/:hotelId" element={<HotelDetalle />} />

          <Route path="mi-viaje" element={<MiViaje />} />

          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
