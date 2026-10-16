// ============================================================
// PLAN DE TRABAJO
// Programas y objetivos tomados del documento de la candidatura.
// ============================================================

// Cinco áreas. Cada color de identidad se usa una sola vez.
export const groups = [
  { id: 'servicios', name: 'Servicios básicos', color: '#3FA5DD', icon: 'Droplets' },
  { id: 'territorio', name: 'Territorio', color: '#EE8D09', icon: 'Map' },
  { id: 'desarrollo', name: 'Desarrollo', color: '#D81119', icon: 'TrendingUp' },
  { id: 'ambiente', name: 'Ambiente y riesgos', color: '#36A036', icon: 'Leaf' },
  { id: 'gobernanza', name: 'Gobernanza', color: '#C0E2ED', icon: 'Users' },
];

export const planCOOTAD55 = {
  title: 'Plan de trabajo',
  intro: 'Propuestas establecidas de acuerdo con las competencias del GAD Municipal, conforme al artículo 55 del COOTAD.',
};

export const proposals = [
  {
    id: 'P1',
    title: 'Agua Potable y Saneamiento',
    short: 'Agua y saneamiento',
    objective: 'Ampliar y mejorar la cobertura de agua segura y saneamiento en el cantón.',
    icon: 'Droplets',
    group: 'servicios',
    topics: ['Agua', 'Saneamiento'],
  },
  {
    id: 'P2',
    title: 'Vialidad Cantonal (Urbana y Rural)',
    short: 'Vialidad',
    objective: 'Mejorar la conectividad vial del cantón para la producción y la movilidad de la población.',
    icon: 'Route',
    group: 'territorio',
    topics: ['Vialidad'],
  },
  {
    id: 'P3',
    title: 'Ordenamiento Territorial y Catastro',
    short: 'Territorio y catastro',
    objective: 'Contar con instrumentos de planificación y gestión del suelo actualizados.',
    icon: 'Map',
    group: 'territorio',
    topics: ['Ordenamiento territorial', 'Catastro'],
  },
  {
    id: 'P4',
    title: 'Desarrollo Económico Local',
    short: 'Economía local',
    objective: 'Dinamizar la economía cantonal mediante comercio, agroindustria y turismo.',
    icon: 'TrendingUp',
    group: 'desarrollo',
    topics: ['Comercio', 'Agroindustria', 'Turismo'],
  },
  {
    id: 'P5',
    title: 'Gestión Ambiental y Residuos Sólidos',
    short: 'Ambiente y residuos',
    objective:
      'Proteger el ambiente y mejorar la gestión adecuada de residuos sólidos del cantón, promoviendo prácticas sostenibles.',
    icon: 'Leaf',
    group: 'ambiente',
    topics: ['Ambiente', 'Residuos sólidos'],
  },
  {
    id: 'P6',
    title: 'Gestión de Riesgos',
    short: 'Riesgos',
    objective: 'Reducir la vulnerabilidad del cantón ante amenazas naturales.',
    icon: 'ShieldAlert',
    group: 'ambiente',
    topics: ['Amenazas naturales'],
  },
  {
    id: 'P7',
    title: 'Gobernanza Digital y Gobierno Abierto',
    short: 'Gobierno digital',
    objective:
      'Modernizar la gestión municipal y cerrar la brecha digital del cantón mediante tecnologías de la información y la comunicación.',
    icon: 'Monitor',
    group: 'gobernanza',
    topics: ['Gobierno digital', 'Brecha digital'],
  },
  {
    id: 'P8',
    title: 'Participación Ciudadana e Interculturalidad',
    short: 'Participación',
    objective: 'Fortalecer la democracia local y la gestión con enfoque intercultural.',
    icon: 'Users',
    group: 'gobernanza',
    topics: ['Participación', 'Interculturalidad'],
  },
];

// ------------------------------------------------------------
// Segundo plan del documento: artículo 58 del COOTAD
// (aparece junto al equipo de concejales).
// ------------------------------------------------------------
export const councilPlan = {
  title: 'Plan de trabajo del Concejo',
  intro: 'Propuestas establecidas de acuerdo con las competencias del GAD Municipal, conforme al artículo 58 del COOTAD.',
  items: [
    {
      id: 'P1',
      title: 'Normativa de Uso y Ocupación del Suelo Urbano',
      objective: 'Ordenar el crecimiento de la ciudad mediante normativa clara y aplicable.',
      icon: 'Scale',
    },
    {
      id: 'P2',
      title: 'Fiscalización de Obra Pública Urbana y otros',
      objective: 'Vigilar la calidad, oportunidad y transparencia de las obras municipales en el área urbana.',
      icon: 'ClipboardCheck',
    },
    {
      id: 'P3',
      title: 'Modernización y Ordenamiento de Mercado y Feria',
      objective:
        'Mejorar la infraestructura y organización del comercio local, en particular de la feria de los jueves.',
      icon: 'Store',
    },
    {
      id: 'P4',
      title: 'Gestión Integral de Residuos Sólidos Urbanos',
      objective:
        'Asegurar un servicio eficiente y sostenible de manejo adecuado de residuos sólidos, con énfasis en los picos de generación durante la feria.',
      icon: 'Recycle',
    },
    {
      id: 'P5',
      title: 'Movilidad y Espacio Público',
      objective:
        'Mejorar la circulación vehicular mediante vías alternas y peatonales, así como ampliar los espacios de recreación urbana.',
      icon: 'Footprints',
    },
    {
      id: 'P6',
      title: 'Seguridad Ciudadana en el Centro Urbano',
      objective:
        'Reducir los riesgos de inseguridad asociados a la alta afluencia de público, especialmente en días de feria.',
      icon: 'ShieldCheck',
    },
    {
      id: 'P7',
      title: 'Promoción Cultural y Patrimonial',
      objective: 'Poner en valor el patrimonio cultural, festivo y ferroviario de la cabecera cantonal.',
      icon: 'Train',
    },
  ],
};
