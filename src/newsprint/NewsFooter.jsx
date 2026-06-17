import { profile, navLinks } from '../data/content'
import Ornament from './Ornament'

export default function NewsFooter() {
  return (
    <footer className="bg-news-bg">
      <Ornament />
      <div className="mx-auto max-w-screen-xl px-4 pb-12">
        <div className="grid grid-cols-1 gap-8 border-t-4 border-news-ink pt-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl font-black uppercase tracking-tight text-news-ink">
              {profile.name}
            </p>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-neutral-600">
              {profile.roles[0]} · {profile.location}. Building fast, AI-powered products end to end.
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
                    className="font-mono text-xs uppercase tracking-widest text-news-ink hover:text-news-red"
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
            <ul className="mt-3 space-y-1.5 font-mono text-xs text-news-ink">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-news-red">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="hover:text-news-red"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-news-ink pt-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500 sm:flex-row">
          <span>© {profile.name} · All rights reserved</span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  )
}
