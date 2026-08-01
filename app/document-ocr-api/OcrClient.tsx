'use client'

import React from 'react'
import ApiHero from '@/components/ApiHero'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronRight,
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const keyFeatures = [
  {
    title: 'Intelligent Text Recognition',
    description: 'Extract printed text from supported documents with high accuracy, reducing dependency on manual data entry.',
    icon: '/icons/ocr-api.svg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Automatic Field Detection',
    description: 'Identify and capture important information such as names, addresses, identification numbers, and dates into structured data fields.',
    icon: '/icons/document-verification.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Multi-Document Processing',
    description: 'Process different document types through a single API, simplifying document collection and verification workflows.',
    icon: '/icons/layers.svg',
    color: 'from-[#001f7d] to-blue-700',
  },
  {
    title: 'Structured Data Output',
    description: 'Receive extracted information in a standardized format, making it easy to integrate with business applications and digital workflows.',
    icon: '/icons/document-verification.svg',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Image Quality Optimization',
    description: 'Automatically handle common image quality issues to improve text extraction from uploaded documents.',
    icon: '/icons/zap.svg',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Workflow Automation',
    description: 'Convert document-based processes into automated digital workflows, helping teams reduce processing time and improve operational efficiency.',
    icon: '/icons/layers.svg',
    color: 'from-sky-500 to-blue-600',
  },
]

const whyChooseUs = [
  {
    title: 'Certified for Security & Quality',
    description: 'Built on ISO 27001 Certification, ISO 9001 Certification, and SOC 2 Audited operational practices for secure and reliable document processing.',
    icon: '/icons/shield.svg',
  },
  {
    title: 'Advanced OCR Technology',
    description: 'Extract document information quickly while raising data accuracy and cutting manual effort.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Enterprise-Ready Platform',
    description: 'Build, support, and nurture startups, enterprises, financial institutions and organisations with high volume document processing.',
    icon: '/icons/layers.svg',
  },
  {
    title: 'Seamless API Integration',
    description: 'The REST APIs are developer-friendly to enable faster deployment across the already deployed business systems and applications.',
    icon: '/icons/code.svg',
  },
  {
    title: 'Reliable & Scalable Infrastructure',
    description: 'Reliable API access and dependable document processing with high-performance technology.',
    icon: '/icons/zap.svg',
  },
  {
    title: 'Dedicated Technical Support',
    description: 'Our API specialists provide implementation guidance, integration support, testing assistance, and ongoing technical expertise.',
    icon: '/icons/users.svg',
  },
]

const steps = [
  {
    step: '01',
    title: 'Integrate API',
    description: 'Integrate the Document OCR API into your application.',
  },
  {
    step: '02',
    title: 'Upload Document',
    description: 'Upload the supported document securely through the API.',
  },
  {
    step: '03',
    title: 'Intelligent Extraction',
    description: 'The API extracts relevant information using intelligent OCR technology.',
  },
  {
    step: '04',
    title: 'Receive Structured Data',
    description: 'Get structured data right away to support faster verification and digital onboarding.',
  },
]

const ocrFaqs: FAQItem[] = [
  {
    q: 'What is a Document OCR API?',
    a: 'A Document OCR API automatically extracts information from supported documents and helps businesses cut manual data entry while simplifying verification workflows.',
  },
  {
    q: 'Which industries can use the Document OCR API?',
    a: 'The API can be integrated by banks, NBFCs, fintech companies, insurance providers, HR platforms, telecom companies, healthcare organizations, marketplaces, and enterprises.',
  },
  {
    q: 'Is the Document OCR API easy to integrate?',
    a: 'Yes. Our developer-friendly REST API connects smoothly with web applications, mobile platforms, enterprise software, and digital onboarding systems.',
  },
  {
    q: 'Is the Document OCR API secure?',
    a: 'Yes. Credify India’s API platform follows ISO 27001 Certified, ISO 9001 Certified, and SOC 2 Audited operational standards to support secure document processing and protect sensitive information.',
  },
  {
    q: 'Why choose Credify India’s Document OCR API?',
    a: 'Businesses pick Credify India for advanced OCR technology, enterprise-grade security, scalable API infrastructure, smooth integrations, and dedicated technical support that simplifies document processing.',
  },
]

export default function OcrClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Reusable Hero Component */}
      <ApiHero
        badgeText="Document Processing API"
        title="Document OCR API for Faster Data Extraction &"
        highlightTitle="Digital Onboarding"
        subtitle="Automate document data extraction with Credify India’s Document OCR API. Extract data from identity and business documents accurately, eliminate manual data entry, accelerate the customer onboarding process, and streamline customer verification processes with secure, scalable and developer-friendly API integration."
      />

      {/* Intro Overview Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Intelligent Text Extraction
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Extract Document Data Instantly with Credify India’s Document OCR API
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Manual document verification and data entry often slow onboarding, introduce human errors, and raise operational costs. Credify India’s Document OCR API lets businesses automatically extract key information from supported documents for faster verification, better accuracy, and a smoother digital onboarding experience.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We designed the API for banks, NBFCs, fintech companies, insurance providers, HR platforms, healthcare organizations, telecom companies, marketplaces, and enterprises. It slots into existing applications without hassle. When you process customer documents, employee records, or business documents, our OCR technology cuts manual intervention and raises operational efficiency.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <img src="/icons/document-ocr-api.svg" alt="Document OCR" className="w-7 h-7 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900 block font-semibold mb-0.5">ISO 27001, ISO 9001 & SOC 2 Audited</strong>
                  Credify India is ISO 27001 Certified, ISO 9001 Certified and SOC 2 Audited. Clear information security, quality management, and everyday operation standards are observed based on international standards.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-orange-400" />
                  Supported Sectors
                </h3>
                <p className="text-xs text-blue-100/80 mb-6">
                  Trusted for automated document parsing across industries:
                </p>
                <div className="space-y-3">
                  {[
                    'Banks & NBFCs',
                    'Fintech & Insurance Providers',
                    'HR Platforms & Staffing',
                    'Healthcare Organizations',
                    'Telecom Providers',
                    'Marketplaces & Enterprises',
                  ].map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                      <ChevronRight size={16} className="text-orange-400" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Intelligent text recognition, field detection, and structured JSON output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {keyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2.5 rounded-xl border border-slate-200/60 bg-slate-50 w-fit mb-4">
                  <img src={feat.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Credify India? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Credify India?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Advanced OCR algorithms, scalable infrastructure, and dedicated technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-300 transition-all duration-300">
                <div className="p-2.5 rounded-xl border border-slate-200/60 bg-white w-fit mb-4">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Does the Document OCR API Works */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-orange-400 text-xs font-bold uppercase tracking-wide mb-3">
              Automated OCR Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How Does the Document OCR API Works
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              4 simple steps to extract structured data from uploaded documents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-extrabold text-orange-400 mb-4">{st.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions regarding Credify India's Document OCR API integration, document types, and security."
        badgeText="OCR API FAQ"
        faqs={ocrFaqs}
      />

      {/* CTA Bottom Banner */}
      <section className="pb-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Transform Document Processing with Credify India
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Cut out manual data entry, raise document accuracy, and speed up digital onboarding with Credify India’s secure Document OCR API. Empower your business with intelligent document processing at a speed, security and scalability level.
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
