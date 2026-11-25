import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useReducedMotion } from 'framer-motion'
import Painter from './Painter'

const SKY = ['#0b1f4a', '#0f2a63', '#143578', '#1b4590', '#2a5db0', '#2f64a8', '#1d3f86']
const SKY_Y = [106, 118, 130, 142, 154, 166, 178]
const STARS: [number, number, string][] = [[245, 112, '#fff3b0'], [262, 124, '#fff'], [318, 108, '#fff3b0'], [340, 142, '#fff'], [252, 150, '#fff3b0']]

// A stool drops from the top of the page, she walks in and sits on it, paints the night sky,
// notices you, turns round and says hello.
export default function Studio({ onDone, onStool }: { onDone: () => void; onStool?: () => void }) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)
  const [run, setRun] = useState(0)
  const skipFn = useRef<() => void>()

  useEffect(() => {
    setDone(false)
    const ctx = gsap.context(() => {
      const el = root.current!
      const $ = (s: string) => el.querySelector(s) as HTMLElement & SVGGElement
      const $$ = (s: string) => Array.from(el.querySelectorAll(s)) as (HTMLElement & SVGGElement)[]
      const girl = $('.girlwrap'), flip = $('.flip'), bubble = $('.bubble'), excl = $('.excl'), stool = $('.stool'), shadow = $('.stoolshadow')
      const legL = $('.legL'), legR = $('.legR'), sit = $('.sit'), arm = $('.arm'), base = $('.armBase'), bob = $('.bob'), eye = $('.eye')
      const strokes = $$('.sky'), swirl = $('.swirl'), hills = $('.hills'), moon = $('.mooon'), stars = $$('.pstar')
      const cw = el.offsetWidth, W = girl.offsetWidth
      const topY = -(el.getBoundingClientRect().top + 160)
      const standX = -0.11 * cw, turnX = -0.12 * W, startX = -(0.22 * cw + W)
      gsap.set(arm, { svgOrigin: '44 70' }); gsap.set(base, { svgOrigin: '44 70' }); gsap.set(bob, { svgOrigin: '48 150' }); gsap.set(eye, { svgOrigin: '41 42' })
      const setSit = (on: boolean) => { gsap.set([legL, legR], { opacity: on ? 0 : 1 }); gsap.set(sit, { opacity: on ? 1 : 0 }) }
      const reset = () => {
        gsap.set([...strokes, swirl], { strokeDashoffset: 1 })
        gsap.set(hills, { scaleY: 0, svgOrigin: '290 188' }); gsap.set(moon, { scale: 0, opacity: 0, svgOrigin: '334 122' })
        stars.forEach((s) => gsap.set(s, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }))
        gsap.set(flip, { scaleX: -1 }); gsap.set(base, { rotation: 0 }); gsap.set(arm, { rotation: 0 }); gsap.set(bubble, { opacity: 0 }); gsap.set(excl, { opacity: 0, scale: 0.4 })
        gsap.set(stool, { y: topY }); gsap.set(shadow, { opacity: 0, scaleX: 0.3, svgOrigin: '150 274' })
        gsap.set(girl, { x: startX, y: 0, opacity: 0 }); gsap.set([legL, legR], { rotation: 0 }); setSit(false)
      }
      const showFinished = () => {
        gsap.set([...strokes, swirl], { strokeDashoffset: 0 }); gsap.set(hills, { scaleY: 1 }); gsap.set(moon, { scale: 1, opacity: 1 })
        stars.forEach((s) => gsap.set(s, { scale: 1, opacity: 1 }))
        gsap.set(stool, { y: 0 }); gsap.set(shadow, { opacity: 0.35, scaleX: 1 })
        gsap.set(girl, { x: turnX, y: 0, opacity: 1 }); setSit(true)
        gsap.set(flip, { scaleX: 1 }); gsap.set(base, { rotation: 0 }); gsap.set(arm, { rotation: 0 }); gsap.set(bubble, { opacity: 0 }); gsap.set(excl, { opacity: 0 })
      }
      reset()

      const wl = gsap.fromTo(legL, { rotation: -20 }, { rotation: 20, duration: 0.22, yoyo: true, repeat: -1, ease: 'sine.inOut', paused: true })
      const wr = gsap.fromTo(legR, { rotation: 20 }, { rotation: -20, duration: 0.22, yoyo: true, repeat: -1, ease: 'sine.inOut', paused: true })
      const wb = gsap.to(bob, { y: -1.6, duration: 0.22, yoyo: true, repeat: -1, ease: 'sine.inOut', paused: true })
      const walk = (on: boolean) => {
        if (on) { for (const t of [wl, wr, wb]) t.play() }
        else { for (const t of [wl, wr, wb]) t.pause(); gsap.to([legL, legR], { rotation: 0, duration: 0.15 }); gsap.to(bob, { y: 0, duration: 0.15 }) }
      }
      const stroke = gsap.fromTo(arm, { rotation: -6 }, { rotation: 7, duration: 0.15, yoyo: true, repeat: -1, ease: 'sine.inOut', paused: true })
      const say = (text: string) => {
        bubble.textContent = text
        gsap.fromTo(bubble, { opacity: 0, y: 8, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.8)' })
      }
      const theta = (y: number) => 55 - (y - 106) * (43 / 72)

      if (reduce) { showFinished(); onStool?.(); onDone(); setDone(true); skipFn.current = () => {}; return }

      const tl = gsap.timeline({ delay: 0.4 })
      // 1. the stool drops from the top and bounces
      tl.call(() => onStool?.(), [], 0.55)
        .to(stool, { y: 0, duration: 1.1, ease: 'bounce.out' }, 0)
        .to(shadow, { opacity: 0.35, scaleX: 1, duration: 0.5 }, '>-0.45')
        // 2. she walks in and hops onto it
        .set(girl, { opacity: 1 })
        .call(() => walk(true))
        .to(girl, { x: standX, duration: 1.1, ease: 'none' })
        .call(() => walk(false))
        .to({}, { duration: 0.2 })
        .to(girl, { x: 0, y: -18, duration: 0.22, ease: 'power1.out' })
        .call(() => setSit(true))
        .to(girl, { y: 0, duration: 0.2, ease: 'power1.in' })
        .to({}, { duration: 0.2 })
        // 3. she paints the sky
        .call(() => { stroke.play() })
      SKY.forEach((_, i) => {
        tl.to(base, { rotation: theta(SKY_Y[i]), duration: 0.12 }, i === 0 ? '+=0' : '>-0.02')
          .to(strokes[i], { strokeDashoffset: 0, duration: 0.24, ease: 'power1.inOut' }, '<')
      })
      tl.to(base, { rotation: 44, duration: 0.15 }).to(swirl, { strokeDashoffset: 0, duration: 0.6, ease: 'power1.inOut' }, '<')
        .to(base, { rotation: 14, duration: 0.15 }).to(hills, { scaleY: 1, duration: 0.6, ease: 'power2.out' }, '<')
        .to(base, { rotation: 52, duration: 0.15 }).to(moon, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2)' }, '<')
      stars.forEach((s, i) => {
        tl.to(base, { rotation: 48 - i * 4, duration: 0.1 }).to(s, { scale: 1, opacity: 1, duration: 0.2, ease: 'back.out(3)' }, '<')
      })
      // 4. she notices you and says hello
      tl.call(() => { stroke.pause(); gsap.to(arm, { rotation: 0, duration: 0.2 }) })
        .to(base, { rotation: 10, duration: 0.3 })
        .to({}, { duration: 0.4 })
        .to(excl, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(3)' })
        .to(girl, { y: -8, duration: 0.12, yoyo: true, repeat: 1 }, '<')
        .set(flip, { scaleX: 1 }, '+=0.35')
        .set(girl, { x: turnX })
        .to(base, { rotation: 0, duration: 0.2 })
        .to(eye, { scaleY: 0.1, duration: 0.08, yoyo: true, repeat: 1 })
        .to(excl, { opacity: 0, duration: 0.2 })
        .call(say, ['Ooh! A visitor on the website!'])
        .to({}, { duration: 2.1 })
        .call(say, ['Come in. Don’t mind the paint.'])
        .to(base, { rotation: 36, duration: 0.22, yoyo: true, repeat: 5, ease: 'sine.inOut' }, '<')
        .to({}, { duration: 1.6 })
        .to(bubble, { opacity: 0, duration: 0.25 })
        .call(() => { onDone(); setDone(true) })
      skipFn.current = () => { onStool?.(); tl.kill(); stroke.kill(); wl.kill(); wr.kill(); wb.kill(); gsap.killTweensOf([girl, arm, base, bubble, excl, eye, stool, shadow, legL, legR, bob]); showFinished(); onDone(); setDone(true) }
    }, root)
    return () => ctx.revert()
  }, [run, reduce])

  return (
    <div className="studio" ref={root}>
      <svg className="set" viewBox="0 0 400 300" aria-hidden="true">
        <defs><clipPath id="cv"><rect x="228" y="98" width="124" height="90" /></clipPath></defs>
        <ellipse cx="205" cy="274" rx="190" ry="8" fill="#000" opacity=".35" />
        <ellipse className="stoolshadow" cx="150" cy="274" rx="34" ry="6" fill="#000" />
        <g className="stool">
          <path d="M136 216L124 272M164 216L176 272" stroke="#8a5a34" strokeWidth="5" strokeLinecap="round" />
          <path d="M149 216V272" stroke="#6e4628" strokeWidth="4" strokeLinecap="round" />
          <path d="M131 241H181" stroke="#8a5a34" strokeWidth="4" strokeLinecap="round" />
          <rect x="126" y="207" width="48" height="10" rx="4" fill="#a36f42" />
        </g>
        <path d="M262 190L238 274M318 190L344 274" stroke="#8a5a34" strokeWidth="6" strokeLinecap="round" />
        <path d="M290 190V274" stroke="#6e4628" strokeWidth="5" strokeLinecap="round" />
        <rect x="218" y="88" width="144" height="8" rx="2" fill="#8a5a34" />
        <rect x="232" y="188" width="116" height="7" rx="2" fill="#8a5a34" />
        <rect x="226" y="96" width="128" height="94" fill="#e8e3d6" />
        <g clipPath="url(#cv)">
          {SKY.map((c, i) => <path key={i} className="sky" pathLength={1} strokeDasharray="1" strokeDashoffset="1" d={`M222 ${SKY_Y[i]}Q256 ${SKY_Y[i] - 7} 290 ${SKY_Y[i]}T358 ${SKY_Y[i]}`} stroke={c} strokeWidth="17" strokeLinecap="round" fill="none" />)}
          <path className="swirl" pathLength={1} strokeDasharray="1" strokeDashoffset="1" d="M300 130c6-10 18-8 18 2c0 12-18 16-26 4c-8-12 4-28 20-26" stroke="#a9c7ff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path className="hills" d="M226 180Q260 152 292 168T354 160V190H226z" fill="#0f3d36" />
          <path className="mooon" d="M334 112a12 12 0 1 0 6 20a9 9 0 1 1-6-20z" fill="#f5d547" />
          {STARS.map(([x, y, c], i) => <circle key={i} className="pstar" cx={x} cy={y} r="2.2" fill={c} />)}
        </g>
        <rect x="226" y="96" width="128" height="94" fill="none" stroke="#c9b27a" strokeWidth="2" />
      </svg>
      <div className="girlwrap">
        <div className="flip"><Painter /></div>
      </div>
      <div className="excl" aria-hidden="true">!</div>
      <div className="bubble speech" role="status" />
      <button className="replay" onClick={() => (done ? setRun((r) => r + 1) : skipFn.current?.())}>{done ? 'Replay ↺' : 'Skip intro ›'}</button>
    </div>
  )
}
