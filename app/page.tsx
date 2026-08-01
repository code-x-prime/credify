import Hero from '@/components/Hero'
import About from '@/components/About'
import TrustSection from '@/components/TrustSection'
import ServicesGrid from '@/components/ServicesGrid'
import APIsSection from '@/components/APIsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessTimeline from '@/components/ProcessTimeline'
import IndustriesSection from '@/components/IndustriesSection'
import Partnerships from '@/components/Partnerships'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

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
      <Partnerships />
      <CTASection />
      <FAQSection />
    </main>
  )
}
