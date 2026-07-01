import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b-4 border-foreground bg-background">
      {/* Edition metadata strip */}
      <div className="border-b border-foreground bg-sand text-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 font-mono text-[10px] uppercase tracking-widest">
          <span>Vol. 1 — Portfolio Edition</span>
          <span className="hidden sm:inline">Senior Frontend Engineer</span>
          <span>{profile.location}</span>
        </div>
      </div>

      {/* Nameplate + nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="group flex items-baseline gap-2" aria-label="Home">
          <span className="font-serif text-2xl font-black uppercase leading-none tracking-tight text-foreground sm:text-3xl">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-accent sm:inline">
            ●&nbsp;Live
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-mono text-xs font-medium uppercase tracking-widest transition-colors duration-200 hover:text-accent ${
                  isActive ? 'text-accent underline decoration-2 underline-offset-4' : 'text-foreground'
                }`}
              >
                {l.label}
              </a>
            )
          })}
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center border border-foreground text-foreground transition-all duration-200 hover:bg-foreground hover:text-background md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-foreground md:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-muted px-4 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:bg-neutral-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-foreground px-4 py-3 font-mono text-xs uppercase tracking-widest text-background"
          >
            Get in touch →
          </a>
        </nav>
      )}
    </header>
  )
}
