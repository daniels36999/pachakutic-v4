import { groups, proposals, planCOOTAD55 } from '../data/proposals';
import Icon from './Icon';
import SectionHead from './SectionHead';

const groupById = Object.fromEntries(groups.map((g) => [g.id, g]));

export default function Proposals() {
  return (
    <section id="propuestas" className="section section--mist" aria-labelledby="propuestas-title">
      <div className="wrap">
        <SectionHead
          id="propuestas-title"
          title="Plan de trabajo"
          lead={planCOOTAD55.intro}
          accent="var(--red)"
        />
        <ul className="grid-p">
          {proposals.map((p) => {
            const g = groupById[p.group];
            return (
              <li key={p.id} className="pcard" style={{ '--g': g.color }}>
                <div className="pcard__top">
                  <span className="pcard__num">{p.id}</span>
                  <span className="pcard__icon"><Icon name={p.icon} size={24} /></span>
                </div>
                <h3 className="pcard__title">{p.title}</h3>
                <p className="pcard__obj">{p.objective}</p>
                <p className="pcard__group"><span className="pcard__dot" aria-hidden="true" />{g.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
