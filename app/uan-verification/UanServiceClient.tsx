'use client'

import React from 'react'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronRight,
  Building2,
  Users,
  Award,
  Clock,
  TrendingUp,
  FileCheck2,
  Sliders,
  BadgeCheck,
  Briefcase,
  Calendar,
  UserCheck,
  FileText,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'UAN Validation',
    description: 'We confirm UAN-related details to support employment checks and help organizations better understand candidates during hiring.',
    icon: '/icons/uan-api.svg',
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Employment Record Review',
    description: 'Our process helps examine relevant employment information connected to UAN records when it falls within the agreed verification scope.',
    icon: Briefcase,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Employment Timeline Assessment',
    description: 'We help companies review work timelines to support hiring decisions and increase confidence during the onboarding phase.',
    icon: Calendar,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Candidate Information Review',
    description: 'Our specialists review the provided details to ensure each verification request moves forward accurately and without delays.',
    icon: UserCheck,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Structured Verification Reports',
    description: 'You get well-organized reports that clearly show the findings, making it easier for HR teams to make sound recruitment decisions.',
    icon: FileText,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Customized Verification Scope',
    description: 'We tailor our UAN verification services to your company’s hiring rules, industry standards, and specific workforce verification goals.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Employment Verification Specialists',
    description: 'Our experienced professionals understand employment verification requirements and use structured methods to deliver accurate UAN-related verification across various industries.',
    icon: Award,
  },
  {
    title: 'Workforce Verification Expertise',
    description: 'After supporting organizations in many different hiring situations, we recognize how important it is to validate employment details as part of a complete recruitment approach.',
    icon: Users,
  },
  {
    title: 'Structured Employment Intelligence',
    description: 'Our standard verification framework lets organizations examine employment-related information through documented steps that emphasize consistency and openness.',
    icon: TrendingUp,
  },
  {
    title: 'HR-Friendly Verification Process',
    description: 'We design our verification steps to fit naturally into existing recruitment and onboarding routines, making things easier for HR and talent teams.',
    icon: Sliders,
  },
  {
    title: 'Flexible Verification Coverage',
    description: 'Different companies have unique hiring approaches. We shape UAN verification needs around your policies, staff categories, and recruitment targets.',
    icon: Zap,
  },
  {
    title: 'Dedicated Verification Coordinators',
    description: 'Our specialists actively manage every request and keep your team updated with clear communication throughout the entire process.',
    icon: ShieldCheck,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send candidate information and checking requirements to begin the UAN verification process.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our specialists review the submitted details and set the verification scope based on your organization’s needs.',
  },
  {
    step: 'Step 3',
    title: 'UAN Verification',
    description: 'We check the relevant UAN-connected information using proper methods within the agreed limits.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every result goes through a structured quality check to maintain accuracy and consistency in the reports.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished verification report safely to the authorized people so they can make informed hiring decisions.',
  },
]

const benefits = [
  {
    title: 'Better Employment Visibility',
    description: 'UAN verification helps organizations examine employment-related details to strengthen recruitment and workforce checks.',
  },
  {
    title: 'Improved Hiring Confidence',
    description: 'Confirmed employment information allows recruiters to make smarter choices and supports smoother onboarding.',
  },
  {
    title: 'Reliable Employment Assessment',
    description: 'Organized verification steps offer additional insights that work alongside standard employment checks when evaluating candidates.',
  },
  {
    title: 'Efficient Recruitment Support',
    description: 'Tech-supported processes simplify employment verification and improve the overall recruitment flow.',
  },
  {
    title: 'Flexible Verification Programs',
    description: 'We can customize UAN verification services to fit your company policies, workforce needs, and hiring targets.',
  },
  {
    title: 'Organized Verification Reports',
    description: 'You receive clear reports that make candidate evaluation easier and support better decisions during recruitment.',
  },
  {
    title: 'Secure Information Management',
    description: 'Our standard practices ensure responsible handling of information in every verification engagement.',
  },
  {
    title: 'Scalable Verification Solutions',
    description: 'Whether you are hiring a few professionals or growing large teams, our verification services expand easily to match your recruitment demands.',
  },
]

