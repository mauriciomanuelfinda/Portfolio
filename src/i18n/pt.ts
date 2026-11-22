import type { Dictionary } from '../types'

export const pt: Dictionary = {
  meta: {
    title: 'Mauricio Finda — Tech Lead & Desenvolvedor Full-Stack',
    description:
      'Mauricio Manuel Finda — Tech Lead e Desenvolvedor Full-Stack em Luanda, Angola. Laravel, React, TypeScript e Node.js.',
  },
  nav: {
    about: 'Sobre',
    stack: 'Stack',
    experience: 'Experiência',
    projects: 'Projectos',
    education: 'Formação',
    contact: 'Contactar',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    themeToLight: 'Mudar para tema claro',
    themeToDark: 'Mudar para tema escuro',
    language: 'Mudar língua',
  },
  hero: {
    available: 'Disponível para novos projectos',
    greeting: 'Olá, sou',
    role: 'Tech Lead · Desenvolvedor Full-Stack',
    rotating: ['Laravel & PHP', 'React & TypeScript', 'Node.js & Fastify', 'Sistemas em tempo real', 'Visão computacional'],
    summary:
      'Desenvolvedor Full-Stack e Tech Lead, especializado em Laravel, React, TypeScript e Node.js. Lidero o desenvolvimento de sistemas de gestão académica de larga escala para o sector da educação em Angola.',
    ctaProjects: 'Ver projectos',
    ctaContact: 'Fale comigo',
    photoAlt: 'Retrato de Mauricio Manuel Finda',
    liveTitle: 'Em produção',
    liveText: 'Sistemas de gestão académica de larga escala',
  },
  stats: [
    { value: '2+', label: 'anos de experiência profissional' },
    { value: '3', label: 'plataformas institucionais em produção' },
    { value: '1000s', label: 'de utilizadores em Angola' },
    { value: '35+', label: 'tecnologias no dia-a-dia' },
  ],
  about: {
    kicker: 'Sobre mim',
    title: 'Desenvolvo sistemas que estão em produção.',
    paragraphs: [
      'Trabalho em todas as camadas de uma aplicação, da base de dados à interface. Tenho experiência em arquitectura de software, integração de APIs, sistemas em tempo real, visão computacional e DevOps.',
      'Sou Tech Lead na SOSOFT e Director Técnico do Acesso ETP, a plataforma nacional de candidaturas ao ensino técnico-profissional. Nestas funções defino a arquitectura, faço code review e acompanho as entregas da equipa.',
    ],
    nowLabel: 'Agora',
    now: 'Tech Lead na <b>SOSOFT</b> e Director Técnico do <b>Acesso ETP 2026/27</b>.',
    baseLabel: 'Base',
    location: 'Luanda, Angola',
    languagesLabel: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo', value: 100 },
      { name: 'Inglês', level: 'Intermédio', value: 60 },
    ],
    workLabel: 'Como trabalho',
    softSkills: ['Liderança técnica', 'Code review', 'Gestão de entregas', 'Metodologias ágeis', 'Perfil colaborativo', 'Orientado a resultados'],
  },
  stack: {
    kicker: 'Stack',
    title: 'Ferramentas com que trabalho hoje.',
    hint: 'Passe o rato ou toque num ícone para ver o nome.',
  },
  experience: {
    kicker: 'Experiência',
    title: 'Onde tenho trabalhado.',
    jobs: [
      {
        role: 'Tech Lead',
        company: 'SOSOFT',
        place: 'Luanda, Angola',
        period: 'Actual',
        current: true,
        points: ['Liderança técnica da equipa de desenvolvimento: arquitectura, code review e gestão de entregas.'],
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
    ],
  },
  projects: {
    kicker: 'Projectos',
    title: 'Plataformas em produção.',
    intro: 'Sistemas de gestão académica usados por estudantes, professores e escolas em Angola.',
    statusLive: 'Em produção',
    statusAcademic: 'Académico',
    list: [
      {
        name: 'Acesso ETP',
        tagline: 'Plataforma nacional de candidaturas ao ensino técnico-profissional',
        status: 'live',
        scope: 'Nacional',
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
        status: 'live',
        scope: 'Institucional',
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
        status: 'live',
        scope: 'Provincial',
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
        status: 'academic',
        scope: '3 perfis',
        points: [
          'Sistema com 3 níveis de acesso: prestador, cliente e administrador.',
          'Módulo de gestão de agenda e portfólio para prestadores de serviços.',
        ],
      },
    ],
  },
  education: {
    kicker: 'Formação',
    title: 'Formação académica e cursos.',
    list: [
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
        period: '2022–2025',
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
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: 'Tem um projecto?',
    titleAccent: 'Fale comigo.',
    text: 'Pode escrever-me por e-mail, WhatsApp ou LinkedIn.',
    copy: 'Copiar e-mail',
    copied: 'E-mail copiado',
  },
  footer: { madeWith: 'Feito com React, TypeScript e Vite · Luanda, Angola' },
}
