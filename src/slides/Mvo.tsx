import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function Mvo() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>06 — Minimum Viable Organisation</span></>}
        right={<Logo />}
      />

      <div className="h-section" style={{ marginTop: 64 }}>
        <div className="lead">
          <div className="kicker">Chapter 06</div>
          <div className="no">06</div>
          <div className="label" style={{ marginTop: 24 }}>Lean core. Elastic delivery.</div>
        </div>

        <div className="stack">
          <h2>A team built to <em>scale on demand.</em></h2>

          <div className="org" style={{ marginTop: 32 }}>
            <div className="phase">
              <div className="ph-head">
                <h3>Phase 01</h3>
                <div className="when">Months 0–3</div>
              </div>
              <ul>
                <li><span className="count">1</span> Product Manager / Founder</li>
                <li><span className="count">1</span> Tech Lead</li>
              </ul>
            </div>
            <div className="phase">
              <div className="ph-head">
                <h3>Phase 02</h3>
                <div className="when">After Month 3</div>
              </div>
              <ul>
                <li><span className="count">2</span> Engineers</li>
                <li><span className="count">½</span> Product Owner</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <div className="label">Elastic delivery</div>
              <p className="small" style={{ marginTop: 12 }}>
                After first customer, scale with partners — Pettersson Apps, TCS, freelance and offshore capacity. Lean core team plus elastic delivery organisation.
              </p>
            </div>
            <div>
              <div className="label">Initial funding · Use of funds</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                <div className="tag-chip"><span className="d" />Staff</div>
                <div className="tag-chip"><span className="d" />Office</div>
                <div className="tag-chip"><span className="d" />Equipment</div>
                <div className="tag-chip"><span className="d" />Travel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 06 · Org</span>} right="14" />
    </Slide>
  )
}
