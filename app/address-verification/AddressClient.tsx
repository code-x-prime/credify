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
  MapPin,
  Home,
  FileText,
  Building,
  SlidersHorizontal,
  Sparkles,
  Navigation
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Current Address Verification',
    description: 'We check the candidate’s current residential address to help organizations confirm location details and build confidence during recruitment and onboarding.',
    icon: '/icons/address-check.svg',
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Permanent Address Verification',
    description: 'Our address verification services confirm permanent residential address information. This supports accurate employee records and better hiring decisions for different types of workforces.',
    icon: Home,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Document Validation',
    description: 'We review the address documents provided during recruitment to make verification more reliable and increase trust in the candidate’s details.',
    icon: FileText,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Residence Confirmation',
    description: 'Our verification process confirms residential information through suitable methods based on what the organization needs and the scope of the check.',
    icon: Building,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Multi-Location Verification',
    description: 'We handle verification for multiple addresses when required. This helps organizations manage complicated hiring needs with better speed and accuracy.',
    icon: Navigation,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Customized Address Checks',
    description: 'Every company has unique verification needs. We tailor address verification services to industry requirements, workforce type, and company hiring policies.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Established in 2015',
    description: 'With nearly ten years of verification experience, Credify India has supported organizations in improving recruitment with dependable address verification services.',
    icon: Award,
  },
  {
    title: 'Proven Experience of Address Verification',
    description: 'Our extensive experience with millions of verification requests lets us deliver reliable, consistent address verification results.',
    icon: Users,
  },
  {
    title: 'Improved Hiring Efficiency',
    description: 'Accurate address verification helps organizations maintain accurate employee records, streamline onboarding, and boost recruitment efficiency with verified details.',
    icon: TrendingUp,
  },
  {
    title: 'Customized Verification Solutions',
    description: 'We adjust address verification services to match workforce type, business goals, industry needs, and company verification rules.',
    icon: Sliders,
  },
  {
    title: 'Technology-Enabled Workflows',
    description: 'Digital verification steps make request handling, tracking, and secure report delivery smoother while providing better visibility throughout the process.',
    icon: Zap,
  },
  {
    title: 'Faster Verification Process',
    description: 'Clear workflows and skilled verification specialists help us deliver address verification reports in a good time without compromising quality.',
    icon: Clock,
  },
  {
    title: 'Experienced Verification Professionals',
    description: 'Our team follows standard procedures and careful quality checks to provide dependable address verification services across different industries.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Business Solutions',
    description: 'Whether you hire a small team or handle large recruitment volumes, our address verification solutions grow easily with your business needs.',
    icon: Building2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send the candidate’s address details and supporting documents to start the address verification process through our organized workflow.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our specialists look over the submitted address information to set the verification scope and prepare the request for processing.',
  },
  {
    step: 'Step 3',
    title: 'Address Verification',
    description: 'We check the given address details using suitable methods based on the company’s requirements and the chosen verification package.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'All results are carefully checked for accuracy, consistency, and completeness before we prepare the report.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished address verification report securely to the right people so they can make informed hiring and onboarding decisions.',
  },
]

const benefits = [
  {
    title: 'Reliable Employee Records',
    description: 'Address verification helps organizations keep accurate employee records by confirming residential details before hiring and onboarding new people.',
  },
  {
    title: 'Improved Hiring Confidence',
    description: 'Verified address information gives employers more confidence when reviewing candidate details during recruitment and workforce planning.',
  },
  {
    title: 'Reduced Verification Risks',
    description: 'Checking residential addresses reduces information mismatches and supports more reliable recruitment decisions through organized processes.',
  },
  {
    title: 'Efficient Onboarding',
    description: 'Accurate address verification makes employee onboarding smoother by confirming important residential information before the person starts the job.',
  },
  {
    title: 'Better Workforce Management',
    description: 'Verified address details help organizations maintain dependable employee databases that support planning and day-to-day HR tasks.',
  },
  {
    title: 'Flexible Verification Solutions',
    description: 'Our address verification services can be adjusted to fit company policies, workforce needs, and industry-specific hiring practices.',
  },
  {
    title: 'Enhanced Operational Accuracy',
    description: 'Organized verification steps improve the accuracy of employee records and support efficient recruitment and HR work.',
  },
  {
    title: 'Scalable Verification Support',
    description: 'From single candidate verification to bulk hiring, our address verification services scale seamlessly to meet your recruitment needs.',
  },
]

const addressFaqs: FAQItem[] = [
  {
    q: 'What is address verification?',
    a: 'Address verification checks a candidate’s residential address using proper methods to help organizations confirm address details before hiring.',
  },
  {
    q: 'Why is address verification important?',
    a: 'It helps employers verify residential information, keep accurate employee records, and build confidence during recruitment and onboarding.',
  },
  {
    q: 'What addresses can be verified?',
    a: 'Address verification can cover current addresses, permanent addresses, or multiple residential addresses, depending on the company\'s needs and verification scope.',
  },
  {
    q: 'Can address verification be customized?',
    a: 'Yes. Credify India offers customized address verification solutions based on workforce requirements, organizational policies, and industry-specific hiring needs.',
  },
  {
    q: 'Which businesses use address verification services?',
    a: 'Address verification services are common in IT, BFSI, healthcare, logistics, manufacturing, retail, staffing, education, and many other sectors.',
  },
]

export default function AddressClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-amber-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <MapPin size={14} className="text-amber-600" />
                <span>Residential Address Validation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Reliable Address Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-[#001f7d]">
                  Secure & Confident Hiring
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Verify residential addresses with confidence through Credify India’s address verification services. We help companies verify candidate address details, reduce verification risks, and support better hiring decisions.
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
              <img src="/images/address-verification.png" alt="Address Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wide">
                Address Verification Services
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Address Verification Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers dependable Address Verification Services that let organizations confirm residential address information during employee onboarding and background checks. We started in 2015 and bring together skilled verification experts, standard methods, and tech-supported steps to give accurate and trustworthy address verification solutions.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company meets the highest standards for information security, quality management, and smooth operations. Our address verification services can help companies boost hiring confidence, establish a reliable workforce, and streamline the hiring process with trusted methods.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/address-verification.svg" alt="Address Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Meeting highest standards for information security, quality management, and smooth operational execution.
                </div>
              </div>
            </div>

            {/* What is Address Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Address Verification?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Address Verification means checking a candidate’s residential address using the right methods and supporting details. It lets employers confirm the address information shared during recruitment and onboarding, leading to smarter hiring decisions.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Checking address details helps organizations improve employee records, increase transparency in the workforce, and support secure onboarding. Whether you hire full-time staff, contract workers, or field teams, address verification gives you more trust in the candidate’s information before they join.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Address Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Address Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive checks across current, permanent, multi-location, and document validation.
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

      {/* Why Choose Credify India for Address Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Address Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India helps organizations confirm address information through organized verification steps that improve hiring speed and workforce reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-amber-300 transition-all duration-300">
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

      {/* Our Address Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Address Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a structured address verification process to give reliable results while keeping confidentiality and high standards.
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

      {/* Benefits of Address Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Address Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of verifying residential details prior to onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/60 to-slate-50 border border-amber-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-amber-600" />
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
        subtitle="Common questions regarding Credify India's Address Verification Services."
        badgeText="ADDRESS FAQ"
        faqs={addressFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Verify Candidate Addresses with Confidence
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Strengthen your recruitment process with Credify India’s Address Verification Services. Our verification solutions are reliable and help organizations verify residential information, improve onboarding accuracy, and streamline the process with secure, standardized verification.
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
