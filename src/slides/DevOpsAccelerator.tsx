import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function DevOpsAccelerator() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>02 — Pillar 02 · DevOps</span></>}
        right={<Logo />}
      />

      <div className="h-section" style={{ marginTop: 64 }}>
        <div className="lead">
          <div className="kicker">Pillar 02</div>
          <div className="no">02</div>
          <div className="label" style={{ marginTop: 24 }}>DevOps Accelerator</div>
        </div>

        <div className="stack">
          <h2>Embedded product & engineering. <em>Owned by the customer.</em></h2>
          <p className="body-copy" style={{ marginTop: 8 }}>
            A delivery model designed for airlines that need to ship — fast — without losing control of what gets built.
          </p>

          <div className="kv" style={{ marginTop: 32 }}>
            <div><div className="k">Built</div><div className="v">In-house, by senior airline-native teams</div></div>
            <div><div className="k">Deployed</div><div className="v">Directly on customer infrastructure</div></div>
            <div><div className="k">Owned</div><div className="v">Source code transferable to the customer</div></div>
            <div><div className="k">Funded by</div><div className="v">Services revenue — which funds our products</div></div>
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div className="tag-chip"><span className="d" />Initial opportunity · SAS Holidays</div>
            <div className="tag-chip"><span className="d" />Initial opportunity · SAS Travel Pass</div>
            <div className="tag-chip"><span className="d" />Internal AI & servicing</div>
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 02 · Pillar 02</span>} right="08" />
    </Slide>
  )
}
