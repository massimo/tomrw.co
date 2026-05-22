import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function SasPartnership() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>04 — Strategic Partnership</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 60 }}>
        <div className="label">Chapter 04 · Working with SAS</div>
        <h2 className="display" style={{ fontSize: 120, marginTop: 16, maxWidth: 1600 }}>
          Designed to work <em style={{ color: 'var(--accent-2)' }}>alongside</em> SAS — not on top of it.
        </h2>
      </div>

      <div className="sas-grid" style={{ marginTop: 60 }}>
        <div className="sas-role">
          <div className="label">SAS as a strategic design partner</div>
          <div className="item"><div className="t">Strategic innovation partner</div><div className="l">Role 01</div></div>
          <div className="item"><div className="t">Co-design product organisation</div><div className="l">Role 02</div></div>
          <div className="item"><div className="t">DevOps acceleration team</div><div className="l">Role 03</div></div>
          <p className="body-copy" style={{ marginTop: 32 }}>
            The ambition is to create a structure where SAS can innovate faster — without increasing internal complexity or operational risk.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="label">SAS could act as</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <div className="ph" style={{ height: 160 }}>Design partner</div>
            <div className="ph" style={{ height: 160, borderLeft: 'none' }}>Early adopter</div>
            <div className="ph" style={{ height: 160, borderTop: 'none' }}>Strategic customer</div>
            <div className="ph" style={{ height: 160, borderTop: 'none', borderLeft: 'none' }}>Potential shareholder</div>
          </div>
          <p className="small" style={{ marginTop: 8 }}>
            Together, SAS and TO:MRW can co-design FLEX, CREW, AGENTS — and future retailing and AI products.
          </p>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 04 · Partnership</span>} right="10" />
    </Slide>
  )
}
