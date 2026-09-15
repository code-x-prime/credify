import type { Metadata } from 'next'
import PoliceClient from './PoliceClient'

export const metadata: Metadata = {
  title: 'Police Verification Services — Credify India',
  description:
    'Strengthen your hiring process with Credify India’s police verification services. ISO 27001, ISO 9001 certified and DPDP Ready partner.',
  alternates: {
    canonical: '/police-verification',
  },
}

export default function PoliceVerificationPage() {
  return <PoliceClient />
}
