'use client'

import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Mail, Phone, MapPin, ShieldCheck, ChevronDown, ArrowRight, Clock,
} from 'lucide-react'
import { useDemoModal } from '@/contexts/DemoModalContext'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Service', href: '/contact' },
]

const servicesList = [
  { label: 'Aadhaar Verification API', href: '/aadhaar-verification-api' },
  { label: 'KYC API', href: '/kyc-api' },
  { label: 'PAN Verification API', href: '/pan-verification-api' },
  { label: 'Identity Verification API', href: '/identity-verification-api' },
  { label: 'Business Verification API', href: '/business-verification-api' },
  { label: 'Document OCR API', href: '/document-ocr-api' },
  { label: 'UAN Verification API', href: '/uan-verification-api' },
  { label: 'GST Verification API', href: '/gst-verification-api' },
  { label: 'Employee Background Verification', href: '/employee-background-verification' },
  { label: 'Employment Verification', href: '/employment-verification' },
  { label: 'Court Record Verification', href: '/court-record-verification' },
  { label: 'Education Verification', href: '/education-verification' },
  { label: 'Address Verification', href: '/address-verification' },
  { label: 'Police Verification', href: '/police-verification' },
  { label: 'Criminal Background Check', href: '/criminal-background-check' },
  { label: 'Due Diligence Services', href: '/due-diligence-services' },
]

const certBadges = ['ISO 27001', 'ISO 9001', 'SOC 2']

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const socialLinks = [
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/brighto-credit-information-pvt.-ltd.' },
]

