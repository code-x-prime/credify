'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

const certifications = [
  { icon: '/icons/certified-for-security-quality.svg', title: 'ISO 27001', subtitle: 'Information Security', color: 'text-[#001f7d]', bg: 'bg-blue-50' },
  { icon: '/icons/certified-for-security-quality.svg', title: 'ISO 9001', subtitle: 'Quality Management', color: 'text-[#001f7d]', bg: 'bg-blue-50' },
  { icon: '/icons/certified-for-security-quality.svg', title: 'SOC 2 Audited', subtitle: 'Security & Compliance', color: 'text-[#001f7d]', bg: 'bg-blue-50' },
]

const stats = [
  { value: '10M+', label: 'Checks Completed' },
  { value: '9+', label: 'Years of Trust' },
  { value: '500+', label: 'Enterprise Clients' },
]

const highlights = [
  'ISO 27001, ISO 9001 & SOC 2 certified',
  'Technology-driven verification workflows',
  'Experienced industry professionals',
  'Tailored solutions for every sector',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-slate-50/60 py-10 md:py-14 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/40 via-blue-50/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* LEFT: Visual Composition */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Colored blob behind */}
              <div className="absolute -inset-10 bg-gradient-to-br from-blue-200/25 via-orange-100/20 to-transparent rounded-md blur-[60px] pointer-events-none" />

              {/* Main card */}
              <div className="relative bg-white rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
                {/* Top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#001f7d] via-blue-400 to-[#f97316]" />

                <div className="p-6 sm:p-8">
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#001f7d] to-[#001552] flex items-center justify-center shadow-[0_4px_16px_rgba(0,31,125,0.3)]">
                      <img src="/icons/certified-for-security-quality.svg" alt="Security" className="w-10 h-10 object-contain brightness-0 invert" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">Credify</h3>
                      <p className="text-xs text-slate-400 font-medium">India's Trusted Verification Partner</p>
                    </div>
                  </div>

                  {/* Highlight list */}
                  <div className="space-y-3 mb-6">
                    {highlights.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-[18px] h-[18px] text-[#001f7d] font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-600 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#001f7d] cursor-pointer group/link">
                    <span className="group-hover/link:underline">Learn more about us</span>
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>

              {/* Floating stat card: Since 2015 */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-3 sm:right-4 z-20 bg-white rounded-md px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.1)] border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm">
                    <img src="/icons/trusted-since.svg" alt="Calendar" className="w-7.5 h-7.5 object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-slate-900 leading-none">9+</p>
                    <p className="text-[11px] font-semibold text-slate-400 mt-0.5">Years of Trust</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating cert badge card */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute top-[96px] -left-6 sm:-left-12 z-20 bg-white rounded-md px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.1)] border border-slate-100"
              >
                <div className="flex flex-col gap-2">
                  {['ISO 27001', 'ISO 9001', 'SOC 2'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center">
                        <img src="/icons/certified-for-security-quality.svg" alt="Shield" className="w-[18px] h-[18px] object-contain" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-600">{badge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#001f7d]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d]">
                About Credify
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-slate-900 leading-tight">
              Trusted Verification Partner Since 2015
            </h2>

            {/* Split paragraphs */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Since 2015, Credify has been a reliable name in Background Verification Services. We help organizations make smart hiring and business decisions by thoroughly checking key details. Our solutions are designed to verify critical data while ensuring security and compliance with standards.
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              As an ISO 27001-certified, ISO 9001-certified, and SOC 2 Audited company, we are committed to information security, quality management, and operational excellence. Our experienced verification professionals leverage technology-driven workflows to deliver reliable verification solutions tailored to the unique requirements of organizations across diverse industries.
            </p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-slate-100 px-4 py-4 text-center sm:text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Certification badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-1"
            >
              {certifications.map((cert, i) => {
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-blue-200/60 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    <div className={`w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center`}>
                      <img src={cert.icon} alt={cert.title} className="w-[18px] h-[18px] object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-none">{cert.title}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{cert.subtitle}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
