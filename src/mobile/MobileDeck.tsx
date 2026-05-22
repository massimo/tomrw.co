import { useState, useEffect, useRef, useCallback } from 'react'
import './mobile.css'

const SWIPE_THRESHOLD = 50

export function MobileDeck() {
  const [current, setCurrent] = useState(0)
  const total = 19
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index))
    setCurrent(clamped)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Swipe
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) next()
        else prev()
      }
      touchStartRef.current = null
    }
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  return (
    <div className="m-deck" ref={containerRef}>
      <div className="m-progress">
        <div className="m-progress-bar" style={{ width: `${((current + 1) / total) * 100}%` }} />
      </div>

      <div className="m-slides">
        <div className="m-slide-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          <MCover />
          <MQuote />
          <MContents />
          <MWhyTomrw />
          <MWhatWeAre />
          <MThreePillars />
          <MProductPlatform />
          <MDevOps />
          <MInnovationLabs />
          <MSasPartnership />
          <MCommercialModel />
          <MAfKlm />
          <MPartnershipOptions />
          <MMvo />
          <MWhyNow />
          <MGtm />
          <MRoadmap />
          <MLongTermVision />
          <MFinal />
        </div>
      </div>

      <div className="m-nav">
        <button className="m-nav-btn" onClick={prev} disabled={current === 0} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="m-nav-info">
          <span className="m-nav-current">{current + 1}</span>
          <span className="m-nav-sep">/</span>
          <span>{total}</span>
        </div>
        <button className="m-nav-btn" onClick={next} disabled={current === total - 1} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  )
}

/* ---- Mobile Slide Components ---- */

function MSlide({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`m-slide ${className}`}>{children}</div>
}

function MChrome({ label }: { label: string }) {
  return (
    <div className="m-chrome">
      <span className="m-chrome-dot" />
      <span>{label}</span>
    </div>
  )
}

function MCover() {
  return (
    <MSlide className="m-cover">
      <div className="m-cover-top">
        <span className="m-logo">TO<span className="col">:</span>MRW</span>
        <span className="m-label-sm">2026</span>
      </div>
      <div className="m-cover-center">
        <p className="m-label-sm">— Airline technology, rebuilt for tomorrow</p>
        <h1 className="m-cover-title">TO<span className="col">:</span>MRW</h1>
        <p className="m-cover-tag">
          A travel technology company built by airline insiders to accelerate innovation, product delivery, and AI adoption across the airline industry.
        </p>
      </div>
      <div className="m-cover-bottom">
        <span className="m-stamp">Confidential · For SAS</span>
      </div>
    </MSlide>
  )
}

function MQuote() {
  return (
    <MSlide>
      <MChrome label="Opening" />
      <div className="m-quote-mark">&ldquo;</div>
      <blockquote className="m-blockquote">
        When it comes to the future, there are three kinds of people: <em>those who let it happen, those who make it happen,</em> and those who <em>wonder what happened.</em>
      </blockquote>
      <p className="m-attrib">— A guiding principle for TO:MRW</p>
    </MSlide>
  )
}

function MContents() {
  const chapters = [
    { ix: '01', title: 'Why TO:MRW' },
    { ix: '02', title: 'Built on three pillars' },
    { ix: '03', title: 'The product platform' },
    { ix: '04', title: 'Strategic partnership with SAS' },
    { ix: '05', title: 'Partnership structures' },
    { ix: '06', title: 'Minimum viable organisation' },
    { ix: '07', title: 'Why now' },
    { ix: '08', title: 'Go-to-market & business model' },
    { ix: '09', title: 'Roadmap' },
    { ix: '10', title: 'Long-term vision' },
  ]
  return (
    <MSlide>
      <MChrome label="Contents" />
      <h2 className="m-display" style={{ marginTop: 24 }}>Ten chapters.<br /><em>One</em> thesis.</h2>
      <div className="m-index">
        {chapters.map(ch => (
          <div className="m-index-row" key={ch.ix}>
            <span className="m-index-ix">{ch.ix}</span>
            <span className="m-index-ti">{ch.title}</span>
          </div>
        ))}
      </div>
    </MSlide>
  )
}

