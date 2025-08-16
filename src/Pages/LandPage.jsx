import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import CTA from '../Components/CTA'
import Footer from '../Components/Footer'
import PricingSection from '../Components/PricingSection'

const LandPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <PricingSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandPage