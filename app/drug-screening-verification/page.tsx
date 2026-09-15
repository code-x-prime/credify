import type { Metadata } from 'next'
import DrugScreeningClient from './DrugScreeningClient'

export const metadata: Metadata = {
  title: 'Drug Screening Verification Services — Credify India',
  description:
    'Support a safe and productive workplace with Credify India’s Employee Drug Screening Verification Services. ISO 27001, ISO 9001 certified and SOC 2 audited partner.',
  alternates: {
    canonical: '/drug-screening-verification',
  },
}

export default function DrugScreeningPage() {
  return <DrugScreeningClient />
}
