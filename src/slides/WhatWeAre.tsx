import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function WhatWeAre() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>01 — Why TO:MRW</span></>}
        right={<Logo />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, flex: 1, alignItems: 'center' }}>
        <div>
          <div className="label">We exist to</div>
          <h2 className="display" style={{ fontSize: 144, marginTop: 24 }}>
            accelerate<br />airline<br /><em style={{ color: 'var(--accent-2)' }}>transformation.</em>
          </h2>
          <p className="body-copy" style={{ marginTop: 40 }}>
            Modular. Fast. Airline-native. Built to deploy directly on customer infrastructure — and to be owned by the customer.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div className="label" style={{ marginBottom: 20 }}>We act as</div>

          {[
            { title: 'A product company', chip: 'SaaS', desc: 'Day-of-travel, crew, retail and conversational AI products — sold as software.' },
            { title: 'A DevOps accelerator', chip: 'Services', desc: 'Embedded product & engineering teams that ship onto customer infrastructure.' },
            { title: 'An innovation lab', chip: 'Labs', desc: 'From idea → prototype → production. Validation engine for airline partners.' },
          ].map((item, i) => (
            <div key={i} style={{
              borderTop: '1px solid var(--line)',
              borderBottom: i === 2 ? '1px solid var(--line)' : undefined,
              padding: '28px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                  {item.title}
                </div>
                <div className="tag-chip" style={{ flexShrink: 0 }}><span className="d" />{item.chip}</div>
              </div>
              <p className="small" style={{ maxWidth: 620 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 01 · Why</span>} right="05" />
    </Slide>
  )
}
