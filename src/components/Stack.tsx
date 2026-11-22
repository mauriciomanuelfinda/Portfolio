import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { loc, stack } from '../data'
import { useI18n } from '../i18n'

export default function Stack() {
  const { t, lang } = useI18n()

  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHeading index={2} kicker={t.stack.kicker} title={t.stack.title}>
          {t.stack.hint}
        </SectionHeading>

        <div className="stack">
          {stack.map((group, gi) => (
            <Reveal key={loc(group.title, 'pt')} className="card stack__group" delay={gi * 60}>
              <div className="stack__head">
                <h3>{loc(group.title, lang)}</h3>
                <span>{String(group.items.length).padStart(2, '0')}</span>
              </div>
              <div className="stack__icons">
                {group.items.map((item) => (
                  <TechIcon key={loc(item.name, 'pt')} name={loc(item.name, lang)} icon={item.icon} color={item.color} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
