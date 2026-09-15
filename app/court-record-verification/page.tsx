import type { Metadata } from 'next'
import CourtClient from './CourtClient'

export const metadata: Metadata = {
  title: 'Court Record Verification Services — Credify India',
  description:
    'Strengthen your recruitment process with Credify India’s court record verification services. ISO 27001, ISO 9001 certified and DPDP Ready partner.',
  alternates: {
    canonical: '/court-record-verification',
  },
}

export default function CourtRecordPage() {
  return <CourtClient />
}
