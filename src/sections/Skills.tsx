import Reveal from '../components/Reveal'
import Room from '../components/Room'
import { skills } from '../data'

export default function Skills() {
  return (
    <Room id="skills" eyebrow="Skills">
      <div className="skills">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.05}>
            <div className="skill-row">
              <span className="eyebrow">{g.group}</span>
              <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Room>
  )
}
