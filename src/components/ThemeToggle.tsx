import { useEffect, useState } from 'react'
import { TbMoonStars, TbSun } from 'react-icons/tb'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  const current = document.documentElement.dataset.theme
  if (current === 'light' || current === 'dark') return current
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f7fb' : '#07070c')
  }, [theme])

  // Segue o sistema enquanto o utilizador não escolher manualmente
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null
      try {
        saved = localStorage.getItem(STORAGE_KEY)
      } catch {
        /* armazenamento indisponível */
      }
      if (!saved) setTheme(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* armazenamento indisponível */
    }
  }

  const label = theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <TbSun className="icon-sun" aria-hidden="true" />
      <TbMoonStars className="icon-moon" aria-hidden="true" />
    </button>
  )
}
