import { useState } from 'react';
import { Plus } from 'lucide-react';
import { candidate } from '../data/candidate';
import Icon from './Icon';
import SectionHead from './SectionHead';

export default function Experience() {
  const [openId, setOpenId] = useState(candidate.experience[0].id);

  return (
    <section id="experiencia" className="section section--white" aria-labelledby="experiencia-title">
      <div className="wrap">
        <SectionHead
          id="experiencia-title"
          title="Experiencia profesional"
          lead="Toca una etapa para ver qué hizo."
          accent="var(--orange)"
        />

        <ul className="xp">
          {candidate.experience.map((x) => {
            const open = openId === x.id;
            return (
              <li key={x.id} className={`xp__item ${open ? 'is-open' : ''}`}>
                <h3 className="xp__h">
                  <button
                    type="button"
                    className="xp__btn"
                    aria-expanded={open}
                    aria-controls={`xp-${x.id}`}
                    onClick={() => setOpenId(open ? null : x.id)}
                  >
                    <span className="xp__years">{x.years}</span>
                    <span className="xp__icon"><Icon name={x.icon} size={22} /></span>
                    <span className="xp__main">
                      <span className="xp__title">{x.title}</span>
                      <span className="xp__inst">{x.institution}</span>
                    </span>
                    <span className="xp__plus"><Plus size={20} aria-hidden="true" /></span>
                  </button>
                </h3>
                <div id={`xp-${x.id}`} className="xp__panel">
                  <div className="xp__panel-in">
                    <p>{x.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="skills">
          <div className="skills__group">
            <h3>Áreas de experiencia</h3>
            <ul>{candidate.expertise.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="skills__group">
            <h3>Capacidades</h3>
            <ul>{candidate.capabilities.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
