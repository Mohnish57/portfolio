import { profile, navLinks } from '../data/content'
import Container from '../components/Container'

// Serif ornamental divider, then a newspaper-style footer with edition metadata.
export default function Footer() {
  return (
    <footer className="bg-background">
      <div
        aria-hidden
        className="select-none py-8 text-center font-serif text-2xl tracking-[1em] text-neutral-400"
      >
        &#x2727; &#x2727; &#x2727;
      </div>
      <Container className="pb-12">
        <div className="grid grid-cols-1 gap-8 border-t-4 border-foreground pt-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl font-black uppercase tracking-tight text-foreground">
              {profile.name}
            </p>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-neutral-600">
              Designed and built with React, Next.js, and TypeScript. Focused on performance,
              accessibility, and thoughtful user experience.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              Sections
            </p>
            <ul className="mt-3 space-y-1.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-xs uppercase tracking-widest text-foreground hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              Contact
            </p>
            <ul className="mt-3 space-y-1.5 font-mono text-xs text-foreground">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li className="text-neutral-600">{profile.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-foreground pt-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500 sm:flex-row">
          <span>© {profile.name} · Senior Frontend Engineer</span>
          <span>Set in Playfair &amp; Lora · Printed on the web</span>
        </div>
      </Container>
    </footer>
  )
}
