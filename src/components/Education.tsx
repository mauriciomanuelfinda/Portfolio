import { TbSchool, TbCertificate, TbBuildingBank } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data'
import type { Study } from '../types'

const icons: Record<Study['kind'], { icon: IconType; className: string }> = {
  degree: { icon: TbBuildingBank, className: 'edu__icon' },
  school: { icon: TbSchool, className: 'edu__icon edu__icon--alt' },
  course: { icon: TbCertificate, className: 'edu__icon edu__icon--warm' },
}

export default function Education() {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <SectionHeading kicker="05 — Formação" title="Base sólida, aprendizagem contínua." />

        <div className="edu">
          {education.map((item, i) => {
            const { icon: Icon, className } = icons[item.kind]
            return (
              <Reveal key={item.title} className="card edu__card" delay={i * 90}>
                <div className="edu__head">
                  <span className={className}>
                    <Icon />
                  </span>
                  <span className={`period ${item.current ? 'period--current' : ''}`}>{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="muted">{item.school}</p>
                {item.description && <p className="edu__desc">{item.description}</p>}
                {item.points && (
                  <ul className="ticks">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
