import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { candidate } from '../data/candidate';
import { useScrollSpy } from '../hooks/useScrollSpy';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'perfil', label: 'Perfil' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'propuestas', label: 'Propuestas' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'contacto', label: 'Contacto' },
];

// Secciones que pertenecen a cada ítem del menú (para resaltar el activo).
const spyIds = ['inicio', 'perfil', 'formacion', 'experiencia', 'trayectoria', 'propuestas', 'roadmap', 'areas', 'equipo', 'concejo', 'contacto'];
const belongsTo = {
  inicio: 'inicio', perfil: 'perfil', formacion: 'perfil', experiencia: 'perfil', trayectoria: 'trayectoria',
  propuestas: 'propuestas', roadmap: 'propuestas', areas: 'propuestas', equipo: 'equipo', concejo: 'equipo', contacto: 'contacto',
};

export function Mark({ className = '' }) {
  // Marca: una vía con cinco estaciones (los cinco colores de identidad)
  return (
    <svg className={className} viewBox="0 0 64 24" width="44" height="17" aria-hidden="true" focusable="false">
      <path d="M3 12h58" stroke="currentColor" strokeOpacity=".4" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="8" cy="12" r="4.5" fill="#D81119" />
      <circle cx="20" cy="12" r="4.5" fill="#EE8D09" />
      <circle cx="32" cy="12" r="4.5" fill="#36A036" />
      <circle cx="44" cy="12" r="4.5" fill="#C0E2ED" />
      <circle cx="56" cy="12" r="4.5" fill="#3FA5DD" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const spy = useScrollSpy(spyIds);
  const current = belongsTo[spy];

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a className="brand" href="#inicio" aria-label={`${candidate.name}, ir al inicio`} onClick={() => setOpen(false)}>
          <Mark className="brand__mark" />
          <span className="brand__text">
            <span className="brand__name">{candidate.name}</span>
            <span className="brand__sub">Alcaldía de Guamote</span>
          </span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <ul className="nav__list">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} aria-current={current === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <nav id="menu-movil" className="mobile-nav" data-open={open} aria-label="Menú móvil" hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={current === l.id ? 'true' : undefined} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
