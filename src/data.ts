import {
  SiJavascript, SiTypescript, SiPhp, SiPython, SiHtml5, SiCss, SiReact, SiNodedotjs,
  SiLaravel, SiInertia, SiTailwindcss, SiBootstrap, SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker, SiFastify, SiDrizzle, SiVite, SiReactrouter, SiReactquery,
  SiJsonwebtokens, SiGooglegemini, SiPrisma, SiRedis, SiLinux, SiNginx, SiOpencv,
} from 'react-icons/si'
import {
  TbBrandCSharp, TbApi, TbShieldLock, TbPlugConnected, TbHierarchy3, TbLayoutDashboard, TbRefresh,
} from 'react-icons/tb'
import type { Job, Language, Project, StackGroup, Stat, Study } from './types'

export const profile = {
  name: 'Mauricio Manuel Finda',
  shortName: 'Mauricio Finda',
  role: 'Tech Lead · Desenvolvedor Full-Stack',
  location: 'Luanda, Angola',
  email: 'mauriciomanuelfinda@gmail.com',
  phone: '+244 932 760 259',
  whatsapp: 'https://wa.me/244932760259',
  linkedin: 'https://www.linkedin.com/in/maur%C3%ADcio-finda-270b21291/',
  github: 'https://github.com/mauriciomanuelfinda',
  rotating: ['Laravel & PHP', 'React & TypeScript', 'Node.js & Fastify', 'Sistemas em tempo real', 'Visão computacional'],
  summary:
    'Desenvolvedor Full-Stack e Tech Lead, especializado em Laravel, React, TypeScript e Node.js. Lidero o desenvolvimento de sistemas de gestão académica de larga escala para o sector da educação em Angola.',
  about: [
    'Construo plataformas completas — da base de dados à interface — com domínio de arquitectura de software, integração de APIs, sistemas em tempo real, visão computacional e DevOps.',
    'Hoje sou Tech Lead na SOSOFT e Director Técnico do Acesso ETP, a plataforma nacional de candidaturas ao ensino técnico-profissional. Lidero a equipa, defino a arquitectura e garanto as entregas de sistemas usados por milhares de estudantes, escolas e instituições em Angola.',
  ],
  softSkills: ['Liderança técnica', 'Code review', 'Gestão de entregas', 'Metodologias ágeis', 'Perfil colaborativo', 'Orientado a resultados'],
  languages: [
    { name: 'Português', level: 'Nativo', value: 100 },
    { name: 'Inglês', level: 'Intermédio', value: 60 },
  ] satisfies Language[],
}

export const stats: Stat[] = [
  { value: '2+', label: 'anos de experiência profissional' },
  { value: '3', label: 'plataformas institucionais em produção' },
  { value: '1000s', label: 'de utilizadores em Angola' },
  { value: '35+', label: 'tecnologias no dia-a-dia' },
]

export const stack: StackGroup[] = [
  {
    title: 'Linguagens',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'PHP', icon: SiPhp, color: '#8892BF' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C#', icon: TbBrandCSharp, color: '#A179DC' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#2965F1' },
    ],
  },
  {
    title: 'Front-end',
    items: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Vite', icon: SiVite, color: '#9D6CFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Bootstrap 5', icon: SiBootstrap, color: '#7952B3' },
      { name: 'React Router DOM', icon: SiReactrouter, color: '#F44250' },
      { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
      { name: 'Inertia.js', icon: SiInertia, color: '#9553E9' },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Fastify', icon: SiFastify, color: 'var(--mono-brand)' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Prisma', icon: SiPrisma, color: 'var(--mono-brand)' },
      { name: 'APIs RESTful', icon: TbApi, color: '#22D3EE' },
      { name: 'WebSockets', icon: TbPlugConnected, color: '#A78BFA' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
      { name: 'OAuth', icon: TbShieldLock, color: '#34D399' },
      { name: 'OpenCV (visão computacional)', icon: SiOpencv, color: '#5C3EE8' },
      { name: 'Gemini API (IA)', icon: SiGooglegemini, color: '#8E75F2' },
    ],
  },
  {
    title: 'Bases de dados',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Drizzle ORM', icon: SiDrizzle, color: 'var(--drizzle)' },
    ],
  },
  {
    title: 'DevOps & Práticas',
    items: [
      { name: 'Git / Gitflow', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: 'var(--mono-brand)' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'Arquitectura escalável', icon: TbHierarchy3, color: '#F59E0B' },
      { name: 'Metodologias ágeis', icon: TbRefresh, color: '#2DD4BF' },
      { name: 'UI/UX', icon: TbLayoutDashboard, color: '#F472B6' },
    ],
  },
]

