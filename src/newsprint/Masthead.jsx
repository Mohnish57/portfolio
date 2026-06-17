import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Masthead() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-news-ink bg-white shadow-[0_6px_16px_-10px_rgba(0,0,0,0.4)]">
      {/* Nameplate + nav */}
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="group flex items-baseline gap-2" aria-label="Home">
          <span className="font-serif text-2xl font-black uppercase leading-none tracking-tight text-news-ink sm:text-3xl">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-news-red sm:inline">
            ●&nbsp;Live
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs font-medium uppercase tracking-widest text-news-ink transition-colors duration-200 hover:text-news-red"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="min-h-[40px] border border-news-ink bg-news-ink px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest text-news-bg transition-all duration-200 hover:bg-news-bg hover:text-news-ink"
          >
            Hire me
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center border border-news-ink text-news-ink transition-all duration-200 hover:bg-news-ink hover:text-news-bg md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-news-ink md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-news-muted px-4 py-3 font-mono text-xs uppercase tracking-widest text-news-ink hover:bg-neutral-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-news-ink px-4 py-3 font-mono text-xs uppercase tracking-widest text-news-bg"
          >
            Hire me →
          </a>
        </nav>
      )}
    </header>
  )
}
