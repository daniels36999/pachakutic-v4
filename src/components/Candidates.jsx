import { useState } from 'react';
import { GraduationCap, Briefcase, UserRound } from 'lucide-react';
import { candidates, teamGroups } from '../data/candidates';
import { asset } from '../utils/assets';
import CandidateModal from './CandidateModal';
import OrgChart from './OrgChart';
import CouncilPlan from './CouncilPlan';
import SectionHead from './SectionHead';

function Card({ c, color, onOpen }) {
  return (
    <article className="ccard" style={{ '--c': color }}>
      <div className="ccard__photo">
        <img src={asset(c.photo)} alt={`Retrato de ${c.name}`} width="300" height="400" loading="lazy" />
        <span className="ccard__badge">{c.status}</span>
      </div>
      <div className="ccard__body">
        <h4 className="ccard__name">{c.name}</h4>
        <p className="ccard__role">{c.role}</p>
        <ul className="ccard__facts">
          <li className={c.formation ? '' : 'is-empty'}>
            <GraduationCap size={16} aria-hidden="true" />
            <span>{c.formation || 'Agregar formación'}</span>
          </li>
          <li className={c.experience ? '' : 'is-empty'}>
            <Briefcase size={16} aria-hidden="true" />
            <span>{c.experience || 'Agregar experiencia'}</span>
          </li>
          <li>
            <UserRound size={16} aria-hidden="true" />
            <span><span className="ccard__sub-label">Suplente:</span> {c.substitute.name}</span>
          </li>
        </ul>
        <button type="button" className="btn btn--dark btn--sm" onClick={() => onOpen(c)}>
          Ver perfil
        </button>
      </div>
    </article>
  );
}

export default function Candidates() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="equipo" className="section section--white" aria-labelledby="equipo-title">
        <div className="wrap">
          <SectionHead
            id="equipo-title"
            title="Equipo de concejales"
            lead="Cinco concejalías principales, cada una con su suplente."
            accent="var(--sky)"
          />

          <OrgChart onSelect={setSelected} />

          {teamGroups.map((g) => (
            <div key={g.id} className="team-group" style={{ '--c': g.color }}>
              <h3 className="team-group__title"><span className="team-group__bar" aria-hidden="true" />{g.title}</h3>
              <div className="team-grid">
                {candidates.filter((c) => c.group === g.id).map((c) => (
                  <Card key={c.id} c={c} color={g.color} onOpen={setSelected} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CouncilPlan />

      <CandidateModal candidate={selected} onClose={() => setSelected(null)} />
    </>
  );
}
