import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'
import SectionHead from './SectionHead'
import NewsReveal from './NewsReveal'

function ImageBlock({ p, className = '' }) {
  return (
    <div className={`relative overflow-hidden border border-news-ink bg-neutral-200 ${className}`}>
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.name} · screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-300 hover:scale-[1.03] hover:grayscale-0 hover:sepia-[.5]"
        />
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
          <span className="relative font-serif text-3xl font-black text-neutral-400">{p.name}</span>
        </div>
      )}
    </div>
  )
}

function Meta({ p }) {
  return (
    <div className="flex gap-6">
      {p.metrics.map((m) => (
        <div key={m.v}>
          <div className="font-serif text-2xl font-black text-news-ink">{m.k}</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            {m.v}
          </div>
        </div>
      ))}
    </div>
  )
}

function VisitLink({ p }) {
  if (!p.url) return null
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-mono text-xs font-medium uppercase tracking-widest text-news-ink decoration-2 decoration-news-red underline-offset-4 hover:underline"
    >
      Read live <ArrowUpRight size={14} strokeWidth={1.5} />
    </a>
  )
}

export default function NewsProjects() {
  const [lead, ...rest] = projects

  return (
    <section id="projects" className="border-b-4 border-news-ink py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <SectionHead
          kicker="04 · Featured Stories"
          title="Selected work that shipped & scaled"
          sub="Systems architected and built end to end, with the numbers that mattered."
        />

        {/* Lead story */}
        <NewsReveal>
          <article className="grid grid-cols-1 border border-news-ink lg:grid-cols-12">
            <div className="lg:col-span-7 lg:border-r lg:border-news-ink">
              <ImageBlock p={lead} className="aspect-[16/10] !border-0 lg:h-full" />
            </div>
            <div className="flex flex-col justify-between gap-6 p-6 lg:col-span-5 lg:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-news-red px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                    Lead Story
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {lead.category}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-3xl font-black leading-tight text-news-ink lg:text-4xl">
                  {lead.name}
                </h3>
                <p className="mt-3 font-body leading-relaxed text-neutral-700 sm:text-justify">
                  {lead.blurb}
                </p>
              </div>
              <div className="space-y-5">
                <Meta p={lead} />
                <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-news-muted pt-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  {lead.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <VisitLink p={lead} />
              </div>
            </div>
          </article>
        </NewsReveal>

        {/* Remaining stories: collapsed-border grid */}
        <div className="mt-8 grid grid-cols-1 border-l border-t border-news-ink md:grid-cols-3">
          {rest.map((p, i) => (
            <NewsReveal key={p.name} delay={i * 0.05}>
              <article className="group flex h-full flex-col border-b border-r border-news-ink p-5 transition-colors duration-200 hover:bg-neutral-100">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Fig. {i + 2}.0 · {p.category}
                </span>
                <ImageBlock p={p} className="mt-3 aspect-[16/10]" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-news-ink">{p.name}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700 sm:text-justify">
                  {p.blurb}
                </p>
                <div className="mt-auto pt-4">
                  <Meta p={p} />
                  <div className="mt-4 flex items-center justify-between border-t border-news-muted pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      {p.year}
                    </span>
                    <VisitLink p={p} />
                  </div>
                </div>
              </article>
            </NewsReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
