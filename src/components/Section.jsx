import Container from './Container'

// Newsprint section: full-width heavy bottom rule, cream or beige (sand) tone.
const tones = {
  white: 'bg-background text-foreground newsprint-texture',
  muted: 'bg-background text-foreground',
  sand: 'bg-sand text-foreground newsprint-texture',
  dark: 'bg-sand text-foreground newsprint-texture',
  primary: 'bg-sand text-foreground',
}

export default function Section({
  id,
  tone = 'white',
  className = '',
  containerClassName = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`relative border-b-4 border-foreground py-16 ${tones[tone]} ${className}`}
    >
      <Container className={`relative ${containerClassName}`}>{children}</Container>
    </section>
  )
}
