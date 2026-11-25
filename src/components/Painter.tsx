// The painter, facing left. Parts are separate groups so GSAP can swing legs and arms.
export default function Painter() {
  return (
    <svg viewBox="-14 0 114 160" className="painter" aria-hidden="true">
      <g className="legL"><rect x="39" y="104" width="10" height="48" rx="4" fill="#1d3f86" /><path d="M35 151h16a2 2 0 0 1 2 2v5H33v-5a2 2 0 0 1 2-2z" fill="#e9eefc" /></g>
      <g className="legR"><rect x="52" y="104" width="10" height="48" rx="4" fill="#173473" /><path d="M52 151h16a2 2 0 0 1 2 2v5H50v-5a2 2 0 0 1 2-2z" fill="#e9eefc" /></g>
      <g className="sit" opacity="0">
        <path d="M50 103H32M32 103V130" stroke="#173473" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M27 131h12a2 2 0 0 1 2 2v3H25v-3a2 2 0 0 1 2-2z" fill="#e9eefc" opacity=".8" />
        <path d="M50 108H28M28 108V131" stroke="#1d3f86" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M22 132h12a2 2 0 0 1 2 2v3H20v-3a2 2 0 0 1 2-2z" fill="#e9eefc" />
      </g>
      <g className="bob">
        <path d="M34 36C28 18 48 8 64 18C74 26 72 52 68 74C64 70 62 76 58 70C54 76 50 72 48 66L42 60C36 56 36 46 34 36z" fill="#3a2418" />
        <path d="M38 64C38 58 62 58 64 64L66 108H36z" fill="#f5d547" />
        <path d="M62 68Q68 84 64 100" stroke="#c9966f" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M62 66Q65 74 65 80" stroke="#f5d547" strokeWidth="9" fill="none" strokeLinecap="round" />
        <rect x="45" y="50" width="8" height="12" fill="#c9966f" />
        <circle cx="48" cy="40" r="15" fill="#c9966f" />
        <path d="M33 40C32 24 46 20 56 26C60 30 62 36 62 40C56 32 44 30 36 36z" fill="#3a2418" />
        <path d="M34 40C30 52 36 60 32 70C38 66 40 56 38 46z" fill="#3a2418" />
        <circle className="eye" cx="41" cy="42" r="1.7" fill="#1a1210" />
        <path d="M37 49q4 4 8 0" stroke="#7a3b2a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="38" cy="47" r="2.6" fill="#e0836a" opacity=".5" />
      </g>
      <g className="armBase"><g className="arm">
        <path d="M44 70Q26 76 8 82" stroke="#c9966f" strokeWidth="6.5" fill="none" strokeLinecap="round" />
        <path d="M46 69Q38 72 31 73" stroke="#f5d547" strokeWidth="9" fill="none" strokeLinecap="round" />
        <line x1="14" y1="83" x2="-6" y2="77" stroke="#8a5a34" strokeWidth="3" strokeLinecap="round" />
        <line x1="-6" y1="77" x2="-11" y2="75.5" stroke="#dfe7ff" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="8" cy="82" r="3.6" fill="#c9966f" />
      </g></g>
    </svg>
  )
}
