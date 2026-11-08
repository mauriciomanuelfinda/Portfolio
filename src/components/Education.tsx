import { TbSchool, TbCertificate } from 'react-icons/tb'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, course } from '../data'

export default function Education() {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <SectionHeading kicker="05 — Formação" title="Base sólida, aprendizagem contínua." />

        <div className="edu">
          <Reveal className="card edu__card">
            <div className="edu__head">
              <span className="edu__icon"><TbSchool /></span>
              <span className="period">{education.period}</span>
            </div>
            <h3>{education.title}</h3>
            <p className="muted">{education.school}</p>
            <p>{education.description}</p>
          </Reveal>

          <Reveal className="card edu__card" delay={100}>
            <div className="edu__head">
              <span className="edu__icon edu__icon--alt"><TbCertificate /></span>
              <span className="period">{course.year}</span>
            </div>
            <h3>{course.title}</h3>
            <p className="muted">Curso</p>
            <ul className="ticks">
              {course.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
