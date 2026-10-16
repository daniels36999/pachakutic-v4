// ============================================================
// DATOS DEL CANDIDATO
// Fuente: documento "BIBLIOGRAFIAS.docx" entregado por la candidatura.
// Edita este archivo para cambiar textos, fotografía y contacto
// sin tocar los componentes.
// ============================================================

export const candidate = {
  name: 'Juan Altamirano',
  fullName: 'Juan Patricio Altamirano Marcatoma',
  honorific: 'Ing.',
  role: 'Candidato a Alcalde del cantón Guamote',
  shortRole: 'Alcalde del cantón Guamote',

  // Ruta relativa a /public. Para cambiar la foto: reemplaza el archivo
  // o cambia esta ruta.
  photo: 'images/candidato/juan-altamirano.webp',
  photoAlt: 'Retrato de Juan Altamirano con una banda tejida multicolor',

  lead:
    'Ingeniero civil indígena de la comunidad Tablas Pamba. Su trayectoria une obra pública, riego y fiscalización con conocimiento directo del territorio.',

  territory: {
    community: 'Tablas Pamba',
    canton: 'Guamote',
    province: 'Chimborazo',
    country: 'Ecuador',
  },

  // Biografía completa (modal "Ver perfil"). Texto del documento.
  bio: [
    'Juan Patricio Altamirano Marcatoma nació en la comunidad Tablas Pamba, cantón Guamote, provincia de Chimborazo. Es un joven profesional indígena que ha desarrollado su trayectoria con una estrecha vinculación con su territorio y sus comunidades. Inició su formación académica en la escuela Luis Alberto Castillo y posteriormente cursó sus estudios de bachillerato en la Unidad Educativa Velasco Ibarra. Continuó su formación superior en la Universidad Nacional de Chimborazo, donde obtuvo el título de Ingeniero Civil en 2016.',
    'Su trayectoria integra experiencia en obra pública, vialidad, fiscalización y administración de proyectos, fortaleciendo sus capacidades en planificación, gestión de infraestructura, administración pública y coordinación interinstitucional, con conocimiento directo del territorio y sus comunidades.',
  ],

  // Cadena visual del perfil
  profileChain: [
    {
      icon: 'GraduationCap',
      title: 'Formación',
      text: 'Ingeniero Civil',
      detail: 'Universidad Nacional de Chimborazo, 2016',
    },
    {
      icon: 'Briefcase',
      title: 'Experiencia',
      text: 'Obra pública, riego y fiscalización',
      detail: 'GAD Municipal de Guamote y GAD Provincial de Chimborazo',
    },
    {
      icon: 'MapPin',
      title: 'Territorio',
      text: 'Tablas Pamba, cantón Guamote',
      detail: 'Provincia de Chimborazo, Ecuador',
    },
  ],

  // Formación (de la escuela a la universidad). No se inventan años.
  education: [
    {
      icon: 'School',
      level: 'Escuela',
      institution: 'Escuela Luis Alberto Castillo',
      note: 'Inicio de su formación académica',
    },
    {
      icon: 'BookOpen',
      level: 'Bachillerato',
      institution: 'Unidad Educativa Velasco Ibarra',
      note: 'Estudios de bachillerato',
    },
    {
      icon: 'GraduationCap',
      level: 'Educación superior',
      institution: 'Universidad Nacional de Chimborazo',
      note: 'Título de Ingeniero Civil',
      year: '2016',
    },
  ],

  // Experiencia profesional
  experience: [
    {
      id: 'e1',
      years: '2018 – 2019',
      icon: 'Ruler',
      title: 'Topografía y fiscalización de obras',
      institution: 'GAD Municipal de Guamote',
      description:
        'Inició su trayectoria profesional desarrollando actividades de topografía, levantamiento de información y fiscalización de obras en diferentes comunidades del cantón.',
    },
    {
      id: 'e2',
      years: '2020 – 2023',
      icon: 'Sprout',
      title: 'Técnico proyectista en sistemas de riego',
      institution: 'Cantones de Guamote y Colta',
      description:
        'Participó en proyectos orientados a la tecnificación y optimización de los sistemas de riego.',
    },
    {
      id: 'e3',
      years: '2023 – 2024',
      icon: 'Waves',
      title: 'Director general de Riego',
      institution: 'GAD Provincial de Chimborazo',
      description:
        'Tuvo bajo su responsabilidad la gestión de los sistemas de riego de los 10 cantones y aproximadamente 1.200 sistemas de riego.',
    },
  ],

  // Áreas y capacidades (último párrafo de la biografía)
  expertise: ['Obra pública', 'Vialidad', 'Fiscalización', 'Administración de proyectos'],
  capabilities: [
    'Planificación',
    'Gestión de infraestructura',
    'Administración pública',
    'Coordinación interinstitucional',
  ],

  // Trayectoria visual (5 estaciones = 5 colores de identidad, cada uno una vez)
  timeline: [
    {
      year: '2016',
      icon: 'GraduationCap',
      title: 'Ingeniería Civil',
      institution: 'Universidad Nacional de Chimborazo',
      description: 'Obtiene el título de Ingeniero Civil.',
    },
    {
      year: '2018 – 2019',
      icon: 'Ruler',
      title: 'GAD Municipal de Guamote',
      institution: 'Topografía y fiscalización',
      description: 'Levantamiento de información y fiscalización de obras en comunidades del cantón.',
    },
    {
      year: '2020 – 2023',
      icon: 'Sprout',
      title: 'Sistemas de riego',
      institution: 'Cantones de Guamote y Colta',
      description: 'Técnico proyectista en tecnificación y optimización de riego.',
    },
    {
      year: '2023 – 2024',
      icon: 'Waves',
      title: 'Dirección General de Riego',
      institution: 'GAD Provincial de Chimborazo',
      description: 'Gestión de los sistemas de riego de los 10 cantones.',
    },
    {
      year: 'Hoy',
      icon: 'Landmark',
      title: 'Candidatura a la Alcaldía',
      institution: 'Cantón Guamote',
      description: 'Presenta un plan de trabajo de 8 programas según las competencias del GAD Municipal.',
    },
  ],

  // Indicadores: SOLO cifras presentes en el documento.
  indicators: [
    { value: 8, label: 'programas en el plan de trabajo', prefix: '' },
    { value: 10, label: 'cantones con sistemas de riego a su cargo', prefix: '' },
    { value: 1200, label: 'sistemas de riego bajo su responsabilidad', prefix: '≈ ' },
  ],

  // ------------------------------------------------------------
  // CONTACTO — completar con datos reales. Si un valor está vacío
  // se muestra el texto "Agregar ..." en la página.
  // ------------------------------------------------------------
  contact: {
    location: 'Cantón Guamote, provincia de Chimborazo, Ecuador',
    phone: '', // ej. '+593 99 999 9999'
    email: '', // ej. 'contacto@dominio.com'
    links: [
      { id: 'facebook', label: 'Facebook', icon: 'Facebook', url: '', placeholder: 'Agregar enlace oficial' },
      { id: 'instagram', label: 'Instagram', icon: 'Instagram', url: '', placeholder: 'Agregar enlace oficial' },
      { id: 'youtube', label: 'YouTube', icon: 'Youtube', url: '', placeholder: 'Agregar enlace oficial' },
      { id: 'web', label: 'Otro enlace', icon: 'Globe', url: '', placeholder: 'Agregar enlace oficial' },
    ],
  },

  // Texto legal exigido por la autoridad electoral (si aplica). Vacío = placeholder visible.
  legalNote: '',
};
