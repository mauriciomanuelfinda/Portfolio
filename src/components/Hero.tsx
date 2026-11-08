import { useEffect, useState } from 'react'
import { SiReact, SiNodedotjs, SiLaravel, SiTypescript } from 'react-icons/si'
import { TbArrowUpRight, TbBrandGithub, TbBrandLinkedin, TbMapPin, TbMail } from 'react-icons/tb'
import { profile, stats } from '../data'
import photo from '../assets/mauricio.jpg'

function useRotatingText(words: string[], interval = 2600): [string, number] {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])
  return [words[i], i]
}

export default function Hero() {
  const [word, key] = useRotatingText(profile.rotating)

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="status-pill">
            <span className="status-pill__dot" />
            Disponível para novos projectos
          </span>

          <h1 className="hero__title">
            Olá, sou <span className="gradient-text">Mauricio</span>
            <br />
            Finda<span className="accent-dot">.</span>
          </h1>

          <p className="hero__role">
            {profile.role} <span className="hero__sep">/</span>{' '}
            <span key={key} className="hero__rotate">
              {word}
            </span>
          </p>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a href="#projectos" className="btn btn--primary">
              Ver projectos <TbArrowUpRight />
            </a>
            <a href="#contacto" className="btn btn--ghost">
              <TbMail /> Fale comigo
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <TbMapPin /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <TbBrandGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <TbBrandLinkedin />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="portrait">
            <div className="portrait__ring" aria-hidden="true" />
            <div className="portrait__frame">
              <img src={photo} alt="Retrato de Mauricio Manuel Finda" width={1500} height={2000} />
            </div>

            <div className="float-chip float-chip--a" aria-hidden="true"><SiReact color="#61DAFB" /></div>
            <div className="float-chip float-chip--b" aria-hidden="true"><SiNodedotjs color="#5FA04E" /></div>
            <div className="float-chip float-chip--c" aria-hidden="true"><SiLaravel color="#FF2D20" /></div>
            <div className="float-chip float-chip--d" aria-hidden="true"><SiTypescript color="#3178C6" /></div>

            <div className="float-card">
              <span className="float-card__live" />
              <div>
                <strong>Em produção</strong>
                <small>Sistemas do Governo de Angola &amp; IPIL</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong className="gradient-text">{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
