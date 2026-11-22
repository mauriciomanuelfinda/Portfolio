import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data'
import { I18nProvider, useI18n } from './i18n'

function Page() {
  const { t } = useI18n()

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop__glow" />
        <div className="backdrop__grid" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="muted">{t.footer.madeWith}</span>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}
