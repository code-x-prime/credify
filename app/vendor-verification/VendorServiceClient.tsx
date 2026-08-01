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
  Building,
  FileText,
  MapPin,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Layers,
  ShoppingBag
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Business Identity Verification',
    description: 'We confirm core business identity details to help organizations feel more secure before onboarding suppliers, contractors, and service providers.',
    icon: '/icons/vendor-check.svg',
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Business Registration Review',
    description: 'Our checking process examines relevant registration information to support smart vendor onboarding and procurement decisions.',
    icon: FileText,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Address Verification',
    description: 'We validate business address details so organizations can keep accurate vendor records and strengthen third-party checks.',
    icon: MapPin,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Document Verification',
    description: 'We review key business documents during the process to support strong vendor assessments and better business decisions.',
    icon: FileCheck2,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Compliance Information Review',
    description: 'When needed, we examine relevant compliance details based on the agreed scope and your organization’s requirements.',
    icon: Shield,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Customized Vendor Verification',
    description: 'Every company handles procurement differently. We adjust vendor verification services to fit industry needs, vendor types, and your internal risk policies.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: '360° Vendor Due Diligence Process',
    description: 'Every vendor is assessed through a structured verification framework covering identity, business credentials, compliance records, financial information, and operational legitimacy.',
    icon: Layers,
  },
  {
    title: '5-Step Supplier Verification Framework',
    description: 'Our standardized process—from document collection to verification, quality review, and reporting—helps organizations onboard trusted vendors with confidence.',
    icon: ShieldCheck,
  },
  {
    title: '100% Tailored Vendor Screening',
    description: 'Verification workflows are customized based on supplier category, procurement policies, industry regulations, and organizational risk appetite.',
    icon: Sliders,
  },
  {
    title: 'Centralized Vendor Verification',
    description: 'Handle multiple vendor checks through one streamlined system that improves coordination, gives better visibility, and keeps operations consistent.',
    icon: Building,
  },
  {
    title: 'Dedicated Verification Experts',
    description: 'Our specialists manage every part of the process, helping organizations complete vendor assessments efficiently and professionally.',
    icon: Users,
  },
  {
    title: 'Structured Verification Framework',
    description: 'Each request follows documented procedures and quality reviews to produce steady and dependable results.',
    icon: Award,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Share vendor details and what needs to be checked to start the vendor verification process.',
  },
  {
    step: 'Step 2',
    title: 'Information Assessment',
    description: 'Our specialists examine the provided information and set the verification scope based on your procurement needs.',
  },
  {
    step: 'Step 3',
    title: 'Vendor Verification',
    description: 'We check the relevant business details using suitable methods within the agreed scope.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every outcome goes through structured quality procedures before we prepare the report.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished vendor verification report safely to the right people so they can make informed procurement and onboarding decisions.',
  },
]

const benefits = [
  {
    title: 'Stronger Vendor Selection',
    description: 'Vendor verification allows organizations to evaluate potential partners with more confidence before starting commercial relationships.',
  },
  {
    title: 'Better Procurement Decisions',
    description: 'Checking vendor information helps procurement teams choose suppliers and handle onboarding more wisely.',
  },
  {
    title: 'Improved Third-Party Governance',
    description: 'Organized checks strengthen vendor management by creating transparent, standardized ways to assess outside parties.',
  },
  {
    title: 'Enhanced Business Confidence',
    description: 'Reliable vendor details let organizations build relationships with greater trust and clear accountability.',
  },
  {
    title: 'Flexible Verification Programs',
    description: 'We can customize vendor verification solutions to match supplier types, procurement policies, and industry needs.',
  },
  {
    title: 'Organized Vendor Records',
    description: 'Structured reporting helps keep vendor information accurate and well-documented throughout the business connection.',
  },
  {
    title: 'Secure Verification Process',
    description: 'Workflows with tech support ensure information security and confidentiality throughout.',
  },
  {
    title: 'Scalable Vendor Management',
    description: 'From a single supplier to many suppliers, our solutions expand with your business.',
  },
]

const vendorFaqs: FAQItem[] = [
  {
    q: 'What is vendor verification?',
    a: 'Vendor verification is the validation and confirmation of appropriate information related to vendors, contractors, and service providers prior to entering into or maintaining a business relationship.',
  },
  {
    q: 'Why is vendor verification important?',
    a: 'It helps inform procurement decisions, adds third-party oversight, and fosters confidence when onboarding vendors.',
  },
  {
    q: 'Which businesses should use vendor verification?',
    a: 'Companies in industries such as manufacturing, IT, BFSI, healthcare, retail, logistics, construction, and more leverage vendor verification to assess their third-party partners.',
  },
  {
    q: 'Can vendor verification be customized?',
    a: 'Yes. Credify India adjusts vendor verification services based on procurement policies, vendor categories, industry requirements, and company goals.',
  },
  {
    q: 'How does Credify India protect vendor information?',
    a: 'Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that follows standard practices that ensure information security and responsible verification.',
  },
]

export default function VendorServiceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
                <ShoppingBag size={14} className="text-orange-500" />
                <span>Third-Party & Vendor Due Diligence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Vendor Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">
                  Secure Business Partnerships
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Can working with an unchecked vendor put your operations, finances, or compliance at risk? Credify India’s Vendor Verification Services help companies assess and check vendors using organized due diligence steps that lead to stronger business relationships.
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
              <img src="/images/vendor-verification.png" alt="Vendor Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
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
                Trusted Vendor Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Build Stronger Vendor Relationships with Credify India
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers dependable Vendor Verification Services that help organizations evaluate third-party vendors before bringing them on board and throughout the ongoing business relationship. Since 2015, we&apos;ve been bringing together verified experts, proper due diligence, and technology-based processes to deliver accurate vendor verification solutions across various sectors.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are an ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited company and put information security, quality, and high-level operations at the top of our list. Our vendor verification services empower organizations to make informed purchasing decisions, enhance vendor management, and ensure responsible vendor onboarding.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/vendor-verification.svg" alt="Vendor Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Empowering organizations to make informed purchasing decisions and ensure responsible vendor onboarding.
                </div>
              </div>
            </div>

            {/* What is Vendor Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Vendor Verification?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                  The Vendor Verification process involves verifying and confirming significant business information from vendors, contractors, service providers, and other third parties before entering into or continuing a relationship with them. It helps companies make sound procurement decisions by reviewing relevant vendor information.
                </p>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  By adopting a well-defined vendor verification procedure, organizations can enhance oversight of third parties, boost transparency in the vendor procurement process, and streamline vendor onboarding.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Vendor Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Vendor Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Business identity, registration, address, document, compliance, and customized checks.
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

      {/* Why Choose Credify India for Vendor Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Vendor Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India supports organizations in improving third-party risk management with skilled verification professionals and organized due diligence.
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

      {/* Our Vendor Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Vendor Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear vendor verification process built to deliver consistent outcomes while keeping things secure.
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

      {/* Benefits of Vendor Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Vendor Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of verifying vendors, suppliers, and contractors.
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
        subtitle="Common questions regarding Credify India's Vendor Verification Services."
        badgeText="VENDOR FAQ"
        faqs={vendorFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Looking for a Reliable Vendor Verification Partner?
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Whether you&apos;re a small business or a large enterprise, Credify India makes vendor verification easier with streamlined processes, dedicated experts, and secure checking procedures.
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
