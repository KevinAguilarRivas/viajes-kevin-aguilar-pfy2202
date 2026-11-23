import Logo from './Logo';
import NavItem from './NavItem';

const linkFooter = 'text-np-muted transition hover:text-white';

// Pie de página con el menú inferior
export default function Footer() {
  return (
    <footer className="border-t border-np-border bg-np-footer pb-6 pt-12 text-np-muted">
      <div className="container-app">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-3">
              Agencia de viajes online: destinos, vuelos y hoteles en un solo lugar. Proyecto académico de Desarrollo
              Frontend II (PFY2202) — Duoc UC.
            </p>
          </div>

          <nav className="col-span-1 md:col-span-3" aria-label="Menú inferior">
            <h2 className="mb-3 text-[0.95rem] uppercase tracking-[0.1em] text-np-white">Explora</h2>
            <ul className="grid gap-1">
              <li><NavItem to="/" end className={linkFooter} activeClassName="!text-white">Inicio</NavItem></li>
              <li><NavItem to="/destinos" className={linkFooter} activeClassName="!text-white">Destinos</NavItem></li>
              <li><NavItem to="/mi-viaje" className={linkFooter} activeClassName="!text-white">Mi viaje</NavItem></li>
              <li><NavItem to="/quienes-somos" className={linkFooter} activeClassName="!text-white">Quiénes somos</NavItem></li>
            </ul>
          </nav>

          <address className="not-italic md:col-span-4">
            <h2 className="mb-3 text-[0.95rem] uppercase tracking-[0.1em] text-np-white">Contacto</h2>
            <p className="mb-1">reservas@nextpixeltravel.cl</p>
            <p className="mb-1">+56 2 2345 6789</p>
            <p>Santiago, Chile</p>
          </address>
        </div>

        <hr className="my-6 border-np-border" />
        <p className="text-center text-sm">© {new Date().getFullYear()} NextPixel Travel · Kevin Aguilar</p>
      </div>
    </footer>
  );
}
