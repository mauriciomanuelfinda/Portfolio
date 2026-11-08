import { TbBriefcase } from 'react-icons/tb'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHeading kicker="03 — Experiência" title="Onde tenho construído." />

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} className="timeline__item" delay={i * 100}>
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
