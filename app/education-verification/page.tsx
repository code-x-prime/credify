import type { Metadata } from 'next'
import EduClient from './EduClient'

export const metadata: Metadata = {
  title: 'Education Verification Services — Credify India',
  description:
    'Verify academic qualifications with confidence through Credify India’s education verification services. ISO 27001, ISO 9001 certified and DPDP Ready partner.',
  alternates: {
    canonical: '/education-verification',
  },
}

export default function EducationVerificationPage() {
  return <EduClient />
}
