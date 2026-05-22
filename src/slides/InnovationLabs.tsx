import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function InnovationLabs() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>02 — Pillar 03 · Innovation Labs</span></>}
        right={<Logo />}
      />

      <div className="h-section" style={{ marginTop: 64 }}>
        <div className="lead">
          <div className="kicker">Pillar 03</div>
          <div className="no">03</div>
          <div className="label" style={{ marginTop: 24 }}>Innovation Labs</div>
        </div>

        <div className="stack">
          <h2>Helping airlines <em>experiment faster.</em></h2>

          <div className="grid-3" style={{ marginTop: 32 }}>
            <div className="why-card">
              <div className="label">Capability 01</div>
              <h3>Rapid MVP development</h3>
              <p>Weeks, not quarters. Production-grade prototypes designed to be killed or scaled.</p>
            </div>
            <div className="why-card">
              <div className="label">Capability 02</div>
              <h3>Experimentation engine</h3>
              <p>Hypothesis → test → learn loops embedded in customer environments.</p>
            </div>
            <div className="why-card">
              <div className="label">Capability 03</div>
              <h3>AI prototyping</h3>
              <p>Conversational, retailing and operational AI prototyped end-to-end.</p>
            </div>
          </div>

          <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 32 }}>
            <div className="label">From</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56 }}>idea</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent-2)' }}>———&gt;</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56 }}>prototype</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent-2)' }}>———&gt;</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, fontStyle: 'italic', color: 'var(--accent-2)' }}>production.</div>
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 02 · Pillar 03</span>} right="09" />
    </Slide>
  )
}
