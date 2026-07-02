import { skillGroups } from '../data/content'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0)

  return (
    <Section id="skills" tone="muted">
      <SectionHeading
        eyebrow="The Index"
        title="The stack I build with."
        sub="Frontend-first, with the architecture, backend, and cloud depth to ship complete products."
        count={`${total} tools`}
      />

      {/* Collapsed-border newspaper column grid */}
      <div className="grid grid-cols-1 border-l border-t border-foreground sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={(gi % 3) * 0.05}>
            <div className="group h-full border-b border-r border-foreground p-6 transition-colors duration-200 hover:bg-neutral-100">
              <div className="flex items-baseline justify-between border-b border-muted pb-2">
                <h3 className="font-serif text-xl font-bold text-foreground">{group.title}</h3>
                <span className="font-mono text-xs text-accent">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="mt-3 flex flex-col">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 py-1 font-body text-[15px] text-neutral-700"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-foreground" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
