import { ArrowUpRight } from 'lucide-react'
import { experience } from '../data/content'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Experience() {
  return (
    <Section id="work" tone="white">
      <SectionHeading
        index="03"
        eyebrow="On the Record"
        title="Where I've shipped."
        sub="Frontend roles across AI, commerce, and media — leading architecture and delivery."
        count={`${experience.length} roles`}
      />

      <div className="border-t border-foreground">
        {experience.map((job, i) => {
          const Wrapper = job.url ? 'a' : 'div'
          return (
            <Reveal key={job.role + i}>
              <Wrapper
                {...(job.url ? { href: job.url, target: '_blank', rel: 'noreferrer' } : {})}
                className="group grid grid-cols-1 items-baseline border-b border-foreground transition-colors duration-200 hover:bg-neutral-100 md:grid-cols-12"
              >
                <span className="px-2 py-5 font-mono text-xs uppercase tracking-widest text-accent md:col-span-1 md:py-7">
                  0{i + 1}
                </span>
                <div className="px-2 pb-2 pt-0 md:col-span-7 md:border-l md:border-muted md:py-7 md:pl-6">
                  <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                    {job.company}
                    {job.url && (
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.5}
                        className="text-accent opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </h3>
                  <p className="mt-1 font-body text-sm italic text-neutral-600">{job.role}</p>
                  {job.summary && (
                    <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-neutral-700">
                      {job.summary}
                    </p>
                  )}
                </div>
                <div className="px-2 pb-6 md:col-span-4 md:border-l md:border-muted md:py-7 md:pl-6 md:text-right">
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                    {job.period}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                    {job.location}
                  </p>
                </div>
              </Wrapper>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
