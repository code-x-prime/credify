'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Link from 'next/link'
import {
  MapPin, Briefcase, Clock, Search, X, Upload, Send,
  CheckCircle2, AlertCircle, Loader2, ChevronLeft, ChevronRight,
  ArrowRight, Sparkles, User, Mail, Phone, FileText
} from 'lucide-react'
import { jobApplicationSchema, validateFileUpload } from '@/lib/validation'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string
  isActive: boolean
  createdAt: string
}

type FormErrors = {
  [key: string]: string
}

const JOBS_PER_PAGE = 6
const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'https://www.brightoindia.com'

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}

export default function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)
  const [filter, setFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApply, setShowApply] = useState(false)
  const [applying, setApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [applyError, setApplyError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    website: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fetchJobs = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      if (data.success) {
        setJobs(data.jobs.filter((j: Job) => j.isActive))
      } else {
        throw new Error(data.error || 'Failed to load jobs')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load jobs from Brighto API.')
      setJobs([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  const departments = useMemo(() => {
    return ['All', ...new Set(jobs.map((j) => j.department))]
  }, [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = debouncedSearch.toLowerCase()
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.experience.toLowerCase().includes(q)
      const matchesFilter = filter === 'All' || job.department === filter
      return matchesSearch && matchesFilter
    })
  }, [jobs, debouncedSearch, filter])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch, filter])

  const openApply = (job: Job) => {
    setSelectedJob(job)
    setShowApply(true)
    setApplied(false)
    setApplyError('')
    setFieldErrors({})
    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      website: '',
    })
    setResume(null)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      validateAndSetFile(file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (file: File) => {
    const result = validateFileUpload(file)
    if (!result.valid) {
      setApplyError(result.error || 'Invalid file')
      return
    }
    setApplyError('')
    setResume(file)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resume || !selectedJob) return

    if (form.website) {
      return
    }

    setFieldErrors({})
    setApplyError('')

    const errors: FormErrors = {}
    const nameRes = jobApplicationSchema.shape.name.safeParse(form.name)
    const emailRes = jobApplicationSchema.shape.email.safeParse(form.email)
    const phoneRes = jobApplicationSchema.shape.phone.safeParse(form.phone)
    const consentRes = jobApplicationSchema.shape.consent.safeParse(form.consent)

    if (!nameRes.success) errors.name = nameRes.error.issues[0].message
    if (!emailRes.success) errors.email = emailRes.error.issues[0].message
    if (!phoneRes.success) errors.phone = phoneRes.error.issues[0].message
    if (!consentRes.success) errors.consent = consentRes.error.issues[0].message

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setApplying(true)

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('message', form.message)
      formData.append('jobId', selectedJob.id)
      formData.append('resume', resume)

      const res = await fetch(`${API_BASE_URL}/api/jobs/apply`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setApplied(true)
      } else {
        setApplyError(data.error || 'Failed to submit application')
      }
    } catch {
      setApplyError('Network error. Please check your connection and try again.')
    } finally {
      setApplying(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-green-100/50 via-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-sm font-semibold uppercase tracking-wider text-[#15803d]">
              Careers at Credify
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08]">
              Build the Future of <span className="text-[#15803d]">Credit Diligence</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              Join our dynamic team. Explore open opportunities across engineering, operations, finance, and credit audit functions.
            </p>
          </div>
        </div>
      </section>

      {/* JOBS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SEARCH & FILTERS */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search job title, location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    filter === dept
                      ? 'bg-[#15803d] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* JOBS LIST / STATES */}
          {loading ? (
            <div className="py-20 text-center space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-[#15803d] mx-auto" />
              <p className="text-sm text-gray-500 font-medium">Loading open positions from Brighto API...</p>
            </div>
          ) : error ? (
            <div className="py-12 bg-rose-50 border border-rose-100 rounded-2xl p-6 text-center max-w-md mx-auto space-y-3">
              <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
              <p className="text-sm text-rose-800 font-semibold">{error}</p>
              <button
                onClick={fetchJobs}
                className="px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-bold hover:bg-rose-700 transition-colors"
              >
                Retry Loading
              </button>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="py-20 text-center space-y-3 bg-gray-50 rounded-2xl border border-gray-100">
              <Briefcase className="w-10 h-10 text-gray-400 mx-auto" />
              <h3 className="text-lg font-bold text-gray-800">No Positions Found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search query or department filter.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-green-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <span className="px-3 py-1 bg-green-50 text-[#15803d] border border-green-200 rounded-full text-xs font-bold uppercase">
                          {job.department}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">{job.type}</span>
                      </div>

                      <h3 className="text-xl font-extrabold text-gray-900">{job.title}</h3>

                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gray-400" /> {job.experience}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => openApply(job)}
                        className="w-full py-2.5 bg-[#15803d] text-white rounded-xl text-xs font-bold hover:bg-[#166534] transition-colors flex items-center justify-center gap-2"
                      >
                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="p-2 border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-semibold text-gray-600 px-4">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="p-2 border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* MODAL / APPLY DIALOG */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowApply(false)}
              className="absolute right-5 top-5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {applied ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Application Submitted!</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our HR team will review your resume and get back to you.
                </p>
                <button
                  onClick={() => setShowApply(false)}
                  className="px-6 py-2.5 bg-[#15803d] text-white rounded-xl text-xs font-bold hover:bg-[#166534] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-left">
                <div>
                  <span className="text-xs font-bold text-[#15803d] uppercase">Apply For</span>
                  <h3 className="text-xl font-extrabold text-gray-900">{selectedJob.title}</h3>
                </div>

                {applyError && (
                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 text-rose-800 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{applyError}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleFormChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && <p className="text-xs text-rose-600">{fieldErrors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleFormChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                      placeholder="john@example.com"
                    />
                    {fieldErrors.email && <p className="text-xs text-rose-600">{fieldErrors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-gray-500">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleFormChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                      placeholder="9876543210"
                    />
                    {fieldErrors.phone && <p className="text-xs text-rose-600">{fieldErrors.phone}</p>}
                  </div>
                </div>

                {/* FILE UPLOAD DRAG & DROP */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Resume / CV (PDF, DOC, DOCX) *</label>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-[#15803d] bg-green-50/50'
                        : resume
                        ? 'border-emerald-300 bg-emerald-50/30'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {resume ? (
                      <div className="flex items-center justify-center gap-2 text-emerald-700 text-xs font-bold">
                        <FileText className="w-4 h-4" /> {resume.name} ({(resume.size / (1024 * 1024)).toFixed(2)} MB)
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Upload className="w-5 h-5 text-gray-400 mx-auto" />
                        <p className="text-xs text-gray-600 font-medium">Click or drag & drop resume here</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-gray-500">Cover Note (Optional)</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={form.message}
                    onChange={handleFormChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#15803d]"
                    placeholder="Brief intro..."
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="apply-consent"
                    name="consent"
                    checked={form.consent}
                    onChange={handleFormChange}
                    className="mt-1 h-4 w-4 text-[#15803d] rounded"
                  />
                  <label htmlFor="apply-consent" className="text-xs text-gray-500 leading-tight cursor-pointer">
                    I consent to data processing for job application evaluation.
                  </label>
                </div>
                {fieldErrors.consent && <p className="text-xs text-rose-600">{fieldErrors.consent}</p>}

                <button
                  type="submit"
                  disabled={applying || !resume || !form.consent}
                  className="w-full py-3 bg-[#15803d] text-white rounded-xl font-bold text-sm hover:bg-[#166534] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  {applying ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
