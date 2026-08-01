'use client'

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
    title: 'Instant PAN Verification',
    description: 'Check PAN details fast to drive quicker onboarding and identity verification workflows.',
    icon: '/icons/pan-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Easy API Integration',
    description: 'Seamlessly integrate with web, mobile, CRM, ERP, HRMS, and enterprise applications.',
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
    title: 'Real-Time Verification Responses',
    description: 'Get fast API responses that lift customer experience and cut processing delays.',
    icon: '/icons/clock.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Built for Scale',
    description: 'Handle growing verification volumes with reliable, high-performance API infrastructure.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Compliance-Focused Verification',
    description: 'Enhance KYC, customer verification and regulatory compliance with automated verification workflows.',
    icon: '/icons/shield.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Enterprise-Grade Security',
    description: 'Our APIs are built on practices that are based on ISO 27001 information security standards and SOC 2 audited operational controls.',
    icon: '/icons/lock.svg',
  },
  {
    title: 'Quality You Can Trust',
    description: 'Verification services remain consistent and reliable, thanks to ISO 9001 certified quality management processes.',
    icon: '/icons/award.svg',
  },
  {
    title: 'Developer-Friendly APIs',
    description: 'Clear APIs let teams implement faster with less development effort.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Reliable & Scalable Platform',
    description: 'Support startups, enterprises, banks, NBFCs, and fintechs and high volume verification needs.',
    icon: '/icons/building.svg',
  },
  {
    title: 'Faster Customer Onboarding',
    description: 'Automate PAN Verification to reduce manual processes and accelerate PAN onboarding journeys.',
    icon: '/icons/clock.svg',
  },
  {
    title: 'Dedicated Technical Support',
    description: 'Our implementation team supports API integration, testing and deployment.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the PAN Verification API into your application.',
  },
  {
    step: '02',
    title: 'Send PAN Details',
    description: 'Send the PAN details securely through the API.',
  },
  {
    step: '03',
    title: 'Check Information',
    description: 'The API checks the information using the set verification workflow.',
  },
  {
    step: '04',
    title: 'Instant Response',
    description: 'Get verification responses right away to support faster business decisions.',
  },
]

const panFaqs: FAQItem[] = [
  {
    q: 'What is a PAN Verification API?',
    a: 'A PAN Verification API lets businesses automate PAN validation through secure API integrations and supports identity verification and compliance workflows.',
  },
  {
    q: 'Which businesses can use the PAN Verification API?',
    a: 'The API can be integrated by banks, NBFCs, fintech, insurance, lending platforms, HR platforms, marketplaces, and enterprises.',
  },
  {
    q: 'Is the PAN Verification API easy to integrate?',
    a: 'Yes. Our developer-friendly API supports quick integration into existing business applications.',
  },
  {
    q: 'Is the API secure?',
    a: "Yes. Credify India’s APIs rest on ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational practices that help organizations keep verification workflows secure.",
  },
  {
    q: "Why choose Credify India’s PAN Verification API?",
    a: 'Businesses pick Credify India for secure APIs, enterprise-ready infrastructure, developer-friendly integrations, compliance-focused verification, and dedicated technical support.',
  },
]

export default function PanClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="Tax & Identity API"
        title="PAN Verification API for Instant Identity Verification &"
        highlightTitle="Compliance"
        subtitle="Simplify customer onboarding and strengthen compliance with Credify India’s PAN Verification API. Validate PAN details instantly through secure, developer-friendly APIs that speed up identity verification, cut manual effort, and deliver faster onboarding experiences for businesses in regulated industries."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Automated PAN Validation
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Automate PAN Verification with Credify India’s Secure API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                PAN details checking is at the core of customer onboarding, financial verification, and compliance processes. Manual processes can lead to longer turnaround times, operational delays, and negatively impact customer experience. Credify India’s PAN Verification API lets businesses automate PAN verification with secure, scalable API integrations that deliver quicker and smoother verification.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We built the API for banks, NBFCs, fintech companies, insurance providers, lending platforms, investment firms, HR platforms, and enterprises. It slots into existing systems and simplifies verification workflows. During customer checks or internal compliance procedures, the PAN Verification API boosts efficiency and provides a secure verification process.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/pan-verification-api.svg" alt="PAN Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Businesses know they can trust us with each and every verification request, as we adhere strictly to international standards for information security, quality management, and everyday operations.
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
                  Trusted across high-compliance tax and identity verification ecosystems:
                </p>
                <div className="space-y-3">
                  {[
                    'Banks & NBFCs',
                    'Fintech & Investment Firms',
                    'Insurance Providers',
                    'Lending Platforms',
                    'HR Platforms & Recruitment',
                    'Enterprises & Marketplaces',
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
              Instant responses, enterprise security, and compliance-oriented API architecture.
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

      {/* Why Choose Credify India for PAN Verification API? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for PAN Verification API?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              High-performance infrastructure built to streamline PAN onboarding and regulatory compliance.
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

      {/* How PAN Verification API Works */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              API Process Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How PAN Verification API Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Automated 4-step workflow to validate PAN identity details seamlessly.
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
        subtitle="Common questions regarding Credify India's PAN Verification API integration, security, and usage."
        badgeText="PAN API FAQ"
        faqs={panFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Accelerate PAN Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Drive faster customer onboarding, build stronger compliance, and simplify identity verification with Credify India’s secure PAN Verification API. Speak with our experts and choose the API that&apos;s perfect for your business.
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
