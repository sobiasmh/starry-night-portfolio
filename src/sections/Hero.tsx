import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SkyHero from '../components/SkyHero'
import Moon from '../components/Moon'
import Studio from '../components/Studio'
import { profile } from '../data'

export default function Hero() {
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(false)
  const rise = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay: d, ease: [0.2, 0.7, 0.2, 1] as const },
  })
  return (
    <section id="top" className="hero">
      <SkyHero className="sky" />
      <div className="shade" />
      <div className="moon"><Moon /></div>
      <div className="copy">
        <div className="text">
          <motion.p className="kicker" {...rise(0.1)}>Software engineer</motion.p>
          <h1 aria-label="Hi, Sobia here.">
            <motion.span className="ln" aria-hidden="true" {...rise(0.25)}>Hi,</motion.span>
            <motion.span className="ln last" aria-hidden="true" {...rise(0.45)}>Sobia here.</motion.span>
          </h1>
          <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}>
            <p className="lede">{profile.tagline}</p>
          </motion.div>
        </div>
        <Studio onDone={() => {}} onStool={() => setShown(true)} />
      </div>
    </section>
  )
}
