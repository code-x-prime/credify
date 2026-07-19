'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const industries = [
  {
    icon: '/icons/information-technology.svg',
    title: 'Information Technology (IT) & ITES',
    subtitle: 'IT & ITES',
    desc: 'Comprehensive background checks for tech professionals, including credential verification, employment history, and global database screening.',
    colorText: 'text-slate-800',
    descColor: 'text-slate-500',
    bgClass: 'bg-slate-50 border-slate-100',
    iconBg: 'bg-blue-100',
    span: 'lg:col-span-2',
    isLarge: true,
  },
  {
    icon: '/icons/banking-financial-services.svg',
    title: 'Banking, Financial Services & Insurance (BFSI)',
    subtitle: 'BFSI',
    desc: 'Rigorous verification for financial institutions covering credit checks, criminal records, and regulatory compliance.',
    colorText: 'text-blue-950',
    descColor: 'text-blue-800/70',
    bgClass: 'bg-gradient-to-br from-blue-100 to-blue-200/80 border-blue-200/40',
    iconBg: 'bg-white/80',
    span: 'lg:col-span-1',
    isLarge: false,
  },
  {
    icon: '/icons/healthcare.svg',
    title: 'Healthcare & Pharmaceuticals',
    subtitle: 'Healthcare & Pharma',
    desc: 'Specialized checks for medical professionals including license verification, malpractice history, and credential validation.',
    colorText: 'text-rose-950',
    descColor: 'text-rose-800/70',
    bgClass: 'bg-gradient-to-br from-red-100 to-rose-200/80 border-red-200/40',
    iconBg: 'bg-white/80',
    span: 'lg:col-span-1',
    isLarge: false,
  },
  {
    icon: '/icons/manufacturing.svg',
    title: 'Manufacturing',
    subtitle: 'Industrial',
    desc: 'Thorough screening for factory and plant workers covering criminal records, address verification, and safety compliance checks.',
    colorText: 'text-slate-800',
    descColor: 'text-slate-500',
    bgClass: 'bg-slate-50 border-slate-100',
    iconBg: 'bg-orange-100',
    span: 'lg:col-span-2',
    isLarge: true,
  },
  {
    icon: '/icons/retail-e-commerce.svg',
    title: 'Retail & E-commerce',
    subtitle: 'Consumer',
    desc: 'Background verification for retail staff, warehouse workers, and e-commerce delivery partners to reduce shrinkage and theft.',
    colorText: 'text-purple-950',
    descColor: 'text-purple-800/70',
    bgClass: 'bg-gradient-to-br from-purple-100 to-violet-200/80 border-purple-200/40',
    iconBg: 'bg-white/80',
    span: 'lg:col-span-1',
    isLarge: false,
  },
  {
    icon: '/icons/logistics-transport.svg',
    title: 'Logistics & Transportation',
    subtitle: 'Supply Chain',
    desc: 'Driver verification, fleet credential checks, and supply chain partner due diligence for safe and compliant operations.',
    colorText: 'text-amber-950',
    descColor: 'text-amber-800/70',
    bgClass: 'bg-gradient-to-br from-amber-100 to-yellow-200/80 border-amber-200/40',
    iconBg: 'bg-white/80',
    span: 'lg:col-span-1',
    isLarge: false,
  },
  {
    icon: '/icons/staffing-recruitment.svg',
    title: 'Staffing & Recruitment',
    subtitle: 'HR Services',
    desc: 'Bulk verification solutions for staffing agencies handling high-volume hiring across multiple client organizations.',
    colorText: 'text-teal-950',
    descColor: 'text-teal-800/70',
    bgClass: 'bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4]/80 border-teal-200/40',
    iconBg: 'bg-white/80',
    span: 'lg:col-span-1',
    isLarge: false,
  },
  {
    icon: '/icons/education.svg',
    title: 'Education',
    subtitle: 'Academic',
    desc: 'Degree and certificate verification, faculty screening, and institutional accreditation checks for educational organizations.',
    colorText: 'text-sky-950',
    descColor: 'text-sky-800/70',
    bgClass: 'bg-gradient-to-br from-sky-100 to-blue-200/80 border-blue-200/40',
    iconBg: 'bg-white/80',
    span: 'lg:col-span-1',
    isLarge: false,
  },
  {
    icon: '/icons/real-estate.svg',
    title: 'Real Estate',
    subtitle: 'Property',
    desc: 'Tenant background checks, property owner verification, and developer due diligence for real estate transactions.',
    colorText: 'text-slate-800',
    descColor: 'text-slate-500',
    bgClass: 'bg-slate-50 border-slate-100',
    iconBg: 'bg-lime-100',
    span: 'lg:col-span-2',
    isLarge: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
  }),
}

export default function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="industries"
      ref={ref}
      className="relative w-full bg-white py-12 md:py-16 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-blue-100/10 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#001f7d] mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Industries We Serve
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            Different sectors have different hiring challenges. Credify provides customized background verification services for organizations across many fields.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[250px]">
          {industries.map((ind, i) => {
            return (
              <motion.div
                key={ind.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className={`group relative rounded-md border p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${ind.span} ${ind.bgClass}`}
              >
                {/* Large horizontal cards layout */}
                {ind.isLarge ? (
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${ind.iconBg} flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300`}>
                        <img src={ind.icon} alt={ind.title} className="w-9 h-9 object-contain" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-100">
                        {ind.subtitle}
                      </span>
                    </div>
                    <div>
                      <h3 className={`font-extrabold ${ind.colorText} text-xl sm:text-2xl tracking-tight mb-2`}>
                        {ind.title}
                      </h3>
                      <p className={`text-sm ${ind.descColor} leading-relaxed max-w-xl`}>
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Bento colored metric cards layout
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl ${ind.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <img src={ind.icon} alt={ind.title} className="w-8 h-8 object-contain" />
                      </div>
                      <ArrowUpRight size={18} className={`${ind.colorText} opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200`} />
                    </div>
                    <div>
                      <span className={`block text-[10px] font-extrabold uppercase tracking-wider opacity-60 mb-1`}>
                        {ind.subtitle}
                      </span>
                      <h3 className={`font-extrabold ${ind.colorText} text-lg leading-snug mb-2`}>
                        {ind.title}
                      </h3>
                      <p className={`text-xs ${ind.descColor} leading-relaxed line-clamp-2`}>
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
