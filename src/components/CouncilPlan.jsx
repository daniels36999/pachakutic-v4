import { councilPlan } from '../data/proposals';
import Icon from './Icon';
import SectionHead from './SectionHead';

// Segundo plan del documento (art. 58 COOTAD): lista con iconos, más sobria que las tarjetas del plan principal.
export default function CouncilPlan() {
  return (
    <section id="concejo" className="section section--mist" aria-labelledby="concejo-title">
      <div className="wrap">
        <SectionHead id="concejo-title" title={councilPlan.title} lead={councilPlan.intro} accent="var(--orange)" />
        <ol className="cp">
          {councilPlan.items.map((it) => (
            <li key={it.id} className="cp__row">
              <span className="cp__id">{it.id}</span>
              <span className="cp__icon"><Icon name={it.icon} size={22} /></span>
              <div className="cp__text">
                <h3>{it.title}</h3>
                <p>{it.objective}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
