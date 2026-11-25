// Everything on the site comes from this file. Edit text here; no need to touch the components.

export const profile = {
  name: 'Sobia Zulfiqar',
  role: 'Software Engineer',
  tagline: 'Software engineer and artist who happens to bake good cookies. Reading list full of murder mysteries. If your codebase has a body in it, I’ll find it.',
  email: 'sobiaa930@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sobiasmh/',
  github: 'https://github.com/sobiasmh',
  // Put a photo or self-portrait in /public (e.g. public/me.jpg) and set this to 'me.jpg' to replace the doodle.
  photo: '',
  about: [
    "Software engineer with 4 years of experience building AI healthcare products, e-commerce platforms and mobile applications. I work across the full stack, from responsive interfaces to the services and infrastructure behind them.",
    "I focus on clean, maintainable code, performance and usable interfaces, and I take ownership of what I ship, from first commit to production.",
    "Outside work I draw, bake cookies and brownies people ask for twice, and read too many murder mysteries and too much literary fiction. I laugh a lot, usually with some dark humour. I'm an introvert who comes across as the loudest person in the room.",
  ],

}

export const impact = [
  { value: 93, suffix: '%', label: 'fewer timeline rows on 8-hour recordings (480 down to 32)' },
  { value: 77, suffix: '%', label: 'faster First Contentful Paint on a Next.js storefront' },
  { value: 54, suffix: '', label: 'typed use cases in a Clean Architecture migration' },
  { value: 9, suffix: '+', label: 'shared packages in an Nx monorepo' },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'siParadigm Diagnostic Informatics',
    period: 'July 2024 — Present',
    points: [
      'Led the rewrite from micro-frontends to an Nx monorepo (9+ shared packages) with Clean Architecture across 4 products. Migrated FISH (54 use cases) and led the MedFlow cutover (60+ use cases, 4 microservices).',
      'Cut navigation load time on gigapixel slide workloads from 2.8 s to 0.9 s, and redundant API calls by 45%, with tile streaming and image caching.',
      'Cut 8-hour recording timelines from 480 rows to 32 with adaptive chunking, and moved heavy processing into one-time Celery jobs so review APIs read precomputed data (Orca Collector).',
      'Built real-time layers (SSE, WebSocket) with automatic reconnection, an 85-event audit trail with Grafana dashboards, and CI/CD across 6+ environments.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Codistan Ventures',
    period: 'May 2023 — June 2024',
    points: [
      'Upgraded the Bizb storefront from Next.js 9 to 13: First Contentful Paint down 77% (1.2 s to 278 ms), page load from 8.7 s to 6.1 s, and GTmetrix performance from 14% to 54%.',
      'Cut API calls by 40% and reduced the initial JavaScript payload with Apollo Client caching and lazy loading.',
      'Revamped the mobile-responsive design, growing mobile traffic (Google Analytics), and centralized tracking with Google Tag Manager.',
      'Built responsive storefronts (Bizb, Land Of Sneaker) with Next.js, Material UI, Tailwind CSS and GraphQL, plus Node.js queries, mutations and data-cleaning scripts.',
    ],
  },
]

// Proprietary work: described in words and illustrated with original sketches, never linked or screenshotted.
export const privateWork = [
  {
    name: 'FISH 3.0',
    kind: 'fish',
    title: 'Digital pathology and cytogenetics workstation',
    tag: 'Cancer diagnostics',
    text: 'A browser-based workstation where AI pre-detects cells so pathologists verify instead of counting by hand. Whole-slide viewers over huge scans with a custom on-demand tile source, and a Canvas cell-review grid.',
  },
  {
    name: 'MedFlow',
    kind: 'medflow',
    title: 'AI-assisted pathology triage platform',
    tag: 'Clinical decision support',
    text: 'AI analyzes blood reports, slides and clinical history, and pathologists approve before anything reaches the lab. Review modules where every finding links back to its source, and a case-aware assistant over WebSockets.',
  },
  {
    name: 'Donut',
    kind: 'donut',
    title: 'AI document redaction and data extraction',
    tag: 'Compliance tooling',
    text: 'AI redacts and extracts document data while reviewers verify. Confidence tiers, one-click bulk redaction, keyboard shortcuts, fine-grained permissions and audit logging.',
  },
  {
    name: 'Orca Collector',
    kind: 'orca',
    title: 'Session-recording annotation platform',
    tag: 'AI training data',
    text: 'Turns desktop recordings into labeled training data. Resumable direct-to-S3 uploads, one-time Celery processing, and adaptive chunking that keeps long timelines quick to browse.',
  },
]

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Canvas API', 'OpenSeadragon'] },
  { group: 'Backend & data', items: ['FastAPI', 'Node.js', 'GraphQL', 'Celery', 'Redis', 'PostgreSQL', 'S3'] },
  { group: 'Architecture', items: ['Clean Architecture', 'Nx monorepo', 'Micro-frontends', 'SSE & WebSocket', 'RBAC'] },
  { group: 'Delivery', items: ['Docker', 'Bitbucket Pipelines', 'AWS', 'Grafana', 'Vitest', 'Playwright'] },
]

export const education = {
  school: 'COMSATS University, Islamabad',
  degree: 'Bachelor of Computer Science',
  period: '2019 — 2023',
  cert: 'AWS Certified Cloud Practitioner, issued Dec 2025',
}

// ART: drop image files into /public/art and list them here, e.g.
// { src: 'art/moon.jpg', title: 'Moon study', medium: 'Digital', year: '2025' }
export type ArtPiece = { src: string; title: string; medium?: string; year?: string }
export const art: ArtPiece[] = [
  { src: 'art/shikara.jpg', title: 'Shikara at sunset', medium: 'Digital' },
  { src: 'art/dervish.jpg', title: 'Whirling dervish', medium: 'Pencil' },
  { src: 'art/moonlit.jpg', title: 'Full moon', medium: 'Digital' },
  { src: 'art/badshahi.jpg', title: 'Through the arch', medium: 'Digital' },
  { src: 'art/portrait.jpg', title: 'Portrait', medium: 'Pencil' },
  { src: 'art/chai.jpg', title: 'Late-night chai', medium: 'Digital' },
  { src: 'art/dusk.jpg', title: 'Dusk on the river', medium: 'Digital' },
]

// Things outside work. Icon names: pencil, cookie, leaf, book, tv, heart.
export const offClock = [
  { icon: 'pencil', title: 'Pencil and digital art', text: 'Nature and people, sometimes colourful, sometimes dark.' },
  { icon: 'cookie', title: 'Cookies and brownies', text: 'Tested on friends. Approved by friends.' },
  { icon: 'leaf', title: 'Nature and people', text: 'My two favourite things to draw and to be around.' },
  { icon: 'book', title: 'Thrillers and mysteries', text: 'Fiction, murder mysteries, and "one more chapter".' },
  { icon: 'tv', title: 'Binge list', text: 'Friends, Breaking Bad, Derry Girls, Game of Thrones.' },
  { icon: 'heart', title: 'On repeat', text: 'Taylor Swift, NF and more.' },
]
