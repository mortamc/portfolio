export const personal = {
  name: 'Lautaro Mortarotti',
  email: 'mortarotti50@gmail.com',
  github: 'https://github.com/mortamc',
  githubLabel: 'github.com/mortamc',
  location: 'Mendoza, Argentina',
  tagline: 'Desarrollador Full Stack',
  tagline2: 'Visión técnico / comercial',
  bio: 'Estudiante de Desarrollo de Software en el ITU (UNCUYO) y desarrollador freelance en Mendoza, Argentina. Combino programación full stack con una mirada comercial y administrativa: no solo construyo productos, entiendo el negocio detrás de ellos. Busco crecer hacia roles que integren lo técnico con lo comercial, como Product Manager, Sales Engineer o Technical Account Manager.',
  photo: '/foto.png' as string | undefined,
};

export const terminalLines = [
  { prompt: '~$', command: 'whoami', output: 'mortamc' },
  { prompt: '~$', command: 'role', output: 'full_stack_developer' },
  { prompt: '~$', command: 'location', output: 'mendoza_ar' },
  { prompt: '~$', command: 'status', output: 'available_for_work' },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export type FeaturedProject = Project & {
  screenshots: { alt: string; placeholder: string; image?: string }[];
};

export const featuredProject: FeaturedProject = {
  name: 'WebRepuestoSanIsidro',
  description:
    'Sitio e-commerce de repuestos desarrollado para un cliente real. Stack: React + Vite + Supabase, con panel de administración propio e integración con la base de datos de productos existente del negocio (migrada desde Access).',
  tags: ['React', 'Vite', 'Supabase', 'Cloudflare Pages'],
  links: [
    { label: 'Ver sitio', href: 'https://webdevelop-rsi.lautaby12.workers.dev/' },
    { label: 'GitHub', href: '#' },
  ],
  screenshots: [
    { alt: 'Página principal de WebRepuestoSanIsidro', placeholder: 'Captura 1', image: '/screenshot-1.png' },
    { alt: 'Catálogo de productos', placeholder: 'Captura 2', image: '/screenshot-2.png' },
    { alt: 'Panel de administración', placeholder: 'Captura 3', image: '/screenshot-3.png' },
  ],
};

export const otherProjects: Project[] = [
  {
    name: 'Mortups',
    description:
      'Script en Python que se acopla al servidor del juego y lee datos del mismo, aparte de generar backups automáticos.',
    tags: ['Python', 'PowerShell'],
    links: [{ label: 'GitHub', href: 'https://github.com/mortamc/mortups' }],
  },
  {
    name: 'Mortfiles',
    description:
      'Varios archivos CSS, GLSL y Shell que configuran automáticamente el sistema Linux Arch a mi medida.',
    tags: ['CSS', 'GLSL', 'Shell'],
    links: [{ label: 'GitHub', href: 'https://github.com/mortamc/mortfiles' }],
  },
  {
    name: 'Client World Edit 1.12.2',
    description:
      'Versión del mod WorldEdit para Minecraft que funciona 100% del lado del cliente: no requiere instalación en el servidor, solo en el cliente del jugador.',
    tags: ['Java'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/mortamc/Client-World-Edit-1.12.2',
      },
    ],
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Backend / DB', skills: ['Node.js', 'Python', 'SQL', 'Supabase'] },
  { title: 'Deploy / Infra', skills: ['Cloudflare Pages'] },
  { title: 'Otros', skills: ['Java (bytecode / modding)'] },
];
