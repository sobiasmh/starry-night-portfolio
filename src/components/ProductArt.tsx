// Original schematic illustrations of what each product does (not screenshots of the real products).
const Y = '#f5d547', B = '#6fa0ff', G = '#5fd1a2', L = '#9fb4e6', P = '#f08a9d'

function Fish() {
  const tiles = []
  for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) tiles.push(<rect key={`${r}${c}`} x={18 + c * 17} y={18 + r * 17} width="15" height="15" rx="1.5" fill="#12214d" stroke="#2a3d7a" strokeWidth=".8" />)
  const cells: [number, number, string][] = [[208, 52, G], [226, 66, B], [244, 50, G], [222, 86, P], [248, 84, G], [200, 80, B], [236, 100, G], [212, 104, B], [256, 66, P]]
  return (
    <>
      {tiles}
      <circle cx="232" cy="76" r="44" fill="#07102a" stroke={Y} strokeWidth="1.6" />
      <path d="M118 90L196 96" stroke={Y} strokeWidth=".8" strokeDasharray="3 3" opacity=".6" />
      <rect x="86" y="62" width="30" height="26" fill="none" stroke={Y} strokeWidth="1.2" />
      {cells.map(([x, y, c], i) => <g key={i}><circle cx={x} cy={y} r="8" fill={c} opacity=".18" /><circle cx={x} cy={y} r="3.2" fill={c} /></g>)}
    </>
  )
}
function MedFlow() {
  return (
    <>
      <g>
        <rect x="16" y="16" width="86" height="34" rx="4" fill="#12214d" stroke="#2a3d7a" />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={24 + i * 15} y={44 - (8 + (i * 7) % 20)} width="9" height={8 + (i * 7) % 20} fill={B} opacity=".8" />)}
        <rect x="16" y="54" width="86" height="34" rx="4" fill="#12214d" stroke="#2a3d7a" />
        <circle cx="38" cy="71" r="11" fill="none" stroke={G} strokeWidth="1.6" /><circle cx="42" cy="68" r="2" fill={P} /><circle cx="34" cy="74" r="2" fill={P} /><circle cx="46" cy="76" r="2" fill={P} />
        <rect x="62" y="64" width="30" height="3" fill={L} opacity=".6" /><rect x="62" y="72" width="22" height="3" fill={L} opacity=".4" />
        <rect x="16" y="92" width="86" height="34" rx="4" fill="#12214d" stroke="#2a3d7a" />
        {[0, 1, 2].map((i) => <rect key={i} x="26" y={101 + i * 8} width={60 - i * 14} height="3" fill={L} opacity=".5" />)}
      </g>
      <path d="M108 33C150 33 150 70 176 70M108 71H176M108 109C150 109 150 72 176 72" stroke={Y} strokeWidth="1.2" fill="none" opacity=".7" />
      <rect x="176" y="34" width="108" height="76" rx="6" fill="#12214d" stroke={Y} strokeWidth="1.4" />
      <rect x="188" y="46" width="60" height="5" fill={Y} /><rect x="188" y="58" width="84" height="3" fill={L} opacity=".6" /><rect x="188" y="66" width="70" height="3" fill={L} opacity=".6" />
      <circle cx="198" cy="92" r="10" fill={G} opacity=".2" /><path d="M193 92l4 4l8-9" stroke={G} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="216" y="86" width="56" height="12" rx="6" fill="none" stroke={G} />
    </>
  )
}
function Donut() {
  return (
    <>
      <rect x="40" y="10" width="140" height="120" rx="4" fill="#12214d" stroke="#2a3d7a" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x="54" y={24 + i * 13} width={112 - ((i * 23) % 40)} height="4" fill={L} opacity=".45" />)}
      <rect x="54" y="50" width="62" height="6" fill="#07102a" stroke={Y} strokeWidth="1" />
      <rect x="54" y="89" width="84" height="6" fill="#07102a" stroke={Y} strokeWidth="1" />
      <rect x="54" y="115" width="40" height="6" fill="#07102a" stroke={Y} strokeWidth="1" />
      <g transform="translate(198 28)">
        <rect width="86" height="22" rx="11" fill="none" stroke={G} /><circle cx="14" cy="11" r="4" fill={G} /><rect x="26" y="9" width="46" height="4" fill={G} opacity=".6" />
        <rect y="34" width="86" height="22" rx="11" fill="none" stroke={Y} /><circle cx="14" cy="45" r="4" fill={Y} /><rect x="26" y="43" width="36" height="4" fill={Y} opacity=".6" />
        <rect y="68" width="86" height="22" rx="11" fill="none" stroke={P} /><circle cx="14" cy="79" r="4" fill={P} /><rect x="26" y="77" width="24" height="4" fill={P} opacity=".6" />
      </g>
      <path d="M180 39h18M180 73h18M180 107h18" stroke={L} strokeWidth="1" strokeDasharray="2 3" />
    </>
  )
}
function Orca() {
  const lanes = [B, G, Y]
  return (
    <>
      <rect x="16" y="14" width="268" height="46" rx="4" fill="#12214d" stroke="#2a3d7a" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={26 + i * 64} y="22" width="54" height="30" rx="2" fill="#0b1738" stroke="#2a3d7a" />)}
      {lanes.map((c, k) => (
        <g key={k}>
          <rect x="16" y={72 + k * 17} width="268" height="12" rx="3" fill="#0b1738" />
          {[0, 1, 2, 3, 4, 5].map((i) => { const x = 24 + ((i * 41 + k * 17) % 230); return <rect key={i} x={x} y={74 + k * 17} width={10 + ((i * 13 + k * 5) % 30)} height="8" rx="2" fill={c} opacity=".75" /> })}
        </g>
      ))}
      <path d="M16 126q12-8 24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t24 0t28 0" stroke={L} strokeWidth="1.2" fill="none" opacity=".6" />
      <line x1="150" y1="10" x2="150" y2="132" stroke={Y} strokeWidth="1.6" /><path d="M144 8h12l-6 8z" fill={Y} />
    </>
  )
}
function Bizb() {
  return (
    <>
      <rect x="22" y="12" width="150" height="116" rx="6" fill="#12214d" stroke="#2a3d7a" />
      <rect x="22" y="12" width="150" height="14" rx="6" fill="#0b1738" /><circle cx="33" cy="19" r="2.2" fill={P} /><circle cx="41" cy="19" r="2.2" fill={Y} /><circle cx="49" cy="19" r="2.2" fill={G} />
      <rect x="34" y="34" width="126" height="22" rx="3" fill="none" stroke={L} opacity=".5" /><rect x="40" y="42" width="50" height="5" fill={Y} />
      {[0, 1, 2].map((i) => <g key={i}><rect x={34 + i * 43} y="64" width="38" height="38" rx="3" fill="#0b1738" stroke="#2a3d7a" /><circle cx={53 + i * 43} cy="81" r="9" fill={[B, G, P][i]} opacity=".7" /><rect x={38 + i * 43} y="108" width="30" height="3" fill={L} opacity=".5" /></g>)}
      <rect x="226" y="30" width="48" height="84" rx="8" fill="#12214d" stroke="#2a3d7a" strokeWidth="1.4" />
      <rect x="236" y="42" width="28" height="18" rx="2" fill={B} opacity=".6" /><rect x="236" y="66" width="28" height="3" fill={L} opacity=".6" /><rect x="236" y="74" width="20" height="3" fill={L} opacity=".4" /><rect x="236" y="90" width="28" height="12" rx="6" fill={Y} />
      <path d="M182 100a26 26 0 0 1 36-32" stroke={G} strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M214 62l5 6l-8 1z" fill={G} />
    </>
  )
}
const art: Record<string, () => JSX.Element> = { fish: Fish, medflow: MedFlow, donut: Donut, orca: Orca, bizb: Bizb }

export default function ProductArt({ kind }: { kind: string }) {
  const A = art[kind]
  return <svg viewBox="0 0 300 140" className="const art" aria-hidden="true">{A && <A />}</svg>
}
