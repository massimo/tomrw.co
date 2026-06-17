import { Deck } from './components/Deck'
import { PasswordGate } from './components/PasswordGate'

// Existing slides (reused)
import { Cover } from './slides/Cover'
import { WhatWeAre } from './slides/WhatWeAre'
import { ThreePillars } from './slides/ThreePillars'
import { ProductPlatform } from './slides/ProductPlatform'
import { SasPartnership } from './slides/SasPartnership'
import { CommercialModel } from './slides/CommercialModel'
import { PartnershipOptions } from './slides/PartnershipOptions'
import { LongTermVision } from './slides/LongTermVision'
import { FinalStatement } from './slides/FinalStatement'

// New slides (v2)
import { TheGap } from './slides-v2/TheGap'
import { WhyAirlinesSlow } from './slides-v2/WhyAirlinesSlow'
import { RevenueProblem } from './slides-v2/RevenueProblem'
import { SasContext } from './slides-v2/SasContext'
import { FinancialModel } from './slides-v2/FinancialModel'
import { RoadmapV2 } from './slides-v2/RoadmapV2'

function AppV2() {
  return (
    <PasswordGate>
      <Deck>
        {/* Part I: The Opportunity */}
        <Cover />
        <TheGap />
        <WhyAirlinesSlow />
        <RevenueProblem />

        {/* Part II: Why Us, Why Now */}
        <SasContext />
        <WhatWeAre />

        {/* Part III: The Product */}
        <ThreePillars />
        <ProductPlatform />

        {/* Part IV: Partnership */}
        <SasPartnership />
        <CommercialModel />
        <PartnershipOptions />

        {/* Part V: Business */}
        <FinancialModel />
        <RoadmapV2 />

        {/* Part VI: Vision */}
        <LongTermVision />
        <FinalStatement />
      </Deck>
    </PasswordGate>
  )
}

export default AppV2
