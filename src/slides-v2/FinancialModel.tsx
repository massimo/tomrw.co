import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function FinancialModel() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>12 — Financial Model</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 56 }}>
        <div className="label">Chapter 12 · Financials</div>
        <h2 className="display" style={{ fontSize: 96, marginTop: 16, lineHeight: 1 }}>
          Lean burn. <em style={{ color: 'var(--accent-2)' }}>Real upside.</em>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 0,
          marginTop: 72,
          flex: 1,
        }}
      >
        {/* Cost */}
        <div style={{ paddingRight: 64, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div className="label">Cost structure</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { item: 'Founder(s)', cost: '€350K' },
              { item: 'Engineering (2 FTE)', cost: '€180K' },
              { item: 'Infrastructure & AI', cost: '€36K' },
              { item: 'Legal & corporate', cost: '€30K' },
              { item: 'Sales & events', cost: '€24K' },
              { item: 'Other', cost: '€44K' },
            ].map((row, i, arr) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '14px 0',
                  borderTop: '1px solid var(--line-soft)',
                  borderBottom: i === arr.length - 1 ? '1px solid var(--line)' : undefined,
                  fontSize: 18,
                  gap: 16,
                }}
              >
                <span style={{ color: 'var(--ink-2)' }}>{row.item}</span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 16,
                    letterSpacing: '0.06em',
                    color: 'var(--ink)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.cost}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span className="label">Year 1 total burn</span>
            <span className="display" style={{ fontSize: 52, color: 'var(--ink)' }}>€664K</span>
          </div>
          <div className="label" style={{ color: 'var(--muted)' }}>~€55K / month</div>
        </div>

        {/* Revenue scenarios */}
        <div
          style={{
            borderLeft: '1px solid var(--line)',
            borderRight: '1px solid var(--line)',
            padding: '0 64px',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          <div className="label">Revenue scenarios</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              style={{
                border: '1px solid var(--line)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div className="label">Conservative</div>
              <div className="display" style={{ fontSize: 48, lineHeight: 1 }}>
                €120K <span style={{ fontSize: 24, color: 'var(--muted)' }}>ARR Y1</span>
              </div>
              <div className="display" style={{ fontSize: 36, color: 'var(--muted)' }}>
                €380K Y2
              </div>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 4 }}>
                SAS revenue share only in pilot. First paid contract month 8. One additional airline by month 18.
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--line)',
                borderLeft: '3px solid var(--accent-2)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div className="label">Aggressive</div>
              <div className="display" style={{ fontSize: 48, lineHeight: 1 }}>
                €280K <span style={{ fontSize: 24, color: 'var(--muted)' }}>ARR Y1</span>
              </div>
              <div className="display" style={{ fontSize: 36, color: 'var(--accent-2)' }}>
                €900K+ Y2
              </div>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 4 }}>
                SAS full paid contract month 6. Two airlines by month 15. Third product deployed to SAS month 14.
              </p>
            </div>
          </div>
        </div>

        {/* Funding ask */}
        <div style={{ paddingLeft: 64, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div className="label">Funding ask</div>

          <div>
            <div className="display" style={{ fontSize: 120, lineHeight: 0.9, color: 'var(--accent-2)' }}>
              €1.4M
            </div>
            <div style={{ marginTop: 16, fontSize: 20, color: 'var(--ink-2)' }}>Seed — 24-month runway</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 8 }}>
            {[
              { k: 'Use of funds', v: 'Engineering, infra, legal, events' },
              { k: 'Break-even', v: 'Month 28–32 (conservative)' },
              { k: 'LTV : CAC', v: '10–25× at maturity' },
              { k: 'Gross margin target', v: '72–80%' },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid var(--line-soft)',
                  padding: '16px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <div className="label">{row.k}</div>
                <div style={{ fontSize: 20, color: 'var(--ink)' }}>{row.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 12 · Financials</span>} right="13" />
    </Slide>
  )
}
