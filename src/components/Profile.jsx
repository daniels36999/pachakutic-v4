import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { candidate } from '../data/candidate';
import { asset, formatNumber } from '../utils/assets';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import Icon from './Icon';
import Modal from './Modal';
import SectionHead from './SectionHead';

const accents = ['var(--sky)', 'var(--orange)', 'var(--green)'];

function Indicator({ item, active }) {
  const v = useCountUp(item.value, active);
  return (
    <div className="indicator">
      <p className="indicator__value" aria-label={`${item.prefix}${formatNumber(item.value)}`}>
        <span aria-hidden="true">{item.prefix}{formatNumber(v)}</span>
      </p>
      <p className="indicator__label">{item.label}</p>
    </div>
  );
}

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [ref, seen] = useInView(0.35);

  return (
    <section id="perfil" className="section section--white" aria-labelledby="perfil-title">
      <div className="wrap">
        <SectionHead id="perfil-title" title="Quién es" accent="var(--sky)" />

        <div className="profile">
          {/* Cadena visual: foto → nombre → cargo → formación → experiencia → territorio */}
          <ol className="chain">
            <li className="chain__head">
              <span className="chain__photo">
                <img src={asset(candidate.photo)} alt="" width="96" height="96" loading="lazy" />
              </span>
              <div>
                <h3 className="chain__name">{candidate.honorific} {candidate.name}</h3>
                <p className="chain__role">{candidate.shortRole}</p>
              </div>
            </li>
            {candidate.profileChain.map((it, i) => (
              <li key={it.title} className="chain__item" style={{ '--c': accents[i] }}>
                <span className="chain__node"><Icon name={it.icon} size={20} /></span>
                <div>
                  <h3 className="chain__title">{it.title}</h3>
                  <p className="chain__text">{it.text}</p>
                  <p className="chain__detail">{it.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="profile__side">
            <div ref={ref} className="indicators">
              {candidate.indicators.map((it) => (
                <Indicator key={it.label} item={it} active={seen} />
              ))}
            </div>
            <button type="button" className="btn btn--dark" onClick={() => setOpen(true)}>
              Ver perfil completo <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="bio-title">
        <div className="modal__body">
          <h3 id="bio-title" className="modal__title">{candidate.fullName}</h3>
          <p className="modal__sub">{candidate.role}</p>
          {candidate.bio.map((p) => (
            <p key={p.slice(0, 24)} className="modal__text">{p}</p>
          ))}
        </div>
      </Modal>
    </section>
  );
}
