import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function FinalStatement() {
  return (
    <Slide className="final">
      <Chrome
        position="top"
        left={<><Dot style={{ background: '#fbf8f2' }} /><span>End</span></>}
        right={<Logo style={{ color: 'var(--paper)' }} />}
      />

      <div className="center">
        <div className="pre">Final statement</div>
        <h1>
          Airlines don't need<br />more <em>ideas.</em><br />They need <em>faster<br />execution.</em>
        </h1>
        <div className="sub">TO:MRW — building the future of airline technology, now.</div>
      </div>

      <Chrome
        position="bottom"
        left={<span style={{ color: 'rgba(251,248,242,0.55)' }}>Thank you · Confidential</span>}
        right="19"
        style={{ color: 'rgba(251,248,242,0.55)' }}
      />
    </Slide>
  )
}
