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
    title: 'Fast Identity Verification',
    description: 'Check customer identity quickly to cut onboarding delays and raise operational efficiency.',
    icon: '/icons/identity-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Seamless API Integration',
    description: 'Connect easily with your applications using developer-friendly APIs and clear documentation.',
    icon: '/icons/code.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Secure Verification Workflows',
    description: 'Support secure identity verification through encrypted communication and enterprise-grade security practices.',
    icon: '/icons/lock.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Handle growing verification volumes without losing performance or reliability.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Real-Time API Responses',
    description: 'Get verification responses right away to speed up customer onboarding and decision-making.',
    icon: '/icons/clock.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Compliance-Focused Solution',
    description: 'Support KYC and identity verification workflows while helping businesses strengthen compliance processes.',
    icon: '/icons/shield.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Faster Verification Workflows',
    description: 'Automate verification processes to reduce manual effort, accelerate onboarding, and improve operational efficiency.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Scalable API Infrastructure',
    description: 'Process high verification volumes through a reliable platform built to support growing business demands.',
    icon: '/icons/building.svg',
  },
  {
    title: 'Enterprise Security Standards',
    description: 'Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices to safeguard sensitive information.',
    icon: '/icons/shield.svg',
  },
  {
    title: 'Reliable API Performance',
    description: 'Designed to deliver consistent, secure, and dependable verification experiences across business-critical applications.',
    icon: '/icons/award.svg',
  },
  {
    title: 'Flexible Business Integrations',
    description: 'Connect seamlessly with CRM, ERP, HRMS, onboarding platforms, mobile applications, and enterprise systems.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Trusted Implementation Support',
    description: 'Our API specialists assist with integration, testing, deployment, and ongoing technical guidance for a smooth implementation.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the Identity Verification API into your application.',
  },
  {
    step: '02',
    title: 'Send Info Safely',
    description: 'Send customer identity information securely through the API.',
  },
  {
    step: '03',
    title: 'Run Workflow',
    description: 'The API runs the verification request using set verification workflows.',
  },
  {
    step: '04',
    title: 'Instant Results',
    description: 'Get verification results right away for faster onboarding and clear decision-making.',
  },
]

const identityFaqs: FAQItem[] = [
  {
    q: 'What is an Identity Verification API?',
    a: "An Identity Verification API lets businesses verify their customers' identity electronically through secure API integrations and simplify the customer onboarding and verification process.",
  },
  {
    q: 'Who can use the Identity Verification API?',
    a: 'The API can be integrated into various applications, including those by banks, fintech companies, NBFCs, insurance firms, marketplaces, telecom firms, and enterprises.',
  },
  {
    q: 'Is the API easy to integrate?',
    a: 'Yes. The API supports smooth integration so businesses can automate identity verification with little development effort.',
  },
  {
    q: 'Can the API support digital onboarding?',
    a: 'Yes. The Identity Verification API helps organizations streamline digital onboarding by enabling faster and more efficient identity verification.',
  },
  {
    q: 'Why choose Credify India’s Identity Verification API?',
    a: 'Credify India brings together secure infrastructure, enterprise-grade technology, experienced verification expertise, and compliance-focused workflows to deliver reliable identity verification solutions.',
  },
]

export default function IdentityClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="Identity Verification API"
        title="Secure Identity Verification API for Faster"
        highlightTitle="Customer Onboarding"
        subtitle="Accelerate Customer Onboarding using Credify India's Identity Verification API. Securely verify identities in a flash, improve compliance, mitigate fraud risks and enhance digital onboarding in today's business landscape quickly and easily with developer-friendly, scalable and modern API integrations."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Built for Modern Businesses
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Identity Verification API Built for Modern Businesses
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In the digital world, precisely verifying identities is essential to ensure a safe onboarding process and adhere to compliance standards. Manual verification may slow turnaround time, be expensive to operate, and involve human error. Credify India’s Identity Verification API lets organizations automate identity verification with smooth integrations that drive faster onboarding, better operational efficiency, and stronger risk management.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We designed the API for banks, NBFCs, fintech companies, insurance providers, marketplaces, telecom businesses, and enterprises. It supports secure verification workflows that fit into existing applications without trouble. Whether you check new customers, validate user information, or strengthen digital onboarding, the API simplifies verification and delivers a better customer experience.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/identity-verification-api.svg" alt="Identity Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Our operations follow strict international security and compliance frameworks to safeguard every identity verification transaction.
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
                  Engineered for seamless integration across digital platforms:
                </p>
                <div className="space-y-3">
                  {[
                    'Banks & NBFCs',
                    'Fintech Platforms',
                    'Insurance Providers',
                    'Digital Marketplaces',
                    'Telecom Businesses',
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

      {/* Key Features of Identity Verification API */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features of Identity Verification API
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real-time API responses, developer-friendly architecture, and scalable security.
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

      {/* Why Choose Credify India for Identity Verification API? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Identity Verification API?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Reliable performance, flexible integrations, and dedicated implementation guidance.
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

      {/* How Identity Verification API Works */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Workflow Overview
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Identity Verification API Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to execute real-time identity checks inside your applications.
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
        subtitle="Common questions regarding Credify India's Identity Verification API integration, security, and digital onboarding."
        badgeText="IDENTITY API FAQ"
        faqs={identityFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Simplify Identity Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Automate identity verification, strengthen compliance, and deliver faster digital onboarding experiences with Credify India’s secure and scalable Identity Verification API.
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
                Contact Our API Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
