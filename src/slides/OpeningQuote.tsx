import { Slide } from '../components/Slide'
import { Chrome, Logo, Dot } from '../components/Chrome'

export function OpeningQuote() {
  return (
    <Slide className="quote-slide">
      <Chrome
        position="top"
        left={<><Dot /><span>02 / Opening</span></>}
        right={<Logo />}
      />

      <div className="mark">&ldquo;</div>

      <div className="body" style={{ marginLeft: 140 }}>
        <blockquote>
          When it comes to the future, there are three kinds of people:{' '}
          <em>those who let it happen, those who make it happen,</em> and those who{' '}
          <em>wonder what happened.</em>
        </blockquote>
        <div className="attrib">— A guiding principle for TO:MRW</div>
      </div>

      <Chrome
        position="bottom"
        left={<span>Opening</span>}
        right="02"
      />
    </Slide>
  )
}
