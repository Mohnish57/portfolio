import Reveal from './Reveal'

// Editorial section header: a mono kicker (index + label) over a heavy rule,
// then a massive serif headline. The `count` rides at the right of the kicker.
export default function SectionHeading({
  eyebrow,
  title,
  sub,
  count,
  tone = 'light',
  className = '',
}) {
  const ink = tone === 'dark' ? 'text-background' : 'text-foreground'
  const meta = tone === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
  const rule = tone === 'dark' ? 'border-background' : 'border-foreground'
  const kicker = eyebrow

  return (
    <div className={`mb-10 border-b-4 ${rule} pb-5 ${className}`}>
      <Reveal>
        <div className="flex items-center justify-between gap-4">
          <span className={`font-mono text-xs font-medium uppercase tracking-widest ${ink}`}>
            {kicker}
          </span>
          <span className={`font-mono text-[10px] uppercase tracking-widest ${meta}`}>
            {count || 'Section'}
          </span>
        </div>
        <h2
          className={`mt-3 font-serif text-4xl font-black leading-[0.95] tracking-tight lg:text-5xl ${ink}`}
        >
          {title}
        </h2>
        {sub && (
          <p className={`mt-3 max-w-2xl font-body text-base leading-relaxed ${meta}`}>{sub}</p>
        )}
      </Reveal>
    </div>
  )
}
