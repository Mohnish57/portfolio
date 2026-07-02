import { Code2, Cpu, ShoppingBag, Zap } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const pillars = [
  { icon: Code2, title: 'Frontend Architecture', desc: 'Reusable design systems and component patterns built to scale.' },
  { icon: Zap, title: 'Performance', desc: 'Core Web Vitals treated as a budget — measured and enforced.' },
  { icon: ShoppingBag, title: 'Headless Commerce', desc: 'Shopify Plus storefronts engineered for speed.' },
  { icon: Cpu, title: 'AI-Enabled Products', desc: 'LLM integration and automation that cut real cost.' },
]

export default function About() {
  return (
    <Section id="about" tone="white">
      <SectionHeading eyebrow="About the Author" title="Frontend, built to scale." />

      {/* Capability list as collapsed-border icon boxes */}
      <div className="grid grid-cols-1 border-l border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 0.05}>
            <div className="group flex h-full flex-col gap-4 border-b border-r border-foreground p-6 transition-colors duration-200 hover:bg-neutral-100">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-foreground text-foreground transition-all duration-200 group-hover:bg-foreground group-hover:text-background">
                <p.icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 font-body text-sm leading-snug text-neutral-600">{p.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
