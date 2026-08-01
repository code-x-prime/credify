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
  Scale,
  Search,
  UserCheck,
  FileText,
  Gavel,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Court Record Search',
    description: 'We review relevant court records using suitable verification methods to help organizations evaluate publicly available information before they hire.',
    icon: '/icons/court-check.svg',
    color: 'border-[#001f7d]/20 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Identity Assessment',
    description: 'Our verification specialists confirm candidate identity details to improve court record verification accuracy and overall reliability.',
    icon: UserCheck,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Case Information Review',
    description: 'Where it applies, we check relevant case-related information within the agreed scope to support better recruitment decisions.',
    icon: Gavel,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
  {
    title: 'Jurisdiction Verification',
    description: 'Our court record verification process looks at the right jurisdictions based on company requirements and the chosen verification package.',
    icon: Scale,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Verification Documentation',
    description: 'We put verification findings into clear reports so employers can easily understand the outcomes and make confident hiring decisions.',
    icon: FileText,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Customized Verification Scope',
    description: 'Every company has different hiring needs. We adjust court record verification services to fit industry requirements, workforce roles, and organizational policies.',
    icon: SlidersHorizontal,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
]

const whyChooseUs = [
  {
    title: 'Established in 2015',
    description: 'With nearly ten years of verification experience, Credify India has helped organizations across different industries with dependable court record verification solutions.',
    icon: Award,
  },
  {
    title: 'Millions of Verification Requests',
    description: 'Our extensive experience with millions of verification requests lets us deliver consistent, reliable court record verification outcomes.',
    icon: Users,
  },
  {
    title: 'Improved Hiring Decisions',
    description: 'Court record verification gives employers extra information that supports thorough candidate reviews and more confident recruitment choices.',
    icon: TrendingUp,
  },
  {
    title: 'Customized Verification Solutions',
    description: 'We can adjust our verification services to match company policies, industry needs, workforce types, and requirements for specific positions.',
    icon: Sliders,
  },
  {
    title: 'Technology-Enabled Workflows',
    description: 'Digital verification steps make request handling, quality checks, tracking, and secure report delivery smoother for a better overall experience.',
    icon: Zap,
  },
  {
    title: 'Efficient Turnaround',
    description: 'Standard processes and skilled verification specialists help us deliver court record verification reports on time while keeping accuracy and consistency.',
    icon: Clock,
  },
  {
    title: 'Experienced Verification Professionals',
    description: 'Our team follows clear procedures and careful quality reviews to provide dependable court record verification services.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise-Ready Solutions',
    description: 'Our scalable verification solutions work for both small and large businesses and have been designed to meet varying levels of hiring demand and workflow.',
    icon: Building2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send candidate information and verification requirements to start the court record verification process through our organized workflow.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our specialists review the submitted details to define the verification scope and prepare the request for processing.',
  },
  {
    step: 'Step 3',
    title: 'Court Record Verification',
    description: 'We review relevant court records using suitable verification methods based on company requirements and the agreed scope.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'All results are subject to a quality control process to ensure the accuracy, consistency and completeness of reports.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished verification report securely to the right people so they can make informed hiring and business decisions.',
  },
]

const benefits = [
  {
    title: 'Informed Recruitment',
    description: 'Court record verification enables organizations to review relevant court-related information, allowing recruiters to make informed hiring decisions with confidence.',
  },
  {
    title: 'Improved Risk Assessment',
    description: 'Checking relevant court records helps companies consider potential hiring factors while strengthening recruitment and workforce planning.',
  },
  {
    title: 'Better Candidate Evaluation',
    description: 'Organized court record verification gives extra insights that help employers review candidates more thoroughly before onboarding.',
  },
  {
    title: 'Efficient Verification',
    description: 'Our standard verification steps make court record reviews quicker and help organizations improve recruitment speed without losing quality.',
  },
  {
    title: 'Flexible Verification Scope',
    description: 'Court record verification services can be adjusted to fit company policies, job roles, and industry-specific hiring needs.',
  },
  {
    title: 'Reliable Verification Reports',
    description: 'Structured reporting gives clear verification findings so hiring teams can understand results and make confident recruitment decisions.',
  },
  {
    title: 'Stronger Workforce Integrity',
    description: 'Court record verification supports responsible hiring by adding to complete background checks and candidate assessment.',
  },
  {
    title: 'Scalable Verification Services',
    description: 'From one professional to multiple, our verification solutions scale with your business needs.',
  },
]

