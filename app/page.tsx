import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TrustSection from '@/components/TrustSection'
import ServicesGrid from '@/components/ServicesGrid'
import APIsSection from '@/components/APIsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessTimeline from '@/components/ProcessTimeline'
import IndustriesSection from '@/components/IndustriesSection'
import Team from '@/components/Team'
import Partnerships from '@/components/Partnerships'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: "Credify — India's Trusted Background Verification Partner",
  description:
    "Strengthen hiring, accelerate customer onboarding, and simplify compliance with comprehensive background verification services and secure verification APIs for KYC, identity, business, and risk intelligence.",
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <main className="relative bg-white">
      <Hero />
      <About />
      <TrustSection />
      <ServicesGrid />
      <APIsSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <IndustriesSection />
      <Team />
      <Partnerships />
      <CTASection />
      <FAQSection />
    </main>
  )
}
