import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function AfKlmScaling() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>04 — Strategic Synergy</span></>}
        right={<Logo />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, flex: 1, marginTop: 60 }}>
        <div>
          <div className="label">Strategic synergy</div>
          <h2 className="display" style={{ fontSize: 72, marginTop: 16 }}>
            Supporting the <em style={{ color: 'var(--accent-2)' }}>AF-KLM</em> transition.
          </h2>
          <p className="body-copy" style={{ marginTop: 32 }}>
            A way to retain access to critical knowledge and resources during the integration journey — without scaling internal headcount.
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 32 }}>
            {['Continuity of key competencies', 'Flexible access to specialised airline talent', 'Reduced dependency on internal hiring'].map((item, i) => (
              <li key={i} style={{ fontSize: 22, paddingLeft: 24, position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: 0, top: '0.7em', width: 12, height: 1, background: 'var(--accent-2)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="label">Long-term ambition</div>
          <h2 className="display" style={{ fontSize: 72 }}>
            Scaling <em style={{ color: 'var(--accent-2)' }}>beyond</em> SAS.
          </h2>

          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column' }}>
            {[
              { num: 'i.', title: 'Innovation lab partner for AF-KLM', desc: 'Shared experimentation and AI infrastructure.' },
              { num: 'ii.', title: 'Modular technology provider for SkyTeam', desc: 'Reusable airline-native modules across the alliance.' },
              { num: 'iii.', title: 'Industry-wide airline technology platform', desc: 'Shared innovation, rapid experimentation, AI & retailing.' },
            ].map((item, i, arr) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '90px 1fr',
                gap: 24,
                padding: '28px 0',
                borderTop: '1px solid var(--line)',
                borderBottom: i === arr.length - 1 ? '1px solid var(--line)' : undefined,
                alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, color: 'var(--accent-2)' }}>{item.num}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 26 }}>{item.title}</div>
                  <div className="small" style={{ marginTop: 6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 04 · Synergy</span>} right="12" />
    </Slide>
  )
}
