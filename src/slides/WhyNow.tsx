import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function WhyNow() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>07 — Why Now</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 56 }}>
        <div className="label">Chapter 07</div>
        <h2 className="display" style={{ fontSize: 128, marginTop: 16, maxWidth: 1500 }}>
          The gap is no longer ideas. <em style={{ color: 'var(--accent-2)' }}>It's execution speed.</em>
        </h2>
      </div>

      <div className="why-grid" style={{ marginTop: 80 }}>
        <div className="why-card">
          <div className="label">Signal 01</div>
          <h3>Post-pandemic modernisation</h3>
          <p>Airlines are unfreezing technology budgets and rebuilding the stack.</p>
        </div>
        <div className="why-card">
          <div className="label">Signal 02</div>
          <h3>AI reshaping every surface</h3>
          <p>Customer interaction, operations, retailing — all being re-imagined live.</p>
        </div>
        <div className="why-card">
          <div className="label">Signal 03</div>
          <h3>Monoliths → modular</h3>
          <p>Composable architecture replaces decade-long replatform programs.</p>
        </div>
      </div>

      <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120, alignItems: 'end' }}>
        <div>
          <div className="label">Why us</div>
          <p className="body-copy" style={{ marginTop: 16 }}>
            Built by people who understand airline complexity, have already built innovation concepts internally, and know exactly where execution fails.
          </p>
        </div>
        <div className="by" style={{ justifyContent: 'flex-end' }}>
          <div className="bar" />
          <div>Airline insiders building the tools they wished they had</div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 07 · Why now</span>} right="15" />
    </Slide>
  )
}
