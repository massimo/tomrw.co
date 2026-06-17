import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function TheGap() {
  const stats = [
    { num: '$90B+', label: 'Global ancillary revenue market' },
    { num: '9–20 mo', label: 'Typical airline IT implementation cycle' },
    { num: '3–4%', label: 'Airline IT spend vs 10% for banks' },
    { num: '87%', label: 'Average booking checkout abandonment' },
  ]

  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>01 — The Gap</span></>}
        right={<Logo />}
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 40 }}>
        <div className="label">The problem</div>
        <h2
          className="display"
          style={{ fontSize: 104, marginTop: 24, maxWidth: 1600, lineHeight: 1 }}
        >
          Airlines are built for yesterday —<br />and <em style={{ color: 'var(--accent-2)' }}>can't keep pace with AI.</em>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            marginTop: 96,
            borderTop: '1px solid var(--line)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '40px 40px 40px 0',
                borderRight: i < 3 ? '1px solid var(--line-soft)' : undefined,
                paddingLeft: i > 0 ? 40 : 0,
              }}
            >
              <div
                className="display"
                style={{ fontSize: 80, color: 'var(--accent-2)', lineHeight: 1 }}
              >
                {s.num}
              </div>
              <div className="label" style={{ marginTop: 16, color: 'var(--muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 01 · The Problem</span>} right="02" />
    </Slide>
  )
}
