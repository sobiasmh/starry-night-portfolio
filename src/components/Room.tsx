import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function Room({ id, eyebrow, title, children }: { id: string; eyebrow: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="sec">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        {title && <h2>{title}</h2>}
      </Reveal>
      {children}
    </section>
  )
}
