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
  Sparkles,
  FlaskConical,
  Activity,
  FileText,
  Lock,
  SlidersHorizontal,
  Shield
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Pre-Employment Screening',
    description: 'Creating a workplace environment that is drug-free by conducting employee drug testing prior to hire to ensure a safer workplace and improve the recruitment process.',
    icon: '/icons/drug-check.svg',
    color: 'border-pink-200 bg-pink-50/50 text-pink-700',
  },
  {
    title: 'Laboratory Coordination',
    description: 'Our team works directly with approved testing labs to manage screening needs, helping companies run the whole process smoothly and professionally.',
    icon: FlaskConical,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Sample Collection Support',
    description: 'We help coordinate the sample collection step in an organized way that keeps things easy for both employers and candidates.',
    icon: Activity,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Screening Status Tracking',
    description: 'Our tech systems let organizations track progress and receive regular updates throughout the screening period.',
    icon: Clock,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Secure Report Management',
    description: 'We handle screening reports carefully and send them only to the right people while protecting all confidential details.',
    icon: Lock,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Customized Screening Programs',
    description: 'We shape employee drug screening solutions around your workforce, industry rules, company policies, and specific business needs.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Nearly a Decade of Expertise',
    description: 'Since 2015, Credify India has helped many organizations with reliable workforce screening backed by solid industry understanding and strong operational standards.',
    icon: Award,
  },
  {
    title: 'Millions of Verification Requests',
    description: 'Our long track record allows us to handle millions of screening and verification requests using organized systems that can grow with your needs.',
    icon: Users,
  },
  {
    title: 'Faster Screening Coordination',
    description: 'Admins can save time and reduce delays by using our efficient processes to seamlessly complete employee drug testing.',
    icon: Clock,
  },
  {
    title: 'Improved Operational Efficiency',
    description: 'Request, track, and report tools enable HR teams to manage all tasks from a single source more efficiently.',
    icon: TrendingUp,
  },
  {
    title: '100% Customized Programs',
    description: 'Every company faces unique staffing situations. We adjust employee drug screening solutions to match your industry, job types, and screening goals.',
    icon: Sliders,
  },
  {
    title: 'End-to-End Management',
    description: 'We take care of the full journey, from the initial request and coordination to quality checks and safe report delivery.',
    icon: Zap,
  },
  {
    title: 'Standardized Quality Reviews',
    description: 'We follow documented review procedures to keep every employee\'s drug screening consistent, accurate, and dependable.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure & Trusted Operations',
    description: 'As an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company, Credify India follows proven practices that protect information.',
    icon: Building2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Screening Request',
    description: 'Share employee details and what needs to be screened to begin the employee drug screening through our structured system.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our specialists check the provided details and set up the screening according to your company’s policies.',
  },
  {
    step: 'Step 3',
    title: 'Screening Coordination',
    description: 'We connect with the right testing facility and manage the employee drug screening based on the agreed scope.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'We run every report through a proper quality check before preparing it for the authorized people.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished screening reports safely to the right team members so organizations can make informed decisions.',
  },
]

const benefits = [
  {
    title: 'Safer Workplaces',
    description: 'Employee drug screening helps companies build a safer environment by supporting careful recruitment and checks for roles where safety matters most.',
  },
  {
    title: 'Better Hiring Confidence',
    description: 'Organized screening programs give employers extra assurance when choosing candidates for positions that require strong safety standards.',
  },
  {
    title: 'Streamlined Screening',
    description: 'Tech-supported systems make managing employee drug screening much easier, lowering the workload and raising overall efficiency.',
  },
  {
    title: 'Improved Workforce Reliability',
    description: 'Employee drug screening supports consistent workforce practices that align with your internal hiring guidelines.',
  },
  {
    title: 'Flexible Screening Programs',
    description: 'We can customize our screening services to fit your workforce, industry rules, company policies, and main objectives.',
  },
  {
    title: 'Efficient Process Management',
    description: 'Standard steps allow organizations to handle employee drug screening requests in a clear, open, and effective manner.',
  },
  {
    title: 'Secure Information Handling',
    description: 'Our operational methods focus on protecting screening information and keeping everything confidential during the entire process.',
  },
  {
    title: 'Scalable Workforce Screening',
    description: 'Whether you are bringing in a small group or managing large recruitment drives, our Employee Drug Screening Verification Services grow along with your team.',
  },
]

