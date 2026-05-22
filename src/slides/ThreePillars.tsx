import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function ThreePillars() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>02 — Three Pillars</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 60 }}>
        <div className="label">Chapter 02 · The model</div>
        <h2 className="display" style={{ fontSize: 104, marginTop: 16, maxWidth: 1500 }}>
          Built on <em style={{ color: 'var(--accent-2)' }}>three</em> pillars that fund and feed each other.
        </h2>
      </div>

      <div className="pillars" style={{ marginTop: 48 }}>
        <div className="pillar">
          <div className="num">01</div>
          <h3>Product<br />SaaS Platform<br />for Airlines</h3>
          <p>A suite of modular airline products — commercial, crew, retail, and AI — deployable directly on customer infrastructure.</p>
          <div className="tag">FLEX · CREW · AGENTS · RETAIL</div>
        </div>
        <div className="pillar">
          <div className="num">02</div>
          <h3>DevOps<br />Accelerator</h3>
          <p>Embedded product & engineering teams. Build in-house, deploy on customer infrastructure, fully owned by the customer.</p>
          <div className="tag">Services fund products</div>
        </div>
        <div className="pillar">
          <div className="num">03</div>
          <h3>Innovation Labs<br />for Airlines</h3>
          <p>Rapid MVP development, experimentation, product validation and AI prototyping. From idea → prototype → production.</p>
          <div className="tag">Experimentation engine</div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
        <p className="body-copy" style={{ fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", fontSize: 28, maxWidth: 740, color: 'var(--ink)' }}>
          "Services fund products. Products create scale."
        </p>
        <div className="label">A self-reinforcing operating model</div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 02 · Pillars</span>} right="06" />
    </Slide>
  )
}
