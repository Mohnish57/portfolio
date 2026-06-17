import NewsReveal from './NewsReveal'

// Editorial section header: kicker label + heavy rule + serif headline.
export default function SectionHead({ kicker, title, sub, dark = false }) {
  const rule = dark ? 'border-news-bg' : 'border-news-ink'
  const ink = dark ? 'text-news-bg' : 'text-news-ink'
  const meta = dark ? 'text-neutral-400' : 'text-neutral-600'
  return (
    <div className={`mb-10 border-b-4 ${rule} pb-5`}>
      <NewsReveal>
        <div className="flex items-center justify-between">
          <span className={`font-mono text-xs font-medium uppercase tracking-widest ${ink}`}>
            {kicker}
          </span>
          <span className={`font-mono text-[10px] uppercase tracking-widest ${meta}`}>
            Section
          </span>
        </div>
        <h2 className={`mt-3 font-serif text-4xl font-black leading-none tracking-tight lg:text-5xl ${ink}`}>
          {title}
        </h2>
        {sub && <p className={`mt-3 max-w-2xl font-body text-base leading-relaxed ${meta}`}>{sub}</p>}
      </NewsReveal>
    </div>
  )
}
