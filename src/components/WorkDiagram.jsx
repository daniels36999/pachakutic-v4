import { MapPin, Compass } from 'lucide-react';
import { groups, proposals } from '../data/proposals';
import Icon from './Icon';
import SectionHead from './SectionHead';

// Diagrama de árbol: Plan de trabajo → 5 áreas → programas → Guamote.
// Los conectores se dibujan con CSS (bordes) para que se adapten a cualquier ancho.
export default function WorkDiagram() {
  return (
    <section id="areas" className="section section--cloud" aria-labelledby="areas-title">
      <div className="wrap">
        <SectionHead
          id="areas-title"
          title="Áreas de trabajo"
          lead="Los ocho programas agrupados en cinco áreas, todos hacia un mismo territorio."
          accent="var(--sky)"
        />

        <div className="wd">
          <div className="wd__root"><Compass size={20} aria-hidden="true" /> Plan de trabajo</div>

          <ul className="wd__groups">
            {groups.map((g) => {
              const items = proposals.filter((p) => p.group === g.id);
              return (
                <li key={g.id} className="wd__group" style={{ '--c': g.color }}>
                  <span className="wd__in" aria-hidden="true" />
                  <h3 className="wd__gnode">
                    <span className="wd__gicon"><Icon name={g.icon} size={20} /></span>
                    {g.name}
                  </h3>
                  <ul className="wd__items">
                    {items.map((p) => (
                      <li key={p.id} className="wd__item">
                        <span className="wd__item-icon"><Icon name={p.icon} size={16} /></span>
                        <span className="wd__item-text">
                          <span className="wd__item-id">{p.id}</span> {p.short}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="wd__out" aria-hidden="true" />
                </li>
              );
            })}
          </ul>

          <div className="wd__hub">
            <MapPin size={20} aria-hidden="true" /> Guamote
          </div>
        </div>
      </div>
    </section>
  );
}
