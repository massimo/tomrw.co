import { Slide } from '../components/Slide'
import '../slides/slides.css'

export function Cover() {
  return (
    <Slide className="cover">
      <div className="top">
        <span className="logo-mini">TO<span className="col">:</span>MRW</span>
        <span className="label">Strategic Partnership Deck · 2026</span>
      </div>

      <div className="center">
        <div className="label" style={{ marginBottom: 36 }}>— Airline technology, rebuilt for tomorrow</div>
        <h1>TO<span style={{ color: 'var(--accent-2)' }}>:</span>MRW</h1>
        <div className="tag">
          A travel technology company built by airline insiders to accelerate innovation, product delivery, and AI adoption across the airline industry.
        </div>
      </div>

      <div className="meta">
        <div className="stamp">Confidential · For SAS</div>
        <div className="label">Stockholm · Copenhagen · Amsterdam</div>
      </div>
    </Slide>
  )
}
