// A crescent moon drawn with an SVG mask. Size is set by the parent.
export default function Moon({ id = 'moon' }: { id?: string }) {
  return (
    <svg viewBox="-60 -60 120 120" aria-hidden="true" style={{ transform: 'rotate(-18deg)' }}>
      <defs>
        <mask id={`${id}-m`}>
          <rect x="-60" y="-60" width="120" height="120" fill="#fff" />
          <circle cx="20" cy="-7" r="33" fill="#000" />
        </mask>
        <radialGradient id={`${id}-g`} cx=".4" cy=".38">
          <stop offset="0" stopColor="#f6ecc0" />
          <stop offset=".65" stopColor="#d9c36a" />
          <stop offset="1" stopColor="#bfa84e" />
        </radialGradient>
      </defs>
      <circle r="36" fill={`url(#${id}-g)`} mask={`url(#${id}-m)`} />
    </svg>
  )
}
