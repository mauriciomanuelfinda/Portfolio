import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  index: number
  kicker: string
  title: string
  children?: ReactNode
}

export default function SectionHeading({ index, kicker, title, children }: Props) {
  return (
    <Reveal className="section-heading">
      <span className="kicker">
        <span className="kicker__num">{String(index).padStart(2, '0')}</span>
        {kicker}
      </span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}
