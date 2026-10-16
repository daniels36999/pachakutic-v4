import { asset } from '../utils/assets';
import { candidate } from '../data/candidate';
import { candidates, teamGroups } from '../data/candidates';

// Organigrama: Alcaldía → Urbanos / Rurales → concejales. Cada nodo abre su perfil.
export default function OrgChart({ onSelect }) {
  return (
    <div className="org" role="group" aria-label="Organigrama del equipo">
      <ul className="tree">
        <li>
          <div className="org__node org__node--root">
            <span className="org__ph"><img src={asset(candidate.photo)} alt="" width="44" height="44" loading="lazy" /></span>
            <span>
              <strong>Alcaldía</strong>
              <small>{candidate.honorific} {candidate.name}</small>
            </span>
          </div>
          <ul>
            {teamGroups.map((g) => (
              <li key={g.id} style={{ '--c': g.color }}>
                <div className="org__node org__node--group">{g.short}</div>
                <ul>
                  {candidates.filter((c) => c.group === g.id).map((c, i) => (
                    <li key={c.id}>
                      <button type="button" className="org__node org__node--person" onClick={() => onSelect(c)} aria-label={`Ver perfil de ${c.name}`}>
                        <span className="org__ph"><img src={asset(c.photo)} alt="" width="44" height="44" loading="lazy" /></span>
                        <span>
                          <strong>{g.zone[0]}{i + 1}</strong>
                          <small>{c.name}</small>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
