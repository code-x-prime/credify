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
  ShieldAlert,
  Search,
  Scale,
  UserCheck,
  MapPin,
  FileText,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Criminal Record Search',
    description: 'We run criminal background checks using suitable and available sources to help organizations review relevant information before they decide to hire.',
    icon: '/icons/criminal-check.svg',
    color: 'border-red-200 bg-red-50/50 text-red-700',
  },
  {
    title: 'Court Record Review',
    description: 'Our verification process includes checking relevant court records where it applies. This supports a more complete background screening.',
    icon: Scale,
    color: 'border-[#001f7d]/20 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Identity Validation',
    description: 'Confirming the candidate’s identity makes sure the criminal background check is done on the right person. This increases accuracy and reliability.',
    icon: UserCheck,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Location-Based Verification',
    description: 'Where needed, criminal background checks can include location-based checks that fit the agreed scope and company requirements.',
    icon: MapPin,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Document Assessment',
    description: 'We review the supporting documents provided during verification to improve accuracy and keep the background screening organized.',
    icon: FileText,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Customized Criminal Checks',
    description: 'Our criminal background verification services can be adjusted to fit job roles, industry rules, company policies, and specific hiring needs.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Established in 2015',
    description: 'Nearly ten years of verification experience lets us deliver dependable criminal background check services across various industries and workforce types.',
    icon: Award,
  },
  {
    title: '5 Million+ Verification Requests',
    description: 'Our experience handling millions of verification requests helps organizations set up organized criminal background verification with confidence.',
    icon: Users,
  },
  {
    title: 'Improved Hiring Confidence',
    description: 'Reliable criminal background verification gives employers extra insights that support smarter recruitment choices and better workforce integrity.',
    icon: TrendingUp,
  },
  {
    title: 'Tailored Verification Programs',
    description: 'We adjust criminal background checks to align with the industry, the type of workforce, the company\'s policies, and the job requirements.',
    icon: Sliders,
  },
  {
    title: 'Technology-Driven Processes',
    description: 'Digital steps enable easier management of verification requests, monitoring progress, quality checks and secure reports and provide increased visibility.',
    icon: Zap,
  },
  {
    title: 'Efficient Turnaround',
    description: 'Our skilled verification specialists and standard methods help us deliver criminal background verification reports on time without lowering quality.',
    icon: Clock,
  },
  {
    title: 'Experienced Verification Specialists',
    description: 'Our team follows clear procedures and careful quality reviews to provide dependable verification results.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise-Ready Solutions',
    description: 'Our criminal background check services can be customized to meet your business needs, whether you\'re looking to hire a few candidates or conducting a large-scale recruitment.',
    icon: Building2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Share candidate information and the needed supporting details to start the criminal background verification process.',
  },
  {
    step: 'Step 2',
    title: 'Authorization & Review',
    description: 'We review the required authorization and candidate details before beginning verification activities based on the chosen scope.',
  },
  {
    step: 'Step 3',
    title: 'Criminal Check Execution',
    description: 'Our specialists carry out verification using suitable and available methods according to company requirements and standard processes.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Each result is subjected to a quality control process to ensure accuracy, consistency and completeness of the report.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We share the finished criminal background verification report securely with the right people so they can make informed hiring decisions.',
  },
]

const benefits = [
  {
    title: 'Safer Recruitment',
    description: 'Criminal background verification helps organizations make stronger hiring choices by reviewing relevant criminal record information before bringing new employees on board.',
  },
  {
    title: 'Better Workforce Integrity',
    description: 'Suitable criminal verification supports companies in building trustworthy teams and encourages responsible hiring and workforce management.',
  },
  {
    title: 'Improved Risk Awareness',
    description: 'Reviewing relevant criminal background information helps employers consider potential hiring factors and make better recruitment decisions.',
  },
  {
    title: 'Enhanced Hiring Confidence',
    description: 'Verified criminal background details let HR teams hire with more assurance and improve overall workforce quality.',
  },
  {
    title: 'Efficient Screening',
    description: 'Organized criminal background verification simplifies recruitment steps while making things more consistent and efficient.',
  },
  {
    title: 'Flexible Verification Scope',
    description: 'Our criminal background check services can be adjusted to fit company hiring policies, job responsibilities, and business needs.',
  },
  {
    title: 'Reliable Verification Reports',
    description: 'Standard methods help us create clear, organized, and dependable reports that support confident recruitment decisions.',
  },
  {
    title: 'Scalable Verification Services',
    description: 'From a few recruiters to large-scale recruitment drives, our criminal background verification solutions scale with your business.',
  },
]

