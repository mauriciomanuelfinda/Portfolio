import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    title: 'Mauricio Finda — Tech Lead & Full-Stack Developer',
    description:
      'Mauricio Manuel Finda — Tech Lead and Full-Stack Developer based in Luanda, Angola. Laravel, React, TypeScript and Node.js.',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    language: 'Change language',
  },
  hero: {
    available: 'Available for new projects',
    greeting: "Hi, I'm",
    role: 'Tech Lead · Full-Stack Developer',
    rotating: ['Laravel & PHP', 'React & TypeScript', 'Node.js & Fastify', 'Real-time systems', 'Computer vision'],
    summary:
      'Full-Stack Developer and Tech Lead specialised in Laravel, React, TypeScript and Node.js. I lead the development of large-scale academic management systems for the education sector in Angola.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    photoAlt: 'Portrait of Mauricio Manuel Finda',
    liveTitle: 'In production',
    liveText: 'Large-scale academic management systems',
  },
  stats: [
    { value: '2+', label: 'years of professional experience' },
    { value: '3', label: 'institutional platforms in production' },
    { value: '1000s', label: 'of users across Angola' },
    { value: '35+', label: 'technologies in daily use' },
  ],
  about: {
    kicker: 'About me',
    title: 'I build systems that run in production.',
    paragraphs: [
      'I work on every layer of an application, from the database to the interface. My experience covers software architecture, API integration, real-time systems, computer vision and DevOps.',
      "I'm Tech Lead at SOSOFT and Technical Director of Acesso ETP, the national application platform for technical-vocational education. In these roles I define the architecture, review code and manage the team's deliveries.",
    ],
    nowLabel: 'Now',
    now: 'Tech Lead at <b>SOSOFT</b> and Technical Director of <b>Acesso ETP 2026/27</b>.',
    baseLabel: 'Based in',
    location: 'Luanda, Angola',
    languagesLabel: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native', value: 100 },
      { name: 'English', level: 'Intermediate', value: 60 },
    ],
    workLabel: 'How I work',
    softSkills: ['Technical leadership', 'Code review', 'Delivery management', 'Agile methodologies', 'Collaborative', 'Results-driven'],
  },
  stack: {
    kicker: 'Stack',
    title: 'The tools I work with today.',
    hint: 'Hover or tap an icon to see its name.',
  },
  experience: {
    kicker: 'Experience',
    title: "Where I've worked.",
    jobs: [
      {
        role: 'Tech Lead',
        company: 'SOSOFT',
        place: 'Luanda, Angola',
        period: 'Present',
        current: true,
        points: ['Technical leadership of the development team: architecture, code review and delivery management.'],
      },
      {
        role: 'Technical Director',
        company: 'Acesso ETP',
        place: 'Luanda, Angola',
        period: 'School year 2026/27',
        current: true,
        points: [
          'Technical leadership of the national application platform for technical-vocational education, with a scalable, configuration-driven architecture.',
          'Automated exam grading pipeline (OMR) with Python, OpenCV, async queues and WebSockets.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: 'IPIL Business Incubator',
        place: 'Luanda, Angola',
        period: 'Since Oct 2024',
        points: [
          'PIGA GPEL (Luanda Provincial Education Office): analytics dashboards, academic calendar and RUPE integration.',
          'IPIL Portal: RESTful APIs with Node.js/Fastify/Prisma, WebSockets, real-time support chat and academic modules in React/TypeScript.',
        ],
      },
    ],
  },
  projects: {
    kicker: 'Projects',
    title: 'Platforms in production.',
    intro: 'Academic management systems used by students, teachers and schools in Angola.',
    statusLive: 'In production',
    statusAcademic: 'Academic',
    list: [
      {
        name: 'Acesso ETP',
        tagline: 'National application platform for technical-vocational education',
        status: 'live',
        scope: 'National',
        points: [
          'Technical director of the 2026/27 edition: scalable, configuration-driven architecture.',
          'Nationwide modules for applications, exam management, institutes and admissions.',
          'Automated exam grading pipeline (OMR) with Python, OpenCV and async queues.',
          'Real-time notifications and progress via WebSockets.',
        ],
      },
      {
        name: 'IPIL Portal',
        tagline: 'Academic platform with 4 access levels',
        status: 'live',
        scope: 'Institutional',
        points: [
          'RESTful APIs with Node.js, Fastify and Prisma; academic modules in React and TypeScript.',
          'Modules for students, teachers, guardians and administrators.',
          'WebSockets and real-time support chat.',
          'Attendance tracking, academic calendar and grade improvement service.',
        ],
      },
      {
        name: 'PIGA GPEL',
        tagline: 'Luanda Provincial Education Office',
        status: 'live',
        scope: 'Provincial',
        points: [
          'Academic management platform for every school in Luanda province.',
          'Analytics dashboards and academic calendar.',
          "Integration with RUPE (Angola's single government payment reference).",
          'Built-in support centre.',
        ],
      },
      {
        name: 'KitParty',
        tagline: 'Marketplace for event service providers',
        status: 'academic',
        scope: '3 roles',
        points: [
          'Three access levels: provider, client and administrator.',
          'Scheduling and portfolio management for service providers.',
        ],
      },
    ],
  },
  education: {
    kicker: 'Education',
    title: 'Education and courses.',
    list: [
      {
        kind: 'degree',
        title: "Bachelor's degree",
        school: 'Gregório Semedo University',
        period: '2nd year · Ongoing',
        current: true,
      },
      {
        kind: 'school',
        title: 'IT Technician (secondary vocational)',
        school: 'Luanda Industrial Polytechnic Institute (IPIL)',
        period: '2022–2025',
        description:
          'Technical training in computer networks, operating systems, programming (HTML, CSS, JavaScript, C#, PHP), databases and application development.',
      },
      {
        kind: 'course',
        title: 'NLW Agents',
        school: 'Full-stack development with AI',
        period: '2025',
        points: [
          'Node.js, Fastify, Docker, PostgreSQL and Drizzle ORM on the back end.',
          'React, Vite, Tailwind CSS and TanStack Query on the front end.',
          'Audio transcription, embeddings and smart answers with the Gemini API.',
        ],
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Have a project?',
    titleAccent: 'Get in touch.',
    text: 'You can reach me by email, WhatsApp or LinkedIn.',
    copy: 'Copy email',
    copied: 'Email copied',
  },
  footer: { madeWith: 'Built with React, TypeScript and Vite · Luanda, Angola' },
}
