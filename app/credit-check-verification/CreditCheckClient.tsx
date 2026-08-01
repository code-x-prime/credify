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
  CreditCard,
  Lock,
  FileText,
  DollarSign,
  PieChart,
  Shield,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Credit Report Review',
    description: 'We review relevant credit details to provide organizations with useful information when making hiring decisions for jobs that involve financial duties and important business tasks.',
    icon: '/icons/credit-check.svg',
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Identity Validation',
    description: 'Our checking process confirms the candidate’s identity information to make sure the credit verification stays accurate and produces trustworthy results.',
    icon: Shield,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Financial History Review',
    description: 'When needed, we look at relevant financial background details within the agreed scope to back up responsible hiring choices.',
    icon: PieChart,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Verification Assessment',
    description: 'Our team reviews the gathered information and creates clear summaries that help employers assess candidates with more certainty.',
    icon: FileCheck2,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Secure Report Delivery',
    description: 'We prepare every employee credit check report carefully and send it only to the right people while protecting confidentiality the whole way.',
    icon: Lock,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Customized Credit Checks',
    description: 'We adjust employee credit check services to match specific job roles, industry needs, company hiring rules, and exact verification goals.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: '10+ Years of Verification Leadership',
    description: 'Since 2015, Credify India has supported organizations with dependable background verification services, helping businesses strengthen hiring decisions through structured processes across sectors.',
    icon: Award,
  },
  {
    title: '1M+ Verification Requests Processed',
    description: 'Our verification ecosystem is designed to efficiently manage large volumes of verification requests while maintaining consistent quality and dependable outcomes.',
    icon: Users,
  },
  {
    title: '500+ Enterprise & Growing Businesses',
    description: 'Organizations across industries trust Credify India to deliver verification services that support confident hiring, reduce recruitment risks, and streamline onboarding.',
    icon: Building2,
  },
  {
    title: '50+ Industry-Specific Programs',
    description: 'Verification workflows are tailored to industry requirements, organizational policies, regulatory expectations, and job responsibilities.',
    icon: Sliders,
  },
  {
    title: 'Built for Enterprise & High-Volume',
    description: 'From growing businesses to large enterprises, our verification processes are designed to support recruitment at scale.',
    icon: Zap,
  },
  {
    title: '95% Service Reliability Standards',
    description: 'Structured quality controls, standardized procedures, and secure operational practices help ensure consistent service delivery.',
    icon: ShieldCheck,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send us the candidate details and what you need checked to start the employee credit check through our organized workflow.',
  },
  {
    step: 'Step 2',
    title: 'Authorization Review',
    description: 'We check the necessary approvals and candidate information before beginning verification according to your company’s requirements.',
  },
  {
    step: 'Step 3',
    title: 'Credit Verification',
    description: 'Our specialists run the employee credit check using the right methods based on the agreed scope.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'We put every result through a careful quality check to maintain accuracy, consistency, and complete information.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished employee credit check report safely to the authorized people so they can make better hiring decisions.',
  },
]

const benefits = [
  {
    title: 'Informed Recruitment',
    description: 'Employee credit checks share useful financial details that help organizations choose the right people for positions that need it.',
  },
  {
    title: 'Better Risk Assessment',
    description: 'Looking at relevant financial information strengthens the recruitment process and supports careful hiring for roles that handle money.',
  },
  {
    title: 'Improved Decision-Making',
    description: 'Organized employee credit check services give extra insights that lead to more confident evaluations and better workforce planning.',
  },
  {
    title: 'Efficient Verification',
    description: 'Technology-driven systems speed up employee credit checks, helping companies work more effectively and avoid unnecessary hiring delays.',
  },
  {
    title: 'Flexible Verification Programs',
    description: 'We can adjust employee credit check services to fit your company policies, industry rules, and specific job needs.',
  },
  {
    title: 'Reliable Verification Reports',
    description: 'Clear reports present verification findings in a straightforward way so employers can review financial details with more assurance.',
  },
  {
    title: 'Secure Information Handling',
    description: 'Our processes focus on keeping information safe and managing sensitive data responsibly from start to finish.',
  },
  {
    title: 'Enterprise-Ready Solutions',
    description: 'From hiring one employee to thousands, our employee credit check services can easily scale along with your growing team.',
  },
]

const creditFaqs: FAQItem[] = [
  {
    q: 'What is an employee credit check?',
    a: 'An employee credit check reviews relevant credit information for suitable positions to help organizations make hiring decisions based on their own rules.',
  },
  {
    q: 'Why are employee credit checks conducted?',
    a: 'They allow companies to review important financial background details for roles that involve financial responsibilities or positions of trust.',
  },
  {
    q: 'Can employee credit checks be customized?',
    a: 'Yes. Credify India adjusts employee credit check services to match organizational policies, industry needs, and job responsibilities.',
  },
  {
    q: 'Which industries commonly use employee credit checks?',
    a: 'Employee credit checks are often used in BFSI, fintech, accounting, insurance, leadership hiring, procurement, and other areas where money handling is critical.',
  },
  {
    q: 'How does Credify India protect confidential information?',
    a: 'Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, which has established processes to ensure information remains secure and responsible operations are conducted.',
  },
]

export default function CreditCheckClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
                <CreditCard size={14} className="text-orange-500" />
                <span>Financial Background Screening</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Employee Credit Check Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">
                  Informed Hiring Decisions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Make smart hiring choices with Credify India’s employee credit check services. We help companies review key financial details for suitable positions using safe, organized, and dependable verification steps.
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
              <img src="/images/credit-check.png" alt="Credit Check Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
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
                Credit Check Services
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Credit Check Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India delivers solid Employee Credit Check Services that give organizations better tools for hiring people into positions with money-handling duties and trust-based roles. We&apos;ve been doing so since 2015, combining seasoned verification personnel, uniform verification procedures, and technology to provide solutions that are both effective and relevant to each business.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We&apos;re an ISO 27001- and ISO 9001-certified company, and we&apos;re SOC 2-audited, which means we&apos;re committed to information security, quality standards, and smooth operations. Our employee credit check services give companies more confidence during recruitment while following careful and proper hiring steps.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/credit-check-verification.svg" alt="Credit Check Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited Company</strong>
                  Committed to information security, quality standards, and smooth operations.
                </div>
              </div>
            </div>

            {/* What is an Employee Credit Check? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is an Employee Credit Check?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                  An Employee Credit Check is a review process that looks at key credit details for certain jobs where handling finances matters. It lets organizations check available financial records while following company rules and approval steps.
                </p>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  Companies often run employee credit checks for positions in financial management, banking, accounting, senior leadership, procurement, and other roles with major money responsibilities. At Credify India, we handle employee credit check services through clear verification steps that support good hiring choices and keep all information private.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Employee Credit Check Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Employee Credit Check Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Detailed credit report reviews, identity validations, and financial summaries.
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

      {/* Why Choose Credify India for Employee Credit Check Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Employee Credit Check Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India supports organizations in building stronger recruitment by offering reliable employee credit check services that speed up hiring.
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

      {/* Our Employee Credit Check Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Employee Credit Check Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear employee credit check process designed to produce safe, accurate, and prompt results.
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

      {/* Benefits of Employee Credit Check Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Employee Credit Check Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of performing financial background checks for sensitive and leadership roles.
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
        subtitle="Common questions regarding Credify India's Credit Check Services."
        badgeText="CREDIT FAQ"
        faqs={creditFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Make Financially Informed Hiring Decisions with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Good hiring choices depend on having the right information. Credify India’s Employee Credit Check Services help organizations review key financial background details for the right roles through safe, organized, and trustworthy verification solutions.
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
