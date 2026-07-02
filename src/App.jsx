import { useLenis } from './hooks/useLenis'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  useLenis()

  return (
    <div className="app-root font-body">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
