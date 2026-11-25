import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { impact } from '../data'

export default function Impact() {
  return (
    <section className="impact" aria-label="Selected results">
      {impact.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.08} className="stat">
          <b><CountUp to={m.value} suffix={m.suffix} /></b>
          <span>{m.label}</span>
        </Reveal>
      ))}
    </section>
  )
}
