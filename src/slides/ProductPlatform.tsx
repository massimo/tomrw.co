import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

const products = [
  {
    ico: 'F', num: '01', name: 'FLEX',
    desc: 'Day-of-travel commercial platform — turning flexibility into an ancillary product.',
    feats: ['Day-of-travel flexibility', 'Courtesy upgrades', 'Upgrade bidding', 'Flexibility as ancillary'],
  },
  {
    ico: 'C', num: '02', name: 'CREW',
    desc: 'Modern crew experience platform built around the realities of operating teams.',
    feats: ['Roster application', 'Communication hub', 'Bidding & swapping', 'Crew self-service'],
  },
  {
    ico: 'A', num: '03', name: 'AGENTS',
    desc: 'AI-powered conversational interfaces for staff, ops and passengers.',
    feats: ['Internal super-agent', 'Operational assistant', 'Customer servicing chatbot', 'Knowledge orchestration'],
  },
  {
    ico: 'R', num: '04', name: 'RETAIL',
    desc: 'Future airline retailing — built around Offers & Orders and dynamic personalisation.',
    feats: ['Offers & Orders', 'Ancillary sales', 'Dynamic personalisation', 'NDC-ready'],
  },
]

export function ProductPlatform() {
  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>02 — Pillar 01 · Product Platform</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
        <div>
          <div className="label">Pillar 01</div>
          <h2 className="display" style={{ fontSize: 96, marginTop: 16, maxWidth: 1200 }}>
            Four modular products. <em style={{ color: 'var(--accent-2)' }}>One platform.</em>
          </h2>
        </div>
        <div className="label" style={{ maxWidth: 320, textAlign: 'right' }}>
          Airline-native · Deployable on customer infrastructure
        </div>
      </div>

      <div className="prods" style={{ marginTop: 56 }}>
        {products.map((p) => (
          <div className="prod" key={p.num}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="ico">{p.ico}</div>
              <div className="label">{p.num}</div>
            </div>
            <div className="pname">TO<span className="col">:</span>MRW {p.name}</div>
            <div className="pdesc">{p.desc}</div>
            <ul className="feat">
              {p.feats.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <Chrome position="bottom" left={<span>Chapter 02 · Pillar 01</span>} right="07" />
    </Slide>
  )
}
