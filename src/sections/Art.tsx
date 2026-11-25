import Reveal from '../components/Reveal'
import Room from '../components/Room'
import { art } from '../data'

export default function Art() {
  return (
    <Room id="art" eyebrow="Art">
      <div className="walls">
        {art.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 0.08}>
            <figure className="piece">
              <div className="canvas">
                <img src={p.src} alt={p.title} loading="lazy" />
              </div>
              <figcaption>{[p.title, p.medium, p.year].filter(Boolean).join(' · ')}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Room>
  )
}
