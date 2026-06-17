import SectionHead from './SectionHead'
import NewsReveal from './NewsReveal'

const steps = [
  {
    n: '01',
    title: 'Understand the stakes',
    desc: 'Start from the business metric, not the ticket. Map the real constraint before writing code.',
  },
  {
    n: '02',
    title: 'Architect for scale',
    desc: 'Reusable systems, typed contracts, and automation so the second store (or the fiftieth) is cheap.',
  },
  {
    n: '03',
    title: 'Ship & measure',
    desc: 'Performance budgets, Core Web Vitals, and instrumentation. If it isn’t measured, it isn’t done.',
  },
]

// Mandatory inverted section: black canvas, white text, red numerals.
export default function NewsApproach() {
  return (
    <section className="border-b-4 border-news-bg bg-news-ink py-16 text-news-bg">
      <div className="mx-auto max-w-screen-xl px-4">
        <SectionHead kicker="Editorial · How I Work" title="The house method" dark />

        <div className="grid grid-cols-1 border-l border-t border-neutral-700 md:grid-cols-3">
          {steps.map((s, i) => (
            <NewsReveal key={s.n} delay={i * 0.06}>
              <div className="h-full border-b border-r border-neutral-700 p-8">
                <div className="font-serif text-6xl font-black leading-none text-news-red">
                  {s.n}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-news-bg">{s.title}</h3>
                <p className="mt-2 font-body leading-relaxed text-neutral-400">{s.desc}</p>
              </div>
            </NewsReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
