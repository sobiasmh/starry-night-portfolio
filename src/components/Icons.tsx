// Hand-drawn style line icons. Stroke colour comes from CSS (currentColor).
const paths: Record<string, JSX.Element> = {
  pencil: (
    <>
      <path d="M9 39l2-9L33 8l7 7-22 22z" />
      <path d="M28 13l7 7M11 30l7 7" />
      <path d="M9 39l5-1" />
    </>
  ),
  cookie: (
    <>
      <path d="M24 7c3 4 8 4 11 3 0 5 3 8 7 9-1 14-9 22-19 22C12 41 5 33 6 22 7 13 14 7 24 7z" />
      <circle cx="17" cy="20" r="1.8" />
      <circle cx="27" cy="26" r="1.8" />
      <circle cx="16" cy="31" r="1.8" />
      <circle cx="31" cy="35" r="1.8" />
      <circle cx="35" cy="22" r="1.8" />
    </>
  ),
  leaf: (
    <>
      <path d="M9 39C8 19 21 8 41 8c0 20-11 32-32 31z" />
      <path d="M9 39l20-20M20 29l-2-8M26 23l8 1" />
    </>
  ),
  book: (
    <>
      <path d="M24 12C18 8 10 8 6 10v26c4-2 12-2 18 2 6-4 14-4 18-2V10c-4-2-12-2-18 2z" />
      <path d="M24 12v26" />
    </>
  ),
  tv: (
    <>
      <rect x="6" y="14" width="36" height="24" rx="4" />
      <path d="M17 6l7 8 7-8M14 42h20" />
      <path d="M13 22c4-2 8 2 12 0" />
    </>
  ),
  heart: (
    <>
      <path d="M24 41C8 29 6 17 14 12c5-3 9 0 10 3 1-3 5-6 10-3 8 5 6 17-10 29z" />
    </>
  ),
  cookieFull: <></>,
}

export default function Icon({ name, size = 48, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
