'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, PhoneCall, Code2, Zap, CheckCircle2 } from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

export interface ApiHeroProps {
  badgeText?: string
  title: string
  highlightTitle?: string
  subtitle: string
  features?: string[]
}

export default function ApiHero({
  badgeText = 'Developer API',
  title,
  highlightTitle,
  subtitle,
  features = ['Developer Friendly', 'Real-time Response', 'ISO 27001 & SOC 2 Security'],
}: ApiHeroProps) {
  const { openDemoModal } = useDemoModal()

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-slate-900 via-[#001f7d] to-slate-950 text-white overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Code2 size={14} />
              <span>{badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {title}{' '}
              {highlightTitle && (
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {highlightTitle}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
                  <CheckCircle2 size={13} className="text-orange-400" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-[#f97316] hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Request a Demo
                <ArrowRight size={18} />
              </button>
              <button
                onClick={openDemoModal}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <PhoneCall size={18} />
                Talk to Our Experts
              </button>
            </div>
          </div>

          {/* Right Visual / Code Block */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950/80 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Zap size={12} className="text-orange-400" />
                  POST /v1/aadhaar/verify
                </div>
              </div>

              {/* Code Snippet Display */}
              <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto p-2">
                <code>{`{
  "status": "success",
  "response_code": 200,
  "data": {
    "aadhaar_number": "XXXXXXXX8910",
    "verification_status": "VERIFIED",
    "name": "REDACTED CONFIDENTIAL",
    "is_active": true,
    "timestamp": "${new Date().toISOString()}"
  },
  "security": "ISO_27001_ENCRYPTED"
}`}</code>
              </pre>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  SOC 2 & ISO 27001 Compliant
                </span>
                <span className="text-emerald-400 font-mono">Response: 180ms</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