const criminalFaqs: FAQItem[] = [
  {
    q: 'What is a criminal background check?',
    a: 'A criminal background check reviews relevant criminal record information through proper methods to support smarter hiring and workforce decisions.',
  },
  {
    q: 'Why are criminal background checks important?',
    a: 'They help organizations strengthen recruitment by reviewing relevant criminal background information where it applies before someone starts the job.',
  },
  {
    q: 'Can criminal background checks be customized?',
    a: 'Yes. Credify India provides customized criminal background verification based on job roles, company policies, industry requirements, and hiring goals.',
  },
  {
    q: 'Who should use criminal background check services?',
    a: 'Organizations in IT, BFSI, healthcare, manufacturing, logistics, retail, staffing, hospitality, education, and many other fields often include criminal background verification in their recruitment.',
  },
  {
    q: 'How does Credify India ensure secure verification?',
    a: 'Credify India is an ISO 27001, ISO 9001, and SOC 2 Audited company that takes standard precautions for information handling and quality-driven processes.',
  },
]

export default function CriminalClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-red-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/70 border border-red-200 text-red-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <ShieldAlert size={14} className="text-red-600" />
                <span>Criminal Record Screening</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Trusted Criminal Background Check Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-600 to-[#001f7d]">
                  Safer Hiring Decisions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Strengthen your hiring process with Credify India’s criminal background check services. We help organizations check available criminal record information to support safer and smarter recruitment choices.
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
              <img src="/images/criminal-check.png" alt="Criminal Background Check" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wide">
                Criminal Background Check Services
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Criminal Background Check Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers reliable Criminal Background Check Services that let organizations make better hiring decisions by reviewing relevant criminal record information where it applies. We began in 2015 and combined the best verification professionals, methods, and technology-supported steps to provide precise and reliable verification outcomes.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are ISO 27001 certified, ISO 9001 certified, and SOC 2 audited, so we adhere to high standards for information security, quality management, and smooth operations. Our criminal background checks are designed to help businesses enhance workforce integrity, reduce hiring risks, and implement responsible hiring practices.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/criminal-background-check.svg" alt="Criminal Background Check" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Taking standard precautions for information handling, quality-driven processes, and absolute data safety.
                </div>
              </div>
            </div>

            {/* What is a Criminal Background Check? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is a Criminal Background Check?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  A Criminal Background Check means reviewing relevant criminal record information through proper, legal verification methods based on the scope and company needs. It keeps the hiring process organized and helps employers review information available to them that could be important for hiring.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Criminal background checks are frequently incorporated into the hiring process for companies that may come into contact with money, clients, administrative duties, confidential information, and/or safety risks. Employers can use appropriate criminal checks to boost their confidence during the hiring process.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Criminal Background Check Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Criminal Background Check Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive checks across record searches, court reviews, location-based verification, and document assessment.
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

      {/* Why Choose Credify India for Criminal Background Check Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Criminal Background Check Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India brings verification know-how, secure practices, and tech-supported steps together to help organizations make stronger hiring decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-red-300 transition-all duration-300">
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

      {/* Our Criminal Background Check Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Criminal Background Check Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a structured criminal background verification process to give accurate, secure, and timely results while keeping everything consistent for each request.
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

      {/* Benefits of Criminal Background Check Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Criminal Background Check Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of performing criminal record screening for workplace safety and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-red-50/60 to-slate-50 border border-red-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-red-600" />
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
        subtitle="Common questions regarding Credify India's Criminal Background Check Services."
        badgeText="CRIMINAL FAQ"
        faqs={criminalFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Hire with Greater Confidence
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Strengthen your recruitment process with Credify India’s Criminal Background Check Services. Our organized verification solutions help organizations review relevant criminal background information, boost hiring confidence, and build a trusted workforce through secure, tech-supported verification practices.
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
