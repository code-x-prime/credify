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
  Briefcase,
  UserCheck,
  Calendar,
  BadgeCheck,
  UserCheck2,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Previous Employer Verification',
    description: 'We check details with previous employers to confirm work history, boost your confidence in the candidate, and support better hiring decisions.',
    icon: '/icons/employment-check.svg',
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Employment Duration Verification',
    description: 'We validate how long the candidate worked at each place so you get a clear picture of their professional experience and avoid surprises later.',
    icon: Calendar,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Designation & Job Role Verification',
    description: 'We confirm previous job titles and responsibilities so you understand what the candidate actually did in their last roles.',
    icon: Briefcase,
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Employment Status Verification',
    description: 'We check employment status details where relevant to create a more open hiring process and reduce risks.',
    icon: BadgeCheck,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Experience Verification',
    description: 'Our process verifies the candidate’s actual professional experience, helping you select the right people for your team.',
    icon: UserCheck2,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Reporting Manager & Organization Details',
    description: 'When needed, we verify reporting structures and company information to provide you with additional assurance about their background.',
    icon: Users,
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
  },
  {
    title: 'Customized Employment Verification Checks',
    description: 'Every business is different. We tailor our employment verification services to your industry, job roles, company policies, and team needs to deliver the best results.',
    icon: SlidersHorizontal,
    color: 'border-[#001f7d]/20 bg-blue-50/60 text-[#001f7d]',
  },
]

const whyChooseUs = [
  {
    title: 'Established In 2015',
    description: 'With over 10 years of experience, we understand diverse hiring needs and provide reliable employment verification across many industries.',
    icon: Award,
  },
  {
    title: 'Millions of Employment Verifications Supported',
    description: 'We’ve successfully handled a huge number of employment checks, helping organizations manage their hiring efficiently.',
    icon: Users,
  },
  {
    title: 'Faster Recruitment Decisions',
    description: 'Quick and accurate verification lets HR teams confirm details quickly, reduce delays, and move candidates forward without wasting time.',
    icon: Clock,
  },
  {
    title: 'Customized Verification Programs',
    description: 'We tailor our services to align with job roles, company policies, industry requirements, and your specific workforce needs.',
    icon: Sliders,
  },
  {
    title: 'Technology-Enabled Verification',
    description: 'Digital tools make it easy to submit requests, track progress, and receive secure reports, simplifying everything.',
    icon: Zap,
  },
  {
    title: 'Experienced Verification Specialists',
    description: 'Our team follows standard procedures and does careful quality checks so every report is consistent and dependable.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Business Solutions',
    description: 'Whether you’re hiring a few people or running big recruitment drives, our services scale easily with your business.',
    icon: Building2,
  },
  {
    title: 'Improved Hiring Efficiency',
    description: 'Our well-defined processes save HR time, streamline recruitment, and improve overall efficiency.',
    icon: TrendingUp,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: "You send the request with the candidate's details and any supporting documents.",
  },
  {
    step: 'Step 2',
    title: 'Authorization & Collection',
    description: 'We gather the necessary permissions and employment information before starting the checks.',
  },
  {
    step: 'Step 3',
    title: 'Employment Verification',
    description: 'Our specialists reach out to the right sources and verify the details using proper methods.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'Each result is carefully checked for accuracy, completeness, and consistency.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We prepare the report and send it securely to the people who need it.',
  },
]

const benefits = [
  {
    title: 'Better Hiring Decisions',
    description: 'Employment verification confirms job history, helping recruiters make the right hiring decisions and avoid risk in the hiring and onboarding process.',
  },
  {
    title: 'Reduced Hiring Risks',
    description: 'Reviewing prior employment ensures there is no incorrect information and a more trustworthy staff.',
  },
  {
    title: 'Improved Recruitment Efficiency',
    description: 'All information is verified to ensure a faster, smoother hiring process for HR teams.',
  },
  {
    title: 'Enhanced Workforce Trust',
    description: 'Hiring people with proven experience fosters greater trust and openness in the workplace.',
  },
  {
    title: 'Customized Verification',
    description: 'We can adjust the level of checking based on different roles, industries, and company needs.',
  },
  {
    title: 'Faster Onboarding',
    description: 'With verified information, you can bring new people on board more quickly without losing accuracy.',
  },
]

const evFaqs: FAQItem[] = [
  {
    q: 'What is employment verification?',
    a: 'It’s the process of confirming a candidate’s past work details so employers can trust the information before hiring.',
  },
  {
    q: 'Why is employment verification important?',
    a: 'It helps verify real experience, supports better hiring choices, and increases confidence throughout recruitment.',
  },
  {
    q: 'What information is verified?',
    a: 'We can review previous employers, employment duration, job titles, experience, and other relevant employment details, depending on your needs.',
  },
  {
    q: 'Can employment verification be customized?',
    a: 'Yes. We create packages that match your company policies, job roles, and business requirements.',
  },
  {
    q: 'Which organizations use employment verification?',
    a: 'It’s commonly used in IT, BFSI, healthcare, manufacturing, logistics, retail, staffing, education, and many other sectors.',
  },
]

export default function EvClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM SERVICE HERO BANNER (Light Modern Enterprise Theme) */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
                <Briefcase size={14} className="text-orange-500" />
                <span>Work History Validation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Reliable Employment Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">
                  Confident Hiring
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Verify a candidate’s work history with confidence using Credify India’s employment verification services. We help companies verify prior experience, reduce hiring risks, and make stronger recruitment decisions through accurate checks.
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
              <img src="/images/employment-verification.png" alt="Employment Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Partner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Employment Verification Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India: Employment Verification Partner
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India provides dependable Employment Verification Services that enable organizations to verify a candidate’s past employment before bringing them on board. Since 2015, we have combined the best verification professionals, the most reliable techniques, and cutting-edge technology to provide you with trustworthy solutions for businesses of all sizes.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                As an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company, we maintain a strong commitment to information security, quality management, and operational excellence. Our employment verification solutions are designed to support confident hiring, improve recruitment efficiency, and help employers make informed workforce decisions.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/employment-verification.svg" alt="Employment Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Maintaining international standards in information security, quality management, and everyday operations.
                </div>
              </div>
            </div>

            {/* What is Employment Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Employment Verification?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                  Employment Verification is the process of checking a candidate’s previous job details with past employers or other reliable sources. The idea is to validate the data they provided during the hiring process, which helps employers make better decisions.
                </p>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-4">
                  This can include the previous employer&apos;s name, job title, employment duration, reporting manager, and more. Proper employment verification boosts hiring accuracy and enhances the credibility of the entire hiring process.
                </p>
                <p className="text-xs text-orange-300 italic">
                  &quot;We at Credify India handle each request systematically, with the utmost confidentiality and timeliness.&quot;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Employment Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Employment Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our employment verification services can be adjusted to fit your recruitment rules and specific needs.
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

      {/* Why Choose Credify India for Employment Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Employment Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Credify India empowers businesses to hire with confidence with its transparent employment verification solutions, ensuring a seamless and reliable hiring process.
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

      {/* Our Employment Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Employment Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India implements a clear, systematic employment verification process to provide you with accurate reports while maintaining consistency and confidentiality.
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

      {/* Benefits of Employment Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Employment Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key advantages of verifying past work history with Credify India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-orange-500" />
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
        subtitle="Common questions regarding Credify India's Employment Verification Services."
        badgeText="EV FAQ"
        faqs={evFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Every Great Hire Begins with Verified Experience
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Build a stronger workforce with employment verification services designed to authenticate work history, improve recruitment efficiency, and support confident hiring decisions. Let Credify India help you create a smarter and more reliable hiring process.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
