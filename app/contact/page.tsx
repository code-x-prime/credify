import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us — Credify India Verification & API Partner',
  description:
    'Get in touch with Credify India for background verification services, developer APIs, vendor due diligence, and enterprise screening solutions.',
}

export default function ContactPage() {
  return <ContactClient />
}
