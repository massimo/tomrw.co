import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function LongTermVision() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>10 — Long-Term Vision</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 56 }}>
        <div className="label">Chapter 10</div>
        <h2 className="display" style={{ fontSize: 96, marginTop: 16, maxWidth: 1500, lineHeight: 1 }}>
          The <em style={{ color: 'var(--accent-2)' }}>modular operating layer</em> for airlines.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, marginTop: 96, flex: 1 }}>
        <div>
          <div className="label">Across the airline</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: 24 }}>
            {[
              { title: 'Commercial', desc: 'Retail, pricing, ancillaries' },
              { title: 'Operations', desc: 'Crew, day-of-travel, ops AI', padLeft: true },
              { title: 'Customer servicing', desc: 'Conversational, self-service', borderBottom: true },
              { title: 'AI enablement', desc: 'Models, orchestration, agents', padLeft: true, borderBottom: true },
            ].map((item, i) => (
              <div key={i} style={{
                borderTop: '1px solid var(--line)',
                borderBottom: item.borderBottom ? '1px solid var(--line)' : undefined,
                padding: item.padLeft ? '28px 0 28px 32px' : '28px 0',
              }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, lineHeight: 1 }}>{item.title}</div>
                <div className="small" style={{ marginTop: 10 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="label">Future expansion</div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 24 }}>
            {[
              'Airline-specific AI models',
              'Dynamic pricing',
              'Loyalty & award optimisation',
              'B2C conversational booking',
            ].map((item, i, arr) => (
              <li key={i} style={{
                borderTop: '1px solid var(--line-soft)',
                borderBottom: i === arr.length - 1 ? '1px solid var(--line-soft)' : undefined,
                padding: '22px 0',
                display: 'flex',
                gap: 24,
                alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--accent-2)', letterSpacing: '0.14em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 26 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 10 · Vision</span>} right="18" />
    </Slide>
  )
}
