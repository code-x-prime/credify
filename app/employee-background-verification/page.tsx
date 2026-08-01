import type { Metadata } from 'next'
import EbgvClient from './EbgvClient'

export const metadata: Metadata = {
  title: 'Employee Background Verification Services — Credify India',
  description:
    'Make smarter hiring choices with Credify India’s employee background verification services. ISO 27001, ISO 9001 certified and SOC 2 audited BGV partner.',
}

export default function EmployeeBgvPage() {
  return <EbgvClient />
}
