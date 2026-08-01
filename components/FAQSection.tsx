'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Plus, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useDemoModal } from '@/contexts/DemoModalContext'

export interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  badgeText?: string
  faqs?: FAQItem[]
  id?: string
}

const defaultFaqs: FAQItem[] = [
  {
    q: 'Do you provide Verification APIs?',
    a: 'Yes. Along with background verification services, Credify India offers verification APIs that help businesses automate identity verification, KYC, compliance, onboarding, and other verification workflows.',
  },
  {
    q: 'Can we use both APIs and verification services together?',
    a: 'Absolutely. Organizations can combine our verification services with API integrations to create a seamless verification ecosystem for hiring, customer onboarding, and compliance.',
  },
  {
    q: 'What checks are included in a background verification?',
    a: 'It can include employment, education, address, criminal records, court records, document checks, UAN verification, credit checks, and other custom requirements.',
  },
  {
    q: 'How long does the background verification process take?',
    a: "Depends on the package, types of checks, availability of documents, and the speed of the sources' response.",
  },
  {
    q: 'Can verification services be customized?',
    a: 'Yes. We create custom solutions based on your policies, industry, job roles, and specific business needs.',
  },
  {
    q: 'Do candidates need to provide consent?',
    a: 'Yes. We start verification only after getting proper authorization and the needed information.',
  },
  {
    q: 'Which industries use background verification services?',
    a: 'Many sectors use these services, including IT, BFSI, healthcare, manufacturing, retail, logistics, staffing, education, hospitality, and more.',
  },
  {
    q: 'Why choose Credify India for background verification?',
    a: "Since 2015, we’ve completed millions of checks, hold important certifications, work with experienced professionals, and use modern workflows to deliver trusted verification solutions.",
  },
]

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about verification services and how Credify can help your organization.',
  badgeText = 'FAQ',
  faqs = defaultFaqs,
  id = 'faq',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { openDemoModal } = useDemoModal()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className="relative w-full bg-white pt-10 md:pt-14 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ─── Left Column — Sticky Header ─── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              {badgeText}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8"
            >
              {subtitle}
            </motion.p>

            {/* Still have questions? mini-CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-blue-50/70 border border-blue-100 rounded-md p-5 mb-6"
            >
              <p className="text-sm font-semibold text-slate-800 mb-1">Still have questions?</p>
              <p className="text-xs text-slate-500 mb-3">Our technical specialists are happy to help.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001f7d] hover:text-blue-700 transition-colors"
              >
                Talk to Our Experts
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Premium FAQ support illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:block relative rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/40 p-4 overflow-hidden shadow-sm"
            >
              <img
                src="/images/faq_support_illustration.png"
                alt="FAQ Support"
                className="w-full h-auto object-contain rounded-xl"
              />
            </motion.div>
          </div>

          {/* ─── Right Column — Accordion ─── */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: Math.min(0.2 + i * 0.05, 0.6) }}
                  >
                    <div
                      className={`bg-white rounded-md border transition-all duration-300 overflow-hidden ${isOpen
                        ? 'border-blue-200/60 shadow-[0_4px_20px_rgba(0,31,125,0.08)]'
                        : 'border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5'
                        }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex items-center gap-4 px-6 py-5 text-left min-h-[64px]"
                        aria-expanded={isOpen}
                      >
                        {/* Plus / Minus icon */}
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                          ? 'bg-[#001f7d] text-white rotate-0'
                          : 'bg-slate-100 text-slate-400'
                          }`}>
                          <Plus
                            size={16}
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                          />
                        </span>

                        <span className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${isOpen ? 'text-[#001f7d]' : 'text-slate-800'
                          }`}>
                          {faq.q}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pl-[4.5rem]">
                              <div className="relative pl-4 border-l-2 border-blue-200">
                                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
