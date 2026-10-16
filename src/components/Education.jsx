import { candidate } from '../data/candidate';
import Icon from './Icon';
import SectionHead from './SectionHead';

const colors = ['var(--sky)', 'var(--green)', 'var(--orange)'];

// Formación como escalera: cada peldaño sube hasta el título universitario.
export default function Education() {
  return (
    <section id="formacion" className="section section--mist" aria-labelledby="formacion-title">
      <div className="wrap">
        <SectionHead
          id="formacion-title"
          title="Formación"
          lead="De la escuela de su comunidad al título de Ingeniero Civil."
          accent="var(--green)"
        />
        <ol className="steps">
          {candidate.education.map((s, i) => (
            <li key={s.institution} className="steps__item" style={{ '--c': colors[i], '--n': i }}>
              <div className="steps__block">
                <span className="steps__icon"><Icon name={s.icon} size={22} /></span>
                <h3 className="steps__level">{s.level}</h3>
                <p className="steps__inst">{s.institution}</p>
                <p className="steps__note">
                  {s.note}
                  {s.year && <strong className="steps__year"> · {s.year}</strong>}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
