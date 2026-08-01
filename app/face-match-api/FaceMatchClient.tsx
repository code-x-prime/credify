'use client'

import React from 'react'
import ApiHero from '@/components/ApiHero'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  ShieldCheck,
  Zap,
  Code,
  Lock,
  Clock,
  Layers,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronRight,
  Server,
  ScanFace,
  Percent,
  AlertTriangle,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'AI-Powered Facial Comparison',
    description: 'Compare facial images intelligently to support accurate identity verification during digital onboarding and authentication.',
    icon: ScanFace,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Image-to-Image Matching',
    description: 'Match customer photographs across supported image sources through automated facial comparison workflows.',
    icon: Code,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Confidence Score Generation',
    description: 'Get configurable similarity scores that help businesses judge facial match results against set thresholds.',
    icon: Percent,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Low-Latency API Responses',
    description: 'Get face comparison results in real time to enhance the customer experience and reduce the time needed to onboard customers.',
    icon: Clock,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Fraud Prevention Support',
    description: 'Tighten identity verification workflows by spotting facial mismatches during customer onboarding and verification.',
    icon: AlertTriangle,
    color: 'from-rose-500 to-red-600',
  },
  {
    title: 'Enterprise-Scale Processing',
    description: 'Handle high-volume facial verification requests through secure and scalable API infrastructure.',
    icon: Layers,
    color: 'from-[#001f7d] to-blue-700',
  },
]

const whyChooseUs = [
  {
    title: 'AI-Driven Facial Verification',
    description: 'Modern facial comparison technology helps organisations tighten digital identity verification with more consistency.',
    icon: Sparkles,
  },
  {
    title: 'Optimized for Digital Onboarding',
    description: 'Designed for customer onboarding, customer authentication, eKYC processes and digital verification journeys.',
    icon: Zap,
  },
  {
    title: 'High-Volume Capability',
    description: 'Designed to process large volumes of face match requests while keeping reliable performance.',
    icon: Server,
  },
  {
    title: 'Enterprise Security Standards',
    description: 'Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices for secure biometric verification.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Integration Architecture',
    description: 'Fit the API into mobile applications, web portals, onboarding platforms, and enterprise verification systems without hassle.',
    icon: Code,
  },
  {
    title: 'Trusted Technical Expertise',
    description: 'Our implementation specialists assist in API integration, testing, deployment and continuous optimisation for enterprise environment.',
    icon: Users,
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the Face Match API into your application.',
  },
  {
    step: '02',
    title: 'Submit Facial Images',
    description: 'Submit the facial images securely through the API.',
  },
  {
    step: '03',
    title: 'Intelligent Comparison',
    description: 'The API performs intelligent facial comparison using configured matching parameters.',
  },
  {
    step: '04',
    title: 'Confidence Results',
    description: 'Receive match results and confidence scores to support secure identity verification.',
  },
]

const faceMatchFaqs: FAQItem[] = [
  {
    q: 'What is a Face Match API?',
    a: 'A Face Match API compares two facial images digitally to help organizations support identity verification, authentication, and fraud prevention workflows.',
  },
  {
    q: 'Which industries can use the Face Match API?',
    a: 'The API can be integrated with banks, NBFCs, fintech companies, insurance companies, telecom, healthcare organisations, marketplaces, and enterprises.',
  },
  {
    q: 'Is the Face Match API easy to integrate?',
    a: 'Yes. Our REST API can be easily integrated with applications on the web, mobile, digital onboarding platforms, and enterprise systems.',
  },
  {
    q: 'Is biometric data handled securely?',
    a: 'Credify India’s platform follows ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices to support secure handling of verification data and enterprise-grade information security.',
  },
  {
    q: 'Why choose Credify India’s Face Match API?',
    a: 'Businesses choose Credify India for AI-powered facial verification, enterprise-ready infrastructure, secure operational standards, scalable processing capabilities, and easy API integration.',
  },
]

export default function FaceMatchClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* 🌟 HERO SECTION */}
      <ApiHero
        badgeText="AI FACIAL VERIFICATION & MATCHING"
        title="Face Match API for Secure Identity Verification &"
        highlightTitle="Fraud Prevention"
        subtitle="Make digital identity checks stronger with Credify India’s Face Match API. Compare facial images safely, improve customer authentication, cut identity fraud, and run smooth digital onboarding through AI-powered, scalable, and enterprise-ready API integrations."
      />

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wide">
                Automated Facial Comparison
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Strengthen Identity Verification with Credify India’s Face Match API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Digital onboarding continues to increase, and businesses must have strong methods to verify that their customer is actually who they claim to be. Manual face comparison is very time-consuming, hard to do, and not scalable. Credify India’s Face Match API automates facial comparison by matching facial images in a smart way. This helps organizations tighten identity verification and speed up daily operations.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We have API users like banks, NBFCs, fintech companies, insurance service providers, telecom operators, marketplaces, healthcare organizations, and enterprises. It integrates seamlessly with digital onboarding and authentication processes. You can verify new customers, help with account recovery, or build stronger fraud prevention. Our Face Match API gives fast, secure, and dependable identity verification every time.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <ShieldCheck size={28} className="text-[#001f7d] flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Adheres to high information security, quality management, and operational excellence norms.
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <img src="/images/face-match-api.png" alt="Face Match API" className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES GRID */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features of Face Match API
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Powerful AI-driven facial matching capabilities designed for high-scale enterprise workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 hover:border-amber-500/50 transition-all duration-300">
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
              Why Choose Credify India for Face Match API?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Built to provide AI-driven facial verification, high-volume capacity, and flexible REST API architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-amber-400 flex items-center justify-center mb-4">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wide mb-3">
              Simple Integration
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does Face Match API Work?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to add AI-powered facial comparison to your digital onboarding journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 relative">
                <div className="text-2xl font-black text-amber-400 mb-3">{st.step}</div>
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
        subtitle="Common questions regarding Credify India's Face Match API."
        badgeText="FACE MATCH FAQ"
        faqs={faceMatchFaqs}
      />

      {/* CTA BOTTOM BANNER */}
      <section className="pb-16 pt-4 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Build Smarter Identity Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Cut identity fraud, tighten digital onboarding, and improve customer authentication with Credify India’s secure Face Match API. Talk to our experts to add intelligent facial verification into your business workflows.
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
