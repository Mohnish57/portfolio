import { marqueeTech } from '../data/content'

// Stock-ticker / breaking-news crawl: black bar, white text, red badges.
export default function Ticker() {
  const row = [...marqueeTech, ...marqueeTech]
  return (
    <div className="flex items-stretch border-y-4 border-news-ink bg-news-ink text-news-bg">
      <div className="flex shrink-0 items-center bg-news-red px-4 font-mono text-xs font-bold uppercase tracking-widest text-white">
        Stack ●
      </div>
      <div className="relative flex-1 overflow-hidden py-2.5">
        <div className="flex w-max animate-marquee items-center gap-6 will-change-transform">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-news-bg">{t}</span>
              <span className="text-news-red">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
