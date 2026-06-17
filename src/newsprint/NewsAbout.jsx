import { Code2, Cpu, ShoppingBag, Zap } from 'lucide-react'
import { profile } from '../data/content'
import SectionHead from './SectionHead'
import NewsReveal from './NewsReveal'

const pillars = [
  { icon: Code2, title: 'Frontend craft', desc: 'Precise, accessible UIs in React & Next.js.' },
  { icon: Cpu, title: 'AI & automation', desc: 'LLM integrations and pipelines that cut cost.' },
  { icon: ShoppingBag, title: 'Headless commerce', desc: 'Shopify Plus platforms that scale cleanly.' },
  { icon: Zap, title: 'Performance', desc: 'Core Web Vitals, SEO, full-stack ownership.' },
]

export default function NewsAbout() {
  return (
    <section id="about" className="newsprint-texture border-b-4 border-news-ink py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <SectionHead
          kicker="01 · About the Author"
          title="An engineer with an editor’s eye"
        />

        {/* 5 / 7 asymmetric editorial split */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:border-r lg:border-news-ink lg:pr-10">
            <NewsReveal>
              <p className="dropcap dropcap-red font-body text-lg leading-relaxed text-neutral-800 sm:text-justify">
                {profile.summary}
              </p>
            </NewsReveal>
            <NewsReveal delay={0.06}>
              <p className="mt-5 font-body leading-relaxed text-neutral-700 sm:text-justify">
                Across {profile.roles.length > 0 ? 'four-plus years' : 'years'} of practice, I’ve
                shipped production systems in e-commerce, AI, fintech and media, owning the work
                from database schema to the last pixel of the interface.
              </p>
            </NewsReveal>
          </div>

          {/* Capability list as bordered icon boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-5">
            {pillars.map((p, i) => (
              <NewsReveal key={p.title} delay={i * 0.05}>
                <div
                  className={`group flex h-full items-start gap-4 border-news-ink p-5 ${
                    i % 2 === 0 ? 'sm:border-r' : ''
                  } ${i < 2 ? 'border-b' : ''} sm:border-b`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center border border-news-ink text-news-ink transition-all duration-200 group-hover:bg-news-ink group-hover:text-news-bg">
                    <p.icon size={22} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-news-ink">{p.title}</h3>
                    <p className="mt-1 font-body text-sm leading-snug text-neutral-600">{p.desc}</p>
                  </div>
                </div>
              </NewsReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
