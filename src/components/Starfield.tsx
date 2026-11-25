import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Quiet twinkling stars fixed behind every section below the hero.
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()
  useEffect(() => {
    const c = ref.current!, x = c.getContext('2d')!
    let W = 0, H = 0, raf = 0
    const r = (i: number) => { const v = Math.sin(i * 91.3) * 10000; return v - Math.floor(v) }
    const stars = Array.from({ length: 140 }, (_, i) => ({ x: r(i), y: r(i + 500), s: 0.4 + r(i + 9) * 1.1, p: r(i + 3) * 6 }))
    const size = () => { const d = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight; c.width = W * d; c.height = H * d; x.setTransform(d, 0, 0, d, 0, 0) }
    const draw = (ts: number) => {
      x.clearRect(0, 0, W, H)
      for (const s of stars) {
        x.globalAlpha = 0.25 + 0.5 * Math.abs(Math.sin(ts / 2400 + s.p))
        x.fillStyle = s.s > 1 ? '#f1e6a8' : '#cfe0ff'
        x.beginPath(); x.arc(s.x * W, s.y * H, s.s, 0, 6.3); x.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    size(); draw(0)
    addEventListener('resize', () => { size(); draw(0) })
    return () => cancelAnimationFrame(raf)
  }, [reduce])
  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}
