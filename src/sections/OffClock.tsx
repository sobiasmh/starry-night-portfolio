import Reveal from '../components/Reveal'
import Room from '../components/Room'
import Icon from '../components/Icons'
import { offClock } from '../data'

export default function OffClock() {
  return (
    <Room id="after-hours" eyebrow="After hours" title="What I do when the laptop closes.">
      <div className="notes">
        {offClock.map((o, i) => (
          <Reveal key={o.title} delay={(i % 3) * 0.07} className="note">
            <Icon name={o.icon} size={32} />
            <h3>{o.title}</h3>
            <p>{o.text}</p>
          </Reveal>
        ))}
      </div>
    </Room>
  )
}
