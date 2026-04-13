import { AudienceSplit } from './components/AudienceSplit'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { SocialProof } from './components/SocialProof'
import { WhatIsFosh } from './components/WhatIsFosh'
import { WhyFosh } from './components/WhyFosh'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <WhatIsFosh />
        <HowItWorks />
        <WhyFosh />
        <AudienceSplit />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
