import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function CommercialModel() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>04 — Commercial Model</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 60 }}>
        <div className="label">Chapter 04 · Business model with SAS</div>
        <h2 className="display" style={{ fontSize: 104, marginTop: 16, maxWidth: 1500 }}>
          A model that <em style={{ color: 'var(--accent-2)' }}>de-risks</em> collaboration on both sides.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: 64, flex: 1 }}>
        <div style={{ border: '1px solid var(--line)', padding: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="label">Co-designed products</div>
          <h3 className="display" style={{ fontSize: 64 }}>Shared upside.</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 8 }}>
            {['Revenue-sharing model', 'Joint product innovation', 'Shared commercial upside'].map((item, i) => (
              <li key={i} style={{ fontSize: 22, paddingLeft: 24, position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: 0, top: '0.7em', width: 12, height: 1, background: 'var(--ink)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ border: '1px solid var(--line)', borderLeft: 'none', padding: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="label">Products not co-developed</div>
          <h3 className="display" style={{ fontSize: 64 }}>Minimal risk.</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 8 }}>
            {['Free-of-charge PoC opportunities', 'Evaluate with no upfront commitment', 'Adopt only what proves value'].map((item, i) => (
              <li key={i} style={{ fontSize: 22, paddingLeft: 24, position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: 0, top: '0.7em', width: 12, height: 1, background: 'var(--ink)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '32px 0 0', borderRight: '1px solid var(--line-soft)' }}>
          <div className="label">No upfront investment</div>
          <p style={{ fontSize: 20, marginTop: 14, maxWidth: 380, color: 'var(--ink-2)' }}>
            Required from SAS. TO:MRW operates as a standalone, angel-funded startup.
          </p>
        </div>
        <div style={{ padding: '32px 36px 0', borderRight: '1px solid var(--line-soft)' }}>
          <div className="label">No restructuring</div>
          <p style={{ fontSize: 20, marginTop: 14, maxWidth: 380, color: 'var(--ink-2)' }}>
            SAS doesn't need to create new internal structures to access the capability.
          </p>
        </div>
        <div style={{ padding: '32px 36px 0' }}>
          <div className="label">Low-risk collaboration</div>
          <p style={{ fontSize: 20, marginTop: 14, maxWidth: 380, color: 'var(--ink-2)' }}>
            Innovation capability, faster execution, dedicated airline-focused delivery.
          </p>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 04 · Model</span>} right="11" />
    </Slide>
  )
}
