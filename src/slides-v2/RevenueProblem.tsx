import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

const leakage = [
  {
    area: 'Cabin upgrade revenue',
    how: 'Static pricing, no dynamic bidding. Seats fly empty in Business while passengers who\'d pay more are never offered the chance. A mid-size carrier like SAS has ~€100M in upgrade potential — yet historically paid 7–8% commission to SaaS vendors for basic bidding tools. TO:MRW delivers smarter pricing at a fraction of that cost.',
    loss: '~€100M potential',
    sublabel: 'For a carrier the size of SAS',
    solution: 'Upgrade Optimizer',
  },
  {
    area: 'Checkout abandonment',
    how: 'Outdated flows, no modern payments (Apple Pay, Swish, Klarna), poor mobile UX. Industry average abandonment rate sits at 87% — each percentage point recovered is direct revenue.',
    loss: '3–5% revenue uplift',
    sublabel: 'From checkout optimisation alone',
    solution: 'Checkout Optimizer',
  },
  {
    area: 'Ancillary & dynamic pricing',
    how: 'Bags, meals, seats, lounge — sold at the wrong moment, wrong price, wrong passenger. Most airlines: <30% attach rate. Ancillary prices are static or rule-based with no real-time demand elasticity. Both problems share the same root cause: no intelligent retailing layer.',
    loss: '€5–20M per carrier',
    sublabel: 'Combined ancillary uplift potential',
    solution: 'Ancillary Platform + Pricing Engine',
  },
  {
    area: 'Future retailing & holidays',
    how: 'Airlines like SAS already operate holiday package businesses — hotels, cars, experiences bundled around the ticket. This is the future of airline retail: moving beyond seat sales into becoming a full travel commerce platform. A product layer TO:MRW can power directly.',
    loss: 'Emerging revenue stream',
    sublabel: 'Powering the airline of tomorrow',
    solution: 'Retail Platform',
  },
]

export function RevenueProblem() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>03 — Revenue Leakage</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 60 }}>
        <div className="label">Chapter 03 · The opportunity</div>
        <h2 className="display" style={{ fontSize: 96, marginTop: 16, maxWidth: 1600, lineHeight: 1 }}>
          The revenue is there.<br /><em style={{ color: 'var(--accent-2)' }}>It's just leaking.</em>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          marginTop: 56,
          flex: 1,
          borderTop: '1px solid var(--line)',
        }}
      >
        {leakage.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '32px 28px 32px 0',
              borderRight: i < 3 ? '1px solid var(--line-soft)' : undefined,
              paddingLeft: i > 0 ? 28 : 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div className="label" style={{ color: 'var(--accent-2)' }}>{item.area}</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)', flex: 1 }}>{item.how}</p>
            <div>
              <div className="label">Opportunity</div>
              <div
                className="display"
                style={{ fontSize: 30, marginTop: 8, lineHeight: 1.1, color: 'var(--ink)' }}
              >
                {item.loss}
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{item.sublabel}</div>
            </div>
            <div
              style={{
                borderTop: '1px solid var(--line-soft)',
                paddingTop: 14,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              → {item.solution}
            </div>
          </div>
        ))}
      </div>

      <Chrome position="bottom" left={<span>Chapter 03 · Opportunity</span>} right="04" />
    </Slide>
  )
}
