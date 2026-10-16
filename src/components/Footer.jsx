import { candidate } from '../data/candidate';
import { Mark } from './Header';

const nav = [
  ['inicio', 'Inicio'], ['perfil', 'Perfil'], ['trayectoria', 'Trayectoria'],
  ['propuestas', 'Propuestas'], ['equipo', 'Equipo'], ['contacto', 'Contacto'],
];

export default function Footer() {
  const links = candidate.contact.links.filter((l) => l.url);
  return (
    <footer className="footer">
      <div className="footer__strip" aria-hidden="true">
        <span style={{ background: '#D81119' }} /><span style={{ background: '#EE8D09' }} /><span style={{ background: '#36A036' }} />
        <span style={{ background: '#C0E2ED' }} /><span style={{ background: '#3FA5DD' }} />
      </div>
      <div className="wrap footer__grid">
        <div className="footer__id">
          <Mark />
          <p className="footer__name">{candidate.honorific} {candidate.name}</p>
          <p className="footer__role">{candidate.role}</p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <ul className="footer__nav">
            {nav.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>

        <div className="footer__links">
          {links.length > 0 ? (
            <ul>{links.map((l) => <li key={l.id}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>)}</ul>
          ) : (
            <p className="is-empty">Agregar enlaces oficiales</p>
          )}
        </div>
      </div>
      <div className="wrap footer__legal">
        <p>Sitio informativo de la candidatura. No recoge datos personales ni procesa pagos.</p>
        {candidate.legalNote ? <p>{candidate.legalNote}</p> : <p className="is-empty">Agregar leyenda legal electoral (si corresponde)</p>}
        <p>© {new Date().getFullYear()} {candidate.name}. Cantón Guamote, Ecuador.</p>
      </div>
    </footer>
  );
}
