import { Mail, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content'
import { Github, Linkedin } from '../components/BrandIcons'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <Section id="contact" tone="white">
      <SectionHeading eyebrow="Classifieds" title="Let's work together." />

      <div className="grid grid-cols-1 border border-foreground lg:grid-cols-12">
        {/* The "advertisement" */}
        <div className="border-foreground p-8 lg:col-span-8 lg:border-r lg:p-10">
          <Reveal>
            <p className="font-serif text-3xl font-black leading-tight text-foreground lg:text-4xl">
              Open to Senior Frontend roles.
            </p>
            <p className="mt-4 max-w-xl font-body leading-relaxed text-neutral-700">
              Remote, product companies, contract or full-time. I reply within a day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} strokeWidth={1.5} /> {profile.email}
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a
                href={profile.resume}
                download="Mohnish_Sawlani_SFR_Resume.pdf"
                className="btn-outline"
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>

        {/* Contact details column */}
        <div className="flex flex-col lg:col-span-4">
          <div className="flex items-center gap-3 border-b border-foreground p-6">
            <MapPin size={18} strokeWidth={1.5} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">
              {profile.location}
            </span>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-b border-foreground p-6 transition-colors duration-200 hover:bg-neutral-100"
          >
            <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground">
              <Github size={16} /> GitHub
            </span>
            <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:text-accent" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between p-6 transition-colors duration-200 hover:bg-neutral-100"
          >
            <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground">
              <Linkedin size={16} /> LinkedIn
            </span>
            <ArrowUpRight size={16} strokeWidth={1.5} className="group-hover:text-accent" />
          </a>
        </div>
      </div>
    </Section>
  )
}
