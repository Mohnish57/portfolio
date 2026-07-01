import { ArrowRight, Download } from 'lucide-react'
import { profile, keyPointers } from '../data/content'

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
            <h1 className="mt-4 font-serif text-5xl font-black leading-[0.9] tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
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
          <figure className="border-foreground py-8 lg:col-span-4 lg:py-12 lg:pl-10">
            <div className="relative mb-5">
              {/* Red accent square sitting behind the photo */}
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-accent" />
              <div className="relative aspect-[10/9] overflow-hidden border border-foreground bg-white">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
            <figcaption className="flex items-baseline justify-between border-t border-foreground pt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              <span>Fig. 1.1 · {profile.name}</span>
              <span>{profile.roles[0]}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Specialties: the highlighted "beats" band */}
      <div className="border-t-4 border-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-3 border-b border-foreground py-3">
            <span className="bg-accent px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
              Specialties
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
              What I&apos;m known for
            </span>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 border-l border-foreground md:grid-cols-4">
          {keyPointers.map((k, i) => (
            <div
              key={k}
              className="group flex items-center gap-3 border-b border-r border-foreground px-5 py-4 transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
              <span className="font-serif text-lg font-black tracking-tight lg:text-xl">{k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