const uanFaqs: FAQItem[] = [
  {
    q: 'What is UAN verification?',
    a: 'UAN verification is the process of confirming UAN-related employment information as part of employee background checks where relevant.',
  },
  {
    q: 'Why is UAN verification important?',
    a: 'It helps organizations strengthen employment verification by checking key employment-related details during hiring.',
  },
  {
    q: 'Can UAN verification be customized?',
    a: 'Yes. Credify India adjusts UAN verification services based on organizational hiring policies, workforce requirements, and verification goals.',
  },
  {
    q: 'Which organizations use UAN verification?',
    a: 'Companies in IT, manufacturing, BFSI, healthcare, staffing, logistics, and many other sectors regularly include UAN verification in their hiring routines.',
  },
  {
    q: 'How does Credify India ensure secure verification?',
    a: 'As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, Credify India follows established practices that protect information and support responsible verification.',
  },
]

export default function UanServiceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
                <BadgeCheck size={14} className="text-orange-500" />
                <span>EPFO & UAN Employment Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                UAN Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">
                  Accurate Employment Verification
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Could missing or unclear employment details impact your upcoming hiring choices? Credify India offers UAN Verification Services that help businesses verify employment-related information using standard, secure verification steps.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2.5 bg-[#001f7d] hover:bg-[#f97316] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,31,125,0.25)] hover:scale-[1.02]"
                >
                  Request a Demo
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2.5 bg-white text-slate-700 hover:text-blue-700 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full border border-slate-200 hover:border-blue-200 transition-all duration-300 shadow-sm"
                >
                  <PhoneCall size={18} />
                  Talk to Our Experts
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <img src="/images/uan-service.png" alt="UAN Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Professional UAN Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India: Professional UAN Verification Services Partner You Can Rely On
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India serves as a trustworthy UAN Verification Services Partner that helps organizations improve employment checks by confirming UAN-connected details during recruitment and onboarding.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Since starting in 2015, we have brought together skilled verification experts, consistent working methods, and tech-supported processes to provide dependable solutions that match each business’s needs. As an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company, we stay dedicated to keeping information safe, managing quality well, and handling verifications responsibly.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/uan-service.svg" alt="UAN Verification Service" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Giving employers more assurance during hiring while following organized workforce-checking practices.
                </div>
              </div>
            </div>

            {/* What is UAN Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is UAN Verification?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                  UAN Verification is the process of confirming Universal Account Number (UAN)-linked employment details as part of background checks. It allows organizations to examine employment-related information tied to a candidate when relevant and within the set verification limits.
                </p>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  For companies bringing in experienced professionals, UAN verification works alongside regular employment checks to create a fuller picture of work history. At Credify India, our clear verification approach helps organizations make stronger recruitment decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our UAN Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our UAN Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed validation of UAN records, timelines, candidate details, and structured reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {includesList.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-2.5 rounded-xl border border-slate-200/60 bg-slate-50 w-fit mb-4">
                    {typeof item.icon === 'string' ? (
                      <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                    ) : (
                      <IconComp size={22} />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Credify India for UAN Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for UAN Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India combines deep verification expertise, a skilled team, and organized processes to help organizations handle UAN verification efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-300 transition-all duration-300">
                  <div className="p-2.5 rounded-xl border border-slate-200/60 bg-white w-fit mb-4">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our UAN Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our UAN Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear UAN verification process built to provide protected, steady, and prompt results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-extrabold text-orange-400 uppercase mb-2">{st.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of UAN Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of UAN Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of verifying UAN-linked employment records during candidate assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-[#001f7d]" />
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions regarding Credify India's UAN Verification Services."
        badgeText="UAN FAQ"
        faqs={uanFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Verify Employment Records with Greater Confidence
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Strong workforce verification begins with dependable employment details. Credify India’s UAN Verification Services help organizations improve employee screening through organized, secure, and technology-supported solutions designed for today’s hiring needs.
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
