import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { useI18n } from '../i18n'

export default function Projects() {
  const { t } = useI18n()
  const p = t.projects

  return (
    <section id="projectos" className="section">
      <div className="container">
        <SectionHeading index={4} kicker={p.kicker} title={p.title}>
          {p.intro}
        </SectionHeading>

        <div className="projects">
          {p.list.map((project, i) => (
            <Reveal as="article" key={project.name} className="card project" delay={(i % 2) * 80}>
              <div className="project__top">
                <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
                <div className="project__badges">
                  <span className={`badge ${project.status === 'live' ? 'badge--live' : ''}`}>
                    {project.status === 'live' ? p.statusLive : p.statusAcademic}
                  </span>
                  <span className="badge">{project.scope}</span>
                </div>
              </div>
              <h3>{project.name}</h3>
              <p className="project__tagline">{project.tagline}</p>
              <ul className="ticks">
                {project.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
