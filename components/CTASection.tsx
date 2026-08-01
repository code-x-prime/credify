'use client'

import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useDemoModal } from '@/contexts/DemoModalContext'
import Image from 'next/image'

export default function CTASection() {
  const { openDemoModal } = useDemoModal()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant card container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative rounded-md bg-[#001f7d] overflow-hidden"
        >
          {/* Decorative blurred orbs */}
          <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] bg-blue-400/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-60px] right-[-40px] w-[250px] h-[250px] bg-orange-400/10 rounded-full blur-[70px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Dot-grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Text & Buttons */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                Get in Touch
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight mb-6 max-w-2xl"
              >
                Build a Trusted Workforce &amp; Smarter Digital Onboarding
              </motion.h2>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-blue-100/70 text-sm sm:text-base mb-10 max-w-xl leading-relaxed"
              >
                Whether you need comprehensive background verification services or API-powered verification for digital onboarding, Credify India delivers secure, scalable, and technology-driven solutions tailored to your business.
              </motion.p>

              {/* CTA Button with glow pulse */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <button
                  onClick={openDemoModal}
                  className="group relative inline-flex items-center gap-2.5 bg-white text-[#001f7d] text-sm sm:text-base font-bold px-10 py-4.5 rounded-full transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {/* Animated glow ring */}
                  <span className="absolute inset-0 rounded-full bg-white/20 animate-[ping-soft_2.5s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
                  <span className="relative z-10">Schedule a Consultation</span>
                  <ArrowRight size={18} strokeWidth={2.2} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </motion.div>

              {/* Trust microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xs text-blue-200/40 font-medium"
              >
                No commitment · Response within 24 hours · Free consultation
              </motion.p>
            </div>

            {/* Right Column: Generated Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-3 overflow-hidden flex items-center justify-center shadow-2xl"
              >
                {/* Visual glow orb behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-orange-500/10 rounded-2xl" />
                <Image

                  src="/images/trusted_workforce_illustration.png"
                  alt="Trusted Workforce Verification"
                  className="relative z-10 w-full h-full object-contain rounded-xl filter drop-shadow-lg"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
