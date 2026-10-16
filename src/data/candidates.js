// ============================================================
// EQUIPO DE CONCEJALES
// Solo se incluyen los datos del documento: nombre, principal/suplente
// y fotografía del principal. Formación y experiencia NO venían en el
// documento: se muestran como "Agregar ..." hasta que se completen.
//
// Para completar: escribe el texto en `formation` y `experience`
// (por ejemplo formation: 'Ingeniería ...'). Para agregar la foto de un
// suplente: coloca el archivo en public/images/concejales/ y escribe la
// ruta en `substitute.photo`.
// ============================================================

const PLACEHOLDER = 'images/placeholder/avatar.svg';

export const teamGroups = [
  { id: 'urbanos', title: 'Concejales urbanos', short: 'Urbanos', zone: 'Urbano', color: '#3FA5DD' },
  { id: 'rurales', title: 'Concejales rurales', short: 'Rurales', zone: 'Rural', color: '#EE8D09' },
];

export const candidates = [
  // ---------------- URBANOS ----------------
  {
    id: 'u1',
    group: 'urbanos',
    name: 'Ing. Carmen Amelia Padilla Delgado',
    role: 'Concejalía urbana',
    status: 'Principal',
    photo: 'images/concejales/carmen-padilla.webp',
    formation: '', // AGREGAR
    experience: '', // AGREGAR
    substitute: { name: 'Sr. Tomas Daquilema Laso', photo: PLACEHOLDER },
  },
  {
    id: 'u2',
    group: 'urbanos',
    name: 'Sr. José Gregorio Guaman Ayol',
    role: 'Concejalía urbana',
    status: 'Principal',
    photo: 'images/concejales/jose-guaman.webp',
    formation: '',
    experience: '',
    substitute: { name: 'Ing. Norma Gladys Curillo Farez', photo: PLACEHOLDER },
  },
  {
    id: 'u3',
    group: 'urbanos',
    name: 'Ing. Curi Sisa Apugllon Zuña',
    role: 'Concejalía urbana',
    status: 'Principal',
    photo: 'images/concejales/curi-apugllon.webp',
    formation: '',
    experience: '',
    substitute: { name: 'Ing. Daniel Patricio Yutibug Apugllon', photo: PLACEHOLDER },
  },

  // ---------------- RURALES ----------------
  {
    id: 'r1',
    group: 'rurales',
    name: 'Ing. Rosa Rurora Tene Taday',
    role: 'Concejalía rural',
    status: 'Principal',
    photo: 'images/concejales/rosa-tene.webp',
    formation: '',
    experience: '',
    substitute: { name: 'Patricio Cislema Rivera', photo: PLACEHOLDER },
  },
  {
    id: 'r2',
    group: 'rurales',
    name: 'Sr. Julian Roldan Tixi',
    role: 'Concejalía rural',
    status: 'Principal',
    photo: 'images/concejales/julian-roldan.webp',
    formation: '',
    experience: '',
    substitute: { name: 'Sta. Vilma Selena Urquiza Naula', photo: PLACEHOLDER },
  },
];
