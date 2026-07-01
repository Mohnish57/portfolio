import { motion } from 'framer-motion'
import { STILL } from '../lib/still'

// Newsprint motion: fast, mechanical, no bounce. A crisp fade + small rise.
export default function Reveal({ children, delay = 0, y = 16, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={STILL ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}
