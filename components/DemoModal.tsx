'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'https://www.brightoindia.com'

export default function DemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal()
  const nameRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Employee Background Verification',
    message: '',
    consent: true,
  })

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setSubmitting(false)
      setError('')
      setForm({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: 'Employee Background Verification',
        message: '',
        consent: true,
      })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        subject: `[Credify India Demo] Inquiry for ${form.service}`,
        message: `Organization: ${form.organization || 'Not Specified'}\nService: ${form.service}\nSource Site: Credify India Demo Modal\n\nRequirement / Note:\n${form.message.trim() || 'Requesting product demonstration & walkthrough.'}`
      }

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Failed to submit demo request. Please try again.')
      }
    } catch {
      setError('Unable to connect to server. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
            className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden my-8"
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
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#001f7d] to-[#001552] flex items-center justify-center shadow-sm">
                  <Send size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Request a Demo</h3>
                  <p className="text-xs text-slate-400">Experience Credify India in action</p>
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
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Demo Request Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Our solution team will contact you within 24 business hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 text-left"
                >
                  {error && (
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-rose-800 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-name" className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">Full Name *</label>
                      <input
                        ref={nameRef}
                        id="demo-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#001f7d] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-company" className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">Organization / Company</label>
                      <input
                        id="demo-company"
                        type="text"
                        value={form.organization}
                        onChange={(e) => setForm((p) => ({ ...p, organization: e.target.value }))}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#001f7d] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-email" className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">Work Email *</label>
                      <input
                        id="demo-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#001f7d] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-phone" className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">Phone Number *</label>
                      <input
                        id="demo-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="9876543210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#001f7d] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-service" className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">Required Solution / API *</label>
                    <select
                      id="demo-service"
                      value={form.service}
                      onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#001f7d] transition-all"
                    >
                      <option value="Employee Background Verification">Employee Background Verification</option>
                      <option value="Aadhaar Verification API">Aadhaar Verification API</option>
                      <option value="PAN Verification API">PAN Verification API</option>
                      <option value="KYC API">KYC API</option>
                      <option value="Face Match API">Face Match API</option>
                      <option value="Liveness Detection API">Liveness Detection API</option>
                      <option value="Risk Intelligence API">Risk Intelligence API</option>
                      <option value="Vendor Verification">Vendor Verification</option>
                      <option value="Due Diligence Services">Due Diligence Services</option>
                      <option value="Tenant Verification">Tenant Verification</option>
                      <option value="Other Solutions">Other Custom Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="demo-message" className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">Message / Requirement (Optional)</label>
                    <textarea
                      id="demo-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Describe your verification requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#001f7d] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#001f7d] hover:bg-[#f97316] text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-1">
                    We&apos;ll get back to you within 24 business hours. No spam, ever.
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
