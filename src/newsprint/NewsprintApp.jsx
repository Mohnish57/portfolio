import { useSectionSnap } from './useSectionSnap'
import Masthead from './Masthead'
import Ticker from './Ticker'
import NewsHero from './NewsHero'
import NewsAbout from './NewsAbout'
import NewsSkills from './NewsSkills'
import NewsExperience from './NewsExperience'
import NewsProjects from './NewsProjects'
import NewsApproach from './NewsApproach'
import NewsContact from './NewsContact'
import NewsFooter from './NewsFooter'

export default function NewsprintApp() {
  useSectionSnap(84)

  return (
    <div className="newsprint-root font-body">
      <Masthead />
      <Ticker />
      <main className="snap-main">
        <NewsHero />
        <NewsAbout />
        <NewsSkills />
        <NewsExperience />
        <NewsProjects />
        <NewsApproach />
        <NewsContact />
      </main>
      <NewsFooter />
    </div>
  )
}
