// "Still" mode flag — disables entrance/idle animation when the user prefers
// reduced motion or passes ?still in the URL (handy for screenshots).
export const STILL =
  typeof window !== 'undefined' &&
  (new URLSearchParams(window.location.search).has('still') ||
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
