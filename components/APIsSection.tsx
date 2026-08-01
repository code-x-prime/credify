'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const apis = [
  {
    icon: '/icons/identity-verification-api.svg',
    title: 'Identity Verification APIs',
    desc: 'Instantly verify customer identities to enable secure onboarding and reduce identity fraud.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
    href: '/identity-verification-api',
  },
  {
    icon: '/icons/kyc-api.svg',
    title: 'KYC APIs',
    desc: 'Automate KYC processes with fast, accurate identity verification and compliance workflows.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    accentLine: 'bg-purple-400',
    href: '/kyc-api',
  },
  {
    icon: '/icons/business-verification-api.svg',
    title: 'Business Verification APIs',
    desc: 'Verify business credentials and registration details for secure partnerships and regulatory compliance.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accentLine: 'bg-amber-400',
    href: '/business-verification-api',
  },
  {
    icon: '/icons/pan-verification-api.svg',
    title: 'PAN Verification API',
    desc: 'Validate PAN details instantly to support customer verification and financial compliance processes.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accentLine: 'bg-emerald-400',
    href: '/pan-verification-api',
  },
  {
    icon: '/icons/aadhaar-verification-api.svg',
    title: 'Aadhaar Verification API',
    desc: 'Enable secure Aadhaar-based identity verification for faster customer onboarding and authentication.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    accentLine: 'bg-orange-400',
    href: '/aadhaar-verification-api',
  },
  {
    icon: '/icons/gst-verification-api.svg',
    title: 'GST Verification API',
    desc: 'Verify GST registration details to simplify vendor onboarding and business verification.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    accentLine: 'bg-sky-400',
    href: '/gst-verification-api',
  },
  {
    icon: '/icons/bank-account-verification.svg',
    title: 'Bank Account Verification API',
    desc: 'Confirm bank account ownership and details for secure financial transactions and payouts.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    accentLine: 'bg-rose-400',
    href: '/bank-account-verification-api',
  },
  {
    icon: '/icons/uan-verification.svg',
    title: 'UAN Verification API',
    desc: 'Validate employment-related UAN information to support workforce verification and HR processes.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accentLine: 'bg-indigo-400',
    href: '/uan-verification',
  },
  {
    icon: '/icons/document-ocr-api.svg',
    title: 'Document OCR API',
    desc: 'Extract accurate data from documents automatically, eliminating manual data entry efforts.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    accentLine: 'bg-violet-400',
    href: '/document-verification',
  },
  {
    icon: '/icons/face-match-api.svg',
    title: 'Face Match API',
    desc: 'Compare facial images securely to strengthen identity verification and fraud prevention.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    accentLine: 'bg-teal-400',
    href: '/face-match-api',
  },
  {
    icon: '/icons/liveness-detection-api.svg',
    title: 'Liveness Detection API',
    desc: 'Detect spoofing attempts by confirming genuine user presence during identity verification.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    accentLine: 'bg-pink-400',
    href: '/liveness-detection-api',
  },
  {
    icon: '/icons/risk-intelligence-api.svg',
    title: 'Risk Intelligence APIs',
    desc: 'Generate actionable risk insights to strengthen fraud detection and smarter business decisions.',
    color: 'text-red-600',
    bg: 'bg-red-50',
    accentLine: 'bg-red-400',
    href: '/risk-intelligence-api',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
  }),
}

export default function APIsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="apis"
      ref={ref}
      className="relative w-full bg-white py-10 md:py-14 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #001f7d 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/20 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            APIs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5"
          >
            Automate Verification with Secure & Scalable APIs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            Integrate real-time verification capabilities into your applications with our secure, scalable API platform designed for modern businesses.
          </motion.p>
        </div>

        {/* API Platform Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-3xl bg-white border border-slate-200/50 p-3 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group mb-10 md:mb-12"
        >
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-50">
            <Image
              src="https://pikaso.cdnpk.net/private/production/5048955693/render.png?token=exp=1785888000~hmac=00d742deefce902ebf011d88a816f58ad10b723362382a3c910e2baa8405cb43"
              alt="Credify API Platform - Secure Verification APIs"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
              width={1200}
              height={675}
              priority
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {apis.map((api, i) => {
            return (
              <motion.div
                key={api.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group relative bg-white rounded-md border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-1 w-full ${api.accentLine} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

                <Link href={api.href} className="block mt-4">
                  <div className={`w-12 h-12 rounded-xl ${api.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    <img src={api.icon} alt={api.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 leading-snug group-hover:text-[#001f7d] transition-colors">{api.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{api.desc}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: '12+', label: 'API Products' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 2s', label: 'Avg Response' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">{stat.value}</p>
              <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
