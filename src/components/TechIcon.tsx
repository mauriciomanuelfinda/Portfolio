import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import type { Tech } from '../types'

/**
 * Ícone de tecnologia. O nome só aparece como tooltip
 * ao passar o rato, ao focar com o teclado ou ao pressionar (toque).
 */
export default function TechIcon({ name, icon: Icon, color }: Tech) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)
  const tipId = useId()

  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  return (
    <button
      ref={ref}
      type="button"
      className={`tech ${open ? 'is-open' : ''}`}
      style={{ '--brand': color } as CSSProperties}
      aria-label={name}
      aria-describedby={open ? tipId : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(true)}
    >
      <Icon aria-hidden="true" />
      <span role="tooltip" id={tipId} className="tech__tip">
        {name}
      </span>
    </button>
  )
}
