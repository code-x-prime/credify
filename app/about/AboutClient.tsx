'use client'

import React from 'react'
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Target,
  Eye,
  Lock,
  FileCheck,
  Users,
  Building2,
  PhoneCall,
  Sparkles,
  ShieldAlert,
  HeartHandshake,
  UserCheck,
  TrendingUp,
  Sliders,
  Check
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const verificationCoverage = [
  'Employee Background Verification',
  'Employment Verification',
  'Education Verification',
  'Criminal Background Checks',
  'Vendor Verification',
  'Due Diligence Services',
  'Document Verification',
  'UAN Verification',
  'Tenant Verification',
  'Driver Verification',
  'Credit Check Verification',
  'Drug Screening Verification',
  'Address Verification',
  'Court Record Verification',
  'Police Verification'
]

const certifications = [
  {
    title: 'ISO 27001 Certified',
    description: 'We use world-renowned information security systems that ensure that sensitive information is well protected throughout all verification projects.',
    icon: Lock,
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    title: 'ISO 9001 Certified',
    description: 'Our quality setup shows our commitment to using standard steps, delivering steady service, and continually improving how we run our verification offerings.',
    icon: Award,
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    title: 'SOC 2 Audited',
    description: 'Our SOC 2-checked operations prove that we focus on protected systems, managed processes, and careful care of client information.',
    icon: ShieldCheck,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
]

const corePrinciples = [
  {
    title: 'Integrity',
    description: 'Integrity shapes all the verifications we do. We ensure that all of these checks are conducted in a manner that is honest, transparent, and caring, allowing organizations to make a truly informed decision.',
    icon: ShieldCheck,
    accentBg: 'bg-blue-50 text-[#001f7d]',
  },
  {
    title: 'Confidentiality',
    description: 'Ensuring that information is kept safe is at the core of what we do. We use careful handling methods and secure steps to guard private details in every project we take on.',
    icon: Lock,
    accentBg: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Accountability',
    description: 'We fully own every verification request by using clear methods, staying in open contact, and providing services clients can count on.',
    icon: HeartHandshake,
    accentBg: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Excellence',
    description: 'We continually upgrade our verification approaches, daily operations, and quality standards to meet changing business needs and industry regulations.',
    icon: Award,
    accentBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Customer-Centric Approach',
    description: 'Each organization faces its own verification issues. We work directly with clients to understand their needs and develop customized solutions aligned with their business objectives.',
    icon: Users,
    accentBg: 'bg-sky-50 text-sky-600',
  },
  {
    title: 'Continuous Improvement',
    description: 'The business landscape is constantly evolving, and we evolve with it. We continually look to improve our processes, use new technology, and innovate our operations to add more value to our clients than ever before.',
    icon: TrendingUp,
    accentBg: 'bg-indigo-50 text-indigo-600',
  },
]

export default function AboutClient() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* 🌟 HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={14} className="text-orange-500" />
                <span>Established In 2015</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building Trust Through Every Verification{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">
                  Since 2015
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Credify India, we help companies build trust with dependable background checks, due diligence, and business verification services. We combine skilled team members with clear processes and smart tech systems to help businesses choose wisely, feel more confident in their decisions, and maintain top levels of protection, quality, and smooth daily operations.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2.5 bg-[#001f7d] hover:bg-[#f97316] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,31,125,0.25)] hover:scale-[1.02]"
                >
                  Request a Demo
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#001f7d]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Credify India Integrity</h3>
                    <p className="text-xs text-slate-400">10+ Years Verification Leadership</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'ISO 27001 Certified', status: 'Active' },
                    { label: 'ISO 9001 Certified', status: 'Active' },
                    { label: 'SOC 2 Audited', status: 'Compliant' },
                    { label: 'Verification Requests', status: 'Millions Processed' },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-xs sm:text-sm font-medium">
                      <span className="text-slate-700">{row.label}</span>
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        <CheckCircle2 size={12} />
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Pan-India Coverage</span>
                  <span className="font-bold text-blue-700">100% Secure Data</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 WHO WE ARE SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                Who We Are
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Empowering Organizations with Verified Intelligence
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India is a reliable background verification and due diligence firm that helps organizations make smart hiring, onboarding, and business decisions through solid verification options. We started in 2015 and have partnered with organizations across many fields to simplify verification while protecting workforce quality, daily efficiency, and informed decisions.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our work covers employee background verification, employment verification, education verification, criminal background checks, vendor verification, due diligence, document verification, UAN verification, tenant verification, driver verification, and many other specific verification solutions. After handling millions of checks, we know how important it is to provide organized, reliable, and secure services that fit each company&apos;s specific needs.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Credify India is an ISO 27001-certified, ISO 9001-certified, and SOC 2-audited company that adheres to international standards in protecting data, quality management, and running operations properly. Combined with technology-driven measures, our experienced verification experts work directly with organizations to deliver reliable outcomes, increase hiring confidence, and support future business success.
              </p>
            </div>

            {/* Coverage Grid */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-orange-500" />
                Comprehensive Solutions Portfolio
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our verification coverage encompasses 15+ specialized verification services tailored for enterprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {verificationCoverage.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                    <span className="w-1.5 h-1.5 bg-[#001f7d] rounded-full flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 CERTIFICATIONS SECTION */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Built on Trust, Security & Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Globally recognized certifications reflecting our commitment to security and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => {
              const IconComp = cert.icon
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-6 ${cert.badgeColor}`}>
                    <IconComp size={16} />
                    <span>{cert.title}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 🔹 MISSION & VISION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-slate-900 via-[#001f7d] to-slate-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400 mb-6 border border-white/10">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Our Mission</h2>
                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                  Our mission is to provide strong verification and due diligence solutions that support smart hiring, safe business relationships, and informed decision-making for organizations. We are dedicated to making verification as simple as possible, while maintaining rigorous security, quality, and honesty standards through organized processes, proficient personnel, and tech-assisted workflows.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 border border-white/10">
                  <Eye size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Our Vision</h2>
                <p className="text-sm sm:text-base text-orange-50/90 leading-relaxed">
                  Our vision is to grow into one of the top trusted verification and due diligence partners across the globe by offering reliable, scalable, and secure solutions. We aim to build a world where companies can form trusted teams and better partnerships based on checked facts and responsible business practices.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 CORE PRINCIPLES */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Principles Behind Every Verification
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The core values that guide our operations, client relationships, and quality checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {corePrinciples.map((principle, idx) => {
              const IconComp = principle.icon
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${principle.accentBg} flex items-center justify-center mb-6 shadow-sm`}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">{principle.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 🔹 CTA BOTTOM BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001f7d] via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Your Trusted Background Verification Partner Starts Here
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base">
                Reach out to our specialists to discover the best verification solution for your organization.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
