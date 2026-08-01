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
  Home,
  MapPin,
  Briefcase,
  FileText,
  UserCheck,
  SlidersHorizontal,
  Sparkles,
  Key
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Identity Verification',
    description: 'We check identity details to help property owners confirm who the potential tenant really is before they agree to the rental.',
    icon: '/icons/tenant-check.svg',
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
  {
    title: 'Address Verification',
    description: 'Our checks validate where the tenant lives to support better screening and smarter property management decisions.',
    icon: MapPin,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Employment Verification',
    description: 'When needed, we confirm job-related details so landlords get a clearer picture of the tenant’s work background.',
    icon: Briefcase,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Document Verification',
    description: 'We examine key documents provided during the rental process to support reliable tenant checks and sound rental decisions.',
    icon: FileText,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Background Screening',
    description: 'Our organized screening reviews relevant details within the set verification limits to support responsible tenant setup.',
    icon: ShieldCheck,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Customized Tenant Verification',
    description: 'We adjust tenant verification plans to fit residential, commercial, co-living, student housing, and other rental setups.',
    icon: SlidersHorizontal,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
]

const whyChooseUs = [
  {
    title: 'Rental Screening Specialists',
    description: 'Our seasoned verification team knows the real issues in tenant screening and uses clear methods to achieve dependable results.',
    icon: Award,
  },
  {
    title: 'Property-Focused Verification',
    description: 'We build our verification work specifically around the needs of landlords, housing societies, property managers, co-living teams, and rental businesses.',
    icon: Home,
  },
  {
    title: 'Flexible Verification Programs',
    description: 'Whether you check one tenant or manage many properties, our solutions adjust to match your property management needs.',
    icon: Sliders,
  },
  {
    title: 'Dedicated Verification Support',
    description: 'Our experts manage each request, share quick updates, and make the whole verification run smoothly from beginning to end.',
    icon: Users,
  },
  {
    title: 'Structured Verification Methodology',
    description: 'We handle every tenant verification with set workflows and quality steps that ensure steady and trustworthy outcomes.',
    icon: TrendingUp,
  },
  {
    title: 'Technology-Enabled Operations',
    description: 'Digital systems simplify requests, let you track status easily, and send reports securely, while giving better visibility.',
    icon: Zap,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send over the tenant information and what you need checked to start the tenant verification process.',
  },
  {
    step: 'Step 2',
    title: 'Information Assessment',
    description: 'Our team reviews what you provided and decides the right verification scope.',
  },
  {
    step: 'Step 3',
    title: 'Tenant Verification',
    description: 'We check the necessary tenant details with suitable methods according to the agreed requirements.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every request goes through organized quality checks before we prepare the report.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished tenant verification report securely to the right people so they can make informed rental decisions.',
  },
]

const benefits = [
  {
    title: 'Better Rental Decisions',
    description: 'Tenant verification lets property owners review potential tenants with more certainty before signing agreements.',
  },
  {
    title: 'Stronger Property Protection',
    description: 'Checking tenant details supports careful property management and builds confidence throughout the rental period.',
  },
  {
    title: 'Improved Tenant Screening',
    description: 'Organized verification helps landlords evaluate candidates using standard screening approaches.',
  },
  {
    title: 'Simplified Property Management',
    description: 'Tech-driven verification steps make tenant screening easier and boost efficiency for landlords and managers.',
  },
  {
    title: 'Flexible Verification Solutions',
    description: 'Tenant verification services adjust to fit residential, commercial, and institutional property needs.',
  },
  {
    title: 'Reliable Verification Reports',
    description: 'Get clear reports that let property owners examine tenant details properly before finalizing rentals.',
  },
]

const tenantFaqs: FAQItem[] = [
  {
    q: 'What is tenant verification?',
    a: 'Tenant verification is a process to ensure and confirm information received from prospective tenants before leasing residential or commercial property.',
  },
  {
    q: 'Why is tenant verification important?',
    a: 'It allows landlords and property managers to decide on rentals based on accurate information by confirming key tenant details before move-in.',
  },
  {
    q: 'Who can use tenant verification services?',
    a: 'Property owners, landlords, housing societies, co-living operators, student housing providers, real estate firms, and property management groups all gain from these services.',
  },
  {
    q: 'Can tenant verification be customized?',
    a: 'Yes. Credify India adjusts tenant verification services based on property type, rental rules, and company needs.',
  },
  {
    q: 'How does Credify India protect tenant information?',
    a: 'As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, Credify India follows set practices to handle information securely and run responsible verification.',
  },
]

export default function TenantServiceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-orange-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Key size={14} className="text-orange-600" />
                <span>Property Management & Rental Screening</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tenant Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-[#001f7d]">
                  Secure Rental Decisions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Are you giving out keys to your place without really knowing the person? Credify India’s Tenant Verification Services help property owners, landlords, and property managers verify tenant details through clear processes that lead to smarter rental decisions.
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
              <img src="/images/tenant-verification.png" alt="Tenant Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
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
                Tenant Screening Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Credify India: Trusted Tenant Verification Solutions for Property Owners
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India provides reliable Tenant Verification Services that help landlords, property owners, housing societies, property managers, and rental businesses verify prospective tenants before occupancy. Established in 2015, we combine experienced verification professionals, standardized verification methodologies, and technology-enabled workflows to deliver dependable tenant verification solutions.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we maintain high standards of information security, quality management, and operational excellence. Our tenant verification services help simplify rental screening, strengthen trust, and support informed tenancy decisions.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/tenant-verification.svg" alt="Tenant Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Maintaining high standards of information security, quality management, and operational excellence.
                </div>
              </div>
            </div>

            {/* What is Tenant Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-orange-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Tenant Verification?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Tenant Verification refers to the process of checking all the necessary information provided by prospective tenants before leasing a space. It enables the landlord or property owner to verify who you are and where you live, your employment details, and other important information.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A well-organized tenant verification process promotes careful property handling, sharpens tenant screening, and creates more trust before signing any rental deal.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Tenant Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Tenant Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Identity, address, employment, document, and customized background checks.
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

      {/* Why Choose Credify India for Tenant Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Tenant Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India supports property owners and companies in improving tenant screening with trained verification staff and standard practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Our Tenant Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Tenant Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India&apos;s tenant verification procedure is transparent and designed to deliver accurate results consistently.
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

      {/* Benefits of Tenant Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Tenant Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of verifying prospective tenants before occupancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-orange-50/60 to-slate-50 border border-orange-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-orange-600" />
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
        subtitle="Common questions regarding Credify India's Tenant Verification Services."
        badgeText="TENANT FAQ"
        faqs={tenantFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Protect Your Property with Professional Tenant Verification Services
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Stop making big rental choices based on guesses. Credify India’s Tenant Verification Services let you check tenant details before anyone moves in and give you stronger confidence in every rental deal.
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
