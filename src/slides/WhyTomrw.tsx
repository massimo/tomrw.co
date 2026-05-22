import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function WhyTomrw() {
  const problems = [
    { n: '01', t: 'Legacy infrastructure blocks speed', d: 'Decades-old systems set the ceiling for every initiative.' },
    { n: '02', t: 'Innovation cycles are too long', d: 'Roadmaps measured in years; markets move in weeks.' },
    { n: '03', t: 'Product experimentation is difficult', d: 'Teams constrained by operational complexity and risk.' },
    { n: '04', t: 'Optimising legacy beats building the future', d: 'Internal innovation rarely reaches production.' },
    { n: '05', t: 'AI potential remains underutilised', d: 'Conversational, retailing and ops AI still on the sidelines.' },
  ]

  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>01 — Why TO:MRW</span></>}
        right={<Logo />}
      />

      <div className="h-section" style={{ marginTop: 80 }}>
        <div className="lead">
          <div className="kicker">Chapter 01</div>
          <div className="no">01</div>
          <div className="label" style={{ marginTop: 24 }}>The problem we exist to solve</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <h2>Airlines are <em>still too slow.</em> The industry leaves no room for new experience.</h2>

          <div className="problem-list" style={{ marginTop: 8 }}>
            {problems.map((p) => (
              <div className="row" key={p.n}>
                <span className="n">{p.n}</span>
                <span className="t">{p.t}</span>
                <span className="d">{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chrome position="bottom" left={<span>Chapter 01 · Why</span>} right="04" />
    </Slide>
  )
}
