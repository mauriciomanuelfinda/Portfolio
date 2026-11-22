import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import type { IconType } from 'react-icons'

interface Props {
  name: string
  icon: IconType
  color: string
}

const EDGE = 12

/**
 * Ícone de tecnologia. O nome só aparece como tooltip
 * ao passar o rato, ao focar com o teclado ou ao pressionar (toque).
 */
export default function TechIcon({ name, icon: Icon, color }: Props) {
  const [open, setOpen] = useState(false)
  const [shift, setShift] = useState(0)
  const ref = useRef<HTMLButtonElement>(null)
  const tipRef = useRef<HTMLSpanElement>(null)
  const tipId = useId()

  // Fecha ao tocar fora
  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  // Mantém o tooltip dentro do ecrã em telemóveis
  // (calculado a partir do botão e da largura do tooltip, sem depender da animação)
  useLayoutEffect(() => {
    if (!open || !tipRef.current || !ref.current) return
    const btn = ref.current.getBoundingClientRect()
    const width = tipRef.current.offsetWidth
    const left = btn.left + btn.width / 2 - width / 2
    const right = left + width
    const vw = document.documentElement.clientWidth
    let dx = 0
    if (left < EDGE) dx = EDGE - left
    else if (right > vw - EDGE) dx = vw - EDGE - right
    setShift(Math.round(dx))
  }, [open, name])

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
      <span
        ref={tipRef}
        role="tooltip"
        id={tipId}
        className="tech__tip"
        style={{ '--shift': `${shift}px` } as CSSProperties}
      >
        {name}
      </span>
    </button>
  )
}
