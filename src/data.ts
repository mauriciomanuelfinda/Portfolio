import {
  SiJavascript, SiTypescript, SiPhp, SiPython, SiHtml5, SiCss, SiReact, SiNodedotjs,
  SiLaravel, SiInertia, SiTailwindcss, SiBootstrap, SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker, SiFastify, SiDrizzle, SiVite, SiReactrouter, SiReactquery,
  SiJsonwebtokens, SiGooglegemini,
} from 'react-icons/si'
import {
  TbBrandCSharp, TbApi, TbShieldLock, TbPlugConnected, TbHierarchy3, TbLayoutDashboard, TbRefresh,
} from 'react-icons/tb'
import type { Job, Language, Project, StackGroup, Stat } from './types'

export const profile = {
  name: 'Mauricio Manuel Finda',
  shortName: 'Mauricio Finda',
  role: 'Desenvolvedor Web Full Stack',
  location: 'Luanda, Angola',
  email: 'mauriciomanuelfinda@gmail.com',
  phone: '+244 932 760 259',
  whatsapp: 'https://wa.me/244932760259',
  linkedin: 'https://www.linkedin.com/in/maur%C3%ADcio-finda-270b21291/',
  github: 'https://github.com/mauriciomanuelfinda',
  rotating: ['React & TypeScript', 'Node.js & Fastify', 'Laravel & PHP', 'Sistemas em tempo real'],
  summary:
    'Desenvolvedor web full stack com mais de 1 ano de experiência profissional, especializado em React, Node.js, TypeScript, Laravel e PHP. Contribuo activamente em plataformas de grande escala em produção, incluindo sistemas institucionais do Governo de Angola e do IPIL.',
  about: [
    'Construo plataformas web completas — da base de dados à interface — com foco em arquitectura escalável, APIs RESTful, comunicação em tempo real via WebSockets e autenticação segura com JWT e OAuth.',
    'Hoje trabalho como Desenvolvedor Full Stack na Incubadora de Empresas do IPIL, onde desenvolvo e mantenho sistemas usados por milhares de estudantes, professores e instituições em todo o país.',
  ],
  softSkills: ['Perfil colaborativo', 'Orientado a resultados', 'Metodologias ágeis', 'Evolução técnica contínua', 'UI/UX'],
  languages: [
    { name: 'Português', level: 'Nativo', value: 100 },
    { name: 'Inglês', level: 'Intermédio', value: 60 },
  ] satisfies Language[],
}

export const stats: Stat[] = [
  { value: '1+', label: 'ano de experiência profissional' },
  { value: '4', label: 'plataformas em produção' },
  { value: '1000s', label: 'de utilizadores em Angola' },
  { value: '30+', label: 'tecnologias no dia-a-dia' },
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
      { name: 'React Query', icon: SiReactquery, color: '#FF4154' },
      { name: 'Inertia.js', icon: SiInertia, color: '#9553E9' },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Fastify', icon: SiFastify, color: 'var(--mono-brand)' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'APIs RESTful', icon: TbApi, color: '#22D3EE' },
      { name: 'WebSockets', icon: TbPlugConnected, color: '#A78BFA' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
      { name: 'OAuth', icon: TbShieldLock, color: '#34D399' },
      { name: 'Gemini API (IA)', icon: SiGooglegemini, color: '#8E75F2' },
    ],
  },
  {
    title: 'Bases de dados',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Drizzle ORM', icon: SiDrizzle, color: 'var(--drizzle)' },
    ],
  },
  {
    title: 'DevOps & Práticas',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: 'var(--mono-brand)' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Arquitectura escalável', icon: TbHierarchy3, color: '#F59E0B' },
      { name: 'Metodologias ágeis', icon: TbRefresh, color: '#2DD4BF' },
      { name: 'UI/UX', icon: TbLayoutDashboard, color: '#F472B6' },
    ],
  },
]

export const experience: Job[] = [
  {
    role: 'Desenvolvedor Web Full Stack',
    company: 'Incubadora de Empresas do IPIL',
    place: 'Luanda, Angola',
    period: 'Abr 2025 — Actual',
    current: true,
    points: [
      'Desenvolvimento e manutenção de plataformas institucionais em produção, usadas por milhares de utilizadores em Angola.',
      'Implementação de sistemas de comunicação em tempo real via WebSockets.',
      'Refactoring de módulos existentes para melhorar escalabilidade e reutilização.',
      'Colaboração em equipas multidisciplinares com metodologias ágeis.',
    ],
  },
  {
    role: 'Estagiário em Suporte Técnico',
    company: 'Incubadora de Empresas do IPIL',
    place: 'Luanda, Angola',
    period: 'Out 2024 — Abr 2025',
    points: [
      'Diagnóstico e resolução de problemas no portal institucional.',
      'Atendimento directo ao público com foco em eficiência.',
      'Participação na modernização do portal: testes, estruturação e melhorias de interface.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Acesso ETP',
    tagline: 'Gestão nacional de candidaturas ao ensino médio técnico-profissional',
    status: 'Em produção',
    scope: 'Nacional',
    accent: ['#8b5cf6', '#22d3ee'],
    points: [
      'Plataforma de larga escala com módulos de inscrição, gestão de testes, institutos e admissões.',
      'Responsável pela criação do sistema de correcção automática de provas.',
      'Implementação do sistema de notificações em tempo real.',
      'Actualmente a refactorizar o projecto para reutilização nos próximos anos lectivos.',
    ],
  },
  {
    name: 'Portal do IPIL',
    tagline: 'Plataforma académica com 4 níveis de acesso',
    status: 'Em produção',
    scope: 'Institucional',
    accent: ['#22d3ee', '#34d399'],
    points: [
      'Módulos para alunos, professores, encarregados e administradores.',
      'Serviço de WebSocket para comunicação em tempo real e linha de suporte via chat.',
      'Gestão de faltas, calendário académico e serviço de melhoria de nota.',
      'Refactoring do módulo de exames especiais e resolução de bugs críticos.',
    ],
  },
  {
    name: 'PIGA GPEL',
    tagline: 'Gestão de escolas e dados académicos provinciais',
    status: 'Em produção',
    scope: 'Provincial',
    accent: ['#f472b6', '#8b5cf6'],
    points: [
      'Plataforma de gestão académica para todas as escolas a nível de Luanda.',
      'Implementação da gestão de níveis e do calendário académico.',
      'Desenvolvimento do centro de suporte integrado.',
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

export const education = {
  title: 'Técnico Médio de Informática',
  school: 'Instituto Politécnico Industrial de Luanda (IPIL)',
  period: 'Set 2022 — Jul 2025',
  description:
    'Formação técnica em redes de computadores, sistemas operacionais, programação (HTML, CSS, JavaScript, C#, PHP), bases de dados e desenvolvimento de aplicações.',
}

export const course = {
  title: 'NLW Agents — Avançado',
  year: '2025',
  points: [
    'Aplicações full-stack com Node.js, Fastify, Docker, PostgreSQL e Drizzle ORM.',
    'Front-end com React, Vite, Tailwind CSS, React Router DOM e React Query.',
    'Gravação e upload de áudio no navegador com integração de IA.',
    'Transcrição, embeddings e respostas inteligentes com a API do Gemini.',
  ],
}
