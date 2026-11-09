import { TbMapPin, TbLanguage, TbSparkles, TbBolt } from 'react-icons/tb'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeading kicker="01 — Sobre mim" title="Código que chega à produção e serve pessoas reais." />

        <div className="bento">
          <Reveal className="card bento__main">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="card bento__now" delay={80}>
            <span className="card__label"><TbBolt /> Agora</span>
            <p>
              Tech Lead na <strong>SOSOFT</strong> e Director Técnico do <strong>Acesso ETP 2026/27</strong>.
            </p>
          </Reveal>

          <Reveal className="card bento__loc" delay={120}>
            <span className="card__label"><TbMapPin /> Base</span>
            <p className="big">{profile.location}</p>
            <div className="map-dots" aria-hidden="true" />
          </Reveal>

          <Reveal className="card bento__lang" delay={160}>
            <span className="card__label"><TbLanguage /> Idiomas</span>
            {profile.languages.map((l) => (
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
            <span className="card__label"><TbSparkles /> Como trabalho</span>
            <ul className="chips">
              {profile.softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
