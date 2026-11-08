import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { stack } from '../data'

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHeading kicker="02 — Stack" title="Ferramentas com que trabalho hoje.">
          Passe o rato ou toque num ícone para ver o nome.
        </SectionHeading>

        <div className="stack">
          {stack.map((group, gi) => (
            <Reveal key={group.title} className="card stack__group" delay={gi * 70}>
              <div className="stack__head">
                <h3>{group.title}</h3>
                <span>{String(group.items.length).padStart(2, '0')}</span>
              </div>
              <div className="stack__icons">
                {group.items.map((t) => (
                  <TechIcon key={t.name} {...t} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
