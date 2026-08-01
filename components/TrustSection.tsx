'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useDemoModal } from '@/contexts/DemoModalContext'

function useCountUp(end: number, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isActive) return
    let start = 0
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, isActive])
  return count
}

const stats = [
  { value: 10, suffix: 'M+', label: 'Checks Completed' },
  { value: 9, suffix: '+', label: 'Years in Business' },
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 100, suffix: '%', label: 'Confidential' },
]

const industries = [
  { icon: '/icons/information-technology.svg', label: 'IT & Tech' },
  { icon: '/icons/banking-financial-services.svg', label: 'BFSI' },
  { icon: '/icons/healthcare.svg', label: 'Healthcare' },
  { icon: '/icons/retail-e-commerce.svg', label: 'Retail & E-com' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
}

function StatBlock({ stat, index, isInView }: { stat: (typeof stats)[0]; index: number; isInView: boolean }) {
  const count = useCountUp(stat.value, 2000, isInView)
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="flex flex-col items-center text-center px-4 py-3"
    >
      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-none tracking-tight">
        {count}{stat.suffix}
      </p>
      <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-2">{stat.label}</p>
    </motion.div>
  )
}

export default function TrustSection() {
  const { openDemoModal } = useDemoModal()
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' })

  return (
    <section
      ref={ref}
      className="relative w-full bg-blue-50/20 py-12 md:py-16 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #001f7d 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow blobs like in demo.tsx */}
      <div className="absolute -z-10 w-[450px] h-[450px] -top-10 -left-20 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -z-10 w-[400px] h-[400px] bottom-10 right-0 rounded-full bg-orange-200/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Why Verification Matters
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Trusted Background Verification Services for Every Business
          </motion.h2>
        </div>

        {/* Demo-style 3-Column Layout Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-16">
          {/* Column 1 & 2: Large Showcase Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 relative rounded-3xl bg-white border border-slate-200/50 p-3 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
              {/* Image */}
              <Image
                src="/images/verification_dashboard_showcase.png"
                alt="Verification Dashboard Showcase"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                width={800}
                height={500}
                priority
              />
              {/* Overlay shadow info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-100 rounded-xl p-4 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-bold text-slate-800 leading-tight mb-1">
                  Technology-Driven Verification
                </p>
                <p className="text-xs text-slate-500 leading-normal">
                  In addition to verification services, businesses can leverage our API platform to automate verification workflows, simplify digital onboarding, and integrate real-time verification capabilities into their existing systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Text & Highlight block with small illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-1 flex flex-col"
          >
            {/* Small image container */}
            <div className="relative rounded-2xl bg-white border border-slate-200/50 p-2 shadow-sm hover:shadow-md transition-shadow overflow-hidden group mb-6">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src="/images/verification_report_stamp.png"
                  alt="Verified Report Stamp"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Hiring isn’t just about reading resumes and doing interviews. You need verified facts. Credify India offers comprehensive Background Verification Services that help companies verify employment history, education, addresses, criminal records (where applicable), identity documents, vendor details, and other important information.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Our standard workflows are designed to deliver accurate, quick, and consistent reports while keeping all information private.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Whether you’re hiring new employees, adding vendors, or doing due diligence, businesses trust Credify India for flexible verification solutions that lead to better decisions, fewer risks, and stronger teams.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                In addition to verification services, businesses can leverage our API platform to automate verification workflows, simplify digital onboarding, and integrate real-time verification capabilities into their existing systems.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#001f7d] hover:text-[#f97316] transition-all"
              >
                Schedule a Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16 md:divide-x divide-slate-200/60 border-y border-slate-200/40 bg-white/40 rounded-xl py-2 shadow-sm"
        >
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} index={i} isInView={statsInView} />
          ))}
        </div>

        {/* Logo / Industry strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Trusted by teams across industries
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {industries.map((ind) => {
              return (
                <div key={ind.label} className="flex items-center gap-2 text-slate-300 hover:text-slate-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center">
                    <img src={ind.icon} alt={ind.label} className="w-[26px] h-[26px] object-contain opacity-70" />
                  </div>
                  <span className="text-sm font-medium text-slate-500">{ind.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
