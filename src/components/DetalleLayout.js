import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Loader from './Loader';
import ErrorMensaje from './ErrorMensaje';

// Estructura común para el detalle de vuelo y hotel (carga, error y no encontrado)
export default function DetalleLayout({ loading, error, encontrado, onReintentar, textoCarga, noEncontrado, children }) {
  const navigate = useNavigate();

  let contenido = children;
  if (loading) contenido = <Loader texto={textoCarga} />;
  else if (error) contenido = <ErrorMensaje error={error} onReintentar={onReintentar} />;
  else if (!encontrado)
    contenido = (
      <div className="panel mx-auto max-w-md text-center">
        <h1 className="text-xl">{noEncontrado}</h1>
        <Button to="/destinos" className="mt-6">Ver destinos</Button>
      </div>
    );

  return (
    <section className="section">
      <div className="container-app max-w-5xl">
        <button type="button" onClick={() => navigate(-1)} className="nav-link -ml-3 mb-4">
          ← Volver
        </button>
        {contenido}
      </div>
    </section>
  );
}
