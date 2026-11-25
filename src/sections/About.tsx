import Reveal from '../components/Reveal'
import Room from '../components/Room'
import { profile, education } from '../data'

const facts: [string, string][] = [
  ['Education', `${education.degree}, ${education.school}, ${education.period}`],
]

export default function About() {
  return (
    <Room id="about" eyebrow="About">
      <div className="about">
        <div>
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className={i === 0 ? 'big' : 'body'}>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <dl className="facts">
            {facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Room>
  )
}
