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
  Sparkles,
  Lock,
  UserCheck,
  FileText,
  BadgeCheck
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const whatIncludes = [
  {
    title: 'Employment Verification',
    description: 'Validate previous employment details, including organization name, employment duration, designation, and other relevant information to support informed hiring decisions.',
    icon: '/icons/employee-bgv.svg',
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Education Verification',
    description: 'Verify academic qualifications and educational credentials with relevant institutions to help confirm information provided by candidates.',
    icon: Award,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Identity Verification',
    description: 'Validate government-issued identity documents and candidate identity information based on organizational verification requirements.',
    icon: UserCheck,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Address Verification',
    description: 'Verify current or permanent residential address details through appropriate verification methods depending on business needs.',
    icon: FileText,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Criminal Background Check',
    description: 'Support organizations with criminal background verification using applicable and available records wherever relevant to the selected verification scope.',
    icon: ShieldCheck,
    color: 'border-red-200 bg-red-50/50 text-red-700',
  },
  {
    title: 'Court Record Verification',
    description: 'Review relevant court records, where applicable, to identify publicly available litigation information associated with a candidate.',
    icon: Scale,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
  {
    title: 'Police Verification',
    description: 'Facilitate police verification services based on organizational requirements and applicable verification processes.',
    icon: Lock,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Document Verification',
    description: 'Verify the authenticity of important documents submitted during recruitment to strengthen hiring confidence.',
    icon: FileCheck2,
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
  },
  {
    title: 'UAN Verification',
    description: 'Validate employment-related information through UAN verification wherever applicable to support employment history assessment.',
    icon: BadgeCheck,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Credit Check',
    description: 'Support eligible organizations with employee credit checks for financially sensitive positions, subject to applicable authorizations and requirements.',
    icon: TrendingUp,
    color: 'border-teal-200 bg-teal-50/50 text-teal-700',
  },
  {
    title: 'Drug Testing',
    description: 'Coordinate employee drug screening through authorized laboratories when required as part of organizational hiring policies.',
    icon: Sparkles,
    color: 'border-pink-200 bg-pink-50/50 text-pink-700',
  },
]

const whyChooseUs = [
  {
    title: 'Established In 2015',
    description: 'Having nearly a decade of experience, we know how verification requirements evolve and provide products that work in a variety of industries.',
    icon: Award,
  },
  {
    title: 'Millions of Verification Requests Supported',
    description: 'We’ve handled millions of checks, helping organizations put together reliable teams through dependable processes.',
    icon: Users,
  },
  {
    title: 'Improve Hiring Efficiency',
    description: 'Our structured workflows reduce paperwork for HR teams, make decisions easier, and speed up onboarding with clear results.',
    icon: TrendingUp,
  },
  {
    title: 'Customized Verification Programs',
    description: 'We create verification packages that fit your job roles, industry rules, team size, and company goals.',
    icon: Sliders,
  },
  {
    title: 'Technology-Enabled Verification',
    description: 'Digital tools make it simple to submit requests, collect documents, track progress, and receive secure reports.',
    icon: Zap,
  },
  {
    title: 'Faster Turnaround Times',
    description: 'Our smooth processes and skilled team deliver reports quickly without cutting corners on quality.',
    icon: Clock,
  },
  {
    title: 'Experienced Verification Specialists',
    description: 'Our team follows clear procedures and does proper quality reviews so every report is detailed and accurate.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Solutions for Every Business',
    description: 'Our services scale with your size, from recruiting a few to conducting large-scale drives.',
    icon: Building2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'You send the request, along with the candidate details and supporting documents, to start the process.',
  },
  {
    step: 'Step 2',
    title: 'Authorization & Collection',
    description: 'We collect the needed permissions and information before beginning checks based on the chosen scope.',
  },
  {
    step: 'Step 3',
    title: 'Verification Execution',
    description: 'Our specialists reach out to the right sources and verify details according to your requirements.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every result goes through a structured quality check to make sure it’s complete and correct.',
  },
  {
    step: 'Step 5',
    title: 'Report Delivery',
    description: 'We prepare a full report and share it securely with the right people so you can make good hiring decisions.',
  },
]

const benefits = [
  'Supports better hiring decisions.',
  'Helps speed up recruitment.',
  'Confirms important candidate details.',
  'Lowers risks during hiring.',
  'Builds a more credible workforce.',
  'Improves company trust and reputation.',
  'Creates standard hiring practices.',
  'Gives you more confidence when onboarding new people.',
]

const ebgvFaqs: FAQItem[] = [
  {
    q: 'What is employee background verification?',
    a: "It’s the process of checking a candidate’s employment history, education, identity, address, and other key details before hiring.",
  },
  {
    q: 'Can employee background verification be customized?',
    a: 'Yes. We create custom packages based on job roles, industry needs, company policies, and your specific goals.',
  },
  {
    q: 'How long does employee background verification take?',
    a: 'It depends on the checks you want, document availability, and how quickly sources respond.',
  },
  {
    q: 'Is authorization required before verification?',
    a: 'Yes. We only start after getting proper authorization and the required candidate information.',
  },
  {
    q: 'Which businesses should use employee background verification?',
    a: 'Companies in IT, banking, healthcare, manufacturing, retail, logistics, staffing, education, hospitality, and many other sectors benefit from these checks.',
  },
]

export default function EbgvClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM SERVICE HERO BANNER (Different from API Dark Hero) */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
                <ShieldCheck size={14} className="text-orange-500" />
                <span>Enterprise Service Solution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Employee Background Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">
                  Secure & Confident Hiring
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Make smarter hiring choices with Credify India’s employee background verification services. Our clear verification steps help companies verify candidate details accurately, reduce hiring risks, and build a team you can rely on.
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

            {/* Right Illustration Card */}
            <div className="lg:col-span-5">
              <img src="/images/ebgv-hero.png" alt="Employee Background Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
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
                Your Trusted BGV Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India: Your Trusted Employee Background Verification Partner
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers solid Employee Background Verification Services that let organizations hire with more peace of mind. We use accurate, safe, and dependable methods to check candidates before they join. Since 2015, we’ve been helping businesses in different fields with standard verification processes that confirm what candidates say about themselves.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we are committed to maintaining high standards of information security, quality management, and operational excellence. Our technology-driven systems, verified by our expert team, and flexible programs help companies expedite hiring processes while maintaining responsible, standard procedures.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/employee-bgv.svg" alt="Employee Background Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Certified</strong>
                  We strictly follow international security and quality guidelines to safeguard candidate privacy and company data.
                </div>
              </div>
            </div>

            {/* What is Employee Background Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 to-[#001f7d] text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Employee Background Verification?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                  Employee Background Verification refers to the process of obtaining information from a job applicant before or during the hiring process. It helps the company verify information such as work experience, education, home address, ID proof, criminal record (if applicable), and other details as per the company&apos;s requirements.
                </p>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  Using a suitable background-checking system ensures that the employer can make better recruitment decisions, build a reliable team, and reduce recruitment-related risks. For hiring permanent staff members, contract workers, senior leaders, and gig employees, these checks are a key factor in building a strong and efficient team.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Employee Background Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Employee Background Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every company hires differently. That’s why Credify India gives you flexible employee background verification solutions that can be adjusted to match your recruitment rules and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whatIncludes.map((item, idx) => {
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

      {/* Why Choose Credify India for Employee Background Verification? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Employee Background Verification?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India combines real experience, safety measures, and updated workflows to help companies hire quickly without compromising on consistency, accuracy, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Our Employee Background Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standard BGV Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Employee Background Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear employee background verification process to give you accurate, secure, and timely results every single time.
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

      {/* Benefits of Employee Background Verification */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 sm:p-12 rounded-3xl border border-blue-100 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 text-center">
              Benefits of Employee Background Verification
            </h2>
            <p className="text-slate-600 text-center text-sm sm:text-base mb-8">
              Employee background verification brings real value to companies that want stronger hiring and better teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                  <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reusable FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Employee Background Verification Services."
        badgeText="BGV FAQ"
        faqs={ebgvFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Build a Trusted Workforce with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Finding good people starts with proper checking. Credify India’s Employee Background Verification Services help companies verify candidate details, make recruitment smoother, and build a team they can count on.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-[#f97316] hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                Request a Demo
                <ArrowRight size={16} />
              </button>
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300"
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
