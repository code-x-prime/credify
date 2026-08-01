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
  FileText,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  Home,
  Building,
  Layers,
  Sparkles,
  Lock
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Identity Documents',
    description: 'We check identity papers submitted during recruitment and onboarding to help organizations build stronger hiring confidence and keep accurate staff records.',
    icon: '/icons/document-check.svg',
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
  },
  {
    title: 'Educational Documents',
    description: 'Our document verification services confirm educational certificates and related academic records so employers can evaluate candidate qualifications more reliably.',
    icon: GraduationCap,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Employment Documents',
    description: 'We verify work-related documents provided by candidates to support smarter hiring decisions and improve recruitment accuracy.',
    icon: Briefcase,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Address Documents',
    description: 'Our team validates address documents to help companies maintain trustworthy employee records and improve the onboarding experience.',
    icon: Home,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Business Documents',
    description: 'We check relevant business papers for vendor onboarding and due diligence so organizations can assess third-party details more effectively.',
    icon: Building,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Supporting Documents',
    description: 'We can verify extra documents depending on company policies, industry needs, and the agreed verification scope to create complete checking programs.',
    icon: Layers,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
]

const whyChooseUs = [
  {
    title: '10+ Years of Verification Expertise',
    description: 'Since 2015, Credify India has provided reliable verification solutions that support hiring, onboarding, due diligence, and business checks across many industries.',
    icon: Award,
  },
  {
    title: '15+ Verification Solutions',
    description: 'From document verification and employment checks to vendor due diligence and background screening, we offer a full range of services through one partner.',
    icon: Layers,
  },
  {
    title: 'Experienced Verification Specialists',
    description: 'Our focused verification experts use documented methods and step-by-step reviews to deliver document verification that matches your specific business needs.',
    icon: Users,
  },
  {
    title: 'Multi-Level Quality Review',
    description: 'Every request goes through clear quality stages to keep results consistent, complete, and dependable from beginning to end.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Engagement Models',
    description: 'Whether you need a single document check or continuous enterprise support, we adjust our solutions to fit your hiring flows and goals.',
    icon: Sliders,
  },
  {
    title: 'Dedicated Client Success Team',
    description: 'Our specialists partner closely with your HR and compliance groups to manage requests, share timely updates, and deliver a smooth overall experience.',
    icon: TrendingUp,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Send the necessary documents and details to start the document verification through our organized workflow.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our verification specialists examine the submitted materials and set the right checking scope based on your organization’s requirements.',
  },
  {
    step: 'Step 3',
    title: 'Document Verification',
    description: 'We check the relevant documents using suitable methods and sources according to the agreed scope.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every result passes through a structured quality check to maintain accuracy, consistency, and full information.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished verification report safely to the authorized people to support hiring, onboarding, and other business decisions.',
  },
]

const benefits = [
  {
    title: 'Stronger Hiring Confidence',
    description: 'Document verification lets organizations confirm key records so recruiters can make decisions with more certainty and precision.',
  },
  {
    title: 'Reliable Information',
    description: 'Auditing submitted documents helps ensure accurate data management and reduces inaccuracies in the recruitment and onboarding process.',
  },
  {
    title: 'Improved Recruitment Efficiency',
    description: 'Document reviews can be streamlined through organized verification workflows, helping HR teams complete hires promptly.',
  },
  {
    title: 'Better Business Decisions',
    description: 'Document verification provides organizations with trusted data in recruitment, vendor onboarding, and due diligence processes.',
  },
  {
    title: 'Flexible Verification Programs',
    description: 'We customize document verification services to align with company policies, workforce needs, industry standards, and operational goals.',
  },
  {
    title: 'Organized Documentation',
    description: 'Structured workflows help businesses keep accurate, well-ordered, and verified records throughout the employee journey.',
  },
  {
    title: 'Secure Information Handling',
    description: 'Our processes put a strong focus on protecting documents and handling sensitive information responsibly in every engagement.',
  },
  {
    title: 'Scalable Verification Support',
    description: 'From verifying a single candidate to supporting mass recruitment, our document verification services scale to match your requirements.',
  },
]

const docFaqs: FAQItem[] = [
  {
    q: 'What is document verification?',
    a: 'Document verification is the process of confirming documents provided by candidates, employees, vendors, or others to support better business and hiring decisions.',
  },
  {
    q: 'Which documents can be verified?',
    a: 'Organizations can verify identity documents, educational certificates, employment papers, address records, business documents, and other supporting materials based on their needs.',
  },
  {
    q: 'Why is document verification important?',
    a: 'Document verification helps organizations confirm key details, improve hiring accuracy, strengthen onboarding, and support sound business decisions.',
  },
  {
    q: 'Can document verification be customized?',
    a: 'Yes. Credify India adjusts document verification services to match organizational policies, industry requirements, workforce needs, and verification goals.',
  },
  {
    q: 'How does Credify India protect sensitive documents?',
    a: 'Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that uses tried-and-proven methods to ensure document security and responsible verification.',
  },
]

export default function DocServiceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/70 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <FileCheck2 size={14} className="text-indigo-600" />
                <span>Multi-Document Authentication</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Fast, Secure & Reliable Document Verification Services with{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-700 to-orange-500">
                  Credify India
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Strengthen your hiring and onboarding process with Credify India’s document verification services. We help organizations check important documents accurately through safe, tech-supported, and standard verification workflows.
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
              <img src="/images/document-verification.png" alt="Document Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide">
                Document Verification Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Document Verification Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India is an ISO 27001, ISO 9001-certified, and SOC 2-audited company that delivers reliable Document Verification Services that help organizations confirm the authenticity of key documents used during hiring, onboarding, and due diligence.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We have been active since 2015, combining the expertise of skilled verification experts, successful checking mechanisms, and cutting-edge tech processes to provide reliable solutions to various industries. We align with every standard of information security, quality control, and seamless operations.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/document-verification.svg" alt="Document Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Aligning with every standard of information security, quality control, and seamless operations.
                </div>
              </div>
            </div>

            {/* What is Document Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Document Verification?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Document Verification is a process that involves reviewing and authenticating documents submitted by candidates, employees, vendors, or other parties to ensure their authenticity and consistency with the information presented. It is vital in the recruitment process, onboarding, vendor audit, and compliance verification.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Document verification is crucial for organizations to maintain accurate records, reduce the risk of misinformation, and foster trust throughout the hiring and business processes. At Credify India, we handle every document verification request with a clear process focused on reliable results.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Document Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Document Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Verification of identity, educational, employment, address, business, and supporting documents.
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

      {/* Why Choose Credify India for Document Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Document Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India brings together experienced verification professionals, organized workflows, and technology tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-indigo-300 transition-all duration-300">
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

      {/* Our Document Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Document Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear document verification process built to provide accurate results while keeping everything secure.
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

      {/* Benefits of Document Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Document Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of authenticating candidate and business documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-slate-50 border border-indigo-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-indigo-700" />
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
        subtitle="Common questions regarding Credify India's Document Verification Services."
        badgeText="DOC FAQ"
        faqs={docFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Every Important Decision Starts with Verified Documents
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Solid documentation creates the base for confident hiring and trustworthy business connections. Credify India’s Document Verification Services help organizations confirm essential documents through organized, technology-supported processes that make recruitment smoother.
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
