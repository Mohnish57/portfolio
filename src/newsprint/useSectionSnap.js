import { useEffect } from 'react'

// After the user stops scrolling, smoothly settle the viewport onto the
// nearest section — but only when they're already close to a boundary, so
// long sections stay freely readable. Smoother and more controllable than
// CSS scroll-snap, and tuned to the Newsprint "snappy" feel.
export function useSectionSnap(headerOffset = 84) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const main = document.querySelector('.snap-main')
    if (!main) return

    let timer
    let snapping = false

    const sections = () =>
      Array.from(main.children).filter((el) => el.tagName === 'SECTION')

    const onScroll = () => {
      if (snapping) return
      clearTimeout(timer)
      timer = setTimeout(() => {
        const y = window.scrollY + headerOffset
        let nearest = null
        let min = Infinity
        for (const s of sections()) {
          const d = Math.abs(s.offsetTop - y)
          if (d < min) {
            min = d
            nearest = s
          }
        }
        // Only settle when reasonably close to a section start (within 35% of
        // the viewport) and not already aligned.
        const threshold = window.innerHeight * 0.35
        const atBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
        if (nearest && min > 6 && min < threshold && !atBottom) {
          snapping = true
          window.scrollTo({ top: nearest.offsetTop - headerOffset, behavior: 'smooth' })
          window.setTimeout(() => {
            snapping = false
          }, 700)
        }
      }, 150)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [headerOffset])
}
