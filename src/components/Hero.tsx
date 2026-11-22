import { useEffect, useState } from 'react'
import { SiReact, SiNodedotjs, SiLaravel } from 'react-icons/si'
import { TbArrowUpRight, TbBrandGithub, TbBrandLinkedin, TbMapPin, TbMail } from 'react-icons/tb'
import { profile } from '../data'
import { useI18n } from '../i18n'
import photo from '../assets/mauricio.jpg'

function useRotatingText(words: string[], interval = 2600): [string, number] {
  const [i, setI] = useState(0)
  useEffect(() => {
    setI(0)
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words, interval])
  return [words[i % words.length], i]
}

export default function Hero() {
  const { t, lang } = useI18n()
  const [word, key] = useRotatingText(t.hero.rotating)

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="status-pill">
            <span className="live-dot" />
            {t.hero.available}
          </span>

          <h1 className="hero__title">
            <span className="hero__greet">{t.hero.greeting}</span>
            Mauricio
            <br />
            Finda<span className="accent">.</span>
          </h1>

          <p className="hero__role">
            <span>{t.hero.role}</span>
            <span className="hero__sep" aria-hidden="true">/</span>
            <span key={`${lang}-${key}`} className="hero__rotate">
              {word}
            </span>
          </p>

          <p className="hero__summary">{t.hero.summary}</p>

          <div className="hero__actions">
            <a href="#projectos" className="btn btn--primary">
              {t.hero.ctaProjects} <TbArrowUpRight />
            </a>
            <a href="#contacto" className="btn btn--ghost">
              <TbMail /> {t.hero.ctaContact}
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <TbMapPin /> {t.about.location}
            </span>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <TbBrandGithub />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <TbBrandLinkedin />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="portrait">
            <div className="portrait__frame">
              <img src={photo} alt={t.hero.photoAlt} width={1500} height={2000} fetchPriority="high" />
            </div>

            <div className="float-chip float-chip--a" aria-hidden="true"><SiReact /></div>
            <div className="float-chip float-chip--b" aria-hidden="true"><SiNodedotjs /></div>
            <div className="float-chip float-chip--c" aria-hidden="true"><SiLaravel /></div>

            <div className="float-card">
              <span className="live-dot" />
              <div>
                <strong>{t.hero.liveTitle}</strong>
                <small>{t.hero.liveText}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="stats">
          {t.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
