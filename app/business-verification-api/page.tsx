import type { Metadata } from 'next'
import BusinessClient from './BusinessClient'

export const metadata: Metadata = {
  title: 'Business Verification API — Credify India',
  description:
    'Check business information with confidence using Credify India’s Business Verification API. Automate merchant and vendor onboarding with scalable API integrations.',
  alternates: {
    canonical: '/business-verification-api',
  },
}

export default function BusinessVerificationPage() {
  return <BusinessClient />
}
