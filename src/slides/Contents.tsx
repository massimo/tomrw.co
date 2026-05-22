import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function Contents() {
  const chapters = [
    { ix: '01', title: 'Why TO:MRW', pg: 'P. 04' },
    { ix: '02', title: 'Built on three pillars', pg: 'P. 06' },
    { ix: '03', title: 'The product platform', pg: 'P. 07' },
    { ix: '04', title: 'Strategic partnership with SAS', pg: 'P. 10' },
    { ix: '05', title: 'Partnership structures', pg: 'P. 13' },
    { ix: '06', title: 'Minimum viable organisation', pg: 'P. 14' },
    { ix: '07', title: 'Why now', pg: 'P. 15' },
    { ix: '08', title: 'Go-to-market & business model', pg: 'P. 16' },
    { ix: '09', title: 'Roadmap', pg: 'P. 17' },
    { ix: '10', title: 'Long-term vision', pg: 'P. 18' },
  ]

  return (
    <Slide>
      <Chrome
        position="top"
        left={<><Dot /><span>Contents</span></>}
        right={<Logo />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '540px 1fr', gap: 120, flex: 1, marginTop: 60 }}>
        <div>
          <div className="label">Index</div>
          <h2 className="display" style={{ fontSize: 120, marginTop: 24 }}>
            Ten<br />chapters.<br /><em style={{ color: 'var(--accent-2)' }}>One</em><br />thesis.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {chapters.map((ch) => (
            <div className="index-row" key={ch.ix}>
              <span className="ix">{ch.ix}</span>
              <span className="ti">{ch.title}</span>
              <span className="pg">{ch.pg}</span>
            </div>
          ))}
        </div>
      </div>

      <Chrome position="bottom" left={<span>Index</span>} right="03" />
    </Slide>
  )
}
