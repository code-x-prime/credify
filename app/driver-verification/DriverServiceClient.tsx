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
  Truck,
  Car,
  FileText,
  MapPin,
  Briefcase,
  UserCheck,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Driving License Verification',
    description: 'We confirm driving license details to help organizations check driver qualifications before onboarding or giving them driving tasks.',
    icon: '/icons/driver-check.svg',
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Identity Verification',
    description: 'Our process verifies identity information to support accurate driver checks and improve workforce screening.',
    icon: UserCheck,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Address Verification',
    description: 'We validate home address details so organizations can maintain accurate driver records and make better onboarding decisions.',
    icon: MapPin,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Employment Verification',
    description: 'When needed, we verify job history to provide additional assurance during driver hiring and workforce management.',
    icon: Briefcase,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Document Verification',
    description: 'We review key documents provided during hiring as part of the process to support reliable driver verification.',
    icon: FileText,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Customized Driver Verification',
    description: 'Different businesses have their own operational needs. Our driver verification services adjust to match fleet size, industry type, and company rules.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Fleet Hiring Expertise',
    description: 'We know the special verification needs of logistics firms, transport companies, mobility services, and groups that run commercial fleets.',
    icon: Truck,
  },
  {
    title: 'Ready for Bulk Onboarding',
    description: 'Whether you add ten drivers or thousands, our setup handles large-scale hiring without messing up your recruitment flow.',
    icon: Users,
  },
  {
    title: 'Driver-Centric Programs',
    description: 'Each driving position comes with different demands. We shape verification plans around vehicle types, daily operations, and company guidelines.',
    icon: Sliders,
  },
  {
    title: 'Faster Deployment Support',
    description: 'Our organized workflow lets businesses complete driver checks quickly, reducing onboarding wait times and getting people on the road.',
    icon: Clock,
  },
  {
    title: 'End-to-End Documentation',
    description: 'From gathering papers and checking licenses to sending final reports, we manage every part through standard operational steps.',
    icon: FileCheck2,
  },
  {
    title: 'Built for Operational Teams',
    description: 'Our verification work supports HR staff, transport managers, fleet supervisors, and operations groups through one process.',
    icon: ShieldCheck,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Provide driver details and what you want checked to kick off the driver verification process.',
  },
  {
    step: 'Step 2',
    title: 'Information Assessment',
    description: 'Our experts go over the submitted details and set the right verification scope.',
  },
  {
    step: 'Step 3',
    title: 'Driver Verification',
    description: 'We verify the required driver information using appropriate methods, according to the agreed requirements.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every request passes through organized quality steps before we prepare the report.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the completed verification report securely to the right people to support onboarding and operational decisions.',
  },
]

const benefits = [
  {
    title: 'Better Driver Selection',
    description: 'Driver verification lets organizations review driver details before hiring, leading to wiser workforce decisions.',
  },
  {
    title: 'Stronger Fleet Operations',
    description: 'Checking driver information helps keep fleet management organized and improves workforce handling in transportation work.',
  },
  {
    title: 'Improved Recruitment Confidence',
    description: 'Organized verification gives employers more certainty when adding drivers to operational roles.',
  },
  {
    title: 'Simplified Driver Onboarding',
    description: 'Tech-powered workflows make verification tasks easier and raise efficiency during driver recruitment.',
  },
  {
    title: 'Flexible Verification Programs',
    description: 'Our driver verification services adjust to fit fleet size, operational needs, and company policies.',
  },
  {
    title: 'Reliable Verification Reports',
    description: 'Clear reports allow businesses to examine verified driver details properly before final hiring decisions.',
  },
  {
    title: 'Secure Information Management',
    description: 'Our daily processes focus on keeping driver details private and handling them responsibly in every project.',
  },
  {
    title: 'Scalable Verification Support',
    description: 'From a few drivers to nationwide operations, our solutions meet your driver requirements.',
  },
]

const driverFaqs: FAQItem[] = [
  {
    q: 'What is driver verification?',
    a: 'Driver verification means checking and confirming important driver details before onboarding or assigning work duties.',
  },
  {
    q: 'Which businesses should use driver verification services?',
    a: 'These services are used frequently by logistics companies, transportation companies, delivery services, mobility platforms, manufacturing companies, and Corporate Fleet operators.',
  },
  {
    q: 'What information can be verified?',
    a: 'Depending on the chosen scope, services can cover driving licence verification, identity verification, address verification, employment verification, and document verification.',
  },
  {
    q: 'Can driver verification be customized?',
    a: 'Yes. Credify India adjusts driver verification services based on fleet needs, industry standards, and company policies.',
  },
  {
    q: 'How does Credify India protect verification information?',
    a: 'As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, Credify India follows standard practices to handle information safely and run responsible verification.',
  },
]

export default function DriverServiceClient() {
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
                <Truck size={14} className="text-sky-600" />
                <span>Commercial Fleet & Logistics Screening</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Driver Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-700 via-blue-700 to-orange-500">
                  Safer Fleet & Workforce Management
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Can you really hand over a vehicle without first checking the driver’s background? Credify India’s Driver Verification Services help companies confirm driver details through organized processes, leading to better onboarding and fleet management decisions.
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
              <img src="/images/driver-verification.png" alt="Driver Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
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
                Driver Verification Solutions
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Trusted Driver Verification Solutions for Businesses
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers dependable Driver Verification Services that help organizations check driver information before bringing them on board and during their time with the company. In 2015, we began blending the expertise of our verification experts, tried-and-tested methods, and technology-enabled workflows to provide sound driver verification solutions across multiple industries.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company, which guarantees high standards in data security, quality handling, and smooth operations. Our driver verification services enable businesses to enhance workforce screening, ensure adherence to operational rules, and make informed hiring decisions.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/driver-verification.svg" alt="Driver Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Guaranteeing high standards in data security, quality handling, and smooth fleet operations.
                </div>
              </div>
            </div>

            {/* What is Driver Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Driver Verification?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Driver Verification checks and validates critical information about drivers prior to assigning them to tasks. It can include your identification, driving license information, address information, previous employment history, and more.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Logistics, transportation, mobility, e-commerce, delivery, manufacturing, and corporate fleets are common companies that include driver verification in their hiring process. Having a well-planned program helps ensure driver records are well maintained.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Driver Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Driver Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Driving license checks, identity, address, employment, and document verification.
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

      {/* Why Choose Credify India for Driver Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Driver Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India brings together verification expertise, trained professionals, and tech-driven workflows for fleet operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Our Driver Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Driver Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear verification approach built to deliver steady, safe, and trustworthy results.
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

      {/* Benefits of Driver Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Driver Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of verifying driver credentials before fleet deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-sky-50/60 to-slate-50 border border-sky-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-sky-700" />
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
        subtitle="Common questions regarding Credify India's Driver Verification Services."
        badgeText="DRIVER FAQ"
        faqs={driverFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Strengthen Your Driver Verification Process?
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Every checked driver builds a more reliable team. Credify India’s Driver Verification Services help companies make driver onboarding simpler with organized workflows that match fleet operations and business needs.
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
