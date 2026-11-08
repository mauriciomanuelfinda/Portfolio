import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  as?: ElementType
  delay?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/** Faz o conteúdo aparecer suavemente quando entra no ecrã. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
