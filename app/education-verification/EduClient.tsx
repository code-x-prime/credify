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
  GraduationCap,
  BookOpen,
  FileText,
  School,
  Sparkles
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const includesList = [
  {
    title: 'Degree Verification',
    description: 'We check degree qualifications directly with the right educational institutions. This helps organizations confirm academic credentials and hire people with proven educational achievements.',
    icon: '/icons/education-check.svg',
    color: 'border-purple-200 bg-purple-50/50 text-purple-700',
  },
  {
    title: 'Diploma Verification',
    description: 'Our education verification services confirm diploma qualifications. This supports better hiring decisions and builds trust in a candidate’s educational background.',
    icon: BookOpen,
    color: 'border-blue-200 bg-blue-50/50 text-[#001f7d]',
  },
  {
    title: 'Certificate Verification',
    description: 'We verify professional and academic certificates so employers can confirm the qualifications candidates submit during recruitment and onboarding.',
    icon: Award,
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    title: 'Institution Verification',
    description: 'Our verification team confirms details about the educational institutions to help organizations check the real background of academic credentials.',
    icon: School,
    color: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    title: 'Course Verification',
    description: 'We verify completed courses and academic programs when needed. This gives employers a clearer picture of a candidate’s educational profile before they make a hiring decision.',
    icon: FileText,
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
  },
  {
    title: 'Graduation Verification',
    description: 'Our education verification process checks graduation details. It allows organizations to confirm that candidates have finished their academic programs and meet the qualification standards.',
    icon: GraduationCap,
    color: 'border-sky-200 bg-sky-50/50 text-sky-700',
  },
  {
    title: 'Academic Record Verification',
    description: 'We verify key academic records to give employers more confidence when reviewing candidate qualifications for various job positions.',
    icon: FileCheck2,
    color: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
]

const whyChooseUs = [
  {
    title: 'Established in 2015',
    description: 'Credify India has nearly a decade of verification experience and can provide accurate education verification solutions for businesses across various industries and sectors.',
    icon: Award,
  },
  {
    title: 'Millions of Verification Requests',
    description: 'Our track record with millions of verification requests lets us provide dependable education verification solutions for businesses of all sizes.',
    icon: Users,
  },
  {
    title: 'Improved Hiring Accuracy',
    description: 'Accurate education verification lets employers confirm academic qualifications before hiring. This improves recruitment quality and reduces the risk of credential issues.',
    icon: TrendingUp,
  },
  {
    title: 'Tailored Verification Solutions',
    description: 'Our education verification services are flexible and can be tailored to match specific job roles, industry requirements, company policies, and specific hiring requirements.',
    icon: Sliders,
  },
  {
    title: 'Technology-Enabled Processes',
    description: 'Digital verification steps make it easier to manage requests, track documents, and send secure reports. This helps companies work more efficiently.',
    icon: Zap,
  },
  {
    title: 'Faster Verification Turnaround',
    description: 'Our clear methods and experienced team help us deliver education verification reports on time while maintaining high quality.',
    icon: Clock,
  },
  {
    title: 'Experienced Verification Team',
    description: 'Our specialists follow organized review steps to deliver consistent, accurate, and dependable education verification results every time.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Verification Services',
    description: 'Whether you hire fresh campus graduates or seasoned professionals, our education verification services can grow along with your recruitment volume.',
    icon: Building2,
  },
]

const steps = [
  {
    step: 'Step 1',
    title: 'Verification Request',
    description: 'Share the candidate’s educational details and any supporting documents to start the education verification process through our organized workflow.',
  },
  {
    step: 'Step 2',
    title: 'Information Review',
    description: 'Our team reviews the submitted educational information to decide the scope and prepare the verification request properly.',
  },
  {
    step: 'Step 3',
    title: 'Education Verification',
    description: 'We check academic qualifications using the right methods and by contacting relevant educational institutions or official sources.',
  },
  {
    step: 'Step 4',
    title: 'Quality Review',
    description: 'All results are carefully checked to ensure that the report is accurate, consistent and complete before sending it.',
  },
  {
    step: 'Step 5',
    title: 'Secure Report Delivery',
    description: 'We send the finished education verification report securely to the right people so they can make informed recruitment and onboarding decisions.',
  },
]

const benefits = [
  {
    title: 'Verified Qualifications',
    description: 'Education verification lets organizations confirm academic credentials. Recruiters can then hire qualified candidates with more confidence and less uncertainty.',
  },
  {
    title: 'Better Candidate Selection',
    description: 'Confirming educational qualifications helps employers pick the right people whose academic background matches the job requirements.',
  },
  {
    title: 'Reduced Credential Risks',
    description: 'Education verification lowers the chance of wrong academic information and supports open hiring processes with stronger decisions.',
  },
  {
    title: 'Improved Hiring Confidence',
    description: 'Verified educational records give hiring teams more confidence when reviewing candidates for entry-level roles, experienced positions, and leadership jobs.',
  },
  {
    title: 'Efficient Recruitment',
    description: 'Organized education verification simplifies recruitment steps by quickly checking academic details. This helps companies speed up hiring and onboarding.',
  },
  {
    title: 'Flexible Verification Packages',
    description: 'Our education verification services can be adjusted to match company hiring rules, industry needs, and overall workforce goals.',
  },
  {
    title: 'Stronger Workforce Quality',
    description: 'Hiring candidates who have proven their educational qualifications helps build a skilled, reliable, and effective workforce.',
  },
  {
    title: 'Scalable Verification Support',
    description: 'Whether you hire one person at a time or run big recruitment drives, our education verification services grow easily to meet your hiring needs.',
  },
]

const eduFaqs: FAQItem[] = [
  {
    q: 'What is education verification?',
    a: 'Education verification confirms a candidate’s academic qualifications by checking credentials with the right institutions or official sources.',
  },
  {
    q: 'Why is education verification important?',
    a: 'It helps employers confirm academic qualifications, make stronger hiring choices, and bring in candidates whose education meets company standards.',
  },
  {
    q: 'What qualifications can be verified?',
    a: 'Depending on your needs, education verification may include degrees, diplomas, certificates, graduation information, academic records, and more.',
  },
  {
    q: 'Can education verification be customized?',
    a: 'Yes. Credify India provides customized education verification services based on job roles, industries, company policies, and specific recruitment needs.',
  },
  {
    q: 'Which organizations use education verification?',
    a: 'Education verification services are common among IT companies, BFSI, healthcare, manufacturing, staffing firms, educational institutions, and many other sectors.',
  },
]

export default function EduClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 CUSTOM LIGHT HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-purple-50/70 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <GraduationCap size={14} className="text-purple-700" />
                <span>Academic Credential Verification</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Trusted Education Verification Services for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-[#001f7d]">
                  Accurate Candidate Screening
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Verify academic qualifications with confidence through Credify India’s education verification services. We help companies verify educational credentials, make better hiring decisions, and build a strong team.
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
              <img src="/images/education-verification.png" alt="Education Verification" className="w-full h-auto rounded-2xl shadow-xl border border-slate-200" />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wide">
                Education Verification Partner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                About Credify India’s Education Verification Services
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India offers solid Education Verification Services that let organizations confirm academic qualifications before they hire someone. We started in 2015 and bring together skilled verification experts, clear methods, and tech-supported steps to give accurate and trustworthy education verification solutions.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are an ISO 27001, ISO 9001, and SOC 2 Audited Company, which means we&apos;re highly focused on strong information security, quality management, and smooth operations. Our education verification services give employers peace of mind, reduce the risks of using falsified credentials, and enhance their hiring process.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/education-verification.svg" alt="Education Verification" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited Company</strong>
                  Giving employers peace of mind and reducing the risks of falsified credentials across all hiring tiers.
                </div>
              </div>
            </div>

            {/* What is Education Verification? */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-orange-400" />
                  What is Education Verification?
                </h3>
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-4">
                  Education Verification means checking if a candidate’s academic qualifications are real by reaching out to the right schools or official sources. It lets employers confirm the education details shared during hiring and supports smarter hiring decisions.
                </p>
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                  Checking educational credentials helps companies find candidates whose qualifications match the job needs and reduces mix-ups in the hiring process. Whether you’re bringing in fresh graduates, people with experience, or senior leaders, education verification builds better recruitment standards and trust in your team.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Does Our Education Verification Include? */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Does Our Education Verification Include?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive checks across degrees, diplomas, certificates, and institutional credentials.
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

      {/* Why Choose Credify India for Education Verification Services? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India for Education Verification Services?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              With reliable education verification solutions, Credify India enables organizations to verify academic credentials with greater accuracy, streamline the hiring process, and enhance recruitment outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-purple-300 transition-all duration-300">
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

      {/* Our Education Verification Process */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Standardized Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Education Verification Process
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Credify India uses a clear education verification process to give accurate, secure, and timely results while keeping everything consistent for each request.
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

      {/* Benefits of Education Verification Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Education Verification Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Confirm academic background and build a qualified, trustworthy team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/60 to-slate-50 border border-purple-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-purple-600" />
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
        subtitle="Common questions regarding Credify India's Education Verification Services."
        badgeText="EDU FAQ"
        faqs={eduFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Verify Educational Credentials with Confidence
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Build a stronger workforce with Credify India’s Education Verification Services. Our organized verification steps help organizations check academic qualifications, improve hiring accuracy, and make confident recruitment decisions through secure, tech-supported, and reliable verification solutions.
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
