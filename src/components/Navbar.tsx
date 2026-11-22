import { useEffect, useState } from 'react'
import { TbMenu2, TbX } from 'react-icons/tb'
import ThemeToggle from './ThemeToggle'
import LangToggle from './LangToggle'
import { useI18n } from '../i18n'

const ids = ['sobre', 'stack', 'experiencia', 'projectos', 'formacao'] as const

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const labels: Record<(typeof ids)[number], string> = {
    sobre: t.nav.about,
    stack: t.nav.stack,
    experiencia: t.nav.experience,
    projectos: t.nav.projects,
    formacao: t.nav.education,
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  // Fecha o menu móvel com Esc e ao passar para ecrã largo
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 961px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#inicio" className="logo" onClick={close} aria-label="Mauricio Finda">
          <span className="logo__mark">MF</span>
          <span className="logo__text">
            mauricio<span>.dev</span>
          </span>
        </a>

        <nav id="menu" className="nav__links" aria-label="Principal">
          {ids.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={close}>
              {labels[id]}
            </a>
          ))}
          <a href="#contacto" className="btn btn--sm btn--primary nav__cta" onClick={close}>
            {t.nav.contact}
          </a>
        </nav>

        <div className="nav__actions">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav__toggle"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <TbX /> : <TbMenu2 />}
          </button>
        </div>
      </div>
    </header>
  )
}
