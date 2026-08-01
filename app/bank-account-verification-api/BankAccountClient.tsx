'use client'

import React from 'react'
import ApiHero from '@/components/ApiHero'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  ShieldCheck,
  Zap,
  Code,
  Lock,
  Clock,
  Layers,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronRight,
  Server,
  Building2,
  CreditCard,
  CheckCircle,
  FileCheck,
  BarChart3
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'Real-Time Account Validation',
    description: 'Verify bank account information instantly to support faster payment processing and digital onboarding.',
    icon: Clock,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Account Holder Verification',
    description: 'Validate account details to strengthen customer onboarding and reduce incorrect account submissions.',
    icon: CheckCircle,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Bulk Verification Capability',
    description: 'Process multiple bank account verification requests efficiently through a scalable API infrastructure.',
    icon: Layers,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'REST API Integration',
    description: 'Integrate easily with banking systems, payment gateways, ERP, CRM, payroll, and custom business applications.',
    icon: Code,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Structured API Responses',
    description: 'Receive standardized verification responses for seamless integration into existing business workflows.',
    icon: FileCheck,
    color: 'from-rose-500 to-red-600',
  },
  {
    title: 'High-Availability Processing',
    description: 'Built to support continuous verification requests with reliable performance for enterprise-scale operations.',
    icon: Server,
    color: 'from-[#001f7d] to-blue-700',
  },
]

const whyChooseUs = [
  {
    title: 'Certified for Security & Quality',
    description: 'Our APIs run under ISO 27001 Certification, ISO 9001 Certification, and SOC 2 Audited operational standards for secure and dependable verification.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise-Ready API Platform',
    description: 'Infrastructure capable of supporting startups, enterprises, banks, fintech companies, and high-volume verification requirements.',
    icon: Building2,
  },
  {
    title: 'Developer-Friendly Integration',
    description: 'REST APIs with clear implementation let teams deploy faster into existing business systems.',
    icon: Code,
  },
  {
    title: 'Faster Payment Verification',
    description: 'Automate account verification to cut manual effort and raise payment accuracy.',
    icon: Zap,
  },
  {
    title: 'Reliable Verification Infrastructure',
    description: 'High-performance API architecture delivers secure, consistent, and dependable verification services.',
    icon: Server,
  },
  {
    title: 'Dedicated Technical Support',
    description: 'Our technical experts provide implementation guidance, integration support, testing assistance, and ongoing consultation.',
    icon: Users,
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the Bank Account Verification API into your application.',
  },
  {
    step: '02',
    title: 'Send Details',
    description: 'Send the required bank account details securely through the API.',
  },
  {
    step: '03',
    title: 'Verification Process',
    description: 'The API runs the verification request through standardized verification workflows.',
  },
  {
    step: '04',
    title: 'Get Results',
    description: 'Get real-time verification responses to support faster payments and clear business decisions.',
  },
]

const bankAccountFaqs: FAQItem[] = [
  {
    q: 'What is a Bank Account Verification API?',
    a: 'A Bank Account Verification API lets businesses check bank account details digitally through secure API integrations and supports payment validation and customer verification workflows.',
  },
  {
    q: 'Which businesses can use this API?',
    a: 'The API can be used by businesses that include banks, NBFCs, fintech companies, payroll service providers, payment platforms, insurance companies, marketplaces, lending institutions, and enterprises.',
  },
  {
    q: 'Is the API easy to integrate?',
    a: 'Yes. Our REST API is easily accessible to developers of web applications, mobile platforms, ERP systems, CRM software, and payment solutions.',
  },
  {
    q: 'Is the Bank Account Verification API secure?',
    a: 'Yes. Credify India\'s API platform follows ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited operational practices support secure verification and protect sensitive financial information.',
  },
  {
    q: 'Why choose Credify India\'s Bank Account Verification API?',
    a: 'Businesses pick Credify India for enterprise-grade security, reliable API infrastructure, smooth integrations, faster verification workflows, and dedicated technical support.',
  },
]

export default function BankAccountClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <ApiHero
        badgeText="SECURE PAYMENT VERIFICATION"
        title="Bank Account Verification API for Secure Payments &"
        highlightTitle="Customer Verification"
        subtitle="Check bank account details right away with Credify India's Bank Account Verification API. Automate account verification, reduce failed payments, enhance compliance, and streamline customer signups with secure, scalable, and developer-friendly API integration."
      />

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#001f7d]/10 text-[#001f7d] text-xs font-bold uppercase tracking-wide">
                Account Validation
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Simplify Bank Account Verification with Credify India&apos;s Secure API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Properly verifying bank accounts is vital to digital payments, customer signups, vendor management, payroll handling, and financial work. Manual verification methods often delay transactions, raise operational costs, and cause payment errors. Credify India&apos;s Bank Account Verification API lets businesses automate account verification for faster, more reliable, and more efficient workflows.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We built the API for banks, NBFCs, fintech companies, payment aggregators, insurance providers, payroll platforms, lending institutions, marketplaces, and enterprises. It slots into existing applications without hassle. Whether you&apos;re validating customer bank accounts, verifying vendor payments, or supporting secure financial transactions, the API provides a reliable verification experience that enhances operational efficiency.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <ShieldCheck size={28} className="text-[#001f7d] flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  As an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company, we adhere to clear international standards in information security, quality management, and day-to-day operations.
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <img src="/images/bank-account-verification-api.png" alt="Bank Account Verification API" className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES GRID */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features of Bank Account Verification API
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Real-time validation, account holder verification, and scalable processing for secure financial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 hover:border-orange-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Credify India for Bank Account Verification API?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Enterprise-grade security, reliable infrastructure, and dedicated technical support for secure payment verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-orange-400 flex items-center justify-center mb-4">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW STEPS */}
      <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Verification Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does Bank Account Verification API Work?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to automate bank account verification and support secure financial transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/80 relative">
                <div className="text-2xl font-black text-orange-400 mb-3">{st.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE FAQ SECTION */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions regarding Credify India's Bank Account Verification API."
        badgeText="BANK VERIFICATION FAQ"
        faqs={bankAccountFaqs}
      />

      {/* CTA BOTTOM BANNER */}
      <section className="pb-16 pt-4 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Power Secure Financial Verification with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Automate bank account verification, improve payment accuracy, and simplify financial operations with Credify India&apos;s secure Bank Account Verification API. Reach out to our experts to find the right verification solution for your business.
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