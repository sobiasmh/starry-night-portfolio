import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  ['about', 'About'],
  ['career', 'Experience'],
  ['skills', 'Skills'],
  ['art', 'Art'],
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(scrollY > 40)
    on(); addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <a href="#top" className="mark" aria-label="Sobia Zulfiqar, home">Sobia <span>Zulfiqar</span></a>
      <nav aria-label="Sections" className="secs">
        {links.map(([id, text]) => (
          <a key={id} href={`#${id}`}>{text}</a>
        ))}
      </nav>
      <div className="icons" aria-label="Contact">
        <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 7l8.5 6l8.5-6" /></svg>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.05c.53-1 1.84-2.05 3.8-2.05c4.06 0 4.8 2.67 4.8 6.14V21h-4v-5.07c0-1.21-.02-2.77-1.69-2.77c-1.7 0-1.95 1.32-1.95 2.68V21h-4V9.5z" /></svg>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34c-.45-1.15-1.11-1.46-1.11-1.46c-.91-.62.07-.61.07-.61c1 .07 1.53 1.03 1.53 1.03c.9 1.52 2.34 1.08 2.91.83c.09-.65.35-1.08.63-1.33c-2.22-.25-4.55-1.11-4.55-4.94c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.27.1-2.64c0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.37.2 2.39.1 2.64c.64.7 1.03 1.59 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93c.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
        </a>
      </div>
    </header>
  )
}
