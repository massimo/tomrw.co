import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function GtmBusiness() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>08 — Go-to-Market &amp; Business Model</span></>}
        right={<Logo />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 60, flex: 1 }}>
        <div>
          <div className="label">Chapter 08 · Go-to-market</div>
          <h2 className="display" style={{ fontSize: 64, marginTop: 16 }}>
            Land in <em style={{ color: 'var(--accent-2)' }}>operations.</em><br />
            Expand to <em style={{ color: 'var(--accent-2)' }}>commercial.</em>
          </h2>

          <div style={{ marginTop: 40 }}>
            <div className="label">Land</div>
            <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
              <div className="tag-chip"><span className="d" />Crew</div>
              <div className="tag-chip"><span className="d" />DevOps</div>
              <div className="tag-chip"><span className="d" />Internal tools</div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <div className="label">Expand</div>
            <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
              <div className="tag-chip"><span className="d" />Commercial products</div>
              <div className="tag-chip"><span className="d" />AI layers</div>
              <div className="tag-chip"><span className="d" />Retailing platform</div>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <div className="label">Entry</div>
            <p className="small" style={{ marginTop: 12, maxWidth: 520 }}>
              Existing airline relationships, DevOps engagements and innovation partnerships — used as launchpads, not stepping stones.
            </p>
          </div>
        </div>

        <div>
          <div className="label">Business model · Hybrid SaaS + Services</div>
          <h2 className="display" style={{ fontSize: 64, marginTop: 16 }}>
            Services <em style={{ color: 'var(--accent-2)' }}>fund</em>. Products <em style={{ color: 'var(--accent-2)' }}>scale.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: 40, borderTop: '1px solid var(--line)' }}>
            <div style={{ borderRight: '1px solid var(--line)', padding: '32px 32px 32px 0' }}>
              <div className="label">SaaS revenue</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 18 }}>
                {['Subscription products', 'Usage-based pricing', 'AI transaction models'].map((item, i) => (
                  <li key={i} style={{ fontSize: 20, paddingLeft: 20, position: 'relative' as const }}>
                    <span style={{ position: 'absolute' as const, left: 0, top: '0.7em', width: 10, height: 1, background: 'var(--ink)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '32px 0 32px 32px' }}>
              <div className="label">Services revenue</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 18 }}>
                {['DevOps delivery', 'Innovation labs', 'Embedded engineering'].map((item, i) => (
                  <li key={i} style={{ fontSize: 20, paddingLeft: 20, position: 'relative' as const }}>
                    <span style={{ position: 'absolute' as const, left: 0, top: '0.7em', width: 10, height: 1, background: 'var(--ink)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="body-copy" style={{ marginTop: 32, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 30, color: 'var(--ink)' }}>
            Cash-generating services funding scalable products.
          </p>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 08 · Model</span>} right="16" />
    </Slide>
  )
}
