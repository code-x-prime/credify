'use client'

import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Phone, Mail, ChevronDown, ArrowRight, Cpu, Layers, ShieldCheck, Zap, ArrowUpRight
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const apiProductsList = [
  { icon: '/icons/aadhaar-verification-api.svg', label: 'Aadhaar Verification API', desc: 'Instant UIDAI validation & OCR extraction', color: 'bg-amber-500/10 text-amber-600 border-amber-200/50', href: '/aadhaar-verification-api' },
  { icon: '/icons/pan-verification-api.svg', label: 'PAN Verification API', desc: 'Real-time NSDL & ITD PAN status audit', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50', href: '/pan-verification-api' },
  { icon: '/icons/kyc-api.svg', label: 'KYC API', desc: 'Complete paperless digital onboarding', color: 'bg-purple-500/10 text-purple-600 border-purple-200/50', href: '/kyc-api' },
  { icon: '/icons/identity-verification-api.svg', label: 'Identity Verification API', desc: 'Multi-layer biometric & ID match', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50', href: '/identity-verification-api' },
  { icon: '/icons/face-match-api.svg', label: 'Face Match API', desc: 'AI-powered facial comparison & fraud detection', color: 'bg-amber-500/10 text-amber-600 border-amber-200/50', href: '/face-match-api' },
  { icon: '/icons/liveness-detection-api.svg', label: 'Liveness Detection API', desc: 'Presentation attack & spoofing prevention', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50', href: '/liveness-detection-api' },
  { icon: '/icons/risk-intelligence-api.svg', label: 'Risk Intelligence API', desc: 'Smarter fraud detection & real-time risk scoring', color: 'bg-rose-500/10 text-rose-600 border-rose-200/50', href: '/risk-intelligence-api' },
  { icon: '/icons/business-verification-api.svg', label: 'Business Verification API', desc: 'MCA21 & Director DIN background audit', color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200/50', href: '/business-verification-api' },
  { icon: '/icons/document-ocr-api.svg', label: 'Document OCR API', desc: 'AI-powered auto data parsing engine', color: 'bg-sky-500/10 text-sky-600 border-sky-200/50', href: '/document-ocr-api' },
  { icon: '/icons/uan-verification-api.svg', label: 'UAN Verification API', desc: 'EPFO passbook & service history check', color: 'bg-[#001f7d]/10 text-[#001f7d] border-blue-200/50', href: '/uan-verification-api' },
  { icon: '/icons/gst-verification-api.svg', label: 'GST Verification API', desc: 'B2B filing status & GSTIN validation', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50', href: '/gst-verification-api' },
]

const servicesList = [
  { icon: '/icons/employee-bgv.svg', label: 'Employee BGV', desc: 'Complete candidate screening program', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50', href: '/employee-background-verification' },
  { icon: '/icons/employment-verification.svg', label: 'Employment Verification', desc: 'Past employer tenure & designation check', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50', href: '/employment-verification' },
  { icon: '/icons/education-verification.svg', label: 'Education Verification', desc: 'Degree certificate & university check', color: 'bg-purple-500/10 text-purple-600 border-purple-200/50', href: '/education-verification' },
  { icon: '/icons/address-verification.svg', label: 'Address Verification', desc: 'Physical site visit & geo-tagging audit', color: 'bg-amber-500/10 text-amber-600 border-amber-200/50', href: '/address-verification' },
  { icon: '/icons/criminal-background-check.svg', label: 'Criminal Background Check', desc: 'National law enforcement database search', color: 'bg-rose-500/10 text-rose-600 border-rose-200/50', href: '/criminal-background-check' },
  { icon: '/icons/court-record-verification.svg', label: 'Court Record Verification', desc: 'District, High & Supreme Court search', color: 'bg-orange-500/10 text-orange-600 border-orange-200/50', href: '/court-record-verification' },
  { icon: '/icons/police-verification.svg', label: 'Police Verification', desc: 'State police clearance certificate', color: 'bg-sky-500/10 text-sky-600 border-sky-200/50', href: '/police-verification' },
  { icon: '/icons/credit-check-verification.svg', label: 'Credit Check', desc: 'Financial health & credit score gauge', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50', href: '/credit-check-verification' },
  { icon: '/icons/drug-screening-verification.svg', label: 'Drug Screening', desc: 'Workplace lab-tested panel screening', color: 'bg-pink-500/10 text-pink-600 border-pink-200/50', href: '/drug-screening-verification' },
  { icon: '/icons/document-verification.svg', label: 'Document Verification', desc: 'Holographic authenticity & tamper audit', color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200/50', href: '/document-verification' },
  { icon: '/icons/uan-service.svg', label: 'UAN Verification Services', desc: 'Comprehensive provident fund audit', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50', href: '/uan-verification' },
  { icon: '/icons/vendor-verification.svg', label: 'Vendor Verification', desc: 'Third-party vendor due diligence audit', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50', href: '/vendor-verification' },
  { icon: '/icons/tenant-verification.svg', label: 'Tenant Verification', desc: 'Landlord & property management check', color: 'bg-orange-500/10 text-orange-600 border-orange-200/50', href: '/tenant-verification' },
  { icon: '/icons/driver-verification.svg', label: 'Driver Verification', desc: 'Commercial fleet DL & safety check', color: 'bg-sky-500/10 text-sky-600 border-sky-200/50', href: '/driver-verification' },
  { icon: '/icons/due-diligence-services.svg', label: 'Due Diligence Services', desc: 'M&A and strategic partner due diligence', color: 'bg-violet-500/10 text-violet-600 border-violet-200/50', href: '/due-diligence-services' },
]

export default function Navbar() {
  const { openDemoModal } = useDemoModal()
  const [scrolled, setScrolled] = useState(false)
  const [utilityBarVisible, setUtilityBarVisible] = useState(true)
  const [apiDropdownOpen, setApiDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileApiOpen, setMobileApiOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    setScrolled(currentY > 20)
    if (currentY > 120) {
      setUtilityBarVisible(currentY < lastScrollY.current || currentY < 80)
    } else {
      setUtilityBarVisible(true)
    }
    lastScrollY.current = currentY
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
    setApiDropdownOpen(false)
    setServicesDropdownOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar */}
      <AnimatePresence>
        {utilityBarVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="relative z-60 overflow-hidden bg-[#f8f9fb] border-b border-slate-100/80"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-[11px]">
              <div className="hidden sm:flex items-center gap-3 text-slate-500 font-medium tracking-wide">
                <span className="flex items-center gap-1.5">
                  <img src="/icons/certified-for-security-quality.svg" alt="Shield" className="w-[12px] h-[12px]" />
                  ISO 27001
                </span>
                <span className="w-px h-3 bg-slate-200" />
                <span className="flex items-center gap-1.5">
                  <img src="/icons/certified-for-security-quality.svg" alt="Shield" className="w-[12px] h-[12px]" />
                  ISO 9001
                </span>
                <span className="w-px h-3 bg-slate-200" />
                <span className="flex items-center gap-1.5">
                  <img src="/icons/certified-for-security-quality.svg" alt="Shield" className="w-[12px] h-[12px]" />
                  SOC 2 Certified
                </span>
              </div>
              <div className="flex items-center gap-4 ml-auto text-slate-500 font-medium">
                <a href="tel:+919311463901" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200">
                  <Phone size={10} />
                  <span className="hidden sm:inline">+91-9311463901</span>
                </a>
                <span className="w-px h-3 bg-slate-200 hidden sm:block" />
                <a href="mailto:Support@brightoindia.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200">
                  <Mail size={10} />
                  <span className="hidden sm:inline">Support@brightoindia.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between relative">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/images/Credify-Logo.png"
              alt="Credify India"
              width={160}
              height={40}
              priority
              className="h-8 md:h-9 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/' ? 'text-[#001f7d] bg-blue-50/80 shadow-2xs' : 'text-slate-600 hover:text-[#001f7d] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/about' ? 'text-[#001f7d] bg-blue-50/80 shadow-2xs' : 'text-slate-600 hover:text-[#001f7d] hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* 🌟 API PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setApiDropdownOpen(true)}
              onMouseLeave={() => setApiDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  pathname.includes('-api') ? 'text-[#001f7d] bg-blue-50/80 shadow-2xs' : 'text-slate-600 hover:text-[#001f7d] hover:bg-slate-50'
                }`}
              >
                <Cpu size={15} className="text-orange-500" />
                <span>API Products</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${apiDropdownOpen ? 'rotate-180 text-[#001f7d]' : ''}`} />
              </button>

              <AnimatePresence>
                {apiDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[420px] pt-3 z-50"
                  >
                    <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.1)] p-3.5 relative overflow-hidden backdrop-blur-xl">
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 mb-2 bg-gradient-to-r from-orange-50/60 to-blue-50/60 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Zap size={14} className="text-orange-500" />
                          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Developer API Stack</span>
                        </div>
                        <span className="text-[10px] font-extrabold text-orange-600 bg-orange-100/80 px-2 py-0.5 rounded-md uppercase">
                          99.99% Uptime
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-1 max-h-[460px] overflow-y-auto pr-1">
                        {apiProductsList.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all duration-200 group/item"
                          >
                            <div className={`w-9 h-9 rounded-lg ${item.color} border flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform p-1.5 shadow-2xs mt-0.5`}>
                              <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-800 group-hover/item:text-[#001f7d] transition-colors truncate">
                                  {item.label}
                                </span>
                                <ArrowUpRight size={13} className="text-slate-300 group-hover/item:text-orange-500 transition-colors flex-shrink-0" />
                              </div>
                              <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🌟 VERIFICATION SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  servicesList.some(s => pathname === s.href) ? 'text-[#001f7d] bg-blue-50/80 shadow-2xs' : 'text-slate-600 hover:text-[#001f7d] hover:bg-slate-50'
                }`}
              >
                <Layers size={15} className="text-blue-600" />
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#001f7d]' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-48 w-[680px] pt-3 z-50"
                  >
                    <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.1)] p-4 relative overflow-hidden backdrop-blur-xl">
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 mb-2.5 bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-purple-50/70 rounded-lg">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={16} className="text-[#001f7d]" />
                          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Enterprise Verification Solutions</span>
                        </div>
                        <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-md uppercase">
                          15 Full Services
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 max-h-[480px] overflow-y-auto pr-1">
                        {servicesList.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all duration-200 group/item"
                          >
                            <div className={`w-8 h-8 rounded-lg ${item.color} border flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform p-1.5 shadow-2xs mt-0.5`}>
                              <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-800 group-hover/item:text-[#001f7d] transition-colors truncate">
                                  {item.label}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/career"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/career' ? 'text-[#001f7d] bg-blue-50/80 shadow-2xs' : 'text-slate-600 hover:text-[#001f7d] hover:bg-slate-50'
              }`}
            >
              Career
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/contact' ? 'text-[#001f7d] bg-blue-50/80 shadow-2xs' : 'text-slate-600 hover:text-[#001f7d] hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919311463901"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-all duration-300"
            >
              <Phone size={14} className="text-orange-500" />
              +91-9311463901
            </a>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 bg-[#001f7d] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-[0_2px_10px_rgba(0,31,125,0.25)] hover:scale-[1.02]"
            >
              Request a Demo
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                About Us
              </Link>

              {/* Mobile API Products Collapsible */}
              <div>
                <button
                  onClick={() => setMobileApiOpen(!mobileApiOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <Cpu size={15} className="text-orange-500" />
                    API Products
                  </span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileApiOpen ? 'rotate-180 text-[#001f7d]' : ''}`} />
                </button>
                {mobileApiOpen && (
                  <div className="pl-3 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-2xl my-1 border border-slate-100">
                    {apiProductsList.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#001f7d] hover:bg-white"
                      >
                        <div className={`w-6 h-6 rounded-lg ${item.color} border flex items-center justify-center p-1`}>
                          <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                        </div>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Collapsible */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <Layers size={15} className="text-blue-600" />
                    Verification Services
                  </span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#001f7d]' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-2xl my-1 border border-slate-100 max-h-64 overflow-y-auto">
                    {servicesList.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#001f7d] hover:bg-white"
                      >
                        <div className={`w-6 h-6 rounded-lg ${item.color} border flex items-center justify-center p-1`}>
                          <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                        </div>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/career"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Contact Us
              </Link>

              <div className="pt-4 space-y-2">
                <button
                  onClick={openDemoModal}
                  className="w-full bg-[#001f7d] hover:bg-[#f97316] text-white font-bold py-3 rounded-2xl transition-colors shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <span>Request a Demo</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
