import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="newsprint-texture border-b-4 border-foreground">
      <div className="mx-auto max-w-7xl px-4">
        {/* Breaking strip */}
        <div className="flex items-center gap-3 border-b border-foreground py-2.5">
          <span className="bg-accent px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
            Breaking
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
            Senior Frontend Engineer · 4+ years shipping React at scale
          </span>
        </div>

        {/* Asymmetric 8 / 4 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Headline column */}
          <div className="border-foreground py-8 lg:col-span-8 lg:border-r lg:py-12 lg:pr-10">
            <span className="kicker text-accent">Senior Frontend Engineer</span>
            <h1 className="mt-4 font-serif text-4xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Frontend engineer, building React at scale.
            </h1>

            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-neutral-700">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                View Projects <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a
                href={profile.resume}
                download="Mohnish_Sawlani_SFR_Resume.pdf"
                className="btn-outline w-full sm:w-auto"
              >
                <Download size={16} strokeWidth={1.5} /> Download Resume
              </a>
              <a href="#contact" className="btn-outline w-full sm:w-auto">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <figure className="flex flex-col justify-center border-foreground py-8 lg:col-span-4 lg:py-12 lg:pl-10">
            <div className="aspect-[10/9] overflow-hidden border border-foreground bg-white">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
            </div>
            <figcaption className="mt-2 flex items-baseline justify-between border-t border-foreground pt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              <span>Fig. 1.1 · {profile.name}</span>
              <span>{profile.roles[0]}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
