import { useLenis } from './hooks/useLenis'
import Navbar from './sections/Navbar'
import Marquee from './sections/Marquee'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Approach from './sections/Approach'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  useLenis()

  return (
    <div className="app-root font-body">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
