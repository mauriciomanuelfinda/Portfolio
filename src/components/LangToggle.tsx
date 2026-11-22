import { useI18n } from '../i18n'
import type { Lang } from '../types'

const options: { value: Lang; label: string; full: string }[] = [
  { value: 'pt', label: 'PT', full: 'Português' },
  { value: 'en', label: 'EN', full: 'English' },
]

export default function LangToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="lang-toggle" role="group" aria-label={t.nav.language}>
      <span className="lang-toggle__thumb" data-pos={lang} aria-hidden="true" />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value}
          className={lang === o.value ? 'is-active' : ''}
          aria-pressed={lang === o.value}
          aria-label={o.full}
          title={o.full}
          onClick={() => setLang(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
