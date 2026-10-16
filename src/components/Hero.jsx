import { GraduationCap, MapPin, Waves } from 'lucide-react';
import { candidate } from '../data/candidate';
import { asset } from '../utils/assets';

const nodes = ['#D81119', '#EE8D09', '#36A036', '#C0E2ED', '#3FA5DD'];

export default function Hero() {
  const [first, ...rest] = candidate.name.split(' ');
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__ring hero__ring--a" />
        <span className="hero__ring hero__ring--b" />
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__role">{candidate.role}</p>
          <h1 id="hero-title" className="hero__title">
            <span>{first}</span> <span>{rest.join(' ')}</span>
          </h1>
          <p className="hero__lead">{candidate.lead}</p>

          <div className="hero__cta">
            <a className="btn btn--light" href="#propuestas">Ver plan de trabajo</a>
            <a className="btn btn--outline" href="#perfil">Conocer al candidato</a>
          </div>

          <ul className="hero__facts" aria-label="Datos clave">
            <li><MapPin size={18} aria-hidden="true" /> Tablas Pamba, cantón Guamote</li>
            <li><GraduationCap size={18} aria-hidden="true" /> Ingeniero Civil, UNACH 2016</li>
            <li><Waves size={18} aria-hidden="true" /> Dirigió el riego de 10 cantones</li>
          </ul>
        </div>

        <figure className="hero__photo">
          {/* Formas geométricas con los colores de identidad */}
          <span className="shape shape--quarter" aria-hidden="true" />
          <span className="shape shape--square" aria-hidden="true" />
          <span className="shape shape--dot-r" aria-hidden="true" />
          <span className="shape shape--dot-g" aria-hidden="true" />
          <span className="shape shape--bar" aria-hidden="true" />
          <div className="hero__frame">
            {/* Foto real entregada por la candidatura. Para cambiarla: reemplaza
                public/images/candidato/juan-altamirano.webp o edita src/data/candidate.js */}
            <img
              src={asset(candidate.photo)}
              alt={candidate.photoAlt}
              width="472"
              height="591"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </figure>
      </div>

      {/* Vía que sale del riel lateral: las cinco estaciones se encienden una a una */}
      <div className="hero__track" aria-hidden="true">
        {nodes.map((c, i) => (
          <span key={c} className="hero__stop" style={{ '--c': c, '--i': i }} />
        ))}
      </div>
    </section>
  );
}