const drugFaqs: FAQItem[] = [
  {
    q: 'What is employee drug screening?',
    a: 'Employee drug screening is a workplace process carried out based on a company’s hiring or staff management requirements.',
  },
  {
    q: 'Which industries commonly use employee drug screening?',
    a: 'Drug testing is a frequent part of workplace safety programs in various sectors, such as manufacturing, logistics and transportation, health care, construction, energy and more.',
  },
  {
    q: 'Can employee drug screening programs be customized?',
    a: 'Yes. Credify India shapes Employee Drug Screening Verification Services around your workforce needs, industry standards, and internal policies.',
  },
  {
    q: 'How are screening reports managed?',
    a: 'We keep reports secure and share them only with authorized people through our organized operational systems.',
  },
  {
    q: 'Why choose Credify India for employee drug screening?',
    a: 'Credify India brings together experienced staff, technology-driven workflows, and standard procedures to help organizations handle employee drug screening efficiently and securely.',
  },
]

export default function DrugScreeningClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-pink-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#001f7d]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/70 border border-pink-200 text-pink-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <FlaskConical size={14} className="text-pink-600" />
                <span>Workplace Health & Safety Screening</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Reliable Employee Drug Screening Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-rose-600 to-[#001f7d]">
                  Safer Workplace Decisions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Support a safe and productive workplace with Credify India’s Employee Drug Screening Verification Services. We help companies handle their drug screening needs through clear, secure, and well-managed screening solutions.
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
              <img src="/images/drug-screening.png" alt="Drug Screening Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wide">
                Drug Screening Services
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Employee Drug Screening Verification Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers dependable Employee Drug Screening Verification Services that help organizations boost workplace safety and make better hiring choices. Since we began in 2015, we have assembled a highly talented team, technology-driven processes, and consistent workflows to deliver screening solutions for various business requirements.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited organization, and we are committed to protecting information, maintaining quality, and conducting operations responsibly. Our Employee Drug Screening Verification Services simplify the process of your business conducting pre-employment and regular drug testing of your staff without the hassle, while maintaining privacy and uniformity.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/drug-screening-verification.svg" alt="Drug Screening Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Maintaining strict privacy, information security, and quality compliance for all workplace testing.
                </div>
              </div>
            </div>

            {/* What is Employee Drug Screening? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-pink-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Employee Drug Screening?
                </h3>
                <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed mb-4">
                  Employee Drug Screening is a workplace check that organizations use to see if candidates or current employees meet the company’s drug screening rules. Commonly part of pre-employment screening, safety initiatives, and particular hiring guidelines.
                </p>
                <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed">
                  Employers in manufacturing, logistics, transportation, healthcare, construction, energy, and other high-risk industries typically screen new hires for drug use or perform drug testing on their employees as part of their routine hiring or employee management practices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Employee Drug Screening Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Employee Drug Screening Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Pre-employment screening, laboratory coordination, sample collection support, and secure report management.
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

      {/* Why Choose Credify India for Employee Drug Screening Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Employee Drug Screening Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India makes employee drug screening simpler for organizations by using standard workflows, expert coordination, and tech tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-pink-300 transition-all duration-300">
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

      {/* Our Employee Drug Screening Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Employee Drug Screening Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a well-organized employee drug screening process that delivers quick coordination, protected reports, and a smooth experience.
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

      {/* Benefits of Employee Drug Screening Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Employee Drug Screening Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of performing workplace drug screening for employee safety and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-pink-50/60 to-slate-50 border border-pink-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-pink-600" />
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
        subtitle="Common questions regarding Credify India's Employee Drug Screening Services."
        badgeText="DRUG FAQ"
        faqs={drugFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Support a Safer Workplace with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Build a safer and more reliable workforce with Credify India’s Employee Drug Screening Verification Services. Our organized screening solutions help companies simplify workplace checks, increase confidence in hiring, and manage employee drug screening through secure, smooth, and professionally handled processes.
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
