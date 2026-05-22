import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function PartnershipOptions() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>05 — Partnership Structures</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
        <div>
          <div className="label">Chapter 05</div>
          <h2 className="display" style={{ fontSize: 72, marginTop: 12, maxWidth: 1240, lineHeight: 1 }}>
            Three engagement models <em style={{ color: 'var(--accent-2)' }}>under consideration</em> for SAS.
          </h2>
        </div>
        <p className="small" style={{ maxWidth: 340, textAlign: 'right' }}>
          Each option trades complexity for strategic alignment — from standalone to fully co-owned.
        </p>
      </div>

      <div className="options" style={{ marginTop: 40 }}>
        {/* Option A */}
        <div className="opt">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="letter">A</div>
            <div className="label" style={{ textAlign: 'right' }}>No equity<br />No rev share</div>
          </div>
          <div className="label" style={{ marginTop: 4 }}>Option A</div>
          <h3>Strategic Design Partner</h3>
          <p style={{ fontSize: 16, lineHeight: 1.45, color: 'var(--ink-2)' }}>
            A "clean" standalone model. No equity or revenue sharing — SAS engages purely as a strategic customer.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: 20 }}>
            <div className="label" style={{ color: 'var(--accent-2)' }}>Benefits to SAS</div>
            <ul style={{ marginTop: 10 }}>
              <li>Discounted developer rates</li>
              <li>Priority access to new products</li>
              <li>Ability to own underlying code & APIs</li>
            </ul>
          </div>
        </div>

        {/* Option B */}
        <div className="opt featured">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="letter">B</div>
            <div className="label" style={{ color: 'rgba(251,248,242,0.55)', textAlign: 'right' }}>Revenue share<br />No equity</div>
          </div>
          <div className="label" style={{ marginTop: 4, color: 'rgba(251,248,242,0.55)' }}>Option B · Recommended</div>
          <h3>Royalty Arrangement</h3>
          <p style={{ fontSize: 16, lineHeight: 1.45, color: 'rgba(251,248,242,0.78)' }}>
            A hybrid model: SAS receives a percentage of revenue from third-party sales of co-developed products.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: 20 }}>
            <div className="label" style={{ color: 'var(--accent-2)' }}>Why it works</div>
            <ul style={{ marginTop: 10 }}>
              <li>Avoids equity governance complexity</li>
              <li>Clear storyline for SAS leadership</li>
              <li>Upside without operational entanglement</li>
            </ul>
          </div>
        </div>

        {/* Option C */}
        <div className="opt">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="letter">C</div>
            <div className="label" style={{ textAlign: 'right' }}>20–30%<br />minority stake</div>
          </div>
          <div className="label" style={{ marginTop: 4 }}>Option C</div>
          <h3>Equity Deal</h3>
          <p style={{ fontSize: 16, lineHeight: 1.45, color: 'var(--ink-2)' }}>
            The most complex option. SAS takes a minority equity position in TO:MRW (20–30%).
          </p>
          <div style={{ marginTop: 'auto', paddingTop: 20 }}>
            <div className="label" style={{ color: 'var(--accent-2)' }}>Risks to consider</div>
            <ul style={{ marginTop: 10 }}>
              <li>Governance friction over decisions</li>
              <li>Exposure to future SAS leadership shifts</li>
              <li>Slower, more formal collaboration</li>
            </ul>
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 05 · Options</span>} right="13" />
    </Slide>
  )
}