function AccordionColumn({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="lg:hidden border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm font-semibold text-white/80"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          size={16}
          className={`text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

export default function Footer() {
  const { openDemoModal } = useDemoModal()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  const showFloatingCta = pathname === '/' || pathname === '/contact' || pathname === '/career'

  return (
    <footer className="relative w-full">
      {/* Floating CTA Card - Show only on Home (/) and Contact (/contact) */}
      {showFloatingCta && (
        <div className="relative z-10 -mt-16 sm:-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 via-blue-50/80 to-blue-50/60 rounded-md sm:rounded-md p-8 sm:p-10 md:p-12 shadow-[0_8px_40px_rgba(0,31,125,0.12)] border border-blue-100/60">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Ready to build a trusted workforce?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500">
                    Partner with Credify for secure, accurate, and compliant background verification.
                  </p>
                </div>
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center gap-2.5 bg-[#001f7d] text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-[0_4px_16px_rgba(0,31,125,0.3)] hover:shadow-[0_6px_24px_rgba(249,115,22,0.4)] hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Dark Footer */}
      <div className={`relative bg-[#0B1210] overflow-hidden ${showFloatingCta ? 'mt-8' : 'pt-8'}`}>
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">

            {/* Brand Column */}
            <div className="col-span-3 flex flex-col gap-5">
              <Image
                src="/images/Credify-Logo.png"
                alt="Credify"
                width={150}
                height={100}
                className="h-16 object-contain w-auto brightness-0 invert opacity-90 mr-auto"
              />
              <p className="text-sm text-white/45 leading-relaxed max-w-xs">
                India&apos;s trusted background verification partner since 2015. Trusted by 500+ enterprises for secure, accurate, and compliant checks.
              </p>

              {/* Certification Badges */}
              <div className="flex flex-wrap gap-2">
                {certBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] ring-1 ring-white/[0.06] hover:ring-blue-500/30 hover:bg-blue-500/[0.06] transition-all duration-300"
                  >
                    <ShieldCheck size={12} className="text-orange-400" />
                    <span className="text-[11px] font-semibold text-white/50">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-white/35 hover:bg-[#001f7d] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-2">
              <h3 className="text-[11px] font-bold text-white/80 mb-5 uppercase tracking-[0.18em]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-orange-400 transition-all duration-200 group inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services (2-column layout) */}
            <div className="col-span-4">
              <h3 className="text-[11px] font-bold text-white/80 mb-5 uppercase tracking-[0.18em]">Our Services</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {servicesList.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-xs text-white/45 hover:text-orange-400 transition-all duration-200 group inline-flex items-center gap-1 leading-snug"
                    >
                      <span className="truncate">{service.label}</span>
                      <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 text-orange-400" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                View All Solutions
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Get in Touch */}
            <div className="col-span-3">
              <h3 className="text-[11px] font-bold text-white/80 mb-5 uppercase tracking-[0.18em]">Get in Touch</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/45 leading-relaxed">
                      BRIGHTO CREDIT INFORMATION PVT. LTD.<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-orange-400" />
                  </div>
                  <a href="tel:+919311463901" className="text-sm text-white/45 hover:text-orange-400 transition-colors">
                    +91-9311463901
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-orange-400" />
                  </div>
                  <a href="mailto:Support@brightoindia.com" className="text-sm text-white/45 hover:text-orange-400 transition-colors">
                    Support@brightoindia.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-orange-400" />
                  </div>
                  <p className="text-xs text-white/30">
                    Mon — Sat, 9:00 AM — 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / Tablet Accordion */}
          <div className="lg:hidden border-b border-white/[0.06]">
            {/* Brand on mobile */}
            <div className="pb-6 border-b border-white/[0.06] mb-2">
              <Image
                src="/images/Credify-Logo.png"
                alt="Credify"
                width={300}
                height={100}
                className="h-12 w- object-contain brightness-0 invert opacity-90 mb-4"
              />
              <p className="text-sm text-white/40 leading-relaxed mb-4">
                India&apos;s trusted background verification partner since 2015.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {certBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] ring-1 ring-white/[0.06]"
                  >
                    <ShieldCheck size={12} className="text-orange-400" />
                    <span className="text-[11px] font-semibold text-white/50">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-white/35 hover:bg-[#001f7d] hover:text-white transition-all duration-300"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <AccordionColumn title="Quick Links">
              <ul className="space-y-3 pl-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/40 hover:text-orange-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionColumn>

            <AccordionColumn title="Our Services">
              <ul className="space-y-3 pl-1">
                {servicesList.map((service) => (
                  <li key={service.label}>
                    <a href={service.href} className="text-sm text-white/40 hover:text-orange-400 transition-colors">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
              >
                View All Services
                <ArrowRight size={12} />
              </a>
            </AccordionColumn>

            <AccordionColumn title="Get in Touch">
              <div className="flex flex-col gap-4 pl-1">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={12} className="text-orange-400" />
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">
                    BRIGHTO CREDIT INFORMATION PVT. LTD., India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={12} className="text-orange-400" />
                  </div>
                  <a href="tel:+919311463901" className="text-sm text-white/40 hover:text-orange-400 transition-colors">
                    +91-9311463901
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={12} className="text-orange-400" />
                  </div>
                  <a href="mailto:Support@brightoindia.com" className="text-sm text-white/40 hover:text-orange-400 transition-colors">
                    Support@brightoindia.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={12} className="text-orange-400" />
                  </div>
                  <p className="text-xs text-white/30">Mon — Sat, 9:00 AM — 6:00 PM IST</p>
                </div>
              </div>
            </AccordionColumn>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-white/40">
            {/* Product Info & Copyright */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-center lg:text-left leading-relaxed">
              <span>Credify India is a product of Brighto Credit Information Private Limited.</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>© {currentYear} Brighto Credit Information Private Limited. All Rights Reserved.</span>
            </div>

            {/* Links & Branding */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 gap-y-2 text-center">
              <div className="flex items-center gap-4">
                <a
                  href="https://brightoindia.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://brightoindia.com/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <p className="text-white/30">
                Designed & Developed by{' '}
                <a
                  href="https://groxmedia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold transition-colors underline underline-offset-2 decoration-orange-400/40"
                >
                  Grox Media
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
