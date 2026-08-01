'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: 1,
    title: 'Verification Request',
    description: "Send us the request with the candidate's or business's details to start the process.",
    icon: '/icons/verification-request.svg',
    gradient: 'from-rose-500 to-red-600',
    cardBg: 'bg-gradient-to-br from-rose-50/80 to-red-50/40',
    hoverBorder: 'hover:border-rose-200',
    accentLine: 'bg-rose-400',
  },
  {
    number: 2,
    title: 'Consent & Information Collection',
    description: 'We get the necessary permissions and gather the required documents and information.',
    icon: '/icons/consent-information-collection.svg',
    gradient: 'from-amber-500 to-orange-500',
    cardBg: 'bg-gradient-to-br from-amber-50/80 to-orange-50/40',
    hoverBorder: 'hover:border-amber-200',
    accentLine: 'bg-amber-400',
  },
  {
    number: 3,
    title: 'Verification Execution',
    description: 'Our specialists verify the details using the appropriate methods and sources to meet your needs.',
    icon: '/icons/verification-execution.svg',
    gradient: 'from-[#001f7d] to-[#001552]',
    cardBg: 'bg-gradient-to-br from-blue-50/80 to-blue-100/40',
    hoverBorder: 'hover:border-blue-200',
    accentLine: 'bg-blue-400',
  },
  {
    number: 4,
    title: 'Quality Review',
    description: 'Every result goes through a detailed quality check for accuracy and completeness.',
    icon: '/icons/quality-review.svg',
    gradient: 'from-sky-500 to-blue-600',
    cardBg: 'bg-gradient-to-br from-sky-50/80 to-blue-50/40',
    hoverBorder: 'hover:border-sky-200',
    accentLine: 'bg-sky-400',
  },
  {
    number: 5,
    title: 'Report Generation',
    description: 'We have documented the results in a clear, easy-to-read report, including observations.',
    icon: '/icons/report-generation.svg',
    gradient: 'from-violet-500 to-purple-600',
    cardBg: 'bg-gradient-to-br from-violet-50/80 to-purple-50/40',
    hoverBorder: 'hover:border-violet-200',
    accentLine: 'bg-violet-400',
  },
  {
    number: 6,
    title: 'Secure Report Delivery',
    description: 'The final report is sent securely to the right people so you can move forward with confidence.',
    icon: '/icons/secure-report-delivery.svg',
    gradient: 'from-orange-500 to-orange-600',
    cardBg: 'bg-gradient-to-br from-orange-50/80 to-orange-100/40',
    hoverBorder: 'hover:border-orange-200',
    accentLine: 'bg-orange-400',
  },
]

export default function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      ref={ref}
      className="relative w-full bg-white py-10 md:py-14 overflow-hidden"
    >
      {/* Subtle background dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #001f7d 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            How It Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5"
          >
            Our Background Verification Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            Credify India follows a clear background verification process to deliver accurate, secure, and timely results while maintaining consistency and transparency at every step.
          </motion.p>
        </div>

        {/* ─── Desktop Horizontal Timeline ─── */}
        <div className="hidden lg:block relative">
          {/* Animated connecting line */}
          <div className="absolute top-[32px] left-[calc(8.33%+30px)] right-[calc(8.33%+30px)] h-[3px] bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="h-full bg-gradient-to-r from-blue-400 via-orange-400 to-blue-600 rounded-full origin-left"
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle with icon + number badge */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`w-[64px] h-[64px] rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.12)] group-hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-shadow duration-300 ring-4 ring-white`}
                    >
                      <img src={step.icon} alt={step.title} className="w-[42px] h-[42px] object-contain brightness-0 invert" />
                    </motion.div>
                    {/* Step number badge */}
                    <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-white text-[11px] font-extrabold text-slate-700 flex items-center justify-center shadow-md border border-slate-100">
                      {step.number}
                    </span>
                  </div>

                  {/* Step card */}
                  <div className={`w-full rounded-md border border-slate-100 p-5 ${step.cardBg} ${step.hoverBorder} transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                    {/* Accent line top */}
                    <div className={`w-8 h-1 ${step.accentLine} rounded-full mx-auto mb-3 opacity-40 group-hover:opacity-100 group-hover:w-12 transition-all duration-300`} />
                    <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ─── Mobile/Tablet Vertical Timeline ─── */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[3px] bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="w-full bg-gradient-to-b from-blue-400 via-orange-400 to-blue-600 rounded-full origin-top"
            />
          </div>

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  className="flex gap-5 items-start group"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-[48px] h-[48px] rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.1)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 ring-3 ring-white`}>
                      <img src={step.icon} alt={step.title} className="w-[32px] h-[32px] object-contain brightness-0 invert" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[9px] font-extrabold text-slate-700 flex items-center justify-center shadow-sm border border-slate-100">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-md border border-slate-100 p-5 ${step.cardBg} ${step.hoverBorder} transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5`}>
                    {/* Accent line */}
                    <div className={`w-8 h-1 ${step.accentLine} rounded-full mb-3 opacity-40 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
                    <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
