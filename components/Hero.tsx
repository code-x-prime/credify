'use client'

import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDemoModal } from '@/contexts/DemoModalContext'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const verificationItems = [
  { label: 'Employment Verification', sublabel: 'TCS · 2019–2023', status: 'Passed', icon: '/icons/employment-verification.svg' },
  { label: 'Education Verification', sublabel: 'IIT Delhi · B.Tech CSE', status: 'Passed', icon: '/icons/education-verification.svg' },
  { label: 'Address Verification', sublabel: 'Mumbai, Maharashtra', status: 'Passed', icon: '/icons/address-verification.svg' },
  { label: 'Criminal Record Check', sublabel: 'National Database', status: 'Clear', icon: '/icons/criminal-background-check.svg' },
]

export default function Hero() {
  const { openDemoModal } = useDemoModal()
  return (
    <section className="relative w-full bg-white min-h-[90vh] flex items-center pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #001f7d 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-[-8%] right-[-10%] w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] bg-gradient-to-bl from-blue-200/30 via-blue-100/25 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[-8%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-tr from-orange-100/20 via-[#e6ecff]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* ─── Main content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 max-w-2xl mx-auto lg:mx-0 w-full flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 border border-blue-200/70 rounded-full text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#001f7d] mb-6 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
              India&apos;s #1 Background Verification Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            India&apos;s Trusted Background Verification &amp;{' '}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #001f7d 0%, #ff7900 45%, #f97316 100%)',
                }}
              >
                Verification API Platform
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 9C20 2 40 2 60 7C80 12 100 12 120 7C140 2 160 2 180 7C190 9 195 9 199 7"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8"
          >
            Strengthen hiring, accelerate customer onboarding, and simplify compliance with comprehensive Background Verification Services and secure Verification APIs for KYC, identity verification, business verification, risk intelligence, and much more.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center mb-8">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2.5 bg-[#001f7d] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-[0_4px_20px_rgba(0,31,125,0.3)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.4)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001f7d]"
            >
              Request a Demo
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:+919311463901"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-8 py-4 rounded-full hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all duration-300 shadow-sm hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001f7d]"
            >
              <Phone size={15} className="text-orange-500" />
              Call +91-9311463901
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            {[
              { icon: '/icons/certified-for-security-quality.svg', label: 'ISO 27001' },
              { icon: '/icons/certified-for-security-quality.svg', label: 'ISO 9001' },
              { icon: '/icons/certified-for-security-quality.svg', label: 'SOC 2 Audited' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-full text-xs font-semibold text-slate-600 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <img src={badge.icon} alt={badge.label} className="w-5 h-5 object-contain" />
                {badge.label}
              </div>
            ))}
            <span className="w-px h-4 bg-slate-200 mx-1 hidden sm:block" />
            <span className="text-xs font-semibold text-slate-400">
              Trusted by 10,000+ companies
            </span>
          </motion.div>
        </motion.div>

        {/* ─── Desktop mockup composition ─── */}
        <div className="hidden lg:block lg:col-span-5 w-full pointer-events-none">
          <div className="relative w-full aspect-[4/3] max-w-[480px] xl:max-w-[540px] mx-auto">
            {/* Blurred gradient orb behind card */}
            <div className="absolute -inset-16 bg-gradient-to-br from-blue-300/20 via-orange-200/15 to-blue-200/10 rounded-full blur-[90px]" />

            {/* ═══ Main Report Card ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-white/95 backdrop-blur-sm rounded-md shadow-[0_24px_64px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] border border-slate-200/60 p-6 sm:p-7 w-full max-w-[420px] ml-auto overflow-hidden"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-[#60a5fa] to-blue-500" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#001f7d] to-[#001552] flex items-center justify-center shadow-[0_4px_14px_rgba(0,31,125,0.35)]">
                  <img src="/icons/report-generation.svg" alt="Report" className="w-7 h-7 object-contain brightness-0 invert" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 leading-tight">Verification Report</p>
                  <p className="text-[11px] text-slate-400 font-medium">Credify™</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Verified</span>
                </div>
              </div>

              {/* Candidate info */}
              <div className="relative bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-md p-4 mb-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    RS
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Candidate</p>
                    <p className="text-sm font-bold text-slate-800">Rahul Sharma</p>
                    <p className="text-[11px] text-slate-400">Senior Software Engineer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-semibold text-slate-300 uppercase tracking-wider">Report</p>
                    <p className="text-[10px] font-bold text-slate-500">CS-2025-0847</p>
                  </div>
                </div>
              </div>

              {/* Verification items */}
              <div className="space-y-2">
                {verificationItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.08 }}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200/60 transition-colors duration-200"
                  >
                    <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <img src={item.icon} alt={item.label} className="w-[18px] h-[18px] object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-semibold text-slate-700 leading-tight">{item.label}</p>
                      <p className="text-[10px] text-slate-400 truncate">{item.sublabel}</p>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center text-[8px] font-bold">i</span>
                  Generated: Jan 2025
                </span>
                <span className="text-[10px] text-slate-400 font-medium">2 of 4 checks shown</span>
              </div>
            </motion.div>

            {/* ═══ Floating stat card: Accuracy ═══ */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 xl:-left-8 z-20 bg-white/95 backdrop-blur-sm rounded-md px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.04)] border border-slate-200/60"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_4px_12px_rgba(0,31,125,0.3)]">
                  <span className="text-white text-sm font-bold">98</span>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900 leading-none">98%</p>
                  <p className="text-[10px] font-semibold text-slate-400 mt-0.5">Accuracy Rate</p>
                </div>
              </div>
            </motion.div>

            {/* ═══ Floating stat card: Turnaround ═══ */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-2 left-6 xl:left-2 z-20 bg-white/95 backdrop-blur-sm rounded-md px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.04)] border border-slate-200/60"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_4px_12px_rgba(245,158,11,0.3)]">
                  <img src="/icons/faster-turnaround-time.svg" alt="TAT" className="w-7 h-7 object-contain brightness-0 invert" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Fast Turnaround</p>
                  <p className="text-[10px] text-slate-400">24–48 hour TAT</p>
                </div>
              </div>
            </motion.div>

            {/* ═══ Floating badge: ISO ═══ */}
            <motion.div
              animate={{ y: [-4, 5, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
              className="absolute top-[32%] -right-6 xl:-right-14 z-20 bg-white/95 backdrop-blur-sm rounded-md px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.04)] border border-slate-200/60"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_3px_10px_rgba(0,31,125,0.25)]">
                  <img src="/icons/certified-for-security-quality.svg" alt="ISO" className="w-6.5 h-6.5 object-contain brightness-0 invert" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">ISO Certified</p>
                  <p className="text-[9px] text-slate-400 font-medium">27001 · 9001</p>
                </div>
              </div>
            </motion.div>

            {/* ═══ Floating mini card: User count ═══ */}
            <motion.div
              animate={{ y: [3, -4, 3] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-[18%] -right-4 xl:-right-10 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-2.5 shadow-[0_10px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.03)] border border-slate-200/60"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-white" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-600">10K+</p>
                  <p className="text-[8px] text-slate-400">Verified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── Mobile-only visual composition ─── */}
        <div className="lg:hidden lg:col-span-5 w-full mt-12 relative max-w-[400px] mx-auto">
          <div className="relative aspect-[4/3]">
            {/* Blurred gradient orb */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-300/20 via-orange-200/15 to-transparent rounded-full blur-[60px]" />

            {/* Main report card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative z-10 bg-white/95 backdrop-blur-sm rounded-md shadow-[0_16px_48px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] border border-slate-200/60 p-5 overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-[#60a5fa] to-blue-500" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#001f7d] to-[#001552] flex items-center justify-center shadow-[0_3px_10px_rgba(0,31,125,0.3)]">
                  <img src="/icons/report-generation.svg" alt="Report" className="w-6 h-6 object-contain brightness-0 invert" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 leading-tight">Verification Report</p>
                  <p className="text-[10px] text-slate-400 font-medium">Credify™</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold text-blue-700 uppercase tracking-wider">Verified</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-50 to-slate-50/50 rounded-xl p-3 mb-3 border border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                    RS
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Candidate</p>
                    <p className="text-[13px] font-bold text-slate-800">Rahul Sharma</p>
                    <p className="text-[10px] text-slate-400">Senior Software Engineer</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                {[
                  { label: 'Employment Verification', icon: '/icons/employment-verification.svg' },
                  { label: 'Education Verification', icon: '/icons/education-verification.svg' },
                  { label: 'Address Verification', icon: '/icons/address-verification.svg' },
                  { label: 'Criminal Record Check', icon: '/icons/criminal-background-check.svg' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + idx * 0.06 }}
                    className="flex items-center gap-2.5 py-2 px-2.5 rounded-md bg-white border border-slate-100"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <img src={item.icon} alt={item.label} className="w-[15px] h-[15px] object-contain" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 flex-1">{item.label}</span>
                    <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">
                      {idx < 3 ? 'Passed' : 'Clear'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 z-20 bg-white/95 backdrop-blur-sm rounded-md px-4 py-3 shadow-[0_10px_32px_rgba(0,0,0,0.1)] border border-slate-200/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm">
                  <span className="text-white text-[10px] font-bold">98</span>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900 leading-none">98%</p>
                  <p className="text-[9px] font-semibold text-slate-400">Accuracy</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-3 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-[0_10px_32px_rgba(0,0,0,0.1)] border border-slate-200/60"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <img src="/icons/certified-for-security-quality.svg" alt="ISO" className="w-[15px] h-[15px] object-contain brightness-0 invert" />
                </div>
                <span className="text-[10px] font-bold text-slate-800">ISO Certified</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
