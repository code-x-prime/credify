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
  Shield,
  UserCheck,
  FileText,
  BadgeCheck,
  Sparkles,
  Search,
  Lock
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Identity Validation',
    description: 'We confirm candidate identity details to support an accurate and organized police verification process while making the overall verification more reliable.',
    icon: '/icons/police-check.svg',
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Document Verification',
    description: 'Our specialists check the supporting documents needed for police verification. This helps companies speed up requests and avoid delays.',
    icon: FileText,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Verification Coordination',
    description: 'We manage the police verification process smoothly, helping businesses handle requests through standard operational steps.',
    icon: Shield,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Status Tracking',
    description: 'Our tech-supported processes give better visibility into how verification is progressing. This lets organizations keep track of requests from start to finish more easily.',
    icon: Clock,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Report Management',
    description: 'We compile and securely send verification updates and reports so employers can maintain clear records of employee verification.',
    icon: FileCheck2,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Customized Verification Support',
    description: 'Police verification services can be adjusted to fit company hiring policies, workforce types, and industry-specific verification needs.',
    icon: Sliders,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Established in 2015',
    description: 'With nearly ten years of industry experience, Credify India has helped organizations handle employee verification needs through dependable, standardized verification solutions.',
    icon: Award,
  },
  {
    title: 'Millions of Verification Requests',
    description: 'Our verification know-how supports millions of verification requests, letting businesses manage employee screening with more confidence and consistency.',
    icon: Users,
  },
  {
    title: 'Faster Verification Management',
    description: 'Technology-supported workflows speed up police verification requests, reducing admin work and improving recruitment efficiency for HR teams.',
    icon: TrendingUp,
  },
  {
    title: 'Customized Verification Solutions',
    description: 'We adjust police verification services to match workforce roles, business needs, industry expectations, and company hiring policies.',
    icon: Sliders,
  },
  {
    title: 'Secure Verification Processes',
    description: 'Our standard verification methods help organizations handle employee verification securely while keeping quality and consistency.',
    icon: Lock,
  },
  {
    title: 'Experienced Verification Team',
    description: 'Our skilled professionals manage every verification request with care, helping businesses get dependable verification support from start to finish.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise-Ready Solutions',
    description: 'Whether you hire a few employees or run large recruitment drives, our scalable police verification services fit your organization’s growing needs.',
    icon: Building2,
  },
  {
    title: 'Better Hiring Confidence',
    description: 'Reliable police verification support helps employers make stronger recruitment decisions while building more trust in the workforce and the company.',
    icon: CheckCircle2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send the candidate’s information and required documents to start the police verification process through our organized workflow.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our verification specialists check the submitted details and prepare the request based on the needed verification scope.',
  },
  {
    step: 'Step 3',
    title: 'Verification Coordination',
    description: 'We coordinate the police verification process through the right channels according to company requirements and standard procedures.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Each verification update is subjected to a defined quality check to ensure that it is consistent, accurate and complete before it is reported.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished police verification report securely to the right people to support informed hiring and onboarding decisions.',
  },
]

const benefits = [
  {
    title: 'Trusted Workforce',
    description: 'Police verification helps organizations build a reliable workforce by strengthening employee screening and increasing confidence during recruitment.',
  },
  {
    title: 'Safer Hiring',
    description: 'Organized police verification lets employers add extra screening for roles that need stronger workforce checks and risk management.',
  },
  {
    title: 'Efficient Processes',
    description: 'Technology-supported verification steps make police verification easier to manage, helping HR teams work faster and reduce admin tasks.',
  },
  {
    title: 'Improved Compliance Support',
    description: 'Police verification services help organizations meet internal hiring policies and verification requirements through clear processes.',
  },
  {
    title: 'Flexible Verification',
    description: 'Our police verification solutions can be adjusted to fit workforce type, job responsibilities, industry needs, and company hiring practices.',
  },
  {
    title: 'Better Recruitment Planning',
    description: 'Reliable verification support lets employers make smarter recruitment choices while improving workforce planning and onboarding.',
  },
  {
    title: 'Organized Documentation',
    description: 'Structured reporting helps organizations keep good records of employee verification for future use and day-to-day management.',
  },
  {
    title: 'Scalable Verification',
    description: 'Our police verification services scale with your recruitment needs—whether you\'re hiring single professionals or expanding large teams.',
  },
]

const policeFaqs: FAQItem[] = [
  {
    q: 'What is police verification?',
    a: 'Police verification is a process that supports employee screening by handling police verification where required as part of organizational hiring rules.',
  },
  {
    q: 'Why is police verification important?',
    a: 'It helps organizations strengthen workforce screening, build hiring confidence, and support recruitment for roles that need extra checks.',
  },
  {
    q: 'Who should use police verification services?',
    a: 'Organizations in logistics, BFSI, security services, IT, healthcare, manufacturing, retail, and many other sectors commonly use police verification.',
  },
  {
    q: 'Can police verification be customized?',
    a: 'Yes. Credify India adjusts police verification services based on company hiring policies, workforce needs, and industry-specific verification requirements.',
  },
  {
    q: 'How does Credify India ensure secure verification?',
    a: 'Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company, which means it has been verified to handle information securely and deliver reliable results.',
  },
]

export default function PoliceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/70 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Shield size={14} className="text-sky-600" />
                <span>Police Clearance & Verification</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Reliable Police Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-700 via-blue-700 to-orange-500">
                  Trusted Workforce Screening
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Strengthen your hiring process with Credify India’s police verification services. We help organizations handle reliable police verification to support smarter recruitment decisions and build a trustworthy team.
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
              <img src="/images/police-verification.png" alt="Police Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wide">
                Police Verification Services
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Police Verification Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers dependable Police Verification Services that help organizations improve employee screening through organized verification steps. We began in 2015 and use qualified verification experts, tech-assisted workflows, and tried-and-tested techniques to deliver quality-assured verification solutions that meet business requirements.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                As an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company, we are well aware of the importance of aligning with high standards for information security, quality management, and smooth workflows. Our police verification services enable businesses to become more confident in their hiring process, have higher employee integrity and a smoother onboarding procedure.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/police-verification.svg" alt="Police Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Aligning with international standards for information security, quality management, and smooth operations.
                </div>
              </div>
            </div>

            {/* What is Police Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Police Verification?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Police Verification is a process that supports employee screening by handling police verification where needed as part of a company’s hiring or compliance rules. It helps employers strengthen workforce checks and leads to better recruitment decisions for positions that need extra verification.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Police verification is often used for employees in sensitive roles, customer-facing jobs, security work, financial institutions, logistics, and other industries where organizations require additional checks based on their policies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Police Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Police Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              End-to-end coordination, status tracking, and document validation.
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

      {/* Why Choose Credify India for Police Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Police Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India provides organized police verification services that simplify employee screening, boost operational efficiency, and help organizations build trusted teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-sky-300 transition-all duration-300">
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

      {/* Our Police Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Police Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a structured police verification process to deliver secure, timely, and consistent results for every request.
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

      {/* Benefits of Police Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Police Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of implementing police screening for sensitive and core workforce roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-sky-50/60 to-slate-50 border border-sky-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-sky-600" />
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
        subtitle="Common questions regarding Credify India's Police Verification Services."
        badgeText="POLICE FAQ"
        faqs={policeFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Simplify Police Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Support secure hiring with Credify India’s Police Verification Services. Our organized verification solutions help organizations streamline police verification, strengthen workforce screening, and increase hiring confidence through secure, tech-supported processes.
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
