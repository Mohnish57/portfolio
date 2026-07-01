import { marqueeTech } from '../data/content'

// Stock-ticker / breaking-news crawl: beige bar, ink text, red badge.
export default function Marquee() {
  const row = [...marqueeTech, ...marqueeTech]
  return (
    <div className="flex items-stretch border-b-4 border-foreground bg-sand text-foreground">
      <div className="flex shrink-0 items-center bg-accent px-4 font-mono text-xs font-bold uppercase tracking-widest text-white">
        Stack ●
      </div>
      <div className="relative flex-1 overflow-hidden py-2.5">
        <div className="flex w-max animate-marquee items-center gap-6 will-change-transform">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground">{t}</span>
              <span className="text-accent">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
