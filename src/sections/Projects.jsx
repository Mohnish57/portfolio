import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

function ImageBlock({ p, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.name} · screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full min-h-[10rem] items-center justify-center">
          <div className="absolute inset-0 bg-dotgrid opacity-10" />
          <span className="relative font-serif text-3xl font-black text-neutral-400">{p.name}</span>
        </div>
      )}
    </div>
  )
}

function Meta({ p }) {
  return (
    <div className="flex gap-6">
      {p.metrics.map((m) => (
        <div key={m.v}>
          <div className="font-serif text-2xl font-black text-foreground">{m.k}</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            {m.v}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  const pinRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      // Desktop: pin the section and translate the track horizontally as the
      // user scrolls down ("scroll down → slide left-to-right").
      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.current
        const amount = () => track.scrollWidth - window.innerWidth

        const tween = gsap.to(track, {
          x: () => -amount(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: () => '+=' + amount(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        gsap.utils.toArray('.panel').forEach((panel) => {
          gsap.from(panel, {
            autoAlpha: 0,
            y: 40,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: 'left 88%',
              toggleActions: 'play none none reverse',
            },
          })
        })
      })
    }, pinRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={pinRef}
      className="relative overflow-hidden border-b-4 border-foreground bg-background"
    >
      <div
        ref={trackRef}
        className="flex flex-col gap-6 px-4 py-16 lg:h-screen lg:flex-row lg:flex-nowrap lg:items-center lg:gap-8 lg:py-0 lg:pl-[7vw] lg:pr-[10vw]"
      >
        {/* Intro panel */}
        <div className="panel flex shrink-0 flex-col justify-center lg:h-[74vh] lg:w-[26rem] lg:pr-6">
          <div className="border-b-4 border-foreground pb-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-foreground">
                04 · Featured Stories
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                {projects.length} stories
              </span>
            </div>
            <h2 className="mt-3 font-serif text-4xl font-black leading-[0.95] tracking-tight text-foreground lg:text-5xl">
              Work that shipped &amp; scaled.
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-neutral-600">
              Systems architected and built end to end, with the numbers that mattered.
            </p>
          </div>
          <div className="mt-6 hidden items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-neutral-600 lg:flex">
            Scroll to read <ArrowRight size={16} strokeWidth={1.5} className="text-accent" />
          </div>
        </div>

        {/* Project panels — newsprint cards. Horizontal scroll preserved. */}
        {projects.map((p, i) => {
          const Wrapper = p.url ? 'a' : 'div'
          return (
            <Wrapper
              key={p.name}
              {...(p.url ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {})}
              className="panel group flex w-full shrink-0 flex-col border border-foreground bg-background lg:h-[74vh] lg:w-[34rem]"
            >
              <div className="flex items-center justify-between border-b border-foreground px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Fig. {i + 1}.0 · {p.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  {p.year}
                </span>
              </div>
              <ImageBlock p={p} className="h-52 border-b border-foreground sm:h-60 lg:h-[44%]" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-3xl font-black leading-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700 sm:text-justify">
                  {p.blurb}
                </p>
                <div className="mt-auto space-y-4 pt-6">
                  <Meta p={p} />
                  <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-muted pt-3 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {p.stack.slice(0, 5).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  {p.url && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-medium uppercase tracking-widest text-foreground decoration-2 decoration-accent underline-offset-4 group-hover:underline">
                      Read live <ArrowUpRight size={14} strokeWidth={1.5} />
                    </span>
                  )}
                </div>
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}
