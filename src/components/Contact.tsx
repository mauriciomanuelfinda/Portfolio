import { useState } from 'react'
import {
  TbMail, TbBrandWhatsapp, TbBrandLinkedin, TbBrandGithub, TbCopy, TbCheck, TbArrowUpRight,
} from 'react-icons/tb'
import Reveal from './Reveal'
import { profile } from '../data'
import { useI18n } from '../i18n'

const links = [
  { label: 'WhatsApp', value: profile.phone, href: profile.whatsapp, icon: TbBrandWhatsapp },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, icon: TbBrandLinkedin },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github, icon: TbBrandGithub },
]

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact
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
          <span className="kicker">
            <span className="kicker__num">06</span>
            {c.kicker}
          </span>
          <h2>
            {c.title}
            <br />
            <span className="accent">{c.titleAccent}</span>
          </h2>
          <p className="muted">{c.text}</p>

          <div className="contact__email">
            <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
              <TbMail /> <span className="contact__addr">{profile.email}</span>
            </a>
            <button
              type="button"
              className={`icon-btn icon-btn--lg ${copied ? 'is-copied' : ''}`}
              onClick={copy}
              aria-label={c.copy}
              title={c.copy}
            >
              {copied ? <TbCheck /> : <TbCopy />}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? c.copied : ''}</span>
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
