import type { Metadata } from 'next'
import EvClient from './EvClient'

export const metadata: Metadata = {
  title: 'Employment Verification Services — Credify India',
  description:
    'Verify a candidate’s work history with confidence using Credify India’s employment verification services. ISO 27001, ISO 9001 certified and SOC 2 audited partner.',
}

export default function EmploymentVerificationPage() {
  return <EvClient />
}