function MWhyTomrw() {
  const problems = [
    'Legacy infrastructure blocks speed',
    'Innovation cycles are too long',
    'Product experimentation is difficult',
    'Optimising legacy beats building the future',
    'AI potential remains underutilised',
  ]
  return (
    <MSlide>
      <MChrome label="01 — Why TO:MRW" />
      <p className="m-kicker">Chapter 01</p>
      <h2 className="m-heading">Airlines are <em>still too slow.</em></h2>
      <div className="m-problem-list">
        {problems.map((p, i) => (
          <div className="m-problem-row" key={i}>
            <span className="m-problem-n">{String(i + 1).padStart(2, '0')}</span>
            <span className="m-problem-t">{p}</span>
          </div>
        ))}
      </div>
    </MSlide>
  )
}

function MWhatWeAre() {
  return (
    <MSlide>
      <MChrome label="01 — Why TO:MRW" />
      <p className="m-label-sm">We exist to</p>
      <h2 className="m-display">accelerate airline <em>transformation.</em></h2>
      <div className="m-cards-stack">
        {[
          { title: 'A product company', chip: 'SaaS', desc: 'Day-of-travel, crew, retail and conversational AI products.' },
          { title: 'A DevOps accelerator', chip: 'Services', desc: 'Embedded teams that ship onto customer infrastructure.' },
          { title: 'An innovation lab', chip: 'Labs', desc: 'From idea → prototype → production.' },
        ].map((item, i) => (
          <div className="m-card" key={i}>
            <div className="m-card-head">
              <span className="m-card-title">{item.title}</span>
              <span className="m-chip">{item.chip}</span>
            </div>
            <p className="m-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </MSlide>
  )
}

function MThreePillars() {
  return (
    <MSlide>
      <MChrome label="02 — Three Pillars" />
      <p className="m-kicker">Chapter 02</p>
      <h2 className="m-heading">Built on <em>three</em> pillars.</h2>
      <div className="m-cards-stack">
        {[
          { num: '01', title: 'Product SaaS Platform', desc: 'Modular airline products — commercial, crew, retail, and AI.' },
          { num: '02', title: 'DevOps Accelerator', desc: 'Embedded teams. Build in-house, deploy on customer infra.' },
          { num: '03', title: 'Innovation Labs', desc: 'Rapid MVP development, experimentation, AI prototyping.' },
        ].map((p, i) => (
          <div className="m-card" key={i}>
            <span className="m-card-num">{p.num}</span>
            <span className="m-card-title">{p.title}</span>
            <p className="m-card-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </MSlide>
  )
}

function MProductPlatform() {
  const products = [
    { ico: 'F', name: 'FLEX', desc: 'Day-of-travel commercial platform.', feats: ['Day-of-travel flexibility', 'Courtesy upgrades', 'Upgrade bidding', 'Flexibility as ancillary'] },
    { ico: 'C', name: 'CREW', desc: 'Modern crew experience platform.', feats: ['Roster application', 'Communication hub', 'Bidding & swapping', 'Crew self-service'] },
    { ico: 'A', name: 'AGENTS', desc: 'AI-powered conversational interfaces.', feats: ['Internal super-agent', 'Operational assistant', 'Customer servicing chatbot', 'Knowledge orchestration'] },
    { ico: 'R', name: 'RETAIL', desc: 'Future airline retailing platform.', feats: ['Offers & Orders', 'Ancillary sales', 'Dynamic personalisation', 'NDC-ready'] },
  ]
  return (
    <MSlide>
      <MChrome label="Pillar 01 · Products" />
      <h2 className="m-heading">Four products. <em>One platform.</em></h2>
      <div className="m-prod-grid">
        {products.map((p, i) => (
          <div className="m-prod-card" key={i}>
            <div className="m-prod-ico">{p.ico}</div>
            <div className="m-prod-name">TO<span className="col">:</span>MRW {p.name}</div>
            <p className="m-prod-desc">{p.desc}</p>
            <ul className="m-prod-feats">
              {p.feats.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </MSlide>
  )
}

function MDevOps() {
  return (
    <MSlide>
      <MChrome label="Pillar 02 · DevOps" />
      <p className="m-kicker">Pillar 02</p>
      <h2 className="m-heading">Embedded engineering. <em>Owned by the customer.</em></h2>
      <div className="m-kv-list">
        <div className="m-kv"><span className="m-kv-k">Built</span><span className="m-kv-v">By senior airline-native teams</span></div>
        <div className="m-kv"><span className="m-kv-k">Deployed</span><span className="m-kv-v">On customer infrastructure</span></div>
        <div className="m-kv"><span className="m-kv-k">Owned</span><span className="m-kv-v">Source code transferable</span></div>
        <div className="m-kv"><span className="m-kv-k">Funded by</span><span className="m-kv-v">Services revenue</span></div>
      </div>
    </MSlide>
  )
}

function MInnovationLabs() {
  return (
    <MSlide>
      <MChrome label="Pillar 03 · Innovation" />
      <p className="m-kicker">Pillar 03</p>
      <h2 className="m-heading">Helping airlines <em>experiment faster.</em></h2>
      <div className="m-cards-stack">
        <div className="m-card"><span className="m-card-title">Rapid MVP development</span><p className="m-card-desc">Weeks, not quarters.</p></div>
        <div className="m-card"><span className="m-card-title">Experimentation engine</span><p className="m-card-desc">Hypothesis → test → learn loops.</p></div>
        <div className="m-card"><span className="m-card-title">AI prototyping</span><p className="m-card-desc">Conversational, retailing and ops AI.</p></div>
      </div>
      <p className="m-flow">idea → prototype → <em>production.</em></p>
    </MSlide>
  )
}

function MSasPartnership() {
  return (
    <MSlide>
      <MChrome label="04 — Partnership" />
      <p className="m-kicker">Chapter 04</p>
      <h2 className="m-heading">Designed to work <em>alongside</em> SAS.</h2>
      <div className="m-cards-stack">
        <div className="m-card"><span className="m-card-title">Strategic innovation partner</span></div>
        <div className="m-card"><span className="m-card-title">Co-design product organisation</span></div>
        <div className="m-card"><span className="m-card-title">DevOps acceleration team</span></div>
      </div>
      <p className="m-body" style={{ marginTop: 16 }}>
        SAS can innovate faster — without increasing internal complexity.
      </p>
    </MSlide>
  )
}

function MCommercialModel() {
  return (
    <MSlide>
      <MChrome label="04 — Commercial Model" />
      <h2 className="m-heading">A model that <em>de-risks</em> both sides.</h2>
      <div className="m-cards-stack">
        <div className="m-card m-card-accent">
          <span className="m-card-title">Co-designed products</span>
          <p className="m-card-desc">Revenue-sharing model. Joint innovation. Shared upside.</p>
        </div>
        <div className="m-card">
          <span className="m-card-title">Non co-developed</span>
          <p className="m-card-desc">Free PoC. No upfront commitment. Adopt only what works.</p>
        </div>
      </div>
      <div className="m-footnotes">
        <span>No upfront investment</span>
        <span>No restructuring</span>
        <span>Low-risk collaboration</span>
      </div>
    </MSlide>
  )
}

function MAfKlm() {
  return (
    <MSlide>
      <MChrome label="04 — Strategic Synergy" />
      <h2 className="m-heading">Supporting the <em>AF-KLM</em> transition.</h2>
      <p className="m-body">Retain access to critical knowledge and resources during the integration journey — without scaling internal headcount.</p>
      <div className="m-cards-stack" style={{ marginTop: 12 }}>
        <div className="m-card">
          <span className="m-card-title">i. Innovation lab partner for AF-KLM</span>
          <p className="m-card-desc">Shared experimentation and AI infrastructure.</p>
        </div>
        <div className="m-card">
          <span className="m-card-title">ii. Modular technology provider for SkyTeam</span>
          <p className="m-card-desc">Reusable airline-native modules across the alliance.</p>
        </div>
        <div className="m-card">
          <span className="m-card-title">iii. Industry-wide airline technology platform</span>
          <p className="m-card-desc">Shared innovation, rapid experimentation, AI & retailing.</p>
        </div>
      </div>
      <div className="m-cards-stack" style={{ marginTop: 16 }}>
        <p className="m-label-sm">Key benefits</p>
        <div className="m-bullet-list">
          <span>Continuity of key competencies</span>
          <span>Flexible access to specialised airline talent</span>
          <span>Reduced dependency on internal hiring</span>
        </div>
      </div>
    </MSlide>
  )
}

function MPartnershipOptions() {
  return (
    <MSlide>
      <MChrome label="05 — Options" />
      <p className="m-kicker">Chapter 05</p>
      <h2 className="m-heading">Three models <em>under consideration.</em></h2>
      <p className="m-body">Each option trades complexity for strategic alignment — from standalone to fully co-owned.</p>
      <div className="m-cards-stack">
        <div className="m-card">
          <div className="m-card-head"><span className="m-card-num" style={{ fontSize: 32 }}>A</span><span className="m-chip">No equity</span></div>
          <span className="m-card-title">Strategic Design Partner</span>
          <p className="m-card-desc">A "clean" standalone model. No equity or revenue sharing — SAS engages purely as a strategic customer.</p>
        </div>
        <div className="m-card">
          <div className="m-card-head"><span className="m-card-num" style={{ fontSize: 32 }}>B</span><span className="m-chip">Revenue share</span></div>
          <span className="m-card-title">Royalty Arrangement</span>
          <p className="m-card-desc">SAS receives a percentage of revenue from third-party sales of co-developed products.</p>
        </div>
        <div className="m-card">
          <div className="m-card-head"><span className="m-card-num" style={{ fontSize: 32 }}>C</span><span className="m-chip">20–30%</span></div>
          <span className="m-card-title">Equity Deal</span>
          <p className="m-card-desc">SAS takes a minority equity position in TO:MRW (20–30%).</p>
        </div>
      </div>
    </MSlide>
  )
}

function MMvo() {
  return (
    <MSlide>
      <MChrome label="06 — Organisation" />
      <p className="m-kicker">Chapter 06</p>
      <h2 className="m-heading">A team built to <em>scale on demand.</em></h2>
      <div className="m-cards-stack">
        <div className="m-card">
          <div className="m-card-head"><span className="m-card-title">Phase 01</span><span className="m-chip">Months 0–3</span></div>
          <p className="m-card-desc">1 PM/Founder + 1 Tech Lead</p>
        </div>
        <div className="m-card">
          <div className="m-card-head"><span className="m-card-title">Phase 02</span><span className="m-chip">After Month 3</span></div>
          <p className="m-card-desc">2 Engineers + ½ Product Owner</p>
        </div>
      </div>
      <p className="m-body" style={{ marginTop: 16 }}>Lean core team + elastic delivery organisation.</p>
    </MSlide>
  )
}

function MWhyNow() {
  return (
    <MSlide>
      <MChrome label="07 — Why Now" />
      <p className="m-kicker">Chapter 07</p>
      <h2 className="m-heading">The gap is no longer ideas. <em>It's execution speed.</em></h2>
      <div className="m-cards-stack">
        <div className="m-card"><span className="m-card-title">Post-pandemic modernisation</span><p className="m-card-desc">Airlines rebuilding the stack.</p></div>
        <div className="m-card"><span className="m-card-title">AI reshaping every surface</span><p className="m-card-desc">Ops, retailing, customer interaction.</p></div>
        <div className="m-card"><span className="m-card-title">Monoliths → modular</span><p className="m-card-desc">Composable architecture replacing replatforms.</p></div>
      </div>
    </MSlide>
  )
}

function MGtm() {
  return (
    <MSlide>
      <MChrome label="08 — Go-to-Market" />
      <p className="m-kicker">Chapter 08</p>
      <h2 className="m-heading">Land in <em>operations.</em> Expand to <em>commercial.</em></h2>
      <div className="m-two-col">
        <div>
          <p className="m-label-sm">Land</p>
          <div className="m-chip-row">
            <span className="m-chip">Crew</span>
            <span className="m-chip">DevOps</span>
            <span className="m-chip">Internal tools</span>
          </div>
        </div>
        <div>
          <p className="m-label-sm">Expand</p>
          <div className="m-chip-row">
            <span className="m-chip">Commercial</span>
            <span className="m-chip">AI layers</span>
            <span className="m-chip">Retailing</span>
          </div>
        </div>
      </div>
      <p className="m-flow" style={{ marginTop: 20 }}>Services <em>fund</em>. Products <em>scale.</em></p>
    </MSlide>
  )
}

function MRoadmap() {
  const phases = [
    { month: 'Aug', title: 'Company creation' },
    { month: 'Aug–Oct', title: 'MVP build phase' },
    { month: 'Nov–Dec', title: 'First prospects' },
    { month: 'Jan →', title: 'Scaling' },
  ]
  return (
    <MSlide>
      <MChrome label="09 — Roadmap" />
      <p className="m-kicker">Chapter 09</p>
      <h2 className="m-heading">Six months to <em>first revenue.</em></h2>
      <div className="m-timeline">
        {phases.map((p, i) => (
          <div className="m-timeline-item" key={i}>
            <div className="m-timeline-dot" />
            <div className="m-timeline-content">
              <span className="m-timeline-month">{p.month}</span>
              <span className="m-timeline-title">{p.title}</span>
            </div>
          </div>
        ))}
      </div>
    </MSlide>
  )
}

function MLongTermVision() {
  const areas = [
    { title: 'Commercial', desc: 'Retail, pricing, ancillaries' },
    { title: 'Operations', desc: 'Crew, day-of-travel, ops AI' },
    { title: 'Customer servicing', desc: 'Conversational, self-service' },
    { title: 'AI enablement', desc: 'Models, orchestration, agents' },
  ]
  const future = [
    'Airline-specific AI models',
    'Dynamic pricing',
    'Loyalty & award optimisation',
    'B2C conversational booking',
  ]
  return (
    <MSlide>
      <MChrome label="10 — Vision" />
      <p className="m-kicker">Chapter 10</p>
      <h2 className="m-heading">The <em>modular operating layer</em> for airlines.</h2>
      <p className="m-label-sm" style={{ marginTop: 12 }}>Across the airline</p>
      <div className="m-cards-stack">
        {areas.map((item, i) => (
          <div className="m-card" key={i}>
            <span className="m-card-title">{item.title}</span>
            <p className="m-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="m-label-sm" style={{ marginTop: 16 }}>Future expansion</p>
      <div className="m-bullet-list">
        {future.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </MSlide>
  )
}

function MFinal() {
  return (
    <MSlide className="m-final">
      <div className="m-final-content">
        <p className="m-label-sm" style={{ color: 'rgba(251,248,242,0.55)' }}>Final statement</p>
        <h1 className="m-final-title">
          Airlines don't need more <em>ideas.</em> They need <em>faster execution.</em>
        </h1>
        <p className="m-final-sub">TO:MRW — building the future of airline technology, now.</p>
      </div>
    </MSlide>
  )
}
