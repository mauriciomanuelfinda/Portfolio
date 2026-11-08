import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  kicker: string
  title: string
  children?: ReactNode
}

export default function SectionHeading({ kicker, title, children }: Props) {
  return (
    <Reveal className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}
