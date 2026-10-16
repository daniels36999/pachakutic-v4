import { useState } from 'react';
import { groups, proposals } from '../data/proposals';
import { useInView } from '../hooks/useInView';
import Icon from './Icon';
import SectionHead from './SectionHead';

const groupById = Object.fromEntries(groups.map((g) => [g.id, g]));

// Recorrido en serpentina (desktop) o vertical (móvil). Cada estación se abre al tocarla.
export default function Roadmap() {
  const [active, setActive] = useState('P1');
  const [ref, seen] = useInView(0.15);

  return (
    <section id="roadmap" className="section section--white" aria-labelledby="roadmap-title">
      <div className="wrap">
        <SectionHead
          id="roadmap-title"
          title="Ruta del plan"
          lead="Ocho programas en orden. Elige una estación para leer su objetivo."
          accent="var(--green)"
        />
        <ol ref={ref} className={`rm ${seen ? 'is-in' : ''}`}>
          {proposals.map((p, i) => {
            const g = groupById[p.group];
            const open = active === p.id;
            return (
              <li key={p.id} className={`rm__step rm__step--${i + 1} ${open ? 'is-open' : ''}`} style={{ '--g': g.color, '--i': i }}>
                <span className="rm__seg" aria-hidden="true" />
                <span className="rm__vseg" aria-hidden="true" />
                <span className="rm__down" aria-hidden="true" />
                <span className="rm__up" aria-hidden="true" />
                <button
                  type="button"
                  className="rm__btn"
                  aria-expanded={open}
                  aria-controls={`rm-${p.id}`}
                  onClick={() => setActive(open ? null : p.id)}
                >
                  <span className="rm__node"><Icon name={p.icon} size={24} /></span>
                  <span className="rm__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="rm__title">{p.short}</span>
                  <span className="rm__area">{g.name}</span>
                </button>
                <div id={`rm-${p.id}`} className="rm__more">
                  <div className="rm__more-in">
                    <p>{p.objective}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
