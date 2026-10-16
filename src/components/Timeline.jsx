import { candidate } from '../data/candidate';
import { useInView } from '../hooks/useInView';
import Icon from './Icon';
import SectionHead from './SectionHead';

// Un color de identidad por estación (cada uno una sola vez)
const colors = ['#D81119', '#EE8D09', '#36A036', '#C0E2ED', '#3FA5DD'];

export default function Timeline() {
  const [ref, seen] = useInView(0.2);
  return (
    <section id="trayectoria" className="section section--navy" aria-labelledby="trayectoria-title">
      <div className="wrap">
        <SectionHead
          id="trayectoria-title"
          title="Trayectoria"
          lead="Cinco estaciones, de la universidad a la candidatura."
          accent="#C0E2ED"
        />
        <ol ref={ref} className={`tl ${seen ? 'is-in' : ''}`}>
          {candidate.timeline.map((t, i) => (
            <li key={t.title} className="tl__item" style={{ '--c': colors[i], '--i': i }}>
              <span className="tl__node"><Icon name={t.icon} size={22} /></span>
              <p className="tl__year">{t.year}</p>
              <h3 className="tl__title">{t.title}</h3>
              <p className="tl__inst">{t.institution}</p>
              <p className="tl__desc">{t.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
