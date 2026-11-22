import { TbMapPin, TbLanguage, TbSparkles, TbBolt } from 'react-icons/tb'
import Reveal from './Reveal'
import Rich from './Rich'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'

export default function About() {
  const { t } = useI18n()
  const a = t.about

  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeading index={1} kicker={a.kicker} title={a.title} />

        <div className="bento">
          <Reveal className="card bento__main">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="card bento__now" delay={80}>
            <span className="card__label"><TbBolt /> {a.nowLabel}</span>
            <p>
              <Rich text={a.now} />
            </p>
          </Reveal>

          <Reveal className="card bento__loc" delay={120}>
            <span className="card__label"><TbMapPin /> {a.baseLabel}</span>
            <p className="big">{a.location}</p>
            <div className="map-dots" aria-hidden="true" />
          </Reveal>

          <Reveal className="card bento__lang" delay={160}>
            <span className="card__label"><TbLanguage /> {a.languagesLabel}</span>
            {a.languages.map((l) => (
              <div key={l.name} className="lang">
                <div className="lang__row">
                  <span>{l.name}</span>
                  <small>{l.level}</small>
                </div>
                <div className="lang__bar">
                  <span style={{ width: `${l.value}%` }} />
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="card bento__soft" delay={200}>
            <span className="card__label"><TbSparkles /> {a.workLabel}</span>
            <ul className="chips">
              {a.softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
