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
    title: 'Instant GST Verification',
    description: 'Check GST registration details fast to drive quicker business onboarding and compliance.',
    icon: '/icons/gst-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Developer-Friendly API',
    description: 'Integrate effortlessly with ERP, CRM, procurement, accounting and enterprise application.',
    icon: '/icons/code.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Secure API Infrastructure',
    description: 'Enterprise-grade security practices guard sensitive verification requests and responses.',
    icon: '/icons/lock.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Real-Time Verification Results',
    description: 'Get verification responses right away to raise operational efficiency and decision-making.',
    icon: '/icons/clock.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Scalable Platform',
    description: 'Handle growing business verification needs with reliable, high-performance API infrastructure.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Compliance-Driven Verification',
    description: 'Strengthen vendor verification and regulatory compliance through automated GST validation workflows.',
    icon: '/icons/shield.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Streamlined Vendor Verification',
    description: 'Verify GST details quickly to simplify vendor, supplier, and merchant onboarding while reducing manual verification efforts.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Trusted Compliance Framework',
    description: 'Built on ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices to support secure verification processes.',
    icon: '/icons/shield.svg',
  },
  {
    title: 'Designed for Business Ecosystems',
    description: 'A reliable solution for enterprises, fintech companies, marketplaces, procurement teams, and financial institutions managing business relationships.',
    icon: '/icons/business-verification-api.svg',
  },
  {
    title: 'Faster Procurement Workflows',
    description: 'Automate GST verification to accelerate vendor approvals, procurement processes, and business onboarding decisions.',
    icon: '/icons/document-verification.svg',
  },
  {
    title: 'Reliable Verification Performance',
    description: 'Consistent API responses and dependable processing help businesses maintain efficient verification workflows at scale.',
    icon: '/icons/award.svg',
  },
  {
    title: 'Flexible Enterprise Connectivity',
    description: 'Integrate seamlessly with ERP, CRM, procurement platforms, accounting software, and custom enterprise applications.',
    icon: '/icons/code.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the GST Verification API into your application.',
  },
  {
    step: '02',
    title: 'Send GSTIN',
    description: 'Send the GSTIN securely through the API.',
  },
  {
    step: '03',
    title: 'Automated Check',
    description: 'The API runs the verification request using the set workflow.',
  },
  {
    step: '04',
    title: 'Instant Results',
    description: 'Get verification results right away to support faster business decisions.',
  },
]

const gstFaqs: FAQItem[] = [
  {
    q: 'What is a GST Verification API?',
    a: 'A GST Verification API enables businesses to verify GST information using secure API integrations and helps in business verification and compliance processes.',
  },
  {
    q: 'Who can use the GST Verification API?',
    a: 'The API can be used by banks, NBFCs, fintech, marketplaces, procurement, logistics, e-commerce businesses, and enterprises.',
  },
  {
    q: 'Is the GST Verification API easy to integrate?',
    a: 'Yes. Our developer-friendly API supports quick integration with web, mobile, ERP, CRM, and enterprise applications.',
  },
  {
    q: 'Is the API secure?',
    a: 'Yes. Credify India’s APIs rest on ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational standards that keep verification workflows secure and reliable.',
  },
  {
    q: 'Why choose Credify India’s GST Verification API?',
    a: 'Businesses pick Credify India for secure API infrastructure, enterprise-ready technology, faster business verification, compliance-focused workflows, and dedicated technical support.',
  },
]

export default function GstClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="Tax & Vendor API"
        title="GST Verification API for Accurate Business Verification &"
        highlightTitle="Compliance"
        subtitle="Check GST registration details right away with Credify India’s GST Verification API. Secure, scalable, developer-friendly API integrations for a seamless and efficient business verification process, faster vendor onboarding, enhanced compliance, and automated GST validation."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide">
                Vendor & Tax Validation
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Automate GST Verification with Credify India’s Secure API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Checking GST registration details forms a key step for organizations that onboard vendors, merchants, suppliers, distributors, and business partners. Manual verification often takes time, invites errors, and can delay important business processes. Credify India’s GST Verification API lets businesses automate GST verification so they can onboard faster while supporting compliance and operational efficiency.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We built the API for banks, NBFCs, fintech companies, marketplaces, procurement teams, e-commerce platforms, logistics companies, and enterprises. It slots into existing systems and delivers reliable GST verification. The vendor API makes verification easier by providing secure and technology-driven processes for vendor information validation, merchant onboarding, and business credentials.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/gst-verification-api.svg" alt="GST Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Credify India is an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company. Based on clear international standards of information security, quality management, and everyday work, we provide businesses with a trusted verification platform.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-orange-400" />
                  Target Sectors
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Ideal for vendor onboarding, procurement, and financial compliance:
                </p>
                <div className="space-y-3">
                  {[
                    'Banks & NBFCs',
                    'Fintech & E-Commerce Platforms',
                    'Marketplaces & B2B Platforms',
                    'Procurement & Supply Chain Teams',
                    'Logistics Companies',
                    'Enterprise Workflows',
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
              Instant GSTIN validation, ERP/CRM integration, and compliance automation.
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

      {/* Why Choose Credify India for GST Verification API? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for GST Verification API?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              High-speed vendor onboarding, trusted compliance framework, and ERP ecosystem integration.
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

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              API Process Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to validate GSTIN and automate vendor verification.
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
        subtitle="Common questions regarding Credify India's GST Verification API integration, security, and procurement usage."
        badgeText="GST API FAQ"
        faqs={gstFaqs}
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
                Automate GST verification, strengthen compliance, and improve vendor onboarding with Credify India’s secure GST Verification API. Contact our experts to access the API that&apos;s best for your business.
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
