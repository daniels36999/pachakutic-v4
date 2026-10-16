import { useInView } from '../hooks/useInView';

// Cabecera de sección con la "estación" (nodo sobre la vía del tren).
export default function SectionHead({ id, title, lead, accent = 'var(--sky)', className = '' }) {
  const [ref, seen] = useInView(0.3);
  return (
    <header ref={ref} className={`sec-head reveal ${seen ? 'is-in' : ''} ${className}`}>
      <span className="station" style={{ '--accent': accent }} aria-hidden="true" />
      <h2 id={id}>{title}</h2>
      {lead && <p className="sec-head__lead">{lead}</p>}
    </header>
  );
}
