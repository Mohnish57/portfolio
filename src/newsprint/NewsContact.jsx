import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { profile } from '../data/content'
import { Github, Linkedin } from '../components/BrandIcons'
import SectionHead from './SectionHead'
import NewsReveal from './NewsReveal'

export default function NewsContact() {
  return (
    <section id="contact" className="newsprint-texture border-b-4 border-news-ink py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <SectionHead kicker="05 · Classifieds" title="Hiring? Let’s talk." />

        <div className="grid grid-cols-1 border border-news-ink lg:grid-cols-12">
          {/* The "advertisement" */}
          <div className="border-news-ink p-8 lg:col-span-8 lg:border-r lg:p-10">
            <NewsReveal>
              <p className="font-serif text-3xl font-black leading-tight text-news-ink lg:text-5xl">
                Wanted: ambitious teams building fast, AI-powered products.
              </p>
              <p className="mt-4 max-w-xl font-body leading-relaxed text-neutral-700 sm:text-justify">
                Open to full-stack, frontend, and AI-focused roles. Send a note and I’ll reply
                promptly, with references and live work available on request.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex min-h-[44px] items-center gap-2 border border-news-ink bg-news-ink px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-news-bg transition-all duration-200 hover:bg-news-bg hover:text-news-ink"
              >
                <Mail size={16} strokeWidth={1.5} /> {profile.email}
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </NewsReveal>
          </div>

          {/* Contact details column */}
          <div className="flex flex-col lg:col-span-4">
            <div className="flex items-center gap-3 border-b border-news-ink p-6">
              <MapPin size={18} strokeWidth={1.5} className="text-news-red" />
              <span className="font-mono text-xs uppercase tracking-widest text-news-ink">
                {profile.location}
              </span>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-news-ink p-6 transition-colors duration-200 hover:bg-neutral-100"
            >
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-news-ink">
                <Github size={16} /> GitHub
              </span>
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:text-news-red" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-6 transition-colors duration-200 hover:bg-neutral-100"
            >
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-news-ink">
                <Linkedin size={16} /> LinkedIn
              </span>
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:text-news-red" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
