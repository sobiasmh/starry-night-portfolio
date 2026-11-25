import Reveal from '../components/Reveal'
import Room from '../components/Room'
import { experience } from '../data'

export default function Experience() {
  return (
    <Room id="career" eyebrow="Experience">
      <ol className="career">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <li className="job">
              <span className="star" aria-hidden="true" />
              <p className="when">{job.period}</p>
              <h3>{job.company}</h3>
              <p className="jobrole">{job.role}</p>
              <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Room>
  )
}
