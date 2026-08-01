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
    title: 'Real-Time KYC Verification',
    description: 'Check customer information right away to speed up onboarding and cut manual verification efforts.',
    icon: '/icons/kyc-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Seamless API Integration',
    description: 'Add the KYC API easily into web, mobile, and enterprise applications with little development effort.',
    icon: '/icons/code.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Secure Verification Process',
    description: 'Support secure customer verification through encrypted API communication and enterprise-grade security practices.',
    icon: '/icons/lock.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Faster Digital Onboarding',
    description: 'Cut onboarding delays with automated KYC verification workflows and real-time responses.',
    icon: '/icons/zap.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Scalable API Infrastructure',
    description: 'Handle high verification volumes while keeping reliable performance and steady response times.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Compliance-Focused Solution',
    description: 'Support KYC and customer due diligence processes through standardized verification workflows.',
    icon: '/icons/shield.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Accelerate Customer Onboarding',
    description: 'Automate KYC verification to reduce onboarding time, eliminate manual processes, and deliver a seamless customer experience.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Built for High-Volume KYC Operations',
    description: 'Scalable infrastructure processes large volumes of KYC requests while maintaining consistent performance and reliability.',
    icon: '/icons/building.svg',
  },
  {
    title: 'Trusted Security & Compliance',
    description: 'Built on ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational standards to support secure verification and responsible data handling.',
    icon: '/icons/shield.svg',
  },
  {
    title: 'Optimized for Regulated Industries',
    description: 'Designed to support banks, NBFCs, fintech companies, insurers, and other regulated businesses with standardized KYC workflows.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Seamless Integration Ecosystem',
    description: 'Integrate effortlessly with CRM, LOS, LMS, onboarding platforms, mobile applications, and enterprise business systems.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Verification Expertise That Delivers',
    description: 'Backed by experienced verification professionals and technology-driven processes to help businesses build faster and more reliable KYC workflows.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Embed API',
    description: 'Embed KYC API into the application.',
  },
  {
    step: '02',
    title: 'Pass Customer Info',
    description: 'Securely pass customer information via the API.',
  },
  {
    step: '03',
    title: 'Verification Workflow',
    description: 'The API runs verification using the set verification workflow.',
  },
  {
    step: '04',
    title: 'Real-Time Results',
    description: 'Get verification results in real time to support faster onboarding and clear decisions.',
  },
]

const kycFaqs: FAQItem[] = [
  {
    q: 'What is a KYC API?',
    a: 'With secure API integrations and a KYC API, it is possible to automate customer identity verification and streamline the onboarding and compliance procedures.',
  },
  {
    q: 'Who can use the KYC API?',
    a: 'The API can be used to integrate with the systems of banks, NBFCs, fintechs, insurance companies, telecom companies, marketplaces, and enterprises.',
  },
  {
    q: 'Is the KYC API easy to integrate?',
    a: 'Yes. The API supports smooth integration with existing applications so businesses can automate verification efficiently.',
  },
  {
    q: 'Can the KYC API support digital onboarding?',
    a: 'Yes. The API helps organizations streamline digital onboarding by automating customer verification and cutting manual effort.',
  },
  {
    q: 'Why choose Credify India’s KYC API?',
    a: 'With secure infrastructure, enterprise-grade technology, compliance-designed workflows, and dedicated technical support, Credify India provides reliable KYC verification solutions.',
  },
]

export default function KycClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="Customer Verification API"
        title="Secure KYC API for Faster Customer Onboarding &"
        highlightTitle="Compliance"
        subtitle="Speed up customer onboarding with Credify India’s KYC API. Automate Know Your Customer (KYC) verification, simplify compliance workflows, cut manual verification efforts, and give secure onboarding experiences through scalable, developer-friendly API integrations."
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide">
                Automated Customer Due Diligence
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Streamline Customer Verification with Credify India’s KYC API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                For those businesses in regulated industries, it is important to perform customer identity checks. Manual document review, time-consuming verification, and inefficiencies are common challenges with traditional KYC processes. Credify India’s KYC API lets organizations automate customer verification with secure, real-time API integrations that raise efficiency and support compliance requirements.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We built the API for banks, NBFCs, fintech companies, insurance providers, lending platforms, telecom companies, and digital businesses. It integrates into existing applications, simplifies identity verification, and speeds up customer onboarding. Whether you&apos;re onboarding new customers, verifying user information, or strengthening compliance workflows, the API helps businesses deliver faster, more reliable verification experiences.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/kyc-api.svg" alt="KYC Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Compliant</strong>
                  Built on rigorous operational standards to support secure verification and responsible data handling across high-trust financial systems.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-orange-400" />
                  Target Ecosystem
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Perfectly optimized for regulated sectors requiring real-time identity checks:
                </p>
                <div className="space-y-3">
                  {[
                    'Banks & NBFCs',
                    'Fintech & Lending Platforms',
                    'Insurance Providers',
                    'Telecom Companies',
                    'Marketplaces & Enterprises',
                    'Digital Business Platforms',
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
              Scalable, compliant, and developer-friendly KYC API architecture.
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

      {/* Why Choose Credify India for KYC API? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for KYC API?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built to simplify compliance, eliminate bottlenecks, and power high-volume KYC operations.
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

      {/* How Does a KYC API Work */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Automated Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does a KYC API Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Streamlined 4-step workflow to verify identity and enable instant customer onboarding.
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
        subtitle="Common questions regarding Credify India's KYC API integration, security, and onboarding."
        badgeText="KYC API FAQ"
        faqs={kycFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Simplify KYC Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Automate customer verification, strengthen compliance, and improve digital onboarding with Credify India’s secure and scalable KYC API. Reach out to our experts to find the right verification solution for your business.
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
