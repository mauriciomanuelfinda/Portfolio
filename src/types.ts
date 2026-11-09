import type { IconType } from 'react-icons'

export interface Tech {
  name: string
  icon: IconType
  color: string
}

export interface StackGroup {
  title: string
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
  status: 'Em produção' | 'Académico'
  scope: string
  accent: [string, string]
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
