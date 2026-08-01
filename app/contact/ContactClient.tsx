'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react'
import { contactFormSchema } from '@/lib/validation'
import { useDemoModal } from '@/contexts/DemoModalContext'

const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'https://www.brightoindia.com'

interface FormState {
  name: string
  organization: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
  website: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

export default function ContactClient() {
  const { openDemoModal } = useDemoModal()
  const [form, setForm] = useState<FormState>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Employee Background Verification',
    message: '',
    consent: false,
    website: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name as keyof FormState]
        return next
      })
    }
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setForm((prev) => ({ ...prev, consent: checked }))
    if (!checked) {
      setFieldErrors((prev) => ({ ...prev, consent: 'You must agree to the Privacy Policy' }))
    } else {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next.consent
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.website) return

    const errors: FormErrors = {}
    const nameRes = contactFormSchema.shape.name.safeParse(form.name)
    const emailRes = contactFormSchema.shape.email.safeParse(form.email)
    const serviceRes = contactFormSchema.shape.service.safeParse(form.service)
    const messageRes = contactFormSchema.shape.message.safeParse(form.message)
    const consentRes = contactFormSchema.shape.consent.safeParse(form.consent)

    if (!nameRes.success) errors.name = nameRes.error?.issues[0]?.message || 'Invalid name'
    if (!emailRes.success) errors.email = emailRes.error?.issues[0]?.message || 'Invalid email'
    if (!serviceRes.success) errors.service = serviceRes.error?.issues[0]?.message || 'Invalid service'
    if (!messageRes.success) errors.message = messageRes.error?.issues[0]?.message || 'Invalid message'
    if (!consentRes.success) errors.consent = consentRes.error?.issues[0]?.message || 'Consent required'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setSubmitting(true)
    setSuccess(false)

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        subject: `[Credify India] Inquiry for ${form.service}`,
        message: `Organization: ${form.organization || 'Not Specified'}\nService: ${form.service}\nSource Site: Credify India\n\nMessage:\n${form.message.trim()}`
      }

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        setForm({ name: '', organization: '', email: '', phone: '', service: 'Employee Background Verification', message: '', consent: false, website: '' })
      } else {
        setError(data.error || 'Failed to send message. Please try again later.')
      }
    } catch {
      setError('Unable to connect to Brighto API server. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* 🌟 HERO BANNER */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-6 mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#001f7d] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Mail size={14} className="text-orange-500" />
              <span>Get in Touch With Us</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001f7d] via-blue-700 to-orange-500">Credify India</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions about background verification, developer APIs, vendor due diligence, or customized enterprise screening? Our verification specialists are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 CONTACT INFO & FORM SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column (Info Details) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
                  Our Corporate Office
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Reach Out to Our Experts
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Connect with our verification and compliance specialists. We assist enterprises, fintechs, banks, and growing businesses across India.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#001f7d] flex items-center justify-center flex-shrink-0 font-bold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Head Office Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      C-83, 1st Floor, Sector-2,<br />
                      Noida, Uttar Pradesh, India - 201301
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 font-bold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Contact Number</h4>
                    <a href="tel:+919311463901" className="text-xs sm:text-sm text-[#001f7d] font-bold hover:underline mt-1 block">
                      +91-9311463901
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 font-bold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                    <a href="mailto:Support@brightoindia.com" className="text-xs sm:text-sm text-[#001f7d] font-bold hover:underline mt-1 block">
                      Support@brightoindia.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Monday – Saturday: 9:30 AM to 6:30 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below and our team will get back to you within 24 business hours.
              </p>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Thank you for reaching out to Credify India. We have received your inquiry and our specialist will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#001f7d] hover:underline"
                  >
                    Send another inquiry <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  {error && (
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-rose-800 text-xs font-semibold flex items-center gap-2" role="alert">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} className="hidden" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#001f7d] transition-all"
                      />
                      {fieldErrors.name && <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Organization / Company</label>
                      <input
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#001f7d] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#001f7d] transition-all"
                      />
                      {fieldErrors.email && <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#001f7d] transition-all"
                      />
                      {fieldErrors.phone && <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Required Solution / API *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#001f7d] transition-all"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Message / Requirement *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your verification requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#001f7d] transition-all"
                    />
                    {fieldErrors.message && <p className="text-[11px] text-rose-600 mt-1">{fieldErrors.message}</p>}
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      name="consent"
                      checked={form.consent}
                      onChange={handleConsentChange}
                      className="mt-1 h-4 w-4 text-[#001f7d] rounded"
                    />
                    <label htmlFor="contact-consent" className="text-xs text-slate-500 leading-normal cursor-pointer">
                      I agree to the processing of my personal data according to Credify India&apos;s Privacy Policy.
                    </label>
                  </div>
                  {fieldErrors.consent && <p className="text-[11px] text-rose-600">{fieldErrors.consent}</p>}

                  <button
                    type="submit"
                    disabled={submitting || !form.consent}
                    className="w-full py-3.5 bg-[#001f7d] hover:bg-[#f97316] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
