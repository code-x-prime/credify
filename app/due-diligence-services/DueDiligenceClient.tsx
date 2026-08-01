'use client'

import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  ShieldCheck,

  CheckCircle2,
  ArrowRight,
  PhoneCall,

  Building2,
  Users,
  Award,
  Clock,
  TrendingUp,
  FileCheck2,
  Sliders,
  Shield,
  Layers,
  FileText,
  Search,
  SlidersHorizontal,
  Sparkles,
  PieChart,
  Briefcase
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Business Due Diligence',
    description: 'We review critical business information to enable organizations to evaluate potential business partners, vendors, suppliers, and outside organizations before establishing commercial relationships.',
    icon: '/icons/due-diligence.svg',
    color: 'border-violet-200 bg-violet-50/50 text-violet-700',
  },
  {
    title: 'Vendor Due Diligence',
    description: 'Our due diligence services support procurement teams by reviewing vendor details as part of organized supplier onboarding and third-party reviews.',
    icon: Briefcase,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Corporate Document Review',
    description: 'We review relevant business documents to support sound evaluations and strengthen due diligence across different business setups.',
    icon: FileText,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Compliance Information Review',
    description: 'When needed, we check compliance-related details within the set limits to support informed business decisions.',
    icon: Shield,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Risk Assessment Support',
    description: 'Our organized due diligence methods help organizations review available information tied to business relationships and planning.',
    icon: PieChart,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Customized Due Diligence Programs',
    description: 'Different organizations face unique risk concerns. We shape due diligence services around industry needs, deal types, internal rules, and business goals.',
    icon: SlidersHorizontal,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Industry-Specific Due Diligence',
    description: 'Each sector deals with its own business factors. Our due diligence style fits your sector, deal goals, and company priorities to provide useful business insights.',
    icon: Award,
  },
  {
    title: 'Comprehensive Business Assessments',
    description: 'We look at several sides of a business relationship within the agreed limits, helping organizations get a fuller picture before starting key deals.',
    icon: Layers,
  },
  {
    title: 'Research-Driven Evaluation',
    description: 'Our due diligence process is structured to bring key information together into clear, concise business insights that support decision-making.',
    icon: Search,
  },
  {
    title: 'Business Relationship Intelligence',
    description: 'From vendors and suppliers to partners and outside groups, we help organizations check business ties through organized due diligence setups.',
    icon: Building2,
  },
  {
    title: 'Executive-Ready Reporting',
    description: 'We present our findings in a straightforward business report format, which enables leadership, procurement, legal, and compliance teams to review details at a glance.',
    icon: FileCheck2,
  },
  {
    title: 'Dedicated Due Diligence Experts',
    description: 'Our skilled specialists manage every project with a focus on consistent work, quick replies, and professional handling during the whole process.',
    icon: ShieldCheck,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Requirement Assessment',
    description: 'We learn about your business goals, due diligence needs, and the full scope of the review.',
  },
  {
    step: 'Step 2',
    title: 'Information Collection',
    description: 'We gather the required business details and documents based on the agreed review scope.',
  },
  {
    step: 'Step 3',
    title: 'Due Diligence Review',
    description: 'Our experts carry out a structured examination of the relevant information using standard due diligence methods.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Every assessment passes through recorded quality checks to keep reports consistent and dependable.',
  },
  {
    step: 'Step 5',
    title: 'Report Submission',
    description: 'We send a clear due diligence report securely to the right people to support informed business decisions.',
  },
]

const benefits = [
  {
    title: 'Better Business Decisions',
    description: 'Due diligence gives organized details that help organizations review business opportunities with more confidence.',
  },
  {
    title: 'Stronger Third-Party Governance',
    description: 'Checking key information supports clearer, more accountable relationships with vendors, suppliers, and business partners.',
  },
  {
    title: 'Improved Risk Awareness',
    description: 'A well-planned due diligence process helps organizations spot important business factors before starting strategic relationships.',
  },
  {
    title: 'Enhanced Procurement Confidence',
    description: 'Procurement groups can review vendors more effectively with organized due diligence and supporting papers.',
  },
  {
    title: 'Flexible Assessment Programs',
    description: 'Our due diligence services adjust to fit industry, deal type, business goals, and internal rules.',
  },
  {
    title: 'Reliable Decision Support',
    description: 'Clear reporting presents findings in an easy-to-review format so stakeholders can assess business relationships faster.',
  },
  {
    title: 'Secure Information Management',
    description: 'Every project follows standard operational steps built to protect privacy and handle information responsibly.',
  },
  {
    title: 'Scalable Due Diligence Solutions',
    description: 'Whether checking one business or handling many outside reviews, our services grow with your operational needs.',
  },
]

