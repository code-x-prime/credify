'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { contactFormSchema } from '@/lib/validation'

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

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Credit Audit & Diligence',
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

    // Honeypot bot check
    if (form.website) {
      return
    }

    // Validate fields using schema
    const errors: FormErrors = {}
    const nameRes = contactFormSchema.shape.name.safeParse(form.name)
    const emailRes = contactFormSchema.shape.email.safeParse(form.email)
    const serviceRes = contactFormSchema.shape.service.safeParse(form.service)
    const messageRes = contactFormSchema.shape.message.safeParse(form.message)
    const consentRes = contactFormSchema.shape.consent.safeParse(form.consent)

    if (!nameRes.success) errors.name = nameRes.error.issues[0].message
    if (!emailRes.success) errors.email = emailRes.error.issues[0].message
    if (!serviceRes.success) errors.service = serviceRes.error.issues[0].message
    if (!messageRes.success) errors.message = messageRes.error.issues[0].message
    if (!consentRes.success) errors.consent = consentRes.error.issues[0].message

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
        subject: `[Credify] Inquiry for ${form.service}`,
        message: `Organization: ${form.organization || 'Not Specified'}\nService: ${form.service}\nSource Site: Credify\n\nMessage:\n${form.message.trim()}`
      }

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        setForm({ name: '', organization: '', email: '', phone: '', service: 'Credit Audit & Diligence', message: '', consent: false, website: '' })
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
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#15803d]/10 via-emerald-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Contact <span className="text-[#15803d]">Credify</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              Have questions about credit intelligence, warehouse diligence, or stock verification services? Contact our office to connect with our team.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="relative py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left Column (Info Details) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Office
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Connect with our credit and diligence experts. We assist banks, NBFCs, and financial institutions across multiple locations.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Address</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      C-83, 1st Floor, Sector-2,<br />
                      Noida, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Contact Number</h4>
                    <a href="tel:+919311463901" className="text-sm text-[#15803d] hover:underline font-semibold">
                      +91-9311463901
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Email Address</h4>
                    <a href="mailto:Support@brightoindia.com" className="text-sm text-[#15803d] hover:underline font-semibold">
                      Support@brightoindia.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#15803d] flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-gray-900">Working Hours</h4>
                    <p className="text-sm text-gray-500 font-light">
                      Mon - Sat: 9:30 AM to 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-xs text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                Fill in the details below, and our team will contact you within 24 business hours.
              </p>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Inquiry Submitted Successfully!</h4>
                  <p className="text-sm text-emerald-700">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 text-xs font-bold text-[#15803d] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  {error && (
                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-800 text-xs font-semibold flex items-start gap-2.5" role="alert">
                      <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div>{error}</div>
                    </div>
                  )}

                  {/* Honeypot Field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-bold uppercase text-gray-500">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] ${fieldErrors.name ? 'border-rose-300' : 'border-gray-200'}`}
                        placeholder="John Doe"
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-rose-600 mt-1">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-org" className="text-xs font-bold uppercase text-gray-500">Organization Name</label>
                      <input
                        id="contact-org"
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                        placeholder="Company Pvt Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-bold uppercase text-gray-500">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] ${fieldErrors.email ? 'border-rose-300' : 'border-gray-200'}`}
                        placeholder="john@organization.com"
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-rose-600 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs font-bold uppercase text-gray-500">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-service" className="text-xs font-bold uppercase text-gray-500">Service Required</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                    >
                      <option>Credit Audit & Diligence</option>
                      <option>Stock Audit Services</option>
                      <option>Warehouse Inspection</option>
                      <option>Inventory Verification</option>
                      <option>Collateral Management</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase text-gray-500">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d] ${fieldErrors.message ? 'border-rose-300' : 'border-gray-200'}`}
                      placeholder="Please describe your requirements..."
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-rose-600 mt-1">{fieldErrors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-start gap-3">
                      <input
                        id="contact-consent"
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleConsentChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[#15803d] focus:ring-[#15803d] cursor-pointer"
                      />
                      <label htmlFor="contact-consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                        I agree to the Privacy Policy and consent to data processing under the Digital Personal Data Protection Act, 2023.
                      </label>
                    </div>
                    {fieldErrors.consent && (
                      <p className="text-xs text-rose-600 ml-7 mt-1">{fieldErrors.consent}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !form.consent}
                    className="w-full bg-[#15803d] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#166534] disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
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
