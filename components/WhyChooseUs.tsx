'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const heroFeatures = [
  {
    icon: '/icons/millions-of-verification.svg',
    title: 'Millions of Verification Checks Processed',
    description: 'We have conducted millions of verifications to help companies in their hiring process, team formation, and decision-making.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accent: 'from-[#001f7d] to-blue-600',
    stat: '10M+',
    statLabel: 'checks completed',
    statIcon: '✓',
  },
  {
    icon: '/icons/certified-for-security-quality.svg',
    title: 'Certified for Security & Quality',
    description: 'Our commitment to safeguarding information and delivering high-quality services is demonstrated by ISO 27001, ISO 9001, and SOC 2 certifications.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    accent: 'from-purple-500 to-violet-600',
    stat: 'SOC 2',
    statLabel: 'audited & certified',
    statIcon: '★',
  },
]

const gridFeatures = [
  {
    icon: '/icons/millions-of-verification.svg',
    title: 'Millions of Verification Checks Processed',
    description: 'We have conducted millions of verifications to help companies in their hiring process, team formation, and decision-making.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
  },
  {
    icon: '/icons/trusted-since.svg',
    title: 'Trusted Since 2015',
    description: 'Since 2015, Credify India has been delivering dependable background verification services, backed by real industry knowledge and processes that adapt to changing workforce needs.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
  },
  {
    icon: '/icons/technology-driven-verification.svg',
    title: 'Verification APIs',
    description: 'Automate onboarding and verification workflows through secure, scalable Credify India APIs that integrate seamlessly with your existing business applications.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accentLine: 'bg-amber-400',
  },
  {
    icon: '/icons/report-generation.svg',
    title: 'Technology Platform',
    description: 'Manage verification requests, API integrations, reports, and workflows through a centralized technology-driven platform.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    accentLine: 'bg-orange-400',
  },
  {
    icon: '/icons/certified-for-security-quality.svg',
    title: 'Certified for Security & Quality',
    description: 'Our commitment to safeguarding information, delivering high-quality services, and operating in a trustworthy manner is demonstrated by our certifications as an ISO 27001, ISO 9001, and SOC 2.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    accentLine: 'bg-purple-400',
  },
  {
    icon: '/icons/comprehensive-verification-solutions.svg',
    title: 'Comprehensive Verification Solutions',
    description: 'We offer comprehensive background verification for employees (including education, employment, and criminal checks), vendors, documents, and due diligence, all from one experienced partner.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    accentLine: 'bg-sky-400',
  },
  {
    icon: '/icons/faster-turnaround-time.svg',
    title: 'Faster Turnaround Time',
    description: 'Our team leverages technology-enabled workflows and experienced verification professionals to deliver accurate reports within optimized timelines without compromising quality.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accentLine: 'bg-emerald-400',
  },
  {
    icon: '/icons/experienced-verification-experts.svg',
    title: 'Experienced Verification Experts',
    description: 'We have established protocols and quality checks to ensure all reports are comprehensive, accurate, and valuable.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accentLine: 'bg-indigo-400',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative w-full bg-slate-50/70 py-10 md:py-14 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.025]">
        <svg width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/15 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Why Credify
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5"
          >
            Why Choose Credify India for Background Verification Services?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed mb-4"
          >
            Credify India is a reliable Background Verification Services partner, enabling businesses to hire confidently while ensuring secure, accurate, and compliant background checks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            We have completed millions of checks, hold strong international certifications, and have been in operation for nearly 10 years, providing reliable services that reduce hiring risk, enhance team quality, and support informed business decisions across various industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {heroFeatures.map((feature, i) => {
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group relative bg-white rounded-md border border-slate-100 p-7 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.accent}`} />
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.accent} opacity-[0.06] rounded-full blur-3xl group-hover:opacity-[0.1] transition-opacity duration-500`} />

                <div className="relative flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className={`w-14 h-14 rounded-md ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm`}>
                      <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-xl sm:text-2xl mb-3 leading-snug">{feature.title}</h3>
                    <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="flex-shrink-0 bg-gradient-to-br from-slate-50 to-white rounded-md px-6 py-5 border border-slate-100 text-center shadow-sm group-hover:shadow-md transition-shadow duration-300 min-w-[120px]">
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-none mb-1">{feature.stat}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{feature.statLabel}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {gridFeatures.map((feature, i) => {
            return (
              <motion.div
                key={feature.title}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group relative bg-white rounded-md border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className={`w-10 h-1 ${feature.accentLine} rounded-full mb-5 opacity-30 group-hover:opacity-100 group-hover:w-14 transition-all duration-300`} />

                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                  <img src={feature.icon} alt={feature.title} className="w-8.5 h-8.5 object-contain" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 leading-snug">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
