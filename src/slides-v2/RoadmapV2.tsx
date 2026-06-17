import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

const phases = [
  {
    phase: 'Phase 1',
    period: 'M 0 – 6',
    title: 'Foundation & SAS MVP',
    items: [
      'Incorporate TO:MRW. Negotiate IP & employment terms.',
      'Hire first senior engineer. Build core API & airline connectivity layer.',
      'Sign SAS design partner agreement. Define Upgrade Optimizer pilot scope.',
      'Launch Upgrade Optimizer MVP on SAS — 3 routes, email + app trigger, ML pricing.',
      'Collect first revshare data. Build ROI case study for external sales.',
    ],
  },
  {
    phase: 'Phase 2',
    period: 'M 7 – 14',
    title: 'First External Airline + Seed Round',
    items: [
      'Convert SAS pilot to full paid contract (SaaS + revshare). First real ARR.',
      'Close seed round (€1.2–1.5M) using SAS ROI data and LOI from airline #2.',
      'Hire AI/ML engineer. Build Checkout Optimizer and Ancillary Platform.',
      'Sign airline #2 (Finnair or TAP). Begin implementation sprint.',
      'Founder transitions out of SAS — full-time CEO by month 12.',
    ],
  },
  {
    phase: 'Phase 3',
    period: 'M 15 – 24',
    title: 'Scale Product Suite + Third Airline',
    items: [
      'Hire enterprise sales lead and second engineer.',
      'Launch Dynamic Pricing Engine and Agentic AI — completes platform suite.',
      'Sign airline #3 — target LCC or new geography to diversify portfolio.',
      'Build partner programme for GSA / system integrator distribution.',
      'Begin Series A preparation: 4+ airlines, €600K+ ARR, clear PMF narrative.',
    ],
  },
]

export function RoadmapV2() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>13 — Roadmap</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 56 }}>
        <div className="label">Chapter 13</div>
        <h2 className="display" style={{ fontSize: 96, marginTop: 16 }}>
          24 months to <em style={{ color: 'var(--accent-2)' }}>Series A.</em>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          marginTop: 64,
          flex: 1,
        }}
      >
        {phases.map((p, i) => (
          <div
            key={i}
            style={{
              borderTop: '1px solid var(--line)',
              borderRight: i < 2 ? '1px solid var(--line-soft)' : undefined,
              padding: '32px 40px 32px 0',
              paddingLeft: i > 0 ? 40 : 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -7,
                left: i > 0 ? 40 : 0,
                width: 13,
                height: 13,
                background: 'var(--accent-2)',
                borderRadius: '50%',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="label">{p.phase}</div>
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 32,
                  color: 'var(--accent-2)',
                  lineHeight: 1,
                }}
              >
                {p.period}
              </div>
            </div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              {p.title}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
              {p.items.map((item, j) => (
                <li
                  key={j}
                  style={{
                    fontSize: 16,
                    color: 'var(--ink-2)',
                    lineHeight: 1.5,
                    paddingLeft: 18,
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '0.7em',
                      width: 8,
                      height: 1,
                      background: 'var(--ink)',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Chrome position="bottom" left={<span>Chapter 13 · Roadmap</span>} right="14" />
    </Slide>
  )
}
