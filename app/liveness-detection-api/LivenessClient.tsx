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
  Scan,
  ShieldAlert,
  SlidersHorizontal,
  Smile,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'AI-Based Liveness Detection',
    description: 'Confirm real user presence through smart liveness analysis built to tighten digital identity verification.',
    icon: Scan,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Presentation Attack Detection',
    description: 'Help spot common spoofing attempts that use photographs, recorded videos, masks, or screen replays during verification.',
    icon: ShieldAlert,
    color: 'from-rose-500 to-red-600',
  },
  {
    title: 'Passive Verification Experience',
    description: 'Let users complete verification smoothly without extra steps that slow the digital onboarding journey.',
    icon: Smile,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Real-Time Detection Results',
    description: 'Produce quick liveness responses so onboarding and authentication decisions happen faster.',
    icon: Clock,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Configurable Risk Assessment',
    description: 'Get detection outcomes that match your organisation’s security policies and verification workflows.',
    icon: SlidersHorizontal,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Enterprise-Scale Processing',
    description: 'Handle high-volume liveness verification requests through reliable and scalable API infrastructure.',
    icon: Layers,
    color: 'from-[#001f7d] to-blue-700',
  },
]

const whyChooseUs = [
  {
    title: 'Built to Reduce Identity Fraud',
    description: 'Tighten digital verification workflows by helping spot presentation attacks before onboarding or authentication finishes.',
    icon: ShieldAlert,
  },
  {
    title: 'Optimized for Digital Onboarding',
    description: 'Developed for eKYC, Account Opening, Customer Authentication, Workforce Onboarding, and Secure Digital Journeys.',
    icon: Zap,
  },
  {
    title: 'Intelligent Risk Evaluation',
    description: 'Liveness detection results help organisations tighten identity verification and support risk-aware decision-making.',
    icon: Sparkles,
  },
  {
    title: 'Trusted Security Standards',
    description: 'Backed by ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices for secure information handling.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Enterprise Integration',
    description: 'Fit the API easily with mobile applications, web portals, identity verification platforms, and enterprise systems.',
    icon: Code,
  },
  {
    title: 'Reliable Performance at Scale',
    description: 'Built to handle growing verification volumes while keeping dependable API performance and operational consistency.',
    icon: Users,
  },
]

const steps = [
  {
    step: '01',
    title: 'Embed API',
    description: 'Embed the Liveness Detection API into your app.',
  },
  {
    step: '02',
    title: 'Capture Data',
    description: 'Get the facial data you need safely in your app.',
  },
  {
    step: '03',
    title: 'Spoof Analysis',
    description: 'The API analyzes the input for signs of genuine user presence and potential presentation attacks.',
  },
  {
    step: '04',
    title: 'Detection Result',
    description: 'Receive the detection result to support secure identity verification and authentication workflows.',
  },
]

const livenessFaqs: FAQItem[] = [
  {
    q: 'What is a Liveness Detection API?',
    a: 'A Liveness Detection API helps verify whether a verification request is from a genuine person or a spoof, supporting secure identity verification.',
  },
  {
    q: 'Which industries can benefit from the Liveness Detection API?',
    a: 'The API can be used by banks, NBFCs, fintech, insurance, telecom, healthcare, marketplaces, enterprises, and more to integrate digital verification into their processes.',
  },
  {
    q: 'Can the API be integrated into existing applications?',
    a: 'Yes. We designed our REST API for seamless integration with mobile apps, web platforms, digital onboarding platforms, and enterprise software.',
  },
  {
    q: 'Is the Liveness Detection API secure?',
    a: 'Yes. Credify India’s verification platform follows ISO 27001-certified, ISO 9001 Certified, and SOC 2 Audited operational standards to support secure verification processes and responsible information handling.',
  },
  {
    q: 'Why choose Credify India’s Liveness Detection API?',
    a: 'Organisations choose Credify India for AI-powered liveness detection, enterprise-ready infrastructure, secure operational standards, scalable verification capabilities, and easy integration support.',
  },
]

export default function LivenessClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* 🌟 HERO SECTION */}
      <ApiHero
        badgeText="SPOOFING & PRESENTATION ATTACK PREVENTION"
        title="Liveness Detection API for Secure Identity Verification &"
        highlightTitle="Fraud Prevention"
        subtitle="Guard your digital onboarding process with Credify India’s Liveness Detection API. Spot spoofing attempts, confirm real user presence, tighten identity verification, and cut fraud risks through AI-powered, secure, and enterprise-ready API integrations."
      />

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#001f7d]/10 text-[#001f7d] text-xs font-bold uppercase tracking-wide">
                Real User Presence Audit
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Prevent Identity Fraud with Credify India’s Liveness Detection API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Digital onboarding is taking over from face-to-face checks, so organisations must make sure they talk to a real person and not a photo, video, mask, or other spoofing trick. Old verification methods often miss presentation attacks and leave the door open to fraud. Credify India’s Liveness Detection API helps businesses tighten identity verification by confirming real user presence before onboarding or authentication finishes.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our API is suitable for banks, NBFCs, fintech establishments, insurance companies, telecom carriers, health care organisations, marketplaces, and enterprises. It seamlessly integrates with existing digital onboarding and identity verification processes. You can add customers, secure user authentication or roll back fraud prevention efforts. Our Liveness Detection API also provides quick and secure and reliable verification each time.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <ShieldCheck size={28} className="text-[#001f7d] flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Adheres to recognised standards of Information Security, Quality Management and Operational Excellence.
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <img src="/images/liveness-detection-api.png" alt="Liveness Detection API" className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES GRID */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features of Liveness Detection API
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Passive verification experience, presentation attack detection, and real-time response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 hover:border-orange-500/50 transition-all duration-300">
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
              Why Choose Credify India for Liveness Detection API?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Designed to reduce identity fraud, optimized for digital onboarding, and built for scalable enterprise performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-orange-400 flex items-center justify-center mb-4">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Detection Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does Liveness Detection API Work?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to protect your digital onboarding against presentation attacks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 relative">
                <div className="text-2xl font-black text-orange-400 mb-3">{st.step}</div>
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
        subtitle="Common questions regarding Credify India's Liveness Detection API."
        badgeText="LIVENESS FAQ"
        faqs={livenessFaqs}
      />

      {/* CTA BOTTOM BANNER */}
      <section className="pb-16 pt-4 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Strengthen Digital Identity Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Guard your onboarding process against presentation attacks while giving customers a secure, smooth experience with Credify India’s Liveness Detection API. Talk to our experts to add smart liveness detection into your verification workflows.
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
