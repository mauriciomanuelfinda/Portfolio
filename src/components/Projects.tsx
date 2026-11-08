import type { CSSProperties } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projectos" className="section">
      <div className="container">
        <SectionHeading kicker="04 — Projectos" title="Plataformas que já estão no ar.">
          Sistemas institucionais de larga escala, usados por estudantes, professores e escolas em Angola.
        </SectionHeading>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              className="card project"
              delay={(i % 2) * 90}
              style={{ '--a1': p.accent[0], '--a2': p.accent[1] } as CSSProperties}
            >
              <div className="project__glow" aria-hidden="true" />
              <div className="project__top">
                <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
                <div className="project__badges">
                  <span className={`badge ${p.status === 'Em produção' ? 'badge--live' : ''}`}>{p.status}</span>
                  <span className="badge">{p.scope}</span>
                </div>
              </div>
              <h3>{p.name}</h3>
              <p className="project__tagline">{p.tagline}</p>
              <ul className="ticks">
                {p.points.map((pt) => (
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
