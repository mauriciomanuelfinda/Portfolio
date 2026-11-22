import { TbBriefcase } from 'react-icons/tb'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'

export default function Experience() {
  const { t } = useI18n()

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHeading index={3} kicker={t.experience.kicker} title={t.experience.title} />

        <ol className="timeline">
          {t.experience.jobs.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.role}`} className="timeline__item" delay={i * 90}>
              <span className={`timeline__dot ${job.current ? 'is-current' : ''}`} aria-hidden="true">
                <TbBriefcase />
              </span>
              <div className="card timeline__card">
                <div className="timeline__top">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="muted">
                      {job.company} · {job.place}
                    </p>
                  </div>
                  <span className={`period ${job.current ? 'period--current' : ''}`}>{job.period}</span>
                </div>
                <ul className="ticks">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
