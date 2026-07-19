'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

export default function DemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal()
  const nameRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setTimeout(() => nameRef.current?.focus(), 300)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeDemoModal()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeDemoModal])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeDemoModal}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative z-10 w-full max-w-md bg-white rounded-md shadow-[0_24px_80px_rgba(0,0,0,0.15)] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Request a Demo"
          >
            {/* Close button */}
            <button
              onClick={closeDemoModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#001f7d] to-[#001552] flex items-center justify-center shadow-sm">
                  <Send size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Request a Demo</h3>
                  <p className="text-xs text-slate-400">See Credify in action</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-6 sm:px-8 py-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <img src="/icons/certified-for-security-quality.svg" alt="Success" className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Thank you!</h4>
                  <p className="text-sm text-slate-500">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label htmlFor="demo-name" className="text-xs font-semibold text-slate-600 mb-1.5 block">Full Name *</label>
                    <input
                      ref={nameRef}
                      id="demo-name"
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-company" className="text-xs font-semibold text-slate-600 mb-1.5 block">Company Name *</label>
                    <input
                      id="demo-company"
                      type="text"
                      required
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-email" className="text-xs font-semibold text-slate-600 mb-1.5 block">Work Email *</label>
                    <input
                      id="demo-email"
                      type="email"
                      required
                      placeholder="rahul@acmecorp.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className="text-xs font-semibold text-slate-600 mb-1.5 block">Phone</label>
                    <input
                      id="demo-phone"
                      type="tel"
                      placeholder="+91-98765-43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all min-h-[48px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#001f7d] hover:bg-[#f97316] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-[0_2px_10px_rgba(0,31,125,0.25)] hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 mt-1 min-h-[48px]"
                  >
                    Request a Demo
                    <Send size={15} />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-1">
                    We&apos;ll get back to you within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
