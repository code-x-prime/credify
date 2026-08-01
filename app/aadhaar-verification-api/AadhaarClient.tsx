'use client'

import React from 'react'
import ApiHero from '@/components/ApiHero'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronRight
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'Instant Aadhaar Verification',
    description: 'Check Aadhaar information fast to drive quicker identity verification and onboarding workflows.',
    icon: '/icons/aadhaar-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Developer-Friendly API',
    description: 'Connect seamlessly with web, mobile, CRM, ERP, HRMS, and enterprise business applications.',
    icon: '/icons/code.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Guard sensitive verification requests with encrypted communication and secure API architecture.',
    icon: '/icons/lock.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Real-Time Verification Responses',
    description: 'Get quick API responses that lift customer experience and cut processing time.',
    icon: '/icons/clock.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Scalable API Infrastructure',
    description: 'Handle growing businesses and high-volume verification needs with steady performance.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Compliance-Oriented Workflows',
    description: 'Bolster digital onboarding and identity verification processes through standard API integrations.',
    icon: '/icons/shield.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Certified for Security & Quality',
    description: 'Our APIs rest on ISO 27001 Certification, ISO 9001 Certification, and SOC 2 Audited operational practices.',
    icon: '/icons/award.svg',
  },
  {
    title: 'Reliable API Infrastructure',
    description: 'Provide secure, stable, and high-performance verification for businesses.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Easy System Integration',
    description: 'Developer-friendly APIs make setup simple across existing business platforms and applications.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Faster Customer Onboarding',
    description: 'Use Aadhaar automation to streamline onboarding experiences and reduce manual effort.',
    icon: '/icons/clock.svg',
  },
  {
    title: 'Enterprise-Ready Platform',
    description: 'Businesses trust us for scalable verification technology that expands with their operations.',
    icon: '/icons/layers.svg',
  },
  {
    title: 'Dedicated Technical Support',
    description: 'Our API specialists give implementation guidance, testing help, and ongoing technical support.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Make use of the Aadhaar Verification API in the application.',
  },
  {
    step: '02',
    title: 'Send Request',
    description: 'Send the necessary verification request securely via the API.',
  },
  {
    step: '03',
    title: 'Automated Processing',
    description: 'The API runs the request through the set verification workflow.',
  },
  {
    step: '04',
    title: 'Receive Instant Output',
    description: 'Get verification responses fast to support quicker onboarding and clear business decisions.',
  },
]

const aadhaarFaqs: FAQItem[] = [
  {
    q: 'What is an Aadhaar Verification API?',
    a: 'An Aadhaar Verification API enables businesses to leverage secure API integrations for automatic identity verification, while simplifying onboarding and compliance procedures.',
  },
  {
    q: 'Which industries can use the Aadhaar Verification API?',
    a: 'The API can be integrated into the systems of banks, NBFCs, fintech companies, insurance companies, telecom companies, marketplaces, healthcare companies and enterprises.',
  },
  {
    q: 'Is the API easy to integrate?',
    a: 'Yes. Our developer-friendly API supports smooth connection with web, mobile, and enterprise applications.',
  },
  {
    q: 'Is the Aadhaar Verification API secure?',
    a: "Yes. Credify India's verification platform follows ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational standards for secure API-based verification.",
  },
  {
    q: "Why choose Credify India's Aadhaar Verification API?",
    a: 'Businesses pick Credify India for secure API infrastructure, enterprise-ready technology, developer-friendly integrations, compliance-focused verification workflows, and dedicated technical support.',
  },
]

export default function AadhaarClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="Identity Verification API"
        title="Aadhaar Verification API for Secure Identity Verification &"
        highlightTitle="Faster Customer Onboarding"
        subtitle="Speed up customer onboarding with Credify India’s Aadhaar Verification API. Check Aadhaar details securely, build stronger identity verification workflows, cut down manual verification efforts, and give smooth digital onboarding through scalable, developer-friendly API integrations."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Digital Onboarding Simplified
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Simplify Aadhaar Verification with Credify India’s Secure API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In regulated industries such as banking, financial services, insurance, fintech, telecom and more, identity verification is a critical component of digital onboarding. Manual checking can slow onboarding, add extra operating expenses, and negatively affect the customer experience. Credify India’s Aadhaar Verification API lets organizations automate identity verification with secure, reliable, and scalable API integrations.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our API works for modern businesses and slots into existing applications without hassle, so teams can check identity information inside their onboarding and compliance workflows. The Aadhaar Verification API enhances user verification and boosts efficiency during customer onboarding and enhanced digital verification processes, meeting regulatory requirements.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/aadhaar-verification-api.svg" alt="Aadhaar Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Credify India adheres to strict international security, quality management, and daily operations standards, giving enterprises a trusted platform for secure verification.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-orange-400" />
                  Target Industries
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Trusted by compliance teams and developers across multiple high-trust verticals:
                </p>
                <div className="space-y-3">
                  {[
                    'Banking & NBFCs',
                    'Fintech & Payment Solutions',
                    'Insurance Companies',
                    'Telecom Providers',
                    'Marketplaces & E-Commerce',
                    'Healthcare & Enterprises',
                  ].map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                      <ChevronRight size={16} className="text-orange-400" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Designed for enterprise scalability, developer ease, and absolute compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {keyFeatures.map((feat, idx) => (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-2.5 rounded-xl border border-slate-200/60 bg-slate-50 w-fit mb-4">
                    <img src={feat.icon} alt={feat.title} className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Credify India? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Empowering top enterprises with seamless identity check automation and unmatched uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-all duration-300">
                  <div className="p-2.5 rounded-xl border border-slate-200/60 bg-white w-fit mb-4">
                    <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does the Aadhaar Verification API Work? */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Simple Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does the Aadhaar Verification API Work?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to integrate and execute real-time identity checks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 relative flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-extrabold text-orange-400 mb-4">{st.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions regarding Credify India's Aadhaar Verification API integration, security, and usage."
        badgeText="API FAQ"
        faqs={aadhaarFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Power Faster Identity Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Tighten digital onboarding, raise operational efficiency, and automate identity verification with Credify India’s secure Aadhaar Verification API. Reach out to our experts to find the right verification solution for your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-[#f97316] hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                Request a Demo
                <ArrowRight size={16} />
              </button>
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300"
              >
                <PhoneCall size={16} />
                Talk to Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
