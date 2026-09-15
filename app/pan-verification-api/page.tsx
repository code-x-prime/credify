import type { Metadata } from 'next'
import PanClient from './PanClient'

export const metadata: Metadata = {
  title: 'PAN Verification API — Credify India',
  description:
    'Simplify customer onboarding and strengthen compliance with Credify India’s PAN Verification API. Validate PAN details instantly through secure, developer-friendly APIs.',
  alternates: {
    canonical: '/pan-verification-api',
  },
}

export default function PanVerificationPage() {
  return <PanClient />
}
