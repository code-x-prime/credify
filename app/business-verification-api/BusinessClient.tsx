'use client'

import React from 'react'
import ApiHero from '@/components/ApiHero'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronRight,
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'Instant Business Verification',
    description: 'Check business information fast to speed up merchant, vendor, and corporate onboarding.',
    icon: '/icons/business-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Developer-Friendly API',
    description: 'Smoothly integrate with ERP, CRM, procurement platforms, marketplaces and enterprise apps.',
    icon: '/icons/code.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Securely communicate and protect sensitive business data with encrypted channels and secured API infrastructure.',
    icon: '/icons/lock.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Real-Time Verification Responses',
    description: 'Get verification results right away to raise operational efficiency and business decision-making.',
    icon: '/icons/clock.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Scalable API Platform',
    description: 'Handle growing verification volumes with reliable, high-performance API infrastructure.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Compliance-Focused Verification',
    description: 'Strengthen business verification processes while supporting regulatory and internal compliance requirements.',
    icon: '/icons/shield.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Smarter Business Onboarding',
    description: 'Verify merchants, vendors, suppliers, and business partners faster to accelerate onboarding and reduce operational delays.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Comprehensive Business Validation',
    description: 'Support informed business decisions by validating key business information through structured verification workflows.',
    icon: '/icons/employment-verification.svg',
  },
  {
    title: 'Built for Enterprise Ecosystems',
    description: 'Ideal for banks, fintech companies, marketplaces, procurement teams, insurers, and enterprises managing large business networks.',
    icon: '/icons/business-verification-api.svg',
  },
  {
    title: 'Trusted Security & Compliance',
    description: 'Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices to ensure secure and reliable verification.',
    icon: '/icons/shield.svg',
  },
  {
    title: 'Flexible Integration Architecture',
    description: 'Integrate seamlessly with procurement systems, ERP, CRM, onboarding platforms, and custom enterprise applications.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Scalable Verification Operations',
    description: 'Handle growing business verification requirements through a secure, technology-driven platform designed for high-volume processing.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the Business Verification API into your application.',
  },
  {
    step: '02',
    title: 'Send Info Safely',
    description: 'Send the required business information securely through the API.',
  },
  {
    step: '03',
    title: 'Standard Workflow',
    description: 'The API runs the verification request using standardized verification workflows.',
  },
  {
    step: '04',
    title: 'Real-Time Results',
    description: 'Get real-time verification responses to support faster onboarding and clear business decisions.',
  },
]

const businessFaqs: FAQItem[] = [
  {
    q: 'What is a Business Verification API?',
    a: 'A Business Verification API lets organizations check business information digitally through secure API integrations and helps automate onboarding and verification workflows.',
  },
  {
    q: 'Which industries can use the Business Verification API?',
    a: 'The API can be added by banks, NBFCs, fintech companies, marketplaces, B2B platforms, procurement teams, insurance providers, logistics companies and enterprises.',
  },
  {
    q: 'Is the Business Verification API easy to integrate?',
    a: 'Yes. Our developer-friendly REST API integrates seamlessly with web apps, enterprise software, CRM, ERP and procurement platforms.',
  },
  {
    q: 'Is the Business Verification API secure?',
    a: "Yes. Credify India’s API platform follows ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational standards to support secure, reliable, and enterprise-grade verification.",
  },
  {
    q: "Why choose Credify India’s Business Verification API?",
    a: 'Organizations pick Credify India for secure API infrastructure, enterprise-ready technology, faster onboarding workflows, compliance-focused verification, and dedicated technical support that grows with business needs.',
  },
]

export default function BusinessClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="B2B Verification API"
        title="Business Verification API for Faster Business Onboarding &"
        highlightTitle="Compliance"
        subtitle="Check business information with confidence using Credify India’s Business Verification API. Secure, scalable, and developer-friendly API integrations to automate business verification, accelerate merchant and vendor onboarding, enhance compliance, and reduce operational risks."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                B2B & Vendor Onboarding
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Streamline Business Verification with Credify India’s Secure API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                For companies that add vendors, merchants, distributors, suppliers, business customers, and business partners, it is important to check business entities. Manual verification can slow the onboarding process, increase admin workload, and introduce additional operational risks. Credify India’s Business Verification API lets organizations automate business verification through secure API integrations so they can onboard faster and make clearer business decisions.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We developed the API for banks, NBFCs, fintech firms, marketplaces, B2B platforms, procurement teams, insurance providers, logistics firms, and enterprises that require reliable business verification. Businesses can streamline verification processes, boost efficiency, and meet compliance demands while maintaining a streamlined customer and partner onboarding experience by seamlessly integrating with their current systems.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/business-verification-api.svg" alt="Business Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company adhering to carefully established information security, quality management, and business standards aligned with international standards.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-orange-400" />
                  Target B2B Verticals
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Trusted for merchant, vendor, and corporate verification:
                </p>
                <div className="space-y-3">
                  {[
                    'Banks & NBFCs',
                    'Fintech & Payment Gateways',
                    'Marketplaces & B2B Platforms',
                    'Procurement Teams & Supply Chain',
                    'Insurance Providers',
                    'Logistics & Enterprises',
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
              Automated corporate validation, enterprise security, and real-time response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {keyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2.5 rounded-xl border border-slate-200/60 bg-slate-50 w-fit mb-4">
                  <img src={feat.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Credify India for Business Verification API? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Business Verification API?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered to support corporate networks, ERP systems, and high-volume merchant checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-300 transition-all duration-300">
                <div className="p-2.5 rounded-xl border border-slate-200/60 bg-white w-fit mb-4">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does the Business Verification API Works */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              API Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does the Business Verification API Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Automated 4-step workflow for merchant, vendor, and corporate verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
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
        subtitle="Common questions regarding Credify India's Business Verification API integration, security, and B2B onboarding."
        badgeText="BUSINESS API FAQ"
        faqs={businessFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Simplify Business Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Speed up business onboarding, strengthen compliance, and automate verification workflows with Credify India’s secure Business Verification API. Collaborate with our subject matter experts to create a quicker, more efficient, and more effective verification process.
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
