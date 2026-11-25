// An abstract, seeded constellation used as the visual for each private project.
export default function Constellation({ seed }: { seed: number }) {
  const r = (i: number) => { const v = Math.sin((i + 1) * (seed + 2) * 12.9898) * 43758.5; return v - Math.floor(v) }
  const n = 8 + (seed % 3)
  const pts = Array.from({ length: n }, (_, i) => ({ x: 20 + r(i) * 260, y: 18 + r(i + 40) * 104, m: 1.6 + r(i + 80) * 2.8 }))
  pts.sort((a, b) => a.x - b.x)
  const extra = Array.from({ length: 26 }, (_, i) => ({ x: r(i + 200) * 300, y: r(i + 300) * 140 }))
  return (
    <svg viewBox="0 0 300 140" className="const" aria-hidden="true">
      {extra.map((e, i) => <circle key={i} cx={e.x} cy={e.y} r={0.7} fill="#9fb4e6" opacity=".5" />)}
      <polyline className="lines" points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" />
      {pts.map((p, i) => (
        <g key={i} className="pt">
          <circle cx={p.x} cy={p.y} r={p.m * 3} fill="#d9c36a" opacity=".12" />
          <circle cx={p.x} cy={p.y} r={p.m} fill="#f6ecc0" />
        </g>
      ))}
    </svg>
  )
}
