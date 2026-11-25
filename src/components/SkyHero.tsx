import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Slow painterly flow field (blue strokes) with haloed stars on a second canvas.
const PALETTE = ['#2a5db0', '#3f78d6', '#6fa0ff', '#a9c7ff', '#1d3f86', '#f5d547', '#ffe98a']
const BASE: [number, number, number][] = [
  [0.58, 0.2, 1.1], [0.7, 0.38, 0.8], [0.84, 0.26, 1.3], [0.9, 0.52, 0.7], [0.64, 0.6, 1], [0.78, 0.72, 1.15], [0.5, 0.82, 0.7],
  [0.93, 0.8, 0.8], [0.36, 0.14, 0.6], [0.46, 0.46, 0.55], [0.96, 0.12, 0.6], [0.28, 0.72, 0.5], [0.7, 0.9, 0.6], [0.55, 0.38, 0.5],
]
const rnd = (i: number) => {
  const x = Math.sin(i * 127.1) * 43758.5
  return x - Math.floor(x)
}
const EXTRA: [number, number, number][] = Array.from({ length: 90 }, (_, q) => [rnd(q + 31), rnd(q + 77), 0.22 + rnd(q + 12) * 0.3])
const STARS = BASE.concat(EXTRA)

export default function SkyHero({ className }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null)
  const flowRef = useRef<HTMLCanvasElement>(null)
  const starRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const wrapEl = wrap.current!, fc = flowRef.current!, sc = starRef.current!
    const fx = fc.getContext('2d')!, sx = sc.getContext('2d')!
    let W = 0, H = 0, t = 0, mx = -999, my = -999, raf = 0, visible = true
    let P: { x: number; y: number; ci: number; l: number }[] = []

    const size = () => {
      const r = wrapEl.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1)
      W = r.width; H = r.height
      for (const c of [fc, sc]) { c.width = W * d; c.height = H * d }
      fx.setTransform(d, 0, 0, d, 0, 0); sx.setTransform(d, 0, 0, d, 0, 0)
      fx.fillStyle = '#060d22'; fx.fillRect(0, 0, W, H)
      const n = Math.min(900, Math.round((W * H) / 1500))
      P = Array.from({ length: n }, (_, i) => ({ x: rnd(i) * W, y: rnd(i + 900) * H, ci: i % 7, l: Math.floor(rnd(i + 5) * 300) }))
    }
    const ang = (x: number, y: number) => {
      let a = Math.sin(x * 0.008 + t) * Math.cos(y * 0.01 - t * 0.8) * 2.4
      const cx = W * 0.74, cy = H * 0.36, dx = x - cx, dy = y - cy, k = Math.exp(-(dx * dx + dy * dy) / (W * W * 0.05))
      a = a * (1 - k) + (Math.atan2(dy, dx) + 1.57) * k
      const ex = x - mx, ey = y - my, md = ex * ex + ey * ey
      if (md < 9000) a += Math.atan2(ey, ex) * 0.5 * Math.exp(-md / 4500)
      return a
    }
    const flow = () => {
      fx.fillStyle = 'rgba(6,13,34,.045)'; fx.fillRect(0, 0, W, H)
      t += 0.0016; fx.lineWidth = 1.5; fx.lineCap = 'round'
      for (const p of P) {
        const a = ang(p.x, p.y), nx = p.x + Math.cos(a) * 0.9, ny = p.y + Math.sin(a) * 0.9
        fx.strokeStyle = PALETTE[p.ci]; fx.beginPath(); fx.moveTo(p.x, p.y); fx.lineTo(nx, ny); fx.stroke()
        p.x = nx; p.y = ny; p.l++
        if (p.l > 420 || nx < 0 || nx > W || ny < 0 || ny > H) { p.x = Math.random() * W; p.y = Math.random() * H; p.l = 0; p.ci = Math.floor(Math.random() * 7) }
      }
    }
    const glow = (x: number, y: number, r: number, a: number) => {
      const g = sx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, `rgba(232,214,140,${a})`); g.addColorStop(1, 'rgba(232,214,140,0)')
      sx.fillStyle = g; sx.beginPath(); sx.arc(x, y, r, 0, 6.3); sx.fill()
    }
    const stars = (ts: number) => {
      sx.clearRect(0, 0, W, H)
      const list = W < 600 ? STARS.filter((_, i) => i < 14 || i % 2 === 0) : STARS
      list.forEach((s, i) => {
        const x = s[0] * W, y = s[1] * H, sz = s[2] * Math.min(W, 900) / 900 * 26
        const near = Math.max(0, 1 - Math.hypot(x - mx, y - my) / 160)
        const b = 0.75 + 0.25 * Math.sin(ts / 1900 + i * 1.7) + near * 0.4
        glow(x, y, sz * 1.8, 0.35 * b)
        const rings = s[2] < 0.6 ? 2 : 4
        for (let j = 0; j < rings; j++) {
          sx.strokeStyle = `rgba(232,214,140,${(0.38 - j * 0.08) * b})`; sx.lineWidth = 1.1
          sx.beginPath(); sx.arc(x, y, Math.max(0.5, sz * (0.35 + j * 0.3) + Math.sin(ts / 2600 + i + j) * 1.5), 0, 6.3); sx.stroke()
        }
        sx.fillStyle = 'rgba(250,240,190,.95)'; sx.beginPath(); sx.arc(x, y, sz * 0.14, 0, 6.3); sx.fill()
      })
    }
    const loop = (ts: number) => { if (visible) { flow(); stars(ts) } raf = requestAnimationFrame(loop) }
    size()
    if (reduce) { for (let i = 0; i < 260; i++) flow(); stars(0) } else raf = requestAnimationFrame(loop)

    const move = (e: PointerEvent) => { const r = wrapEl.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top }
    const leave = () => { mx = my = -999 }
    const resize = () => { size(); if (reduce) { for (let i = 0; i < 260; i++) flow(); stars(0) } }
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(wrapEl)
    wrapEl.addEventListener('pointermove', move); wrapEl.addEventListener('pointerleave', leave); addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); io.disconnect(); wrapEl.removeEventListener('pointermove', move); wrapEl.removeEventListener('pointerleave', leave); removeEventListener('resize', resize) }
  }, [reduce])

  return (
    <div ref={wrap} className={className} aria-hidden="true">
      <canvas ref={flowRef} />
      <canvas ref={starRef} />
    </div>
  )
}
