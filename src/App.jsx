import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import PlatformSection from './components/PlatformSection'
import ComplianceSection from './components/ComplianceSection'
import AdvantageSection from './components/AdvantageSection'
import CustomerStories from './components/CustomerStories'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <PlatformSection />
      <ComplianceSection />
      <AdvantageSection />
      <CustomerStories />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App