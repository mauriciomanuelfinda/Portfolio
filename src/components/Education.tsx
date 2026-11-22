import { TbSchool, TbCertificate, TbBuildingBank } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'
import type { Study } from '../types'

const icons: Record<Study['kind'], IconType> = {
  degree: TbBuildingBank,
  school: TbSchool,
  course: TbCertificate,
}

export default function Education() {
  const { t } = useI18n()

  return (
    <section id="formacao" className="section">
      <div className="container">
        <SectionHeading index={5} kicker={t.education.kicker} title={t.education.title} />

        <div className="edu">
          {t.education.list.map((item, i) => {
            const Icon = icons[item.kind]
            return (
              <Reveal key={item.kind} className="card edu__card" delay={i * 80}>
                <div className="edu__head">
                  <span className="edu__icon">
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
