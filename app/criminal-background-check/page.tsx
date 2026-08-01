import type { Metadata } from 'next'
import CriminalClient from './CriminalClient'

export const metadata: Metadata = {
  title: 'Criminal Background Check Services — Credify India',
  description:
    'Strengthen your hiring process with Credify India’s criminal background check services. ISO 27001, ISO 9001 certified and SOC 2 audited partner.',
}

export default function CriminalCheckPage() {
  return <CriminalClient />
}
