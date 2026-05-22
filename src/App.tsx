import { Deck } from './components/Deck'
import { MobileDeck } from './mobile/MobileDeck'
import { PasswordGate } from './components/PasswordGate'
import { Cover } from './slides/Cover'
import { OpeningQuote } from './slides/OpeningQuote'
import { Contents } from './slides/Contents'
import { WhyTomrw } from './slides/WhyTomrw'
import { WhatWeAre } from './slides/WhatWeAre'
import { ThreePillars } from './slides/ThreePillars'
import { ProductPlatform } from './slides/ProductPlatform'
import { DevOpsAccelerator } from './slides/DevOpsAccelerator'
import { InnovationLabs } from './slides/InnovationLabs'
import { SasPartnership } from './slides/SasPartnership'
import { CommercialModel } from './slides/CommercialModel'
import { AfKlmScaling } from './slides/AfKlmScaling'
import { PartnershipOptions } from './slides/PartnershipOptions'
import { Mvo } from './slides/Mvo'
import { WhyNow } from './slides/WhyNow'
import { GtmBusiness } from './slides/GtmBusiness'
import { Roadmap } from './slides/Roadmap'
import { LongTermVision } from './slides/LongTermVision'
import { FinalStatement } from './slides/FinalStatement'

function useIsMobile() {
  if (window.location.hash === '#desktop') return false
  if (window.location.hash === '#mobile') return true
  return window.innerWidth <= 768 || /iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent)
}

function DesktopDeck() {
  return (
    <Deck>
      <Cover />
      <OpeningQuote />
      <Contents />
      <WhyTomrw />
      <WhatWeAre />
      <ThreePillars />
      <ProductPlatform />
      <DevOpsAccelerator />
      <InnovationLabs />
      <SasPartnership />
      <CommercialModel />
      <AfKlmScaling />
      <PartnershipOptions />
      <Mvo />
      <WhyNow />
      <GtmBusiness />
      <Roadmap />
      <LongTermVision />
      <FinalStatement />
    </Deck>
  )
}

function App() {
  const isMobile = useIsMobile()
  return (
    <PasswordGate>
      {isMobile ? <MobileDeck /> : <DesktopDeck />}
    </PasswordGate>
  )
}

export default App
