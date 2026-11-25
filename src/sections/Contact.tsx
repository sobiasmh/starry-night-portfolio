import Reveal from '../components/Reveal'
import Room from '../components/Room'
import { profile } from '../data'

export default function Contact() {
  return (
    <Room id="contact" eyebrow="Contact" title="Say hello.">
      <Reveal>
        <p className="big visit">Hiring, collaborating, or just want to talk about murder mysteries? Write to <b className="addr">{profile.email}</b>.</p>
        <div className="cta">
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="foot">© {new Date().getFullYear()} Sobia Zulfiqar · Made with code and a lot of stars</p>
      </Reveal>
    </Room>
  )
}
