'use client'

import React from 'react'
import ApiHero from '@/components/ApiHero'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  ShieldCheck,
  Code,
  Layers,
  Users,
  ArrowRight,
  PhoneCall,
  Server,
  ShieldAlert,
  SlidersHorizontal,
  PieChart,
  Activity,
  FileCheck2
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'Intelligent Risk Scoring',
    description: 'Develop structured risk assessments to facilitate informed onboarding and verification processes.',
    icon: PieChart,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Fraud Risk Indicators',
    description: 'Spot potential risk signals that help organisations tighten fraud prevention workflows.',
    icon: ShieldAlert,
    color: 'from-rose-500 to-red-600',
  },
  {
    title: 'Compliance Risk Insights',
    description: 'Back compliance work by giving risk intelligence that matches organisational verification needs.',
    icon: FileCheck2,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Configurable Risk Rules',
    description: 'Set risk evaluation parameters based on your organisation’s policies, industry needs, and operational goals.',
    icon: SlidersHorizontal,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Real-Time Risk Analysis',
    description: 'Get timely risk insights so customer onboarding and business decisions move faster.',
    icon: Activity,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Enterprise-Scale Risk Processing',
    description: 'Handle high-volume risk assessment requests through secure and scalable API infrastructure.',
    icon: Layers,
    color: 'from-[#001f7d] to-blue-700',
  },
]

const whyChooseUs = [
  {
    title: 'Smarter Risk-Based Decision Making',
    description: 'Automated and structured risk insights by onboarding teams rather than just manual reviews.',
    icon: ShieldAlert,
  },
  {
    title: 'Designed for High-Risk Environments',
    description: 'Designed for banks, NBFCs, fintech firms, insurers, payment platforms, marketplaces and enterprises.',
    icon: Server,
  },
  {
    title: 'Flexible Risk Framework',
    description: 'Set risk evaluation logic to match your internal compliance policies, business rules, and operational needs.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Trusted Security Standards',
    description: 'Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise-Ready API Ecosystem',
    description: 'Fit the API with onboarding platforms, fraud management systems, CRM, ERP, and enterprise business applications without hassle.',
    icon: Code,
  },
  {
    title: 'Reliable Intelligence at Scale',
    description: 'Produce risk insights consistently across growing verification volumes through a secure platform.',
    icon: Users,
  },
]

const steps = [
  {
    step: '01',
    title: 'Embed API',
    description: 'Seamlessly embed the Risk Intelligence API into your verification process.',
  },
  {
    step: '02',
    title: 'Send Requests',
    description: 'Send required verification or assessment requests securely via the API.',
  },
  {
    step: '03',
    title: 'Evaluate Parameters',
    description: 'The API evaluates configured risk parameters and generates structured intelligence.',
  },
  {
    step: '04',
    title: 'Actionable Insights',
    description: 'Get actionable risk information to guide quicker, more informed business decisions.',
  },
]

const riskFaqs: FAQItem[] = [
  {
    q: 'What is a Risk Intelligence API?',
    a: 'A Risk Intelligence API provides structured risk insights, helping organisations in strengthening fraud prevention, customer onboarding, compliance, and business decisions.',
  },
  {
    q: 'Which industries can use the Risk Intelligence API?',
    a: 'The API can be integrated by various entities, including banks, NBFCs, fintech firms, insurance companies, payment platforms, marketplaces, telecom firms, and enterprises.',
  },
  {
    q: 'Can the Risk Intelligence API be customized?',
    a: 'Yes. The risk assessment parameters can be configured to align with the organizational policies, compliance, and business objectives.',
  },
  {
    q: 'Is the Risk Intelligence API secure?',
    a: 'Yes. Credify India’s API platform follows ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational standards to support secure data handling and reliable verification workflows.',
  },
  {
    q: 'Why choose Credify India’s Risk Intelligence API?',
    a: 'Businesses choose Credify India for intelligent risk assessment, enterprise-grade infrastructure, configurable evaluation frameworks, secure operational standards, and scalable API integrations.',
  },
]

export default function RiskIntelligenceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* 🌟 HERO SECTION */}
      <ApiHero
        badgeText="FRAUD DETECTION & RISK INTELLIGENCE"
        title="Risk Intelligence API for Smarter Fraud Detection &"
        highlightTitle="Risk Assessment"
        subtitle="Make business decisions stronger with Credify India’s Risk Intelligence API. Get clear risk insights, improve fraud detection, support compliance efforts, and decide with confidence during onboarding through secure, scalable, enterprise-ready API integrations."
      />

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wide">
                Smart Risk Insights
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Make Risk-Aware Decisions with Credify India’s Risk Intelligence API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Businesses today deal with rising fraud risks, identity misuse, financial crime, and compliance duties. Manual reviews alone slow down onboarding and create extra work. Credify India’s Risk Intelligence API helps organisations make better decisions by giving smart risk insights that support customer onboarding, business verification, compliance, and fraud prevention.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Banks, NBFCs, fintech companies, insurance providers, lending institutions, payment platforms, marketplaces, telecom companies, and enterprises can use our API. It fits into existing verification workflows without trouble. You can assess customer risk, review business relationships, or support compliance reviews. Our Risk Intelligence API is designed to allow organisations to automate risk assessment and enhance everyday business.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <ShieldCheck size={28} className="text-[#001f7d] flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Adhering to recognised standards for information security, quality management, and operational excellence.
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <img src="/images/risk-intelligence-api.png" alt="Risk Intelligence API" className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES GRID */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features of Risk Intelligence API
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Automated risk scoring and fraud indicator capabilities for high-volume enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 hover:border-rose-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Credify India for Risk Intelligence API?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Built for high-risk business environments, offering configurable evaluation frameworks and scalable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW STEPS */}
      <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-rose-400 text-xs font-bold uppercase tracking-wide mb-3">
              Execution Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does Risk Intelligence API Work?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to turn verification data into actionable business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 relative">
                <div className="text-2xl font-black text-rose-400 mb-3">{st.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE FAQ SECTION */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions regarding Credify India's Risk Intelligence API."
        badgeText="RISK FAQ"
        faqs={riskFaqs}
      />

      {/* CTA BOTTOM BANNER */}
      <section className="pb-16 pt-4 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Strengthen Risk Intelligence with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Turn verification data into useful business insights with Credify India’s Risk Intelligence API. Reduce risk, ensure compliance, and confidently make onboarding decisions with an intelligent, scalable, and secure risk assessment.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-[#f97316] hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                Request a Demo
                <ArrowRight size={16} />
              </button>
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full border border-white/20 transition-all duration-300"
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
