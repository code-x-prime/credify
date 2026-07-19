'use client'

import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Phone, Mail, ChevronDown, ArrowRight,
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const servicesList = [
  { icon: '/icons/employee-background-verification.svg', label: 'Employee BGV', color: 'bg-blue-50 text-blue-600', href: '#services' },
  { icon: '/icons/employment-verification.svg', label: 'Employment Verification', color: 'bg-blue-50 text-blue-600', href: '#services' },
  { icon: '/icons/education-verification.svg', label: 'Education Verification', color: 'bg-purple-50 text-purple-600', href: '#services' },
  { icon: '/icons/address-verification.svg', label: 'Address Verification', color: 'bg-amber-50 text-amber-600', href: '#services' },
  { icon: '/icons/criminal-background-check.svg', label: 'Criminal Background', color: 'bg-red-50 text-red-600', href: '#services' },
  { icon: '/icons/court-record-verification.svg', label: 'Court Record Verification', color: 'bg-orange-50 text-orange-600', href: '#services' },
  { icon: '/icons/police-verification.svg', label: 'Police Verification', color: 'bg-sky-50 text-sky-600', href: '#services' },
  { icon: '/icons/credit-check-verification.svg', label: 'Credit Check', color: 'bg-blue-50 text-blue-600', href: '#services' },
  { icon: '/icons/drug-screening-verification.svg', label: 'Drug Screening', color: 'bg-pink-50 text-pink-600', href: '#services' },
  { icon: '/icons/document-verification.svg', label: 'Document Verification', color: 'bg-indigo-50 text-indigo-600', href: '#services' },
  { icon: '/icons/uan-verification.svg', label: 'UAN Verification', color: 'bg-blue-50 text-blue-600', href: '#services' },
  { icon: '/icons/vendor-verification.svg', label: 'Vendor Verification', color: 'bg-blue-50 text-blue-600', href: '#services' },
  { icon: '/icons/tenant-verification.svg', label: 'Tenant Verification', color: 'bg-orange-50 text-orange-600', href: '#services' },
  { icon: '/icons/driver-verification.svg', label: 'Driver Verification', color: 'bg-sky-50 text-sky-600', href: '#services' },
  { icon: '/icons/due-diligence-services.svg', label: 'Due Diligence Services', color: 'bg-violet-50 text-violet-600', href: '#services' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { openDemoModal } = useDemoModal()
  const [scrolled, setScrolled] = useState(false)
  const [utilityBarVisible, setUtilityBarVisible] = useState(true)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const megaRef = useRef<HTMLDivElement>(null)
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
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMegaOpen(false)
      setMobileOpen(false)
    }
  }

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setMegaOpen(false)
    setMobileOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onKeyDown={handleKeyDown}
    >
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
        className={`transition-all duration-500 ease-out ${scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_1px_24px_rgba(0,0,0,0.06)]'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between relative">
          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            onClick={() => handleLinkClick('/')}
          >
            <Image
              src="/images/Credify-Logo.png"
              alt="Credify"
              width={160}
              height={40}
              priority
              loading="eager"
              className="h-8 md:h-9 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={item.hasDropdown ? megaRef : undefined}
              >
                {item.hasDropdown ? (
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    onMouseEnter={() => setMegaOpen(true)}
                    className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-md transition-all duration-200 group ${megaOpen
                      ? 'text-blue-600 bg-blue-50/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                      }`}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                    />
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={`relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-all duration-200 group ${activeLink === item.href
                      ? 'text-blue-600 bg-blue-50/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                      }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-1 left-3.5 right-3.5 h-px bg-orange-500 transition-transform duration-300 origin-left ${activeLink === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <Phone size={14} />
              Talk to Our Expert
            </button>
            <button
              onClick={openDemoModal}
              className="inline-flex items-center gap-2 bg-[#001f7d] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-[0_2px_10px_rgba(0,31,125,0.25)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Request a Demo
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 z-50 hidden lg:block"
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-white rounded-md border border-slate-100 shadow-[0_12px_48px_rgba(0,0,0,0.1)] p-6">
                  <div className="grid grid-cols-3 gap-1">
                    {servicesList.map((service) => {
                      return (
                        <a
                          key={service.label}
                          href={service.href}
                          onClick={() => handleLinkClick(service.href)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group"
                        >
                          <div className={`w-[34px] h-[34px] rounded-md ${service.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                            <img src={service.icon} alt={service.label} className="w-[20px] h-[20px] object-contain" />
                          </div>
                          <span className="text-[13px] font-medium text-slate-700 group-hover:text-[#001f7d] transition-colors">
                            {service.label}
                          </span>
                          <ArrowRight size={12} className="ml-auto text-slate-300 group-hover:text-[#001f7d] group-hover:translate-x-0.5 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                        </a>
                      )
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">15+ verification services</span>
                    <a
                      href="#services"
                      onClick={() => handleLinkClick('#services')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      View All Services
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-[-8px_0_40px_rgba(0,0,0,0.1)] z-50 lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <Image
                  src="/images/Credify-Logo.png"
                  alt="Credify"
                  width={120}
                  height={32}
                  priority
                  loading="eager"
                  className="h-7 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-slate-50 text-slate-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-0.5">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileAccordion(!mobileAccordion)}
                          className="w-full flex items-center justify-between py-3 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          Services
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${mobileAccordion ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileAccordion && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 flex flex-col gap-0.5">
                                {servicesList.map((service) => {
                                  return (
                                    <a
                                      key={service.label}
                                      href={service.href}
                                      onClick={() => handleLinkClick(service.href)}
                                      className="flex items-center gap-3 py-2.5 px-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                                    >
                                      <div className={`w-[26px] h-[26px] rounded-md ${service.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                                        <img src={service.icon} alt={service.label} className="w-[16px] h-[16px] object-contain" />
                                      </div>
                                      {service.label}
                                    </a>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className="py-3 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors block"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Drawer CTAs */}
              <div className="p-4 border-t border-slate-100 flex flex-col gap-3">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => { openDemoModal(); setMobileOpen(false) }}
                  className="text-sm font-semibold text-slate-700 py-3 px-4 text-center border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  Talk to Our Expert
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => { openDemoModal(); setMobileOpen(false) }}
                  className="bg-[#001f7d] text-white text-sm font-semibold py-3 px-4 rounded-xl text-center hover:bg-[#f97316] transition-all duration-200 shadow-[0_2px_10px_rgba(0,31,125,0.25)] flex items-center justify-center gap-2"
                >
                  Request a Demo
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
