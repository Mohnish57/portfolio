import { skillGroups } from '../data/content'
import SectionHead from './SectionHead'
import NewsReveal from './NewsReveal'

export default function NewsSkills() {
  return (
    <section id="skills" className="border-b-4 border-news-ink py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <SectionHead
          kicker="02 · The Index"
          title="A full-stack toolkit, catalogued"
          sub="Capabilities spanning interface motion, inference pipelines, and cloud infrastructure."
        />

        {/* Collapsed-border newspaper column grid */}
        <div className="grid grid-cols-1 border-l border-t border-news-ink sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <NewsReveal key={group.title} delay={(gi % 3) * 0.05}>
              <div className="group h-full border-b border-r border-news-ink p-6 transition-colors duration-200 hover:bg-neutral-100">
                <div className="flex items-baseline justify-between border-b border-news-muted pb-2">
                  <h3 className="font-serif text-xl font-bold text-news-ink">{group.title}</h3>
                  <span className="font-mono text-xs text-news-red">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-3 flex flex-col">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 py-1 font-body text-[15px] text-neutral-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-news-ink" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </NewsReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
