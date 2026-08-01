import type { Metadata } from 'next'
import GstClient from './GstClient'

export const metadata: Metadata = {
  title: 'GST Verification API — Credify India',
  description:
    'Check GST registration details right away with Credify India’s GST Verification API. Secure, scalable API integrations for business verification and vendor onboarding.',
}

export default function GstVerificationPage() {
  return <GstClient />
}
