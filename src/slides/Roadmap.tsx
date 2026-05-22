import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function Roadmap() {
  const phases = [
    {
      month: 'August',
      title: 'Company creation',
      items: ['Entity setup', 'Founding team in place', 'Angel funding closed'],
    },
    {
      month: 'Aug — Oct',
      title: 'MVP build phase',
      items: ['FLEX & CREW MVPs', 'AGENTS prototype', 'Customer infra integrations'],
    },
    {
      month: 'Nov — Dec',
      title: 'First prospect calls. Production-ready products.',
      items: ['SAS PoC kickoff', 'First commercial pipeline', 'Production deployments'],
    },
    {
      month: 'Jan →',
      title: 'Scaling the organisation',
      items: ['Partnerships activated', 'Proactive sales expansion', 'AF-KLM & SkyTeam dialogue'],
    },
  ]

  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>09 — Roadmap</span></>}
        right={<Logo />}
      />

      <div style={{ marginTop: 56 }}>
        <div className="label">Chapter 09</div>
        <h2 className="display" style={{ fontSize: 120, marginTop: 16, maxWidth: 1500 }}>
          Six months to <em style={{ color: 'var(--accent-2)' }}>first revenue.</em>
        </h2>
      </div>

      <div className="roadmap" style={{ marginTop: 96 }}>
        {phases.map((phase, i) => (
          <div className="road-col" key={i} style={{ paddingRight: i < 3 ? 48 : undefined }}>
            <div className="marker" />
            <div className="month">{phase.month}</div>
            <h4>{phase.title}</h4>
            <ul>
              {phase.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <Chrome position="bottom" left={<span>Chapter 09 · Roadmap</span>} right="17" />
    </Slide>
  )
}
