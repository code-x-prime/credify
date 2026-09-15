import type { Metadata } from 'next'
import CriminalClient from './CriminalClient'

export const metadata: Metadata = {
  title: 'Criminal Background Check Services — Credify India',
  description:
    'Strengthen your hiring process with Credify India’s criminal background check services. ISO 27001, ISO 9001 certified and DPDP Ready partner.',
  alternates: {
    canonical: '/criminal-background-check',
  },
}

export default function CriminalCheckPage() {
  return <CriminalClient />
}