const courtFaqs: FAQItem[] = [
  {
    q: 'What is court record verification?',
    a: 'Court record verification involves checking relevant court-related information through proper methods to support informed hiring and business decisions.',
  },
  {
    q: 'Why is court record verification important?',
    a: 'It helps organizations strengthen recruitment by reviewing publicly available court-related information that may matter for candidate assessment.',
  },
  {
    q: 'Can court record verification be customized?',
    a: 'Yes. Credify India customizes court record verification services based on company policies, workforce needs, and industry-specific hiring requirements.',
  },
  {
    q: 'Which organizations use court record verification?',
    a: 'Court record verification is a common practice among various industries, including BFSI, IT, healthcare, manufacturing, logistics, retail, staffing, and more.',
  },
  {
    q: 'How does Credify India deliver secure verification services?',
    a: 'As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, Credify India follows standard verification steps designed for secure information handling and reliable results.',
  },
]

export default function CourtClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-amber-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Gavel size={14} className="text-orange-600" />
                <span>Legal & Judicial Background Screening</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Reliable Court Record Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-[#001f7d]">
                  Informed Hiring Decisions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Strengthen your recruitment process with Credify India’s court record verification services. We help organizations check relevant court records to support smarter hiring decisions and better risk assessment.
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
              <img src="/images/court-record-verification.png" alt="Court Record Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wide">
                Court Record Services
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Court Record Verification Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers dependable Court Record Verification Services that let organizations review relevant court-related information as part of employee screening and background checks. We began in 2015 and gathered the best verification experts, the best methods, and tech-assisted verification steps to provide accurate, trustworthy verification results.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                An ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company, we strive to meet high standards for information security, quality management, and smooth operations. Our court record verification services help companies enhance their hiring confidence, protect the integrity of their workforce, and make better hiring decisions.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/court-record-verification.svg" alt="Court Record Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Maintaining international standards in information security, quality management, and everyday operations.
                </div>
              </div>
            </div>

            {/* What is Court Record Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-orange-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Court Record Verification?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Court Record Verification involves verifying relevant court documents in a proper and legal manner, as per the agreed scope of verification. It enables organizations to locate publicly available court-related information they might be interested in when considering candidates for employment or other business positions.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Court record verification often forms part of full background checks for companies hiring people into sensitive positions, leadership roles, financial jobs, or customer-facing work. Reviewing relevant court records helps employers make more informed hiring decisions and improve their recruitment process.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Court Record Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Court Record Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive judicial checks tailored to your organization&apos;s risk tolerance and compliance policy.
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

      {/* Why Choose Credify India for Court Record Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Court Record Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India delivers organized court record verification services that help organizations speed up recruitment, strengthen workforce integrity, and make informed hiring decisions through secure processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-orange-300 transition-all duration-300">
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

      {/* Our Court Record Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Court Record Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a structured verification process to give reliable court record verification results while keeping consistency, confidentiality, and high standards.
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

      {/* Benefits of Court Record Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Court Record Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Strengthen recruitment and mitigate organizational risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-orange-50/60 to-slate-50 border border-orange-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-orange-500" />
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
        subtitle="Common questions regarding Credify India's Court Record Verification Services."
        badgeText="COURT FAQ"
        faqs={courtFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Make Better Hiring Decisions with Reliable Court Record Verification
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Support your recruitment process with Credify India’s Court Record Verification Services. Our organized verification solutions help organizations review relevant court records, improve candidate assessments, and boost hiring confidence through secure, tech-supported verification workflows.
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
