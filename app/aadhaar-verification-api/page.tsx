import type { Metadata } from 'next'
import AadhaarClient from './AadhaarClient'

export const metadata: Metadata = {
  title: 'Aadhaar Verification API — Credify India',
  description:
    'Speed up customer onboarding with Credify India’s Aadhaar Verification API. Check Aadhaar details securely with scalable, developer-friendly API integrations.',
}

export default function AadhaarVerificationPage() {
  return <AadhaarClient />
}
