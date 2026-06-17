import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function SasContext() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>04 — SAS &amp; The AI Opportunity</span></>}
        right={<Logo />}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          flex: 1,
          marginTop: 60,
        }}
      >
        {/* Left: SAS context */}
        <div style={{ paddingRight: 80, display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div>
            <div className="label">SAS today</div>
            <h2 className="display" style={{ fontSize: 72, marginTop: 16, lineHeight: 1 }}>
              At the forefront —<br />compared to <em style={{ color: 'var(--accent-2)' }}>peers.</em>
            </h2>
          </div>
          <p className="body-copy">
            SAS has a structured digital team, real intent to innovate, and meaningful premium cabin inventory. Within legacy airlines, SAS is progressive. But "ahead of peers" still means operating on systems built in the 1960s.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { t: 'Strong digital team with genuine ambition', l: 'Asset 01' },
              { t: 'Mixed fleet with upgrade inventory potential', l: 'Asset 02' },
              { t: 'Insider founder compresses sales cycle to weeks', l: 'Asset 03' },
              { t: 'SAS brand provides credibility for all future sales', l: 'Asset 04' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid var(--line-soft)',
                  borderBottom: i === 3 ? '1px solid var(--line-soft)' : undefined,
                  padding: '18px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 24,
                }}
              >
                <span style={{ fontSize: 20, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{item.t}</span>
                <span className="label">{item.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: AI acceleration */}
        <div
          style={{
            borderLeft: '1px solid var(--line)',
            paddingLeft: 80,
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          <div>
            <div className="label">Why now: the AI shift</div>
            <h2 className="display" style={{ fontSize: 72, marginTop: 16, lineHeight: 1 }}>
              New tools change<br /><em style={{ color: 'var(--accent-2)' }}>what's possible.</em>
            </h2>
          </div>
          <p className="body-copy">
            LLMs and agentic AI have compressed the cost of building sophisticated airline logic from years to weeks. The gap between "airlines want to innovate" and "airlines can innovate" has never been smaller.
          </p>
          <div className="why-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[
              { signal: 'Signal 01', h: 'Build time: years → weeks', d: 'AI-native development radically cuts the cost of airline-specific logic.' },
              { signal: 'Signal 02', h: 'Agentic ops', d: 'Disruption handling, crew comms, rebooking — all automatable with today\'s models.' },
              { signal: 'Signal 03', h: 'Margin pressure', d: 'Post-pandemic, airlines are hunting ancillary revenue — not future revenue, but today\'s.' },
              { signal: 'Signal 04', h: 'Narrow window', d: 'Incumbents are retrofitting AI. A lean insider team can move faster — but not forever.' },
            ].map((card, i) => (
              <div key={i} className="why-card" style={{ gap: 12 }}>
                <div className="label" style={{ color: 'var(--accent-2)' }}>{card.signal}</div>
                <h3 style={{ fontSize: 26 }}>{card.h}</h3>
                <p style={{ fontSize: 16 }}>{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 04 · Context</span>} right="05" />
    </Slide>
  )
}
