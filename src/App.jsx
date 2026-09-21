import { useEffect, useState } from 'react'

const SKILLS = ['JAVASCRIPT', 'REACT', 'TAILWIND', 'PHP', 'MYSQL', 'WORDPRESS', 'PYTHON', 'AZURE', 'KUBERNETES', 'C++']

const STATS = [
  { label: 'STUDYING', value: 'B.IT', sub: 'Cyber Security' },
  { label: 'BASED IN', value: 'Geelong', sub: 'AU' },
  { label: 'COHORT RANK', value: 'Top 10%', sub: 'w/ distinctions' },
  { label: 'FOCUS', value: 'Full-Stack', sub: 'w/ security edge' },
]

const TIMELINE = [
  {
    n: '01',
    range: 'MAR 2025 — PRESENT',
    place: 'GEELONG WEST, AU',
    tag: 'CURRENT',
    role: 'IT Support Specialist',
    org: 'Geelong West Neighborhood House',
    bullets: [
      'Rebuilt the enrolment system in WordPress → 35% faster processing.',
      'Ran hands-on digital-literacy workshops for 50+ senior residents.',
      'Automated weekly Azure backups, cutting recovery time by 80%.',
    ],
  },
  {
    n: '02',
    range: 'MAR 2024 — PRESENT',
    place: 'GEELONG, AU',
    tag: 'ONGOING',
    role: 'Wellbeing Ambassador',
    org: 'Deakin University',
    bullets: [
      'Designed stress-management workshops for 200+ students (95% CSAT).',
      'Coordinated with counsellors to streamline mental-health resource flow.',
    ],
  },
  {
    n: '03',
    range: 'MAR 2023 — PRESENT',
    place: 'WAURN PONDS, AU',
    tag: 'NIGHT SHIFT',
    role: 'Shift Manager',
    org: "Domino's, Waurn Ponds",
    bullets: [
      'Led a team of 8 through peak hours — order speed up 20%.',
      'Rewrote the staff schedule → 15% cut in labour cost, quality intact.',
    ],
  },
  {
    n: '04',
    range: 'JUL 2022 — SEP 2022',
    place: 'AHMEDABAD, IN',
    tag: 'ARCHIVED',
    role: 'Project Coordinator',
    org: 'Government of India',
    bullets: [
      'Delivered a defence expo with 50+ exhibitors and 5,000+ attendees.',
      'Owned stakeholder comms and end-to-end logistics for sponsors.',
    ],
  },
]

const PROJECTS = [
  {
    tags: ['REACT', 'VITE', 'TAILWIND'],
    title: 'This Portfolio',
    bullets: [
      'Fully custom design system — OKLCH color tokens, hand-drawn type pairing.',
      'Data-driven, single-file React architecture, no component libraries.',
      'Built and shipped solo, front to back of the deploy pipeline.',
    ],
    stats: [
      { value: '0', label: 'UI LIBS' },
      { value: '6', label: 'SECTIONS' },
      { value: '100%', label: 'HAND-CODED' },
    ],
  },
  {
    tags: ['PHP', 'MYSQL', 'WORDPRESS'],
    title: 'Enrolment System Rebuild',
    bullets: [
      "Rebuilt a neighborhood house's enrolment system end-to-end.",
      '35% faster processing for the staff running it daily.',
      'Replaced a paper-based intake with a working WordPress + MySQL flow.',
    ],
    stats: [
      { value: '35%', label: 'FASTER' },
      { value: 'LIVE', label: 'IN PROD' },
      { value: 'PHP', label: 'BACKEND' },
    ],
  },
  {
    tags: ['PYTHON', 'REQUESTS', 'BEAUTIFULSOUP'],
    title: 'Web Security Analyzer',
    bullets: [
      'Detects SQLi and XSS across 15+ test targets.',
      '40% fewer false positives than off-the-shelf scanners.',
      'Reports written for humans, not just SOC dashboards.',
    ],
    stats: [
      { value: '15+', label: 'TARGETS' },
      { value: '40%', label: 'FP DROP' },
      { value: '<8s', label: 'RUNTIME' },
    ],
  },
  {
    tags: ['KALI', 'METASPLOIT', 'DVWA', 'WIRESHARK'],
    title: 'Home Cybersecurity Lab',
    bullets: [
      '20+ scripted penetration tests against isolated VMs.',
      'Documented mitigations and rewrote weak Python patterns.',
      'Runs on a mini-PC humming quietly under my desk.',
    ],
    stats: [
      { value: '20+', label: 'PEN TESTS' },
      { value: '35', label: 'CVES STUDIED' },
      { value: '24/7', label: 'UPTIME' },
    ],
  },
]

