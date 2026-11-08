import { useEffect, useState } from 'react'
import { TbMenu2, TbX } from 'react-icons/tb'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'stack', label: 'Stack' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projectos', label: 'Projectos' },
  { id: 'formacao', label: 'Formação' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

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

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#inicio" className="logo" onClick={close}>
          <span className="logo__mark">MF</span>
          <span className="logo__text">
            mauricio<span>.dev</span>
          </span>
        </a>
        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--sm btn--primary nav__cta" onClick={close}>
            Contactar
          </a>
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <button
            className="nav__toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <TbX /> : <TbMenu2 />}
          </button>
        </div>
      </div>
    </header>
  )
}
