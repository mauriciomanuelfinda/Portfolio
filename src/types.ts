import type { IconType } from 'react-icons'

export type Lang = 'pt' | 'en'

/** Texto que muda conforme a língua (ou igual nas duas, quando é um nome próprio). */
export type Localized = string | Record<Lang, string>

export interface Tech {
  name: Localized
  icon: IconType
  /** Cor da marca, mostrada só ao passar o rato / tocar. */
  color: string
}

export interface StackGroup {
  title: Localized
  items: Tech[]
}

export interface Job {
  role: string
  company: string
  place: string
  period: string
  current?: boolean
  points: string[]
}

export interface Project {
  name: string
  tagline: string
  status: 'live' | 'academic'
  scope: string
  points: string[]
}

export interface Stat {
  value: string
  label: string
}

export interface Study {
  kind: 'degree' | 'school' | 'course'
  title: string
  school: string
  period: string
  current?: boolean
  description?: string
  points?: string[]
}

export interface Language {
  name: string
  level: string
  value: number
}

/** Todo o texto do site numa língua. */
export interface Dictionary {
  meta: { title: string; description: string }
  nav: {
    about: string
    stack: string
    experience: string
    projects: string
    education: string
    contact: string
    menuOpen: string
    menuClose: string
    themeToLight: string
    themeToDark: string
    language: string
  }
  hero: {
    available: string
    greeting: string
    role: string
    rotating: string[]
    summary: string
    ctaProjects: string
    ctaContact: string
    photoAlt: string
    liveTitle: string
    liveText: string
  }
  stats: Stat[]
  about: {
    kicker: string
    title: string
    paragraphs: string[]
    nowLabel: string
    now: string
    baseLabel: string
    location: string
    languagesLabel: string
    languages: Language[]
    workLabel: string
    softSkills: string[]
  }
  stack: { kicker: string; title: string; hint: string }
  experience: { kicker: string; title: string; jobs: Job[] }
  projects: {
    kicker: string
    title: string
    intro: string
    statusLive: string
    statusAcademic: string
    list: Project[]
  }
  education: { kicker: string; title: string; list: Study[] }
  contact: {
    kicker: string
    title: string
    titleAccent: string
    text: string
    copy: string
    copied: string
  }
  footer: { madeWith: string }
}
