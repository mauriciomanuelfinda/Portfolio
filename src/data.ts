import {
  SiJavascript, SiTypescript, SiPhp, SiPython, SiHtml5, SiCss, SiReact, SiNodedotjs,
  SiLaravel, SiInertia, SiTailwindcss, SiBootstrap, SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker, SiFastify, SiDrizzle, SiVite, SiReactrouter, SiReactquery,
  SiJsonwebtokens, SiGooglegemini, SiPrisma, SiRedis, SiLinux, SiNginx, SiOpencv,
} from 'react-icons/si'
import {
  TbBrandCSharp, TbApi, TbShieldLock, TbPlugConnected, TbHierarchy3, TbLayoutDashboard, TbRefresh,
} from 'react-icons/tb'
import type { Lang, Localized, StackGroup } from './types'

/** Dados que não mudam com a língua. O texto traduzido está em src/i18n. */
export const profile = {
  name: 'Mauricio Manuel Finda',
  shortName: 'Mauricio Finda',
  email: 'mauriciomanuelfinda@gmail.com',
  phone: '+244 932 760 259',
  whatsapp: 'https://wa.me/244932760259',
  linkedin: 'https://www.linkedin.com/in/maur%C3%ADcio-finda-270b21291/',
  linkedinHandle: 'maurício-finda',
  github: 'https://github.com/mauriciomanuelfinda',
  githubHandle: '@mauriciomanuelfinda',
}

export const loc = (value: Localized, lang: Lang) => (typeof value === 'string' ? value : value[lang])

export const stack: StackGroup[] = [
  {
    title: { pt: 'Linguagens', en: 'Languages' },
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
      { name: 'Fastify', icon: SiFastify, color: 'var(--text)' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Prisma', icon: SiPrisma, color: 'var(--text)' },
      { name: { pt: 'APIs RESTful', en: 'RESTful APIs' }, icon: TbApi, color: 'var(--accent)' },
      { name: 'WebSockets', icon: TbPlugConnected, color: 'var(--accent)' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
      { name: 'OAuth', icon: TbShieldLock, color: 'var(--accent)' },
      { name: { pt: 'OpenCV (visão computacional)', en: 'OpenCV (computer vision)' }, icon: SiOpencv, color: '#5C3EE8' },
      { name: { pt: 'Gemini API (IA)', en: 'Gemini API (AI)' }, icon: SiGooglegemini, color: '#8E75F2' },
    ],
  },
  {
    title: { pt: 'Bases de dados', en: 'Databases' },
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Drizzle ORM', icon: SiDrizzle, color: 'var(--text)' },
    ],
  },
  {
    title: { pt: 'DevOps & Práticas', en: 'DevOps & Practices' },
    items: [
      { name: 'Git / Gitflow', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: 'var(--text)' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Linux', icon: SiLinux, color: 'var(--text)' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: { pt: 'Arquitectura escalável', en: 'Scalable architecture' }, icon: TbHierarchy3, color: 'var(--accent)' },
      { name: { pt: 'Metodologias ágeis', en: 'Agile methodologies' }, icon: TbRefresh, color: 'var(--accent)' },
      { name: 'UI/UX', icon: TbLayoutDashboard, color: 'var(--accent)' },
    ],
  },
]