const dueFaqs: FAQItem[] = [
  {
    q: 'What are due diligence services?',
    a: 'Due diligence services cover reviewing important business details before starting partnerships, vendor ties, investments, or other major business moves.',
  },
  {
    q: 'Who should use due diligence services?',
    a: 'Organizations, procurement teams, investors, financial groups, legal departments, and companies often use due diligence services to support informed business decisions.',
  },
  {
    q: 'Can due diligence services be customized?',
    a: 'Yes. Credify India adjusts due diligence services based on industry needs, deal types, company policies, and business goals.',
  },
  {
    q: 'What types of due diligence do you provide?',
    a: 'Our services can include business due diligence, vendor due diligence, document checks, compliance reviews, and custom assessments, depending on the agreed limits.',
  },
  {
    q: 'How does Credify India ensure secure information handling?',
    a: 'Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company that follows regular operational procedures that assure safe handling of information and quality of service.',
  },
]

export default function DueDiligenceClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-violet-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/70 border border-violet-200 text-violet-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Layers size={14} className="text-violet-600" />
                <span>Corporate & Enterprise Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Due Diligence Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-700 via-indigo-700 to-[#001f7d]">
                  Smarter Business Decisions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Are you finalizing big business moves without checking the facts first? Credify India’s Due Diligence Services help organizations review people, companies, and outside parties through organized due diligence steps that lead to wiser choices.
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
              <img src="/images/due-diligence.png" alt="Due Diligence Services" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wide">
                Due Diligence Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Your Trusted Partner for Due Diligence Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India delivers comprehensive Due Diligence Services that help organizations examine potential business ties before starting important deals. We started in 2015 and combine expert due diligence professionals, conventional due diligence practices, and technology-enabled workflows to deliver effective due diligence solutions across different industries.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                As an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited firm, we maintain the highest standards of data protection, quality control, and smooth operations. Our due diligence offering can help businesses add extra diligence layers on third parties, raise awareness of the risks, and support a confident business move.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/due-diligence-services.svg" alt="Due Diligence Services" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited Firm</strong>
                  Maintaining the highest standards of data protection, quality control, and smooth operations.
                </div>
              </div>
            </div>

            {/* What are Due Diligence Services? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What are Due Diligence Services?
                </h3>
                <p className="text-xs sm:text-sm text-violet-100/90 leading-relaxed mb-4">
                  Due Diligence Services mean carrying out a detailed check and review of important details before starting business relationships, partnerships, vendor deals, investments, or other key decisions. The objective is to enable organizations to see the facts available, identify potential issues, and make decisions.
                </p>
                <p className="text-xs sm:text-sm text-violet-100/90 leading-relaxed">
                  Due diligence is typically utilized by companies for vendor onboarding, mergers and acquisitions, investments, partnerships, purchasing processes, and regulatory compliance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Do Our Due Diligence Services Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Do Our Due Diligence Services Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Business, vendor, corporate document, compliance, risk assessment, and customized programs.
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

      {/* Why Choose Credify India for Due Diligence Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Due Diligence Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India brings together experienced due diligence experts, transparent processes, and technology-driven workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-violet-300 transition-all duration-300">
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

      {/* Our Due Diligence Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Due Diligence Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear due diligence method built to deliver consistent reviews and support smart business decisions.
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

      {/* Benefits of Due Diligence Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Due Diligence Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of performing thorough due diligence before strategic business moves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-violet-50/60 to-slate-50 border border-violet-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-violet-700" />
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
        subtitle="Common questions regarding Credify India's Due Diligence Services."
        badgeText="DUE FAQ"
        faqs={dueFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Make Better Business Decisions?
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Every good business relationship starts with clear choices. Credify India’s Due Diligence Services help organizations review vendors, partners, and outside parties through organized assessment methods that match their business goals.
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
