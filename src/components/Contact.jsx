import { Mail, MapPin, Phone } from 'lucide-react';
import { candidate } from '../data/candidate';
import Icon from './Icon';
import SectionHead from './SectionHead';

function Row({ icon, label, value, href, placeholder }) {
  const has = Boolean(value);
  const body = (
    <>
      <span className="ct__icon">{icon}</span>
      <span className="ct__text">
        <span className="ct__label">{label}</span>
        <span className="ct__value">{has ? value : placeholder}</span>
      </span>
    </>
  );
  return (
    <li>
      {has && href ? (
        <a className="ct__row" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{body}</a>
      ) : (
        <div className={`ct__row ${has ? '' : 'is-empty'}`}>{body}</div>
      )}
    </li>
  );
}

export default function Contact() {
  const c = candidate.contact;
  return (
    <section id="contacto" className="section section--navy" aria-labelledby="contacto-title">
      <div className="wrap">
        <SectionHead id="contacto-title" title="Contacto" accent="#3FA5DD" />
        <div className="ct">
          <div className="ct__place">
            <MapPin size={28} aria-hidden="true" />
            <p>{c.location}</p>
          </div>
          <ul className="ct__list">
            <Row icon={<Phone size={20} aria-hidden="true" />} label="Teléfono" value={c.phone} href={c.phone ? `tel:${c.phone.replace(/\s/g, '')}` : ''} placeholder="Agregar teléfono" />
            <Row icon={<Mail size={20} aria-hidden="true" />} label="Correo" value={c.email} href={c.email ? `mailto:${c.email}` : ''} placeholder="Agregar correo" />
            {c.links.map((l) => (
              <Row key={l.id} icon={<Icon name={l.icon} size={20} />} label={l.label} value={l.url} href={l.url} placeholder={l.placeholder} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
