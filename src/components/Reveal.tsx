import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Fades in slowly from slightly below, like a light being raised on a piece.
export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
