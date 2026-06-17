import { ArrowUpRight } from 'lucide-react'
import { experience } from '../data/content'
import SectionHead from './SectionHead'
import NewsReveal from './NewsReveal'

export default function NewsExperience() {
  return (
    <section id="work" className="newsprint-texture border-b-4 border-news-ink py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <SectionHead
          kicker="03 · On the Record"
          title="Career, in chronological order"
          sub="Three posts across e-commerce, AI and media, shipping production systems end to end."
        />

        <div className="border-t border-news-ink">
          {experience.map((job, i) => {
            const Wrapper = job.url ? 'a' : 'div'
            return (
              <NewsReveal key={job.role + i}>
                <Wrapper
                  {...(job.url
                    ? { href: job.url, target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="group grid grid-cols-1 items-baseline border-b border-news-ink transition-colors duration-200 hover:bg-neutral-100 md:grid-cols-12"
                >
                  <span className="px-2 py-5 font-mono text-xs uppercase tracking-widest text-news-red md:col-span-1 md:py-7">
                    0{i + 1}
                  </span>
                  <div className="px-2 pb-2 pt-0 md:col-span-7 md:border-l md:border-news-muted md:py-7 md:pl-6">
                    <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-news-ink lg:text-3xl">
                      {job.company}
                      {job.url && (
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.5}
                          className="text-news-red opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      )}
                    </h3>
                    <p className="mt-1 font-body text-sm italic text-neutral-600">{job.role}</p>
                  </div>
                  <div className="px-2 pb-6 md:col-span-4 md:border-l md:border-news-muted md:py-7 md:pl-6 md:text-right">
                    <p className="font-mono text-xs uppercase tracking-widest text-news-ink">
                      {job.period}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                      {job.location}
                    </p>
                  </div>
                </Wrapper>
              </NewsReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
