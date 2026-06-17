import { ArrowRight } from 'lucide-react'
import { profile, keyPointers } from '../data/content'
import { Kicker } from './Ornament'

export default function NewsHero() {
  return (
    <section id="top" className="newsprint-texture border-b-4 border-news-ink">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Asymmetric 8 / 4 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Headline column */}
          <div className="border-news-ink py-8 lg:col-span-8 lg:border-r lg:py-12 lg:pr-10">
            <Kicker className="text-news-red">The Front Page</Kicker>
            <h1 className="mt-4 font-serif text-5xl font-black leading-[0.9] tracking-tighter text-news-ink sm:text-7xl lg:text-8xl">
              Creative full-stack developer.
            </h1>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <p className="dropcap font-body text-base leading-relaxed text-neutral-700 sm:text-justify">
                {profile.summary.split('.')[0]}. I take end-to-end ownership across frontend
                performance, backend services, and AI automation.
              </p>
              <p className="font-body text-base leading-relaxed text-neutral-700 sm:text-justify">
                My work spans e-commerce, AI, fintech and media, from headless Shopify platforms
                powering dozens of storefronts to AI pipelines that cut real costs. I turn complex
                problems into fast, legible products.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-news-ink bg-news-ink px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-news-bg transition-all duration-200 hover:bg-news-bg hover:text-news-ink sm:w-auto"
              >
                Read the work <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-news-ink bg-transparent px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-news-ink transition-all duration-200 hover:bg-news-ink hover:text-news-bg sm:w-auto"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <figure className="flex flex-col justify-center border-news-ink py-8 lg:col-span-4 lg:py-12 lg:pl-10">
            <div className="border border-news-ink bg-neutral-200">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
            <figcaption className="mt-2 flex items-baseline justify-between border-t border-news-ink pt-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              <span>Fig. 1.1 · {profile.name}</span>
              <span>{profile.roles[0]}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Specialties: the highlighted "beats" band */}
      <div className="border-t-4 border-news-ink">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex items-center gap-3 border-b border-news-ink py-3">
            <span className="bg-news-red px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
              Specialties
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
              What I’m known for
            </span>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 border-l border-news-ink md:grid-cols-4">
          {keyPointers.map((k, i) => (
            <div
              key={k}
              className="group flex items-center gap-3 border-b border-r border-news-ink px-5 py-4 transition-colors duration-200 hover:bg-news-ink hover:text-news-bg"
            >
              <span className="font-mono text-[11px] text-news-red">0{i + 1}</span>
              <span className="font-serif text-lg font-black tracking-tight lg:text-xl">{k}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
