import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const steps = [
  {
    n: '01',
    title: 'Scalable Architecture',
    desc: 'Reusable design systems and typed contracts that make the next feature cheap to ship.',
  },
  {
    n: '02',
    title: 'Performance First',
    desc: 'Core Web Vitals as a budget, not an afterthought — measured, enforced, shipped.',
  },
  {
    n: '03',
    title: 'Business Impact',
    desc: 'I start from the metric that matters and build directly toward it.',
  },
]

export default function Approach() {
  return (
    <Section tone="sand">
      <SectionHeading index="05" eyebrow="Editorial · Why Work With Me" title="What I bring." />

      <div className="grid grid-cols-1 border-l border-t border-foreground md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <div className="h-full border-b border-r border-foreground p-8">
              <div className="font-serif text-6xl font-black leading-none text-accent">{s.n}</div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 font-body leading-relaxed text-neutral-700">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
