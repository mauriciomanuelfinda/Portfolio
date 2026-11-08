import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data'

export default function App() {
  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="blob blob--3" />
        <div className="grid-lines" />
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
        <span className="muted">Feito com React, TypeScript e Vite · Luanda, Angola</span>
      </footer>
    </>
  )
}
