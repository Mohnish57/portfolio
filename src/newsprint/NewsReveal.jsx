import { motion } from 'framer-motion'

// Newsprint motion: fast, mechanical, no bounce. Just a crisp fade + small rise.
export default function NewsReveal({ children, delay = 0, y = 16, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}