const TOOLBOX = [
  { label: '// WEB', items: ['JavaScript', 'React', 'HTML/CSS', 'Tailwind', 'WordPress', 'PHP', 'MySQL'] },
  { label: '// LANGUAGES', items: ['Python', 'C++', 'Java', 'SQL'] },
  { label: '// CLOUD / DEVOPS', items: ['Azure', 'AWS', 'Kubernetes'] },
  { label: '// SECURITY', items: ['Kali Linux', 'Metasploit', 'Wireshark', 'DVWA'] },
  { label: '// HUMAN STUFF', items: ['Stakeholder coordination', 'Workshop facilitation', 'Crisis management'] },
]

function IntroLoader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setExiting(true), 300)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setProgress((p) => Math.min(100, p + Math.random() * 18 + 6)), 180)
    return () => clearTimeout(t)
  }, [progress])

  useEffect(() => {
    if (!exiting) return
    const t = setTimeout(onDone, 400)
    return () => clearTimeout(t)
  }, [exiting, onDone])

  return (
    <div
      className={`fixed inset-0 z-50 bg-background bg-grid flex items-center px-6 sm:px-12 transition-opacity duration-400 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full">
        <h1 className="font-hand text-[13vw] sm:text-[9vw] leading-[0.95] text-cream">
          I <span className="highlight">Debug</span>
          <br />
          the <span className="italic">unseen.</span>
          <br />I <span className="underline decoration-accent decoration-8 underline-offset-[6px]">ship</span> the
          rest.
        </h1>
        <div className="mt-14 flex items-end justify-between gap-6">
          <div className="flex-1 max-w-md">
            <div className="font-hand text-6xl text-cream">
              {Math.floor(progress)}
              <span className="text-accent">%</span>
            </div>
            <div className="mt-3 h-3 w-full border-l-2 border-cream/70 relative">
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-cream transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <button
            onClick={() => setProgress(100)}
            className="font-mono text-xs sm:text-sm bg-ink text-cream px-4 py-3 hover:bg-accent hover:text-ink transition-colors shrink-0"
          >
            SKIP INTRO →
          </button>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ n, title, className = '' }) {
  return (
    <p className={`font-mono text-xs tracking-[0.3em] ${className}`}>
      SECTION {n} — {title}
    </p>
  )
}

function Marquee() {
  const loop = [...SKILLS, ...SKILLS]
  return (
    <div className="overflow-hidden bg-ink py-6 border-y border-edge/25">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((s, i) => (
          <span key={i} className="flex items-center gap-10 font-hand text-3xl sm:text-4xl text-cream">
            {s}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Nav() {
  return (
    <div className="flex items-center justify-between px-6 sm:px-10 py-6 font-mono text-xs tracking-[0.2em] text-cream/70">
      <span>// DEV SHAH</span>
      <span className="hidden sm:inline">DEAKIN UNIVERSITY · GEELONG</span>
      <span>V.02</span>
    </div>
  )
}

function Who() {
  return (
    <section className="bg-background bg-grid px-6 sm:px-10 pt-6 pb-24">
      <SectionLabel n="01" title="WHO" className="text-accent mb-6" />
      <h1 className="font-hand font-bold text-7xl sm:text-8xl md:text-9xl leading-[0.9] text-cream">
        dev
        <br />
        shah.
      </h1>
      <p className="mt-8 max-w-2xl text-lg sm:text-xl text-cream/80 leading-relaxed">
        Full-stack developer with a <span className="highlight">cybersecurity</span> backbone. I build things
        end-to-end — and I know exactly how they could break.
      </p>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-edge/25 pt-8">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="font-mono text-xs tracking-[0.2em] text-cream/50 mb-1">{s.label}</p>
            <p className="font-hand text-3xl text-cream">{s.value}</p>
            <p className="font-mono text-sm text-cream/60">{s.sub}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 font-mono text-xs tracking-[0.2em] text-cream/40">↓ GO ON, SCROLL DOWN</p>
    </section>
  )
}

function Why() {
  return (
    <section className="bg-background px-6 sm:px-10 py-24">
      <SectionLabel n="02" title="WHY" className="text-accent mb-6" />
      <blockquote className="font-hand text-4xl sm:text-5xl leading-tight text-cream max-w-4xl">
        "If the feature doesn't
        <br />
        <span className="highlight">work honestly</span>,<br />
        I keep shipping — with a <span className="underline decoration-accent decoration-4">different approach</span>,
        <br />
        a cleaner query,
        <br />
        and a lot more coffee."
      </blockquote>
      <p className="mt-10 max-w-2xl text-cream/70 leading-relaxed">
        I like the boring stuff nobody photographs — the API that responds on time, the enrolment form that finally
        works, the deploy that doesn't page anyone at 2am. Good software is customer service in disguise.
      </p>
    </section>
  )
}

function Where() {
  return (
    <section className="bg-cream text-ink px-6 sm:px-10 py-24">
      <div className="flex items-baseline justify-between mb-12">
        <div>
          <SectionLabel n="03" title="WHERE" className="text-coral mb-6" />
          <h2 className="font-hand font-bold text-6xl sm:text-8xl leading-none">places I've tinkered at.</h2>
        </div>
        <p className="hidden sm:block font-mono text-sm text-ink/50">04 STOPS</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {TIMELINE.map((item) => (
          <div
            key={item.n}
            className="group relative border-2 border-ink px-6 sm:px-8 py-6 bg-cream hover:bg-ink transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 font-mono text-xs text-ink/60 group-hover:text-cream/60 transition-colors">
                <span className="bg-ink text-cream px-2 py-0.5 group-hover:bg-accent group-hover:text-ink transition-colors">
                  {item.n}
                </span>
                <span>
                  {item.range} · {item.place}
                </span>
              </div>
              <span className="font-mono text-xs tracking-[0.15em] text-coral group-hover:text-accent transition-colors">
                {item.tag}
              </span>
            </div>
            <h3 className="font-hand text-3xl sm:text-4xl mb-4 group-hover:text-cream transition-colors">
              {item.role}{' '}
              <span className="text-ink/40 group-hover:text-cream/60 transition-colors">// {item.org}</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {item.bullets.map((b, i) => (
                <p
                  key={i}
                  className="border-l-2 border-coral group-hover:border-accent pl-4 text-ink/80 group-hover:text-cream/80 transition-colors"
                >
                  {b}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function What() {
  return (
    <section className="bg-background px-6 sm:px-10 py-24">
      <SectionLabel n="04" title="WHAT" className="text-accent mb-6" />
      <h2 className="font-hand font-bold text-6xl sm:text-8xl text-cream mb-12">best work.</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="border-2 border-cream/30 bg-ink px-6 sm:px-8 py-8 hover:border-accent transition-colors"
          >
            <p className="font-mono text-xs tracking-[0.15em] text-accent mb-4">{p.tags.join(' · ')}</p>
            <h3 className="font-hand text-4xl text-cream mb-6">{p.title}</h3>
            <div className="space-y-2 mb-8">
              {p.bullets.map((b, i) => (
                <p key={i} className="flex gap-2 text-cream/70">
                  <span className="text-accent">→</span>
                  {b}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-edge/25 pt-6">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-hand text-3xl text-cream">{s.value}</p>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-cream/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Toolbox() {
  return (
    <section className="bg-background px-6 sm:px-10 py-24">
      <SectionLabel n="05" title="TOOLBOX" className="text-accent mb-6" />
      <h2 className="font-hand font-bold text-5xl sm:text-7xl text-cream mb-12">things I use daily.</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TOOLBOX.map((box) => (
          <div key={box.label} className="border border-edge/25 px-6 py-6">
            <p className="font-mono text-xs tracking-[0.15em] text-cream/50 mb-4">{box.label}</p>
            <div className="flex flex-wrap gap-3">
              {box.items.map((item) => (
                <span
                  key={item}
                  className="border border-cream/40 px-3 py-1.5 font-mono text-sm text-cream hover:bg-accent hover:text-ink hover:border-accent transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="bg-background px-6 sm:px-10 py-24 text-center">
      <SectionLabel n="06" title="SAY HI" className="text-accent mb-6 justify-center" />
      <h2 className="font-hand font-bold text-6xl sm:text-8xl text-cream mb-8">contact me.</h2>
      <p className="max-w-xl mx-auto text-cream/70 leading-relaxed mb-10">
        Full-stack roles, internships, freelance work, or a friendly ping — I answer everything. Faster if you use
        the subject line <span className="highlight">re: ports open</span>.
      </p>

      <a
        href="mailto:dev_australia@outlook.com"
        className="inline-block bg-accent text-ink font-hand text-3xl sm:text-5xl px-8 py-6 mb-8 hover:-rotate-2 transition-transform"
      >
        → dev_australia@outlook.com
      </a>

      <p className="font-mono text-xs tracking-[0.15em] text-cream/50">
        <a href="tel:+61447574465" className="hover:text-cream transition-colors">
          0447 574 465
        </a>{' '}
        ·{' '}
        <a
          href="https://www.linkedin.com/in/devvs/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cream transition-colors"
        >
          LINKEDIN
        </a>
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-edge/25 px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] tracking-[0.1em] text-cream/40">
      <span>BUILT IN GEELONG // POWERED BY CAFFEINE</span>
      <span>CAUTION: REPLIES MAY ARRIVE POST-MIDNIGHT</span>
      <span>© DEV SHAH · V.02</span>
    </footer>
  )
}

function App() {
  const [introDone, setIntroDone] = useState(() => sessionStorage.getItem('intro-seen') === 'true')

  const finishIntro = () => {
    sessionStorage.setItem('intro-seen', 'true')
    setIntroDone(true)
  }

  return (
    <main className="min-h-screen bg-background text-cream overflow-x-hidden">
      {!introDone && <IntroLoader onDone={finishIntro} />}
      <Nav />
      <Who />
      <Marquee />
      <Why />
      <Where />
      <What />
      <Toolbox />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
