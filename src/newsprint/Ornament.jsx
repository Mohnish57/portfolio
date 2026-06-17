// Serif ornamental divider between major sections.
export default function Ornament({ className = '' }) {
  return (
    <div
      className={`select-none py-8 text-center font-serif text-2xl tracking-[1em] text-neutral-400 ${className}`}
      aria-hidden
    >
      &#x2727; &#x2727; &#x2727;
    </div>
  )
}

// A small uppercase section label ("kicker").
export function Kicker({ children, className = '' }) {
  return (
    <span
      className={`font-mono text-xs font-medium uppercase tracking-widest text-news-ink ${className}`}
    >
      {children}
    </span>
  )
}
