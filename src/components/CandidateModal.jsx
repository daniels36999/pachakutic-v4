import { GraduationCap, Briefcase } from 'lucide-react';
import { asset } from '../utils/assets';
import Modal from './Modal';

export default function CandidateModal({ candidate: c, onClose }) {
  return (
    <Modal open={Boolean(c)} onClose={onClose} labelledBy="cand-title" className="modal--cand">
      {c && (
        <div className="modal__body cmodal">
          <img className="cmodal__photo" src={asset(c.photo)} alt={`Retrato de ${c.name}`} width="300" height="400" />
          <div className="cmodal__info">
            <p className="cmodal__badge">{c.status}</p>
            <h3 id="cand-title" className="modal__title">{c.name}</h3>
            <p className="modal__sub">{c.role}</p>

            <dl className="cmodal__list">
              <div className={c.formation ? '' : 'is-empty'}>
                <dt><GraduationCap size={18} aria-hidden="true" /> Formación</dt>
                <dd>{c.formation || 'Agregar formación'}</dd>
              </div>
              <div className={c.experience ? '' : 'is-empty'}>
                <dt><Briefcase size={18} aria-hidden="true" /> Experiencia</dt>
                <dd>{c.experience || 'Agregar experiencia'}</dd>
              </div>
            </dl>

            <div className="cmodal__sub">
              <img src={asset(c.substitute.photo)} alt="" width="56" height="56" />
              <div>
                <p className="cmodal__sub-label">Suplente</p>
                <p className="cmodal__sub-name">{c.substitute.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
