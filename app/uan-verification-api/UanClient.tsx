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
    title: 'Faster Employment Verification',
    description: 'Automate UAN-based verification to streamline hiring and cut manual verification efforts.',
    icon: '/icons/uan-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Easy API Integration',
    description: 'Integrate seamlessly with HRMS, ATS, Recruitment, and Enterprise Business Applications.',
    icon: '/icons/code.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Guard sensitive employee information through secure API architecture and encrypted communication.',
    icon: '/icons/lock.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Real-Time Verification Responses',
    description: 'Instant verification responses for faster recruitment and employee onboarding.',
    icon: '/icons/clock.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Scalable Verification Platform',
    description: 'Handle high-volume hiring needs with reliable and enterprise-ready API infrastructure.',
    icon: '/icons/layers.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'HR-Focused Verification Workflows',
    description: 'Boost recruitment efficiency through standardized, technology-enabled employment verification.',
    icon: '/icons/document-verification.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Certified for Security & Quality',
    description: 'Our API platform rests on ISO 27001 Certification, ISO 9001 Certification, and SOC 2 Audited operational practices for secure and dependable verification services.',
    icon: '/icons/shield.svg',
  },
  {
    title: 'Enterprise-Ready API Infrastructure',
    description: 'Assist businesses of all sizes, small and large, from startups to enterprises with requirements of bulk hiring.',
    icon: '/icons/business-verification-api.svg',
  },
  {
    title: 'Developer-Friendly REST APIs',
    description: 'Fewer steps to integration with existing HR and recruitment systems with simple, well-documented APIs.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Faster Employee Onboarding',
    description: 'Cut manual verification efforts and speed up recruitment through automated verification workflows.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Reliable Verification Technology',
    description: 'High-performance infrastructure provides consistent, secure, and scalable experiences for verification.',
    icon: '/icons/award.svg',
  },
  {
    title: 'Dedicated Technical Support',
    description: 'Our implementation specialists guide you through the integration, testing, deployment and ongoing technical support of APIs.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Embed API',
    description: 'Embed UAN Verification API into your HR or recruitment system.',
  },
  {
    step: '02',
    title: 'Send Request',
    description: 'Use API to send the verification request securely.',
  },
  {
    step: '03',
    title: 'Standard Workflow',
    description: 'The API runs the request using standardized verification workflows.',
  },
  {
    step: '04',
    title: 'Instant Response',
    description: 'Get verification responses to support faster hiring and confident onboarding decisions.',
  },
]

const uanFaqs: FAQItem[] = [
  {
    q: 'What is a UAN Verification API?',
    a: 'A UAN Verification API helps organizations automate employment-related verification through secure API integrations, supporting faster hiring and workforce onboarding.',
  },
  {
    q: 'Which businesses can use the UAN Verification API?',
    a: 'HR teams, recruitment agencies, staffing agencies, enterprises, IT companies, BPOs, NBFCs, and healthcare organizations can integrate the API into their current systems.',
  },
  {
    q: 'Is the UAN Verification API easy to integrate?',
    a: 'Yes. Our REST API ensures seamless integration with HRMS, ATS, recruitment apps, and enterprise apps.',
  },
  {
    q: 'Is the UAN Verification API secure?',
    a: 'Yes. Credify India’s API platform follows ISO 27001-certified, ISO 9001 Certified, and SOC 2 Audited operational standards to help protect sensitive employee information and support secure verification workflows.',
  },
  {
    q: 'Why choose Credify India’s UAN Verification API?',
    a: 'Businesses pick Credify India for secure API infrastructure, enterprise-grade technology, developer-friendly integrations, compliance-focused verification workflows, and dedicated technical support that simplifies employment verification.',
  },
]

export default function UanClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="HR & Employment API"
        title="UAN Verification API for Faster Employment Verification &"
        highlightTitle="Workforce Onboarding"
        subtitle="Simplify employment verification with Credify India’s UAN Verification API. Check UAN-related employment information securely, speed up employee onboarding, strengthen HR verification workflows, and raise hiring confidence through scalable, developer-friendly API integrations."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                HR & Recruitment Automation
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Automate Employment Verification with Credify India’s UAN Verification API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Verifying employment is an important aspect of contemporary recruitment, as organizations need to verify an employee&apos;s information before hiring him or her. Manual methods can be time-consuming and cumbersome, delaying hiring. Credify India’s UAN Verification API lets organizations automate employment verification workflows, so they improve efficiency and support clearer hiring decisions.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We designed the API for HR teams, staffing agencies, enterprises, IT companies, banks, NBFCs, BPOs, healthcare organizations, and recruitment firms. It slots into existing HRMS, ATS, and enterprise platforms without hassle. The UAN Verification API makes it easy to process employment verification with secure and technology-driven workflows, especially when bringing on new recruits in large batches or improving your hiring processes.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/uan-verification-api.svg" alt="UAN Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Credify India is ISO 27001 Certified, ISO 9001 Certified and SOC 2 Audited. We adhere to clear information security, quality management, and everyday treatment standards set by the international community.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-orange-400" />
                  Target HR & Enterprise Verticals
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Optimized for HRMS, ATS, and high-volume recruitment:
                </p>
                <div className="space-y-3">
                  {[
                    'HR Teams & Staffing Agencies',
                    'IT Companies & Tech Enterprises',
                    'Banks & NBFCs',
                    'BPOs & Call Centers',
                    'Healthcare Organizations',
                    'Recruitment Platforms',
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

      {/* Key Features of UAN Verification API */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features of UAN Verification API
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Instant responses, ATS/HRMS integration, and enterprise-grade security.
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

      {/* Why Choose Credify India UAN Verification API? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India UAN Verification API?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built to support bulk hiring, HRMS platforms, and reliable background checks.
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

      {/* How Does the UAN Verification API Work? */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Recruitment Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does the UAN Verification API Work?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to integrate and automate UAN employment verification.
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
        subtitle="Common questions regarding Credify India's UAN Verification API integration, security, and HRMS usage."
        badgeText="UAN API FAQ"
        faqs={uanFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Simplify Employment Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Speed up hiring, automate employment verification, and improve workforce onboarding with Credify India’s secure UAN Verification API. Contact our experts to discover the API solution ideal for your recruitment and HR needs.
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
