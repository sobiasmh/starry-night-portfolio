import Reveal from '../components/Reveal'
import Room from '../components/Room'
import ProductArt from '../components/ProductArt'
import { privateWork } from '../data'

export default function PrivateWork() {
  return (
    <Room id="work" eyebrow="Selected work">
      <Reveal>
        <p className="intro">These products are proprietary to the companies I built them for, so there are no links or screenshots. The illustrations are my own sketches of what each one does.</p>
      </Reveal>
      <div className="cards">
        {privateWork.map((w, i) => (
          <Reveal key={w.name} delay={(i % 2) * 0.08}>
            <article className="card">
              <ProductArt kind={w.kind} />
              <p className="tag">{w.tag}</p>
              <h3>{w.name}</h3>
              <p className="sub">{w.title}</p>
              <p>{w.text}</p>
              <p className="priv">Proprietary · not publicly viewable</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Room>
  )
}
