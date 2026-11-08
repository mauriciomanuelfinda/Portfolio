import { useState } from 'react'
import {
  TbMail, TbBrandWhatsapp, TbBrandLinkedin, TbBrandGithub, TbCopy, TbCheck, TbArrowUpRight,
} from 'react-icons/tb'
import Reveal from './Reveal'
import { profile } from '../data'

const links = [
  { label: 'WhatsApp', value: profile.phone, href: profile.whatsapp, icon: TbBrandWhatsapp },
  { label: 'LinkedIn', value: 'maurício-finda', href: profile.linkedin, icon: TbBrandLinkedin },
  { label: 'GitHub', value: '@mauriciomanuelfinda', href: profile.github, icon: TbBrandGithub },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contacto" className="section">
      <div className="container">
        <Reveal className="contact">
          <div className="contact__bg" aria-hidden="true" />
          <span className="kicker">06 — Contacto</span>
          <h2>
            Tem um projecto em mente?
            <br />
            <span className="gradient-text">Vamos construí-lo juntos.</span>
          </h2>
          <p className="muted">Envie uma mensagem — e-mail, WhatsApp ou LinkedIn.</p>

          <div className="contact__email">
            <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
              <TbMail /> <span className="contact__addr">{profile.email}</span>
            </a>
            <button
              type="button"
              className={`btn btn--ghost btn--icon ${copied ? 'is-copied' : ''}`}
              onClick={copy}
              aria-label="Copiar e-mail"
              title="Copiar e-mail"
            >
              {copied ? <TbCheck /> : <TbCopy />}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? 'E-mail copiado' : ''}</span>
          </div>

          <div className="contact__links">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__link">
                <Icon className="contact__link-icon" />
                <span>
                  <small>{label}</small>
                  {value}
                </span>
                <TbArrowUpRight className="contact__arrow" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
