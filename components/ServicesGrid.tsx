'use client'

import { ArrowRight } from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const services = [
  {
    icon: '/icons/employee-background-verification.svg',
    title: 'Employee Background Verification',
    desc: 'Verify critical candidate information before onboarding to support informed hiring decisions while reducing recruitment risks.',
    iconBg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
    featured: true,
    category: 'individual',
  },
  {
    icon: '/icons/employment-verification.svg',
    title: 'Employment Verification',
    desc: 'Confirm past job information, such as company name, role, employment duration, and other relevant details.',
    iconBg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
    category: 'individual',
  },
  {
    icon: '/icons/education-verification.svg',
    title: 'Education Verification',
    desc: 'Reach out to educational institutions to verify the degrees and qualifications the candidate mentioned.',
    iconBg: 'bg-purple-50',
    accentLine: 'bg-purple-400',
    category: 'individual',
  },
  {
    icon: '/icons/address-verification.svg',
    title: 'Address Verification',
    desc: 'Verify current or permanent residential addresses using appropriate methods based on business requirements.',
    iconBg: 'bg-amber-50',
    accentLine: 'bg-amber-400',
    category: 'individual',
  },
  {
    icon: '/icons/criminal-background-check.svg',
    title: 'Criminal Background Check',
    desc: 'Conduct criminal background verification using applicable and available records to support safer hiring decisions wherever relevant.',
    iconBg: 'bg-red-50',
    accentLine: 'bg-red-400',
    category: 'individual',
  },
  {
    icon: '/icons/court-record-verification.svg',
    title: 'Court Record Verification',
    desc: 'Look into public court records, when relevant, to find any litigation history linked to the person.',
    iconBg: 'bg-orange-50',
    accentLine: 'bg-orange-400',
    category: 'individual',
  },
  {
    icon: '/icons/police-verification.svg',
    title: 'Police Verification',
    desc: "Arrange police verification in accordance with your company's needs and local regulations.",
    iconBg: 'bg-sky-50',
    accentLine: 'bg-sky-400',
    category: 'individual',
  },
  {
    icon: '/icons/credit-check-verification.svg',
    title: 'Credit Check Verification',
    desc: 'Help suitable organizations check the financial background for roles that involve handling money, ensuring all proper permissions are in place.',
    iconBg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
    category: 'individual',
  },
  {
    icon: '/icons/drug-screening-verification.svg',
    title: 'Drug Screening Verification',
    desc: 'Coordinate employee drug screening through authorized laboratories wherever required by organizational hiring policies.',
    iconBg: 'bg-pink-50',
    accentLine: 'bg-pink-400',
    category: 'individual',
  },
  {
    icon: '/icons/document-verification.svg',
    title: 'Document Verification',
    desc: 'Verify the authenticity of important documents submitted during recruitment and onboarding processes.',
    iconBg: 'bg-indigo-50',
    accentLine: 'bg-indigo-400',
    category: 'individual',
  },
  {
    icon: '/icons/uan-verification.svg',
    title: 'UAN Verification',
    desc: 'Validate employment details through UAN to get a clearer picture of work history where applicable.',
    iconBg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
    category: 'individual',
  },
  {
    icon: '/icons/vendor-verification.svg',
    title: 'Vendor Verification',
    desc: 'Conduct proper due diligence on vendors and business partners to reduce third-party risks.',
    iconBg: 'bg-blue-50',
    accentLine: 'bg-blue-400',
    category: 'business',
  },
  {
    icon: '/icons/tenant-verification.svg',
    title: 'Tenant Verification',
    desc: 'Support landlords, property managers, and organizations with tenant verification solutions for safer property management.',
    iconBg: 'bg-orange-50',
    accentLine: 'bg-orange-400',
    category: 'business',
  },
  {
    icon: '/icons/driver-verification.svg',
    title: 'Driver Verification',
    desc: 'Verify driver credentials, identity, and relevant information for organizations operating transportation and logistics services.',
    iconBg: 'bg-sky-50',
    accentLine: 'bg-sky-400',
    category: 'business',
  },
  {
    icon: '/icons/due-diligence-services.svg',
    title: 'Due Diligence Services',
    desc: 'Conduct comprehensive due diligence to support informed business decisions involving employees, vendors, contractors, and business relationships.',
    iconBg: 'bg-violet-50',
    accentLine: 'bg-violet-400',
    category: 'business',
  },
]

const categories = [
  { label: 'All', value: 'all', count: 15 },
  { label: 'Individual Checks', value: 'individual', count: 11 },
  { label: 'Business & Vendor', value: 'business', count: 4 },
]

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory)

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full bg-white py-10 md:py-14 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #001f7d 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5"
          >
            Comprehensive Background Verification Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            Every company has its own hiring and compliance needs. Credify provides a full range of background verification and due diligence services that we can tailor to your team, industry, and internal policies.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-12 md:mb-14 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat.value
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25 scale-105'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 hover:shadow-md'
                }`}
            >
              <span className="flex items-center gap-2">
                {cat.label}
                <span className={`text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-full ${activeCategory === cat.value
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200/60 text-slate-400'
                  }`}>
                  {cat.count}
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => {
              const isFeatured = service.featured
              return (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-md border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isFeatured
                    ? 'bg-gradient-to-br from-blue-50 via-white to-blue-50/50 border-blue-200/60 shadow-md hover:shadow-xl sm:col-span-2 lg:col-span-1'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200'
                    }`}
                >
                  {/* Accent line top */}
                  <div className={`h-1 w-full ${service.accentLine} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="p-5 sm:p-6">
                    {/* Featured badge */}
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#001f7d] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm mb-4">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        Most Popular
                      </span>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}
                    >
                      <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 leading-snug">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{service.desc}</p>

                    {/* Learn more link */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#001f7d] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                      <span>Learn more</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>

                  {/* Hover border accent */}
                  <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-transparent group-hover:ring-slate-200/60 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: '15+', label: 'Service Types' },
            { value: '10M+', label: 'Checks Completed' },
            { value: '99.8%', label: 'Accuracy Rate' },
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
