import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

const barriers = [
  {
    n: '01',
    t: 'Legacy PSS lock-in',
    d: 'The core PSS (Amadeus, Sabre, Navitaire) is load-bearing infrastructure. Any change risks disrupting check-in, boarding, revenue accounting — simultaneously. No CTO will touch it without years of planning.',
  },
  {
    n: '02',
    t: 'Vendor monopoly dynamics',
    d: 'Amadeus and Sabre operate as oligopolies. Switching costs are astronomical. Airlines accept slow release cycles because the alternative is a multi-year migration costing €50–200M.',
  },
  {
    n: '03',
    t: 'Procurement bureaucracy',
    d: 'Enterprise airline procurement involves legal, compliance, IT security, finance, and multiple VP sign-offs. A €200K annual SaaS contract can take 18 months to close.',
  },
  {
    n: '04',
    t: 'Internal talent gap',
    d: 'Airline digital teams are often understaffed relative to system complexity. Product managers lack engineering depth; engineers lack airline domain knowledge. Experimentation is rare.',
  },
  {
    n: '05',
    t: 'AI potential underutilised',
    d: 'Conversational CX, agentic operations, dynamic retailing — all being re-imagined across every other industry. Airlines remain on the sidelines.',
  },
]

export function WhyAirlinesSlow() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>02 — Why Airlines Are Slow</span></>}
        right={<Logo />}
      />

      <div className="h-section" style={{ marginTop: 80 }}>
        <div className="lead">
          <div className="kicker">Chapter 02</div>
          <div className="no">02</div>
          <div className="label" style={{ marginTop: 24 }}>Five structural barriers to innovation</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <h2>The ceiling is <em>structural,</em> not cultural.</h2>
          <div className="problem-list">
            {barriers.map((b) => (
              <div className="row" key={b.n}>
                <span className="n">{b.n}</span>
                <span className="t">{b.t}</span>
                <span className="d">{b.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 02 · Barriers</span>} right="03" />
    </Slide>
  )
}