export const experience: Job[] = [
  {
    role: 'Tech Lead',
    company: 'SOSOFT',
    place: 'Luanda, Angola',
    period: 'Actual',
    current: true,
    points: [
      'Liderança técnica da equipa de desenvolvimento: arquitectura, code review e gestão de entregas.',
    ],
  },
  {
    role: 'Director Técnico',
    company: 'Acesso ETP',
    place: 'Luanda, Angola',
    period: 'Ano lectivo 2026/27',
    current: true,
    points: [
      'Liderança técnica da plataforma nacional de candidaturas ao ensino técnico-profissional, com arquitectura escalável e orientada por configuração.',
      'Pipeline de correcção automática de provas (OMR) com Python, OpenCV, filas assíncronas e WebSockets.',
    ],
  },
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Incubadora de Empresas do IPIL',
    place: 'Luanda, Angola',
    period: 'Desde Out 2024',
    points: [
      'PIGA GPEL (Gabinete Provincial da Educação de Luanda): dashboards analíticos, calendário académico e integração RUPE.',
      'Portal IPIL: APIs RESTful em Node.js/Fastify/Prisma, WebSockets, chat de suporte em tempo real e módulos académicos em React/TypeScript.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Acesso ETP',
    tagline: 'Plataforma nacional de candidaturas ao ensino técnico-profissional',
    status: 'Em produção',
    scope: 'Nacional',
    accent: ['#8b5cf6', '#22d3ee'],
    points: [
      'Director técnico da edição 2026/27: arquitectura escalável e orientada por configuração.',
      'Módulos de inscrição, gestão de testes, institutos e admissões a nível nacional.',
      'Pipeline de correcção automática de provas (OMR) com Python, OpenCV e filas assíncronas.',
      'Notificações e progresso em tempo real via WebSockets.',
    ],
  },
  {
    name: 'Portal do IPIL',
    tagline: 'Plataforma académica com 4 níveis de acesso',
    status: 'Em produção',
    scope: 'Institucional',
    accent: ['#22d3ee', '#34d399'],
    points: [
      'APIs RESTful em Node.js, Fastify e Prisma; módulos académicos em React e TypeScript.',
      'Módulos para alunos, professores, encarregados e administradores.',
      'WebSockets e chat de suporte em tempo real.',
      'Gestão de faltas, calendário académico e serviço de melhoria de nota.',
    ],
  },
  {
    name: 'PIGA GPEL',
    tagline: 'Gabinete Provincial da Educação de Luanda',
    status: 'Em produção',
    scope: 'Provincial',
    accent: ['#f472b6', '#8b5cf6'],
    points: [
      'Plataforma de gestão académica para todas as escolas da província de Luanda.',
      'Dashboards analíticos e calendário académico.',
      'Integração com o RUPE (Referência Única de Pagamento ao Estado).',
      'Centro de suporte integrado.',
    ],
  },
  {
    name: 'KitParty',
    tagline: 'Plataforma de divulgação de prestadores de serviços para eventos',
    status: 'Académico',
    scope: '3 perfis',
    accent: ['#f59e0b', '#f472b6'],
    points: [
      'Sistema com 3 níveis de acesso: prestador, cliente e administrador.',
      'Módulo de gestão de agenda e portfólio para prestadores de serviços.',
    ],
  },
]

export const education: Study[] = [
  {
    kind: 'degree',
    title: 'Licenciatura',
    school: 'Universidade Gregório Semedo',
    period: '2.º ano · Em curso',
    current: true,
  },
  {
    kind: 'school',
    title: 'Técnico Médio de Informática',
    school: 'Instituto Politécnico Industrial de Luanda (IPIL)',
    period: '2022 — 2025',
    description:
      'Formação técnica em redes de computadores, sistemas operacionais, programação (HTML, CSS, JavaScript, C#, PHP), bases de dados e desenvolvimento de aplicações.',
  },
  {
    kind: 'course',
    title: 'NLW Agents',
    school: 'Desenvolvimento full-stack com IA',
    period: '2025',
    points: [
      'Node.js, Fastify, Docker, PostgreSQL e Drizzle ORM no back-end.',
      'React, Vite, Tailwind CSS e TanStack Query no front-end.',
      'Transcrição de áudio, embeddings e respostas inteligentes com a API do Gemini.',
    ],
  },
]
